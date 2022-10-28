import { Event, Ingredient } from './types'

export const mockAttacker: Ingredient = {
  id: '123',
  name: 'Attacker',
  health: 100,
  carbs: 10,
  protein: 10,
  fat: 10,
  attackPower: 10,
  delay: 10,
  defencePower: 10,
}

export const mockDefender: Ingredient = {
  id: '456',
  name: 'Defender',
  health: 100,
  carbs: 10,
  protein: 10,
  fat: 10,
  attackPower: 10,
  delay: 10,
  defencePower: 10,
}

export const mockEvent: Event = {
  time: 12.3456789,
  attacker: mockAttacker,
  defender: mockDefender,
  damage: 10,
  defenderHealth: 90,
}
