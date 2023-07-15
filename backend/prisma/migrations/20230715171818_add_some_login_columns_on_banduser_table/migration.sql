/*
  Warnings:

  - You are about to drop the column `userKey` on the `BandUser` table. All the data in the column will be lost.
  - You are about to drop the column `userNickname` on the `BandUser` table. All the data in the column will be lost.
  - You are about to drop the `GoogleSheet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "BandUser_userKey_key";

-- AlterTable
ALTER TABLE "BandUser" DROP COLUMN "userKey",
DROP COLUMN "userNickname",
ADD COLUMN     "email" VARCHAR(60),
ADD COLUMN     "last_active" TIMESTAMP(6),
ADD COLUMN     "password" VARCHAR(200),
ADD COLUMN     "realname" VARCHAR(30),
ADD COLUMN     "username" VARCHAR(30),
ALTER COLUMN "profileUrl" SET DEFAULT 'https://ssl.pstatic.net/cmstatic/webclient/dres/20230622152751/images/template/profile_320x320.png';

-- DropTable
DROP TABLE "GoogleSheet";
