import * as db from '@/common/utils/database'
import { calculateRankFromVotes } from '@/common/blogic/vote'


export default async function handler(req, res) {
  const {
    query: { userUid },
    method,
  } = req


  switch(method){
    case 'GET':
      try {
        const votes = await db.getHeroesVoteForUser(userUid);
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
