/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `BandUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `BandUser` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `BandUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `BandUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `realname` on table `BandUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `BandUser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BandUser" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "realname" SET NOT NULL,
ALTER COLUMN "username" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BandUser_username_key" ON "BandUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "BandUser_email_key" ON "BandUser"("email");
