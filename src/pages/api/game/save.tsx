import * as db from '@/common/utils/database'
import {checkUserUid} from '@/common/utils'
import type * as T from '@/common/types/game'



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
        checkUserUid(body.userUid)
        await db.saveGame(body);
        res.status(200).json({ id, name: name || `User ${id}` })
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
