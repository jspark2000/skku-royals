/*
  Warnings:

  - You are about to drop the column `studentNo` on the `CoachingStaff` table. All the data in the column will be lost.
  - Added the required column `admissionYear` to the `CoachingStaff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CoachingStaff" DROP COLUMN "studentNo",
ADD COLUMN     "admissionYear" INTEGER NOT NULL;
