-- DropForeignKey
ALTER TABLE "Injury" DROP CONSTRAINT "Injury_peopleId_fkey";

-- AddForeignKey
ALTER TABLE "Injury" ADD CONSTRAINT "Injury_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "People"("id") ON DELETE CASCADE ON UPDATE CASCADE;
