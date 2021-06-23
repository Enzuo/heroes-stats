export default function handler(req, res) {
  const {
    query: { id, name },
    method,
  } = req
  // const body = JSON.parse(req.body)
  const body = req.body


  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` })
      break
    case 'POST':
      // Update or create data in your database
      console.log('POST body', body)
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
