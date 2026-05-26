import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { deleteLibraryItemsByIds } from "@/lib/files-admin";

export async function POST(request: Request) {
  await requireAdmin();

  const body = (await request.json().catch(() => null)) as { ids?: unknown } | null;
  const ids = Array.isArray(body?.ids) ? body.ids.filter((id): id is string => typeof id === "string") : [];

  if (ids.length === 0) {
    return NextResponse.json({ error: "Invalid ids" }, { status: 400 });
  }

  const result = await deleteLibraryItemsByIds(ids);
  return NextResponse.json({ success: true, deleted: result.count });
}
