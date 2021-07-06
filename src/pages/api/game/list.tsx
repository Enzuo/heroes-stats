import * as db from '@/common/utils/database'

export default async function handler(req, res) {
  const {
    query: { userUid },
    method,
  } = req


  switch(method){
    case 'GET':
      try {
        const result = await db.listGames(userUid);
        res.status(200).json(result)
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
