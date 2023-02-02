-- CreateEnum
CREATE TYPE "TeamRole" AS ENUM ('HeadCoach', 'Coach', 'Staff', 'Athlete');

-- AlterTable
ALTER TABLE "People" ADD COLUMN     "teamRole" "TeamRole" NOT NULL DEFAULT 'Athlete';
