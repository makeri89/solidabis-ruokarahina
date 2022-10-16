export class Ingredient {
  id: string
  name: string
  health: number
  carbs: number
  protein: number
  fat: number
  attackPower: number
  delay: number
  defencePower: number

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
    this.carbs = carbs
    this.protein = protein
    this.fat = fat
    this.attackPower = this.getAttackPower()
    this.defencePower = this.getDefencePower()
    this.delay = this.getDelay()
  }

  getHealth(): number {
    return this.health
  }

  getAttackPower(): number {
    return this.carbs
  }

  getDefencePower(): number {
    return 1 - this.protein / 100
  }

  getDelay(): number {
    return this.carbs + this.protein + this.fat
  }

  takeAttack(attacker: Ingredient): [number, Ingredient] {
    const damage = attacker.getAttackPower() * this.getDefencePower() || 0.01
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

  toString() {
    return `${this.name}, HP: ${this.health}`
  }
}
