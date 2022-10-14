import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Ingredient } from '@models/ingredient'
import { simulate } from '@services/fightService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { red, blue } = req.query

  const { data: redCorner } = await axios.get(
    `https://fineli.fi/fineli/api/v1/foods/${red}`
  )
  const { data: blueCorner } = await axios.get(
    `https://fineli.fi/fineli/api/v1/foods/${blue}`
  )

  const redCornerFighter = new Ingredient(
    redCorner.id,
    redCorner.name.fi,
    redCorner.energyKcal,
    redCorner.carbohydrate,
    redCorner.protein,
    redCorner.fat
  )

  const blueCornerFighter = new Ingredient(
    blueCorner.id,
    blueCorner.name.fi,
    blueCorner.energyKcal,
    blueCorner.carbohydrate,
    blueCorner.protein,
    blueCorner.fat
  )

  const totalTime = simulate(redCornerFighter, blueCornerFighter)

  console.log('Time elapsed:', totalTime)

  res.status(200).json({ hello: 'world' })
}
