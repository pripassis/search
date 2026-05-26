import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { persistDiscovery } from "@/lib/indexer";
import { fetchWebSearchResults, searchWeb, type SearchWebItem, type WebSearchSourceId } from "@/lib/web-search";

type SearchWebBody = {
  q?: unknown;
  sources?: string[];
};

function normalizeQueryInput(raw: unknown) {
  if (typeof raw === "string") return raw.trim();
  if (raw && typeof raw === "object") {
    const obj = raw as Record<string, unknown>;
    if (typeof obj.query === "string") return obj.query.trim();
    if (typeof obj.tema === "string") return obj.tema.trim();
  }
  return "";
}

function toSimpleQuery(input: string) {
  return input.replace(/\s+/g, " ").replace(/[\r\n\t]+/g, " ").trim().slice(0, 200);
}

function sourceFromLink(link: string): WebSearchSourceId {
  const lower = link.toLowerCase();
  if (lower.includes("docs.google.com")) return "docs";
  if (lower.includes("t.me")) return "telegram";
  if (lower.includes("drive.google.com") && lower.includes(".pdf")) return "pdf";
  if (lower.includes("drive.google.com")) return "drive";
  return "drive";
}

async function saveItems(items: Array<SearchWebItem & { source: WebSearchSourceId }>) {
  const results: Array<{
    id: string;
    title: string;
    url: string;
    source: WebSearchSourceId;
    type: string;
    downloadUrl: string | null;
    description: string;
  }> = [];
  const seen = new Set<string>();

  for (const item of items) {
    if (seen.has(item.link)) continue;
    seen.add(item.link);

    const saved = await persistDiscovery(
      { link: item.link, title: item.titulo, snippet: item.descricao },
      `serpapi:${item.source}`,
    );

    results.push({
      id: saved.id,
      title: saved.title,
      url: saved.originalUrl,
      source: item.source,
      type: saved.estimatedType,
      downloadUrl: saved.downloadUrl,
      description: item.descricao,
    });
  }

  return results;
}

export async function POST(request: Request) {
  const user = await requireAuth();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await request.json().catch(() => null)) as SearchWebBody | null;
  const queryRecebida = normalizeQueryInput(body?.q);
  const sources = Array.isArray(body?.sources) ? body.sources : [];
  const queryEnviada = toSimpleQuery(queryRecebida) || "teste";

  console.info("[api/search-web] queryRecebida:", queryRecebida);
  console.info("[api/search-web] queryEnviada:", queryEnviada);

  try {
    // Primeiro teste sempre com "teste"
    await searchWeb("teste");

    const base = await searchWeb(queryEnviada);
    let items = base.items.map((item) => ({ ...item, source: sourceFromLink(item.link) }));
    let totalResults = base.totalResults;

    // Apenas depois do teste inicial, aplica variacoes avancadas se vier vazio
    if (items.length === 0) {
      const advanced = await fetchWebSearchResults(queryEnviada, sources);
      items = advanced.results;
      totalResults = advanced.totalResults;
    }

    if (items.length === 0) {
      return NextResponse.json({
        ok: false,
        provider: "serpapi",
        queryRecebida,
        queryEnviada,
        totalResults: 0,
        results: [],
      });
    }

    const results = await saveItems(items);

    return NextResponse.json({
      ok: true,
      provider: "serpapi",
      queryRecebida,
      queryEnviada,
      totalResults,
      results,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "SERPAPI_SEARCH_FAILED";
    console.error("[api/search-web] serpapi error:", message);
    return NextResponse.json(
      {
        ok: false,
        provider: "serpapi",
        queryRecebida,
        queryEnviada,
        totalResults: 0,
        error: message,
        results: [],
      },
      { status: message === "SERPAPI_KEY ausente no servidor" ? 400 : 500 },
    );
  }
}
