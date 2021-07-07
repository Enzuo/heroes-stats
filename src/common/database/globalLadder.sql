WITH votes AS (
SELECT  
	"HeroVote"."heroId"
-- 	,"HeroVote"."voteId"
	,"HeroVote"."isPicked"
	,"VoteRound"."userId"
	,"VoteRound"."createdAt"
	,"VoteRound"."elapsedTime"
FROM "HeroVote"
INNER JOIN "VoteRound" ON "VoteRound"."id" = "HeroVote"."voteId"
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
		, "countPicked"::NUMERIC/"countRound"::NUMERIC AS "pickRate"
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
"heroId"
	,"pickRateSum" / "count" AS "pickRate"
FROM hero_pick_rate_sum
ORDER BY "pickRate" DESC

-- SELECT * FROM "HeroVote"
-- INNER JOIN "VoteRound" ON "VoteRound"."id" = "HeroVote"."voteId"
--  WHERE "heroId" = 29
