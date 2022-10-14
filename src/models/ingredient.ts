export class Ingredient {
  id: string
  name: string
  health: number
  attackPower: number
  defencePower: number
  delay: number

  constructor(
    id: string,
    name: string,
    energy: number,
    carbs: number,
    protein: number,
    fat: number
  ) {
    this.id = id
    this.name = name
    this.health = energy
    this.attackPower = carbs
    this.defencePower = 1 - protein / 100
    this.delay = carbs + protein + fat
  }

  takeAttack(attacker: Ingredient): number {
    this.health -= attacker.attackPower * this.defencePower || 0.01
    return this.health
  }

  getHealth(): number {
    return this.health
  }

  toString() {
    return `${this.name}, HP: ${this.health}`
  }
}
