-- DropForeignKey
ALTER TABLE "Survey" DROP CONSTRAINT "Survey_groupId_fkey";

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "SurveyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
