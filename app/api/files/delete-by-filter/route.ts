import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { deleteLibraryItemsByFilter } from "@/lib/files-admin";

export async function POST(request: Request) {
  await requireAdmin();

  const body = (await request.json().catch(() => null)) as {
    q?: string;
    type?: string;
    origin?: string;
    extension?: string;
    status?: string;
    from?: string;
  } | null;

  const result = await deleteLibraryItemsByFilter({
    q: body?.q ?? "",
    type: body?.type ?? "",
    origin: body?.origin ?? "",
    extension: body?.extension ?? "",
    status: body?.status ?? "",
    from: body?.from ?? "",
  });

  return NextResponse.json({ success: true, deleted: result.count });
}
