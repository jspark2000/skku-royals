/*
  Warnings:

  - The `eventValue` column on the `Record` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[uid,date,item,event]` on the table `Record` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Record" DROP COLUMN "eventValue",
ADD COLUMN     "eventValue" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "uid_date_item_event" ON "Record"("uid", "date", "item", "event");
