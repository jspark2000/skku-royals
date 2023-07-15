/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `BandUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `BandUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `BandUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `realname` to the `BandUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `BandUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BandUser" ADD COLUMN     "email" VARCHAR(60) NOT NULL,
ADD COLUMN     "password" VARCHAR(60) NOT NULL,
ADD COLUMN     "realname" VARCHAR(30) NOT NULL,
ADD COLUMN     "username" VARCHAR(30) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BandUser_username_key" ON "BandUser"("username");
