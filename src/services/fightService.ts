import { Ingredient } from '@models/ingredient'

export const simulate = (
  redCornerFighter: Ingredient,
  blueCornerFighter: Ingredient
) => {
  let redTime = 0,
    blueTime = 0,
    totalTime = 0

  while (true) {
    if (redTime >= redCornerFighter.delay) {
      const a = blueCornerFighter.takeAttack(redCornerFighter)
      console.log('red attacked, blue has', a, 'health left')
      redTime = 0
    }
    if (blueTime >= blueCornerFighter.delay) {
      const a = redCornerFighter.takeAttack(blueCornerFighter)
      console.log('blue attacked, red has', a, 'health left')
      blueTime = 0
    }
    redTime += 0.01
    blueTime += 0.01
    totalTime += 0.01
    if (
      redCornerFighter.getHealth() <= 0 ||
      blueCornerFighter.getHealth() <= 0
    ) {
      break
    }
  }
  return totalTime
}
