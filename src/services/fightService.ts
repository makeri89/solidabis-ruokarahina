import { Ingredient } from '@models/ingredient'

interface Event {
  time: number
  attacker: Ingredient
  defender: Ingredient
  damage: number
  defenderHealth: number
}

export const simulate = (
  redCornerFighter: Ingredient,
  blueCornerFighter: Ingredient
): [Ingredient, number, Array<Event>] => {
  let redTime = 0,
    blueTime = 0,
    totalTime = 0

  const events: Event[] = []

  let red = redCornerFighter
  let blue = blueCornerFighter
  let winner

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

    if (red.getHealth() <= 0) {
      winner = blue
      break
    }

    if (blue.getHealth() <= 0) {
      winner = red
      break
    }

    redTime += 0.01
    blueTime += 0.01
    totalTime += 0.01
  }
  return [winner, totalTime, events]
}
