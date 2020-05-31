import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'
import parseFlyliveData from 'utils/parseFlyliveData'

const flylive = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch('http://localhost:8080/', {
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' }
    })
    const data = await response.text()
    res.status(200).json({ status: 'ok', data: parseFlyliveData(data) })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: {
        message: err.message
      }
    })
  }
}

export default flylive
