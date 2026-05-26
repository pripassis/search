import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { createIndexTerm } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

async function readInput(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) return (await request.json()) as Record<string, string>;
  const formData = await request.formData();
  return Object.fromEntries(formData.entries()) as Record<string, string>;
}

export async function POST(request: Request) {
  await requireAdmin();
  const input = await readInput(request);
  const term = String(input.term ?? "").trim();
  if (!term) return NextResponse.redirect(new URL("/admin?error=missing-term", request.url));

  let sourceId: string | null = null;
  const sourceName = String(input.sourceName ?? "").trim();
  const sourceQuery = String(input.sourceQuery ?? "").trim();
  if (sourceName || sourceQuery) {
    const source = await prisma.indexSource.upsert({
      where: { name: sourceName || term },
      create: { name: sourceName || term, query: sourceQuery || term },
      update: { query: sourceQuery || term, enabled: true },
    });
    sourceId = source.id;
  }

  await createIndexTerm({ term, sourceId, sourceHint: sourceQuery || null });
  return NextResponse.redirect(new URL("/admin?saved=1", request.url));
}
