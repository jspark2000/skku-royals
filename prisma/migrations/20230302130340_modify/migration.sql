/*
  Warnings:

  - The `location` column on the `Attendance` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `BandUser` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[uid,date]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SuperAdmin', 'Admin', 'Normal', 'Newbie');

-- CreateEnum
CREATE TYPE "Location" AS ENUM ('Integrated', 'Seoul', 'Suwon');

-- DropIndex
DROP INDEX "uid_date_location";

-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "reason" TEXT,
DROP COLUMN "location",
ADD COLUMN     "location" "Location" NOT NULL DEFAULT 'Integrated';

-- AlterTable
ALTER TABLE "BandUser" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Newbie';

-- CreateIndex
CREATE UNIQUE INDEX "uid_date" ON "Attendance"("uid", "date");
