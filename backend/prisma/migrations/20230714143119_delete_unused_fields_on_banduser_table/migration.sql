/*
  Warnings:

  - You are about to drop the column `userKey` on the `BandUser` table. All the data in the column will be lost.
  - You are about to drop the column `userNickname` on the `BandUser` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "BandUser_userKey_key";

-- AlterTable
ALTER TABLE "BandUser" DROP COLUMN "userKey",
DROP COLUMN "userNickname",
ADD COLUMN     "last_active" TIMESTAMP(6);
