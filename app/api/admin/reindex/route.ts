import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { enqueueReindexJobs } from "@/lib/admin";

export async function POST(request: Request) {
  await requireAdmin();
  const jobs = await enqueueReindexJobs();
  return NextResponse.redirect(new URL(`/admin?reindexed=${jobs.length}`, request.url));
}
