-- CreateEnum
CREATE TYPE "AttendanceType" AS ENUM ('Integrated', 'Dispersion');

-- CreateTable
CREATE TABLE "SurveyGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SurveyGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Survey" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "type" "AttendanceType" NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "SurveyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
