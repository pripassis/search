-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'EDITOR',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "IndexSource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "kind" TEXT NOT NULL DEFAULT 'SEARCH_ENGINE',
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "IndexTerm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "term" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "sourceHint" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sourceId" TEXT,
    CONSTRAINT "IndexTerm_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "IndexSource" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IndexJob" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "term" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'QUEUED',
    "resultCount" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "startedAt" DATETIME,
    "finishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "termId" TEXT,
    "sourceId" TEXT,
    CONSTRAINT "IndexJob_termId_fkey" FOREIGN KEY ("termId") REFERENCES "IndexTerm" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "IndexJob_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "IndexSource" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LibraryItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "normalizedUrl" TEXT NOT NULL,
    "fileId" TEXT,
    "estimatedType" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "origin" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DISCOVERED',
    "extension" TEXT,
    "downloadUrl" TEXT,
    "previewPolicy" TEXT NOT NULL DEFAULT 'download-only',
    "summary" TEXT,
    "discoveredAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "indexedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sourceId" TEXT,
    CONSTRAINT "LibraryItem_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "IndexSource" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "IndexSource_name_key" ON "IndexSource"("name");

-- CreateIndex
CREATE UNIQUE INDEX "IndexTerm_term_key" ON "IndexTerm"("term");

-- CreateIndex
CREATE INDEX "IndexJob_status_createdAt_idx" ON "IndexJob"("status", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryItem_originalUrl_key" ON "LibraryItem"("originalUrl");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryItem_normalizedUrl_key" ON "LibraryItem"("normalizedUrl");

-- CreateIndex
CREATE INDEX "LibraryItem_estimatedType_status_idx" ON "LibraryItem"("estimatedType", "status");

-- CreateIndex
CREATE INDEX "LibraryItem_origin_idx" ON "LibraryItem"("origin");

-- CreateIndex
CREATE INDEX "LibraryItem_discoveredAt_idx" ON "LibraryItem"("discoveredAt");

-- CreateIndex
CREATE INDEX "LibraryItem_extension_idx" ON "LibraryItem"("extension");
