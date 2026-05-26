import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { clearLibraryItems } from "@/lib/files-admin";

export async function DELETE() {
  await requireAdmin();

  const result = await clearLibraryItems();
  return NextResponse.json({ success: true, deleted: result.count });
}
