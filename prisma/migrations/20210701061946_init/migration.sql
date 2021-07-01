-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 1,
    "rank" INTEGER NOT NULL DEFAULT 0,
    "isVictory" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

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

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uuid" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.uuid_unique" ON "User"("uuid");

-- AddForeignKey
ALTER TABLE "Game" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameHero" ADD FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
