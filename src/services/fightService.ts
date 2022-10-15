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
      const [damage, defendant] = blue.takeAttack(red)
      events.push({
        time: totalTime,
        attacker: red,
        defender: defendant,
        damage,
        defenderHealth: defendant.getHealth(),
      })
      blue = defendant
      redTime = 0
    }

    if (blueTime >= blue.delay) {
      const [damage, defendant] = red.takeAttack(blue)
      events.push({
        time: totalTime,
        attacker: blue,
        defender: defendant,
        damage,
        defenderHealth: defendant.getHealth(),
      })
      red = defendant
      blueTime = 0
    }

    redTime += 0.01
    blueTime += 0.01
    totalTime += 0.01

    if (red.getHealth() <= 0 || blue.getHealth() <= 0) {
      break
    }
  }
  return [totalTime, events]
}
