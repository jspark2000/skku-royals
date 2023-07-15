/*
  Warnings:

  - You are about to drop the `GoogleSheet` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "BandUser" ALTER COLUMN "profileUrl" SET DEFAULT 'https://ssl.pstatic.net/cmstatic/webclient/dres/20230622152751/images/template/profile_320x320.png';

-- DropTable
DROP TABLE "GoogleSheet";
