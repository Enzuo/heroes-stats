/*
  Warnings:

  - The primary key for the `HeroVote` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "HeroVote" DROP CONSTRAINT "HeroVote_pkey",
ADD PRIMARY KEY ("heroId", "voteId");
