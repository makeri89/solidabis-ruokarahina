import { Ingredient } from './ingredient'

test('Ingredient takes damage', () => {
  const attacker = new Ingredient('1', 'test', 100, 10, 10, 10)
  const defender = new Ingredient('2', 'test', 100, 10, 10, 10)
  defender.takeAttack(attacker)
  expect(defender.getHealth()).toBe(91)
})
