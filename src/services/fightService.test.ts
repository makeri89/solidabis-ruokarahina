import { Ingredient } from '../models/ingredient'
import { simulate } from './fightService'

describe('FightService', () => {
  it('simulate returns correct values', () => {
    const red = new Ingredient('1', 'red', 100, 10, 10, 10)
    const blue = new Ingredient('2', 'blue', 100, 10, 10, 10)
    const [winner, time, events] = simulate(red, blue)
    expect(winner).toBeInstanceOf(Ingredient)
    expect(time).toBeGreaterThan(0)
    expect(events).toBeInstanceOf(Array)
  })

  it('simulate returns correct winner', () => {
    const red = new Ingredient('1', 'red', 100, 10, 10, 10)
    const blue = new Ingredient('2', 'blue', 50, 10, 10, 10)
    const [winner, _] = simulate(red, blue)
    expect(winner.name).toBe(red.name)
  })
})
