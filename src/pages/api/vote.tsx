import * as db from '@/common/utils/database'
import type * as T from '@/common/types/game'

export default async function handler(req, res) {
  const {
    method,
    body,
  } = req

  console.log('got vote', body)

  switch (method) {
    case 'POST':
      try {
        await db.saveVote(body)
        res.status(200).end()
      }
      catch(e){
        console.error(e)
        res.status(500).end()
      }
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}



