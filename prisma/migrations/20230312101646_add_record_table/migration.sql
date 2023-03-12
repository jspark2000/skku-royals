/*
  Warnings:

  - You are about to drop the column `teamRole` on the `BandUser` table. All the data in the column will be lost.
  - You are about to drop the column `attendance` on the `People` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RecordItem" AS ENUM ('Power', 'MuscularEndurance', 'Agility', 'Speed', 'BodyComposition');

-- CreateEnum
CREATE TYPE "RecordEvent" AS ENUM ('BenchPressOne', 'BenchPressMax', 'ConeDrillOne', 'ConeDrillTwo', 'DeadLiftOne', 'DeadLiftMax', 'SquatOne', 'SquatMax', 'YardDash');

-- AlterTable
ALTER TABLE "BandUser" DROP COLUMN "teamRole";

-- AlterTable
ALTER TABLE "People" DROP COLUMN "attendance",
ADD COLUMN     "attendanceTarget" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "teamRole" "TeamRole" NOT NULL DEFAULT 'Athlete',
ADD COLUMN     "year" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "uid" UUID NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "item" "RecordItem",
    "event" "RecordEvent",
    "eventValue" TEXT,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_People_uid_fk" FOREIGN KEY ("uid") REFERENCES "People"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
