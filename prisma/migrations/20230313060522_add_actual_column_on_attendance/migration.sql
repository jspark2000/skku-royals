-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('Present', 'Tardy', 'Absent');

-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "actual" "AttendanceStatus" NOT NULL DEFAULT 'Present';
