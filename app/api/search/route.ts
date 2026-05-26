import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/session";
import { searchLibraryItems } from "@/lib/search";

export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const items = await searchLibraryItems({
    q: searchParams.get("q") ?? "",
    type: searchParams.get("type") ?? "",
    origin: searchParams.get("origin") ?? "",
    status: searchParams.get("status") ?? "",
    extension: searchParams.get("extension") ?? "",
    from: searchParams.get("from") ?? "",
    limit: Number(searchParams.get("limit") ?? 50),
  });

  return NextResponse.json({ items });
}
