-- CreateTable
CREATE TABLE "Injury" (
    "id" SERIAL NOT NULL,
    "peopleId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" TIMESTAMP(6) NOT NULL,
    "endDate" TIMESTAMP(6) NOT NULL,
    "others" TEXT,

    CONSTRAINT "Injury_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Injury" ADD CONSTRAINT "Injury_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "People"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
