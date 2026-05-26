import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/session";
import { listIndexJobs } from "@/lib/admin";

export async function GET() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ jobs: await listIndexJobs() });
}
