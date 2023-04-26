-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "uid" UUID NOT NULL,
    "day" TIMESTAMP(6) NOT NULL,
    "location" VARCHAR(20) NOT NULL DEFAULT 'integrated',
    "rate" BOOLEAN NOT NULL,
    "survey" BOOLEAN NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    "isGame" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BandUser" (
    "id" SERIAL NOT NULL,
    "userKey" VARCHAR(60) NOT NULL,
    "userNickname" VARCHAR(20) NOT NULL,
    "role" VARCHAR(10) NOT NULL DEFAULT 'newbie',
    "profileUrl" VARCHAR(200) NOT NULL DEFAULT 'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',

    CONSTRAINT "BandUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameReview" (
    "id" SERIAL NOT NULL,
    "postKey" VARCHAR(60) NOT NULL,
    "userKey" VARCHAR(60) NOT NULL,
    "submissionTime" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "GameReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "gameName" VARCHAR(100) NOT NULL,
    "gameDate" TIMESTAMP(6) NOT NULL,
    "homeTeamName" VARCHAR(30) NOT NULL,
    "homeTeamScore" INTEGER DEFAULT 0,
    "awayTeamName" VARCHAR(30) NOT NULL,
    "awayTeamScore" INTEGER DEFAULT 0,
    "everyone" BOOLEAN,
    "deadLine" TIMESTAMP(6),
    "lateLine" TIMESTAMP(6),

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoogleSheet" (
    "id" SERIAL NOT NULL,
    "columns" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "records" TEXT,
    "sheetName" VARCHAR(30),

    CONSTRAINT "GoogleSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "People" (
    "id" SERIAL NOT NULL,
    "uid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(20) NOT NULL,
    "studentNo" INTEGER NOT NULL,
    "bandUserKey" VARCHAR(60) NOT NULL,
    "offPosition" VARCHAR(20) NOT NULL DEFAULT 'no',
    "defPosition" VARCHAR(20) NOT NULL DEFAULT 'no',
    "splPosition" VARCHAR(20) NOT NULL DEFAULT 'no',

    CONSTRAINT "People_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uid_day_location" ON "Attendance"("uid", "day", "location");

-- CreateIndex
CREATE UNIQUE INDEX "BandUser_userKey_key" ON "BandUser"("userKey");

-- CreateIndex
CREATE UNIQUE INDEX "GameReview_postKey_key" ON "GameReview"("postKey");

-- CreateIndex
CREATE UNIQUE INDEX "Games_gameName_key" ON "Games"("gameName");

-- CreateIndex
CREATE UNIQUE INDEX "Games_gameDate_key" ON "Games"("gameDate");

-- CreateIndex
CREATE UNIQUE INDEX "People_uid_key" ON "People"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "People_bandUserKey_key" ON "People"("bandUserKey");

-- CreateIndex
CREATE UNIQUE INDEX "name_studentNo" ON "People"("name", "studentNo");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_People_uid_fk" FOREIGN KEY ("uid") REFERENCES "People"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "People" ADD CONSTRAINT "People_BandUser_userKey_fk" FOREIGN KEY ("bandUserKey") REFERENCES "BandUser"("userKey") ON DELETE NO ACTION ON UPDATE NO ACTION;
