import { FAVORITE_IDS, FAVORITES } from '@lib/constants'
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Ingredient } from '@models/ingredient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requests = FAVORITE_IDS.map((id) => {
    return axios.get(`https://fineli.fi/fineli/api/v1/foods/${id}`)
  })

  const awaited = await Promise.all(requests)

  const ingredients = awaited.map(({ data }) => {
    return new Ingredient(
      data.id,
      FAVORITES[data.id].name,
      data.energyKcal,
      data.carbohydrate,
      data.protein,
      data.fat,
      FAVORITES[data.id].url
    )
  })

  return res.status(200).json(ingredients)
}
