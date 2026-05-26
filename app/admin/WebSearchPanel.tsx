"use client";

import { useState, type FormEvent } from "react";
import { WEB_SEARCH_SOURCES, type WebSearchSourceId } from "@/lib/web-search";

type SearchResult = {
  id: string;
  title: string;
  url: string;
  source: WebSearchSourceId;
  type: string;
  downloadUrl: string | null;
  description?: string;
};

type SearchPayload = {
  ok: boolean;
  error?: string;
  debug?: unknown;
  results: SearchResult[];
};

export function WebSearchPanel() {
  const [q, setQ] = useState("");
  const [sources, setSources] = useState<WebSearchSourceId[]>(["drive", "docs", "pdf", "telegram"]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [debug, setDebug] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = q.trim();
    if (!clean) {
      setError("Digite um termo para buscar.");
      return;
    }

    setResults([]);
    setError(null);
    setDebug(null);
    setLoading(true);

    try {
      const response = await fetch("/api/search-web", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ q: clean, sources }),
      });
      const payload = (await response.json()) as Partial<SearchPayload> & { error?: string };
      setResults(payload.results ?? []);
      setError(payload.error ?? null);
      setDebug(payload.debug ?? null);
    } catch (err) {
      setResults([]);
      setDebug(null);
      setError(err instanceof Error ? err.message : "Nao foi possivel buscar.");
    } finally {
      setLoading(false);
    }
  }

  async function removeResult(id: string) {
    if (!window.confirm("Tem certeza?")) return;
    setError(null);
    try {
      const response = await fetch(`/api/files/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Nao foi possivel excluir.");
      }
      setResults((current) => current.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nao foi possivel excluir.");
    }
  }

  return (
    <section className="rounded-[28px] border border-white/10 bg-slate-950/65 p-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Busca web</p>
        <h2 className="text-xl font-semibold text-white">Digite o que deseja buscar</h2>
      </div>

      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <input
          value={q}
          onChange={(event) => setQ(event.target.value)}
          placeholder="Digite o que deseja buscar (ex: maria, .txt, relatorio)"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
        />

        <div className="flex flex-wrap gap-4 text-sm text-slate-200">
          {WEB_SEARCH_SOURCES.map((source) => (
            <label key={source.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={sources.includes(source.id)}
                onChange={(event) => {
                  setSources((current) =>
                    event.target.checked ? [...new Set([...current, source.id])] : current.filter((id) => id !== source.id),
                  );
                }}
              />
              <span>{source.label}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {error && <p className="mt-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">{error}</p>}

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Resultados encontrados</h3>

        <div className="mt-4 space-y-3">
          {loading ? (
            <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Buscando...</p>
          ) : error ? null : results.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Nenhum resultado encontrado</p>
          ) : (
            results.map((result) => (
              <div key={`${result.source}:${result.url}`} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{result.source}</p>
                    <p className="mt-2 font-medium">{result.title}</p>
                    {result.description ? <p className="mt-2 text-xs text-slate-300">{result.description}</p> : null}
                    <p className="mt-2 break-all text-xs text-slate-400">{result.url}</p>
                    <p className="mt-2 text-xs text-slate-400">Tipo: {result.type}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => window.open(result.url, "_blank")}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10"
                    >
                      Abrir
                    </button>
                    {result.downloadUrl ? (
                      <button
                        type="button"
                        onClick={() => window.open(result.downloadUrl ?? "", "_blank")}
                        className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-400/20"
                      >
                        Download
                      </button>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => removeResult(result.id)}
                      className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-100 hover:bg-rose-500/20"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Debug temporário</p>
        <pre className="mt-3 overflow-auto text-xs text-slate-200">{JSON.stringify(debug, null, 2)}</pre>
      </div>
    </section>
  );
}
