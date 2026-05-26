import "dotenv/config";
import { prisma } from "../lib/prisma";
import { processIndexJob } from "../lib/indexer";

const pollIntervalMs = Number(process.env.INDEXER_POLL_MS ?? 15000);

async function runOnce() {
  const jobs = await prisma.indexJob.findMany({
    where: { status: "QUEUED" },
    orderBy: { createdAt: "asc" },
    take: 10,
    select: { id: true },
  });

  for (const job of jobs) {
    await processIndexJob(job.id);
  }
}

async function main() {
  console.log(`Indexer worker online. Polling every ${pollIntervalMs}ms.`);
  while (true) {
    await runOnce();
    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
  }
}

main().catch((error) => {
  console.error("Indexer worker failed:", error);
  process.exit(1);
});
