/*
  Warnings:

  - You are about to drop the column `userKey` on the `BandUser` table. All the data in the column will be lost.
  - You are about to drop the column `userNickname` on the `BandUser` table. All the data in the column will be lost.
  - You are about to drop the `GoogleSheet` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `BandUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `BandUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `BandUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `realname` to the `BandUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `BandUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "BandUser_userKey_key";

-- AlterTable
ALTER TABLE "BandUser" DROP COLUMN "userKey",
DROP COLUMN "userNickname",
ADD COLUMN     "email" VARCHAR(60) NOT NULL,
ADD COLUMN     "last_active" TIMESTAMP(6),
ADD COLUMN     "password" VARCHAR(200) NOT NULL,
ADD COLUMN     "realname" VARCHAR(30) NOT NULL,
ADD COLUMN     "username" VARCHAR(30) NOT NULL,
ALTER COLUMN "profileUrl" SET DEFAULT 'https://ssl.pstatic.net/cmstatic/webclient/dres/20230622152751/images/template/profile_320x320.png';

-- DropTable
DROP TABLE "GoogleSheet";

-- CreateIndex
CREATE UNIQUE INDEX "BandUser_email_key" ON "BandUser"("email");
