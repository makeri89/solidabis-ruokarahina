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

  const ingredient = new Ingredient(
    data.id,
    data.name.fi,
    data.energyKcal,
    data.carbohydrate,
    data.protein,
    data.fat
  )

  console.log(ingredient.toString())

  res.status(200).json(data)
}
