import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Ingredient } from '@models/ingredient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  const { data } = await axios.get(
    `https://fineli.fi/fineli/api/v1/foods/${id}`
  )

  const { data: imageData } = await axios.get(
    'https://www.googleapis.com/customsearch/v1',
    {
      params: {
        key: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
        q: data.name.fi,
        hl: 'fi',
        searchType: 'image',
      },
    }
  )

  const link = imageData.items[0].link

  const ingredient = new Ingredient(
    data.id,
    data.name.fi,
    data.energyKcal,
    data.carbohydrate,
    data.protein,
    data.fat,
    link
  )

  res.status(200).json(ingredient)
}
