import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

const flightsim = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch('http://localhost:51011/overlay.json', {
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' }
    })
    const data = await response.text()
    res.status(200).json({ status: 'ok', data: JSON.parse(data) })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: {
        message: err.message
      }
    })
  }
}

export default flightsim
