import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";

async function main() {
  const email = process.env.ADMIN_EMAIL ?? "admin@example.com";
  const password = process.env.ADMIN_PASSWORD ?? "admin123";
  const name = process.env.ADMIN_NAME ?? "Admin";

  const admin = await prisma.user.upsert({
    where: { email },
    create: {
      name,
      email,
      passwordHash: await bcrypt.hash(password, 12),
      role: "ADMIN",
    },
    update: { name },
  });

  const source = await prisma.indexSource.upsert({
    where: { name: "Google Programmable Search" },
    create: {
      name: "Google Programmable Search",
      query: "site:drive.google.com OR site:docs.google.com",
      kind: "SEARCH_ENGINE",
      enabled: true,
    },
    update: { enabled: true },
  });

  await prisma.indexTerm.upsert({
    where: { term: "relatorios publicos" },
    create: { term: "relatorios publicos", sourceId: source.id, sourceHint: "site:drive.google.com relatorio" },
    update: { enabled: true, sourceId: source.id },
  });

  await prisma.libraryItem.upsert({
    where: { normalizedUrl: "https://drive.google.com/file/d/demo/view" },
    create: {
      title: "Demo de arquivo publico",
      originalUrl: "https://drive.google.com/file/d/demo/view",
      normalizedUrl: "https://drive.google.com/file/d/demo/view",
      fileId: "demo",
      estimatedType: "DRIVE_FILE",
      origin: source.name,
      status: "DISCOVERED",
      downloadUrl: "https://drive.google.com/uc?export=download&id=demo",
      previewPolicy: "download-only",
      sourceId: source.id,
    },
    update: { title: "Demo de arquivo publico", origin: source.name, sourceId: source.id },
  });

  console.log(`Admin pronto: ${admin.email}`);
  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error(error);
  process.exitCode = 1;
});
