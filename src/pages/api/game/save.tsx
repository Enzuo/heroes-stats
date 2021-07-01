import { PrismaClient } from '@prisma/client'
import type * as T from '@/common/types/game'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const {
    query: { id, name },
    method,
    body,
  } = req
  // const body = JSON.parse(req.body)


  switch (method) {
    case 'POST':
      try {
        await save(body);
        res.status(200).json({ id, name: name || `User ${id}` })
      }
      catch(e){
        console.error(e)
        res.status(500)
      }
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

async function save(game : T.Game) {
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
            uuid: game.userId,
          },
          where: {
            uuid: game.userId,
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
