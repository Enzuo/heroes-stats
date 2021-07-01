import { PrismaClient } from '@prisma/client'
import type * as T from '@/common/types/game'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const {
    method,
    body,
  } = req

  console.log('got vote', body)

  switch (method) {
    case 'POST':
      try {
        await saveVote(body)
        res.status(200)
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


async function saveVote({elapsedTime, userUid, heroes} : T.VoteRound){
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
        create : heroes.map(h => {return {heroId : h.id, isPicked : h.isPicked}})
      }
    }
  })
}
