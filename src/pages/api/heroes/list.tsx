import { PrismaClient } from '@prisma/client'
import type * as T from '@/common/types/game'
import { calculateRankFromVotes } from '@/common/utils/vote'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const {
    query: { userUid },
    method,
  } = req


  switch(method){
    case 'GET':
      try {
        const votes = await getHeroesVoteForUser(userUid);
        const heroes = calculateRankFromVotes(votes)
        res.status(200).json(heroes)
      }
      catch(e){
        console.error(e)
        res.status(500).end()
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}


async function getHeroesVoteForUser (uuid) {
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
      