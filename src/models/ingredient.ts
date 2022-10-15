export class Ingredient {
  id: string
  name: string
  health: number
  attackPower: number
  protein: number
  defencePower: number
  fat: number
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
    this.protein = protein
    this.defencePower = 1 - protein / 100
    this.fat = fat
    this.delay = carbs + protein + fat
  }

  takeAttack(attacker: Ingredient): [number, Ingredient] {
    const damage = attacker.attackPower * this.defencePower || 0.01
    const remainingHP = this.health - damage
    const r = new Ingredient(
      this.id,
      this.name,
      remainingHP,
      this.attackPower,
      this.protein,
      this.fat
    )
    return [damage, r]
  }

  getHealth(): number {
    return this.health
  }

  toString() {
    return `${this.name}, HP: ${this.health}`
  }
}
