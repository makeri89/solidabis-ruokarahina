import { Ingredient } from './ingredient'

describe('Ingredient', () => {
  it('toString method returns name and health', () => {
    const ingredient = new Ingredient('1', 'test', 100, 10, 10, 10)
    expect(ingredient.toString()).toBe('test, HP: 100')
  })

  it('takeAttack does not mutate the ingredient', () => {
    const attacker = new Ingredient('1', 'test', 100, 10, 10, 10)
    const defender = new Ingredient('2', 'test', 100, 10, 10, 10)
    defender.takeAttack(attacker)
    expect(defender.getHealth()).toBe(100)
  })

  it('takeAttack returns the damage taken', () => {
    const attacker = new Ingredient('1', 'test', 100, 10, 10, 10)
    const defender = new Ingredient('2', 'test', 100, 10, 10, 10)
    const [damage, _] = defender.takeAttack(attacker)
    expect(damage).toBe(9)
  })

  it('takeAttack returns a new ingredient', () => {
    const attacker = new Ingredient('1', 'test', 100, 10, 10, 10)
    const defender = new Ingredient('2', 'test', 100, 10, 10, 10)
    const [_, newDefender] = defender.takeAttack(attacker)
    expect(newDefender.getHealth()).toBe(91)
    expect(newDefender).toBeInstanceOf(Ingredient)
  })

  it('getAttackPower returns carbs', () => {
    const carbs = 10
    const ingredient = new Ingredient('1', 'test', 100, carbs, 5, 5)
    expect(ingredient.getAttackPower()).toBe(carbs)
  })

  it('getDefencePower returns correct value', () => {
    const protein = 10
    const ingredient = new Ingredient('1', 'test', 100, 10, protein, 5)
    expect(ingredient.getDefencePower()).toBe(1 - protein / 100)
  })

  it('getDelay returns correct value', () => {
    const carbs = 10
    const protein = 10
    const fat = 10
    const ingredient = new Ingredient('1', 'test', 100, carbs, protein, fat)
    expect(ingredient.getDelay()).toBe(carbs + protein + fat)
  })

  it('takeAttack does damage even if defence power zeroes out attack power', () => {
    const attacker = new Ingredient('1', 'test', 100, 0, 0, 0)
    const defender = new Ingredient('2', 'test', 100, 10, 10, 10)
    const [damage, newDefender] = defender.takeAttack(attacker)
    expect(newDefender.getHealth()).toBe(99.99)
    expect(damage).toBe(0.01)
  })
})
