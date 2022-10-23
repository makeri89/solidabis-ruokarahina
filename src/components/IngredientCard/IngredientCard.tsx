import { Card, Text } from '@mantine/core'
import { Ingredient } from '@lib/types'

interface Props {
  ingredient: Ingredient
}

const IngredientCard = ({ ingredient }: Props) => {
  return (
    <Card shadow="sm" p="md">
      <Text>{ingredient.name}</Text>
      <Text>{ingredient.health.toFixed(2)} hp</Text>
    </Card>
  )
}

export default IngredientCard
