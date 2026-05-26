import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { deleteLibraryItemById } from "@/lib/files-admin";

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const deleted = await deleteLibraryItemById(id);
  if (!deleted) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
