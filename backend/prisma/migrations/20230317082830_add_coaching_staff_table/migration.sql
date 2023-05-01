-- CreateTable
CREATE TABLE "CoachingStaff" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "studentNo" INTEGER NOT NULL,
    "teamRole" "TeamRole" NOT NULL DEFAULT 'Athlete',
    "position" TEXT NOT NULL,

    CONSTRAINT "CoachingStaff_pkey" PRIMARY KEY ("id")
);
