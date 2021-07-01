-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 1,
    "rank" INTEGER NOT NULL DEFAULT 0,
    "isVictory" BOOLEAN NOT NULL DEFAULT false,
    "createdBy" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameHero" (
    "id" SERIAL NOT NULL,
    "heroId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "team" INTEGER NOT NULL,
    "isUser" BOOLEAN NOT NULL DEFAULT false,
    "impact" INTEGER,
    "synergy" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GameHero" ADD FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
