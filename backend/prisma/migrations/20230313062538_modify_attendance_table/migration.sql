/*
  Warnings:

  - You are about to drop the column `late` on the `Attendance` table. All the data in the column will be lost.
  - The `survey` column on the `Attendance` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "late",
DROP COLUMN "survey",
ADD COLUMN     "survey" "AttendanceStatus" NOT NULL DEFAULT 'Present';
