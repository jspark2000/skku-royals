/*
  Warnings:

  - You are about to drop the column `day` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `rate` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the `Games` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[uid,date,location]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `late` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "People" DROP CONSTRAINT "People_BandUser_userKey_fk";

-- DropIndex
DROP INDEX "uid_day_location";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "day",
DROP COLUMN "rate",
ADD COLUMN     "date" TIMESTAMP(6) NOT NULL,
ADD COLUMN     "late" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Games";

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "gameName" VARCHAR(100) NOT NULL,
    "gameDate" TIMESTAMP(6) NOT NULL,
    "homeTeamName" VARCHAR(30) NOT NULL,
    "homeTeamScore" INTEGER DEFAULT 0,
    "awayTeamName" VARCHAR(30) NOT NULL,
    "awayTeamScore" INTEGER DEFAULT 0,
    "everyone" BOOLEAN,
    "deadLine" TIMESTAMP(6),
    "lateLine" TIMESTAMP(6),

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_gameName_key" ON "Game"("gameName");

-- CreateIndex
CREATE UNIQUE INDEX "Game_gameDate_key" ON "Game"("gameDate");

-- CreateIndex
CREATE UNIQUE INDEX "uid_date_location" ON "Attendance"("uid", "date", "location");

-- AddForeignKey
ALTER TABLE "People" ADD CONSTRAINT "People_BandUser_userKey_fk" FOREIGN KEY ("bandUserKey") REFERENCES "BandUser"("userKey") ON DELETE CASCADE ON UPDATE CASCADE;
