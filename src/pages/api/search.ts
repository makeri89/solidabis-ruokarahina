import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  id: string
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const { query } = req.query

  const { data } = await axios.get('https://fineli.fi/fineli/api/v1/foods', {
    params: {
      q: query,
    },
  })

  const result = data.map((item: any) => ({
    id: item.id,
    name: item.name.fi,
  }))

  res.status(200).json(result)
}
