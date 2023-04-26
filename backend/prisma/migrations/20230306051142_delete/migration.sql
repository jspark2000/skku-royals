/*
  Warnings:

  - You are about to drop the column `bandUserKey` on the `People` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "People" DROP CONSTRAINT "People_BandUser_userKey_fk";

-- DropIndex
DROP INDEX "People_bandUserKey_key";

-- AlterTable
ALTER TABLE "People" DROP COLUMN "bandUserKey";
