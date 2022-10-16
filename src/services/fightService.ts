import { Ingredient } from '@models/ingredient'

export const simulate = (
  redCornerFighter: Ingredient,
  blueCornerFighter: Ingredient
) => {
  let redTime = 0,
    blueTime = 0,
    totalTime = 0

  const events = []

  let red = redCornerFighter
  let blue = blueCornerFighter

  while (true) {
    if (redTime >= red.delay) {
      const [damage, defender] = blue.takeAttack(red)
      events.push({
        time: totalTime,
        attacker: red,
        defender,
        damage,
        defenderHealth: defender.getHealth(),
      })
      blue = defender
      redTime = 0
    }

    if (blueTime >= blue.delay) {
      const [damage, defender] = red.takeAttack(blue)
      events.push({
        time: totalTime,
        attacker: blue,
        defender,
        damage,
        defenderHealth: defender.getHealth(),
      })
      red = defender
      blueTime = 0
    }

    if (red.getHealth() <= 0 || blue.getHealth() <= 0) {
      break
    }

    redTime += 0.01
    blueTime += 0.01
    totalTime += 0.01
  }
  return [totalTime, events]
}
