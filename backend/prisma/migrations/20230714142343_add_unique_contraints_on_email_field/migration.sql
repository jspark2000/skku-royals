/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `BandUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BandUser_email_key" ON "BandUser"("email");
