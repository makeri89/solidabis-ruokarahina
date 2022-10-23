import { Card, Text } from '@mantine/core'
import { Ingredient } from '@lib/types'

interface Props {
  ingredient: Ingredient
}

const IngredientCard = ({ ingredient }: Props) => {
  return (
    <Card shadow="md" p="md" radius="md" withBorder>
      <Text size="lg">{ingredient.name}</Text>
      <Text>HP: {ingredient.health.toFixed(2)}</Text>
      <Text>Attack: {ingredient.attackPower.toFixed(2)}</Text>
      <Text>Defence: {ingredient.defencePower.toFixed(2)}</Text>
      <Text>Attack speed: {ingredient.delay.toFixed(2)}</Text>
    </Card>
  )
}

export default IngredientCard
