export interface Ingredient {
  id: string
  name: string
  health: number
  carbs: number
  protein: number
  fat: number
  attackPower: number
  delay: number
  defencePower: number
}

export interface Event {
  time: number
  attacker: Ingredient
  defender: Ingredient
  damage: number
  defenderHealth: number
}
