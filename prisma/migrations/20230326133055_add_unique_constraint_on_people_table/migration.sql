/*
  Warnings:

  - A unique constraint covering the columns `[studentId]` on the table `People` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "People_studentId_key" ON "People"("studentId");
