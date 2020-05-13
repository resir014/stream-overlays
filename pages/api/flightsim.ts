import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch('http://localhost:51011/overlay.json', {
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' }
  })
  const data = await response.text()
  res.status(200).json(data)
}

export default handler
