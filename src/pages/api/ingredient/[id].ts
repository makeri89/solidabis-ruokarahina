import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Ingredient } from '@models/ingredient'
import { FAVORITE_IDS, FAVORITES } from '@lib/constants'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  console.log('hello', id)

  const { data } = await axios.get(
    `https://fineli.fi/fineli/api/v1/foods/${id}`
  )

  let link
  let name

  if (FAVORITE_IDS.includes(data.id)) {
    link = FAVORITES[data.id].url
    name = FAVORITES[data.id].name
  } else {
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
    link = imageData.items[0].link
    name = data.name.fi
  }

  const ingredient = new Ingredient(
    data.id,
    name,
    data.energyKcal,
    data.carbohydrate,
    data.protein,
    data.fat,
    link
  )

  console.log(ingredient)

  res.status(200).json(ingredient)
}
