import { PrismaClient } from '@prisma/client'
import type * as T from '@/common/types/game'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const {
    query: { userUid },
    method,
  } = req


  switch(method){
    case 'GET':
      try {
        const result = await list(userUid);
        res.status(200).json(result)
      }
      catch(e){
        console.error(e)
        res.status(500)
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

async function list (uuid) {
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
