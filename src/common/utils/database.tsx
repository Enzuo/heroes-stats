import { PrismaClient } from '@prisma/client'
import type * as T from '@/common/types/game'

const prisma = new PrismaClient()


export async function getHeroesVoteForUser (uuid) {
  const result = await prisma.voteRound.findMany({
    where : {
      user : {
        uuid : {
          equals : uuid || ''
        }
      }
    },
    include: {
      heroes: true,
    },
  })
  return result
}
      

export async function saveVote({elapsedTime, userUid, heroes} : T.VoteRound){
  await prisma.voteRound.create({
    data : { 
      elapsedTime,

      user : {
        connectOrCreate: {
          create: {
            uuid: userUid,
          },
          where: {
            uuid: userUid,
          },
        },
      },

      heroes : {
        create : heroes
      }
    }
  })
}

export async function saveGame(game : T.Game) {
  const heroes = game.teams.reduce((heroes, a, teamIndex) => {
    const heroesOfTeam = a.members.map((m, memberIndex) => { 
      return {
        isUser : (teamIndex === 0 && memberIndex === 0),
        heroId : m.hero.id,
        team : teamIndex,
        impact : m.status.impact,
        synergy : m.status.synergy,
      }
    })
    return heroes.concat(heroesOfTeam)
  }, [])

  await prisma.game.create({
    data : {
      type : 1,
      user : {
        connectOrCreate: {
          create: {
            uuid: game.userUid,
          },
          where: {
            uuid: game.userUid,
          },
        },
      },
      isVictory : game.isVictory,
      heroes : {
        create : heroes
      }
    }
  })
}

export async function listGames (uuid) {
  const result = await prisma.game.findMany({
    where : {
      user : {
        uuid : {
          equals : uuid || ''
        }
      }
    },
    include: {
      user: true,
      heroes: true,
    },
  })
  return result
}
