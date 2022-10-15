import { Ingredient } from './ingredient'

describe('Ingredient', () => {
  it('takes damage', () => {
    const attacker = new Ingredient('1', 'test', 100, 10, 10, 10)
    const defender = new Ingredient('2', 'test', 100, 10, 10, 10)
    defender.takeAttack(attacker)
    expect(defender.getHealth()).toBe(100)
  })

  it('toString method returns name and health', () => {
    const attacker = new Ingredient('1', 'test', 100, 10, 10, 10)
    const defender = new Ingredient('2', 'test', 100, 10, 10, 10)
    expect(defender.toString()).toBe('test, HP: 100')
    defender.takeAttack(attacker)
    expect(defender.toString()).toBe('test, HP: 100')
  })
})
