/*
  Warnings:

  - Added the required column `description` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Survey" ADD COLUMN     "description" TEXT NOT NULL;
