/*
  Warnings:

  - You are about to drop the column `teamRole` on the `People` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BandUser" ADD COLUMN     "teamRole" "TeamRole" NOT NULL DEFAULT 'Athlete';

-- AlterTable
ALTER TABLE "People" DROP COLUMN "teamRole";
