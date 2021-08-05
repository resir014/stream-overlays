import { NextApiRequest, NextApiResponse } from 'next'
import { stringifyUrl } from 'query-string'
import fetch from '~/utils/fetch'

const matchmakingMMR = async ({ method, query }: NextApiRequest, res: NextApiResponse) => {
  const { TRACKMANIA_MATCHMAKING_API_URL } = process.env

  if (method === 'GET') {
    try {
      if (TRACKMANIA_MATCHMAKING_API_URL) {
        const parsedUrl = stringifyUrl({
          url: TRACKMANIA_MATCHMAKING_API_URL,
          query
        })

        const response = await fetch(parsedUrl)
        res.status(200).json(response)
      } else {
        throw new Error(
          "No API URL detected. Please make sure you've set TRACKMANIA_MATCHMAKING_API_URL/"
        )
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        data: {
          message: err.message
        }
      })
    }
  } else {
    res.status(404).json({
      status: 'error',
      data: {
        message: 'Not found'
      }
    })
  }
}

export default matchmakingMMR
