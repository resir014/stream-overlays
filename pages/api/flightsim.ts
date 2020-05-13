import { NextApiRequest, NextApiResponse } from 'next'

const flightsim = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch('http://localhost:51011/overlay.json', {
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' }
    })
    const data = await response.text()
    res.status(200).json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({
      status: 'error',
      data: {
        message: err.message
      }
    })
  }
}

export default flightsim
