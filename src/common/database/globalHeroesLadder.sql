WITH filter_user AS (
  SELECT 
    "userId"
    ,COUNT(*) AS "count"
    ,AVG("elapsedTime") AS "elapsedTimeAvg"
    ,percentile_cont(0.5) WITHIN GROUP (ORDER BY "elapsedTime") "elapsedTimeMed"
  FROM "VoteRound"
  GROUP BY "userId"
)
, votes AS (
  SELECT  
     "HeroVote"."heroId"
    ,"HeroVote"."isPicked"
    ,"VoteRound"."userId"
    ,"VoteRound"."createdAt"
    ,"VoteRound"."elapsedTime"
  FROM "HeroVote"
  INNER JOIN "VoteRound" ON "VoteRound"."id" = "HeroVote"."voteId"
  INNER JOIN filter_user ON "VoteRound"."userId" = filter_user."userId"
                        AND filter_user."count" > 30 -- user with enough vote
                        AND filter_user."elapsedTimeMed" > 1000 -- user who has spent some time thinking
)
, hero_count AS (
  SELECT 
     "heroId"
    ,"userId"
    ,COUNT(*) AS "countRound"
    ,SUM("isPicked"::INT) AS "countPicked"
  FROM votes
  GROUP BY "heroId", "userId"
)

, hero_pick_rate_by_user AS (
  SELECT
     "heroId"
    ,"userId"
    ,"countPicked"::NUMERIC / "countRound"::NUMERIC AS "pickRate"
  FROM hero_count
)
, hero_pick_rate_sum AS (
  SELECT 
    "heroId"
    ,SUM("pickRate") AS "pickRateSum"
    ,COUNT(*) AS "count"
  FROM hero_pick_rate_by_user
  GROUP BY "heroId"
)

SELECT 
   "heroId" AS "id"
  ,"pickRateSum" / "count" AS "pickRate"
FROM hero_pick_rate_sum
ORDER BY "pickRate" DESC
