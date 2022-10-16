import { Group } from '@mantine/core'
import IngredientCard from '@ui/IngredientCard'

const FighterPair = () => {
  return (
    <Group>
      <IngredientCard corner="red" />
      <IngredientCard corner="blue" />
    </Group>
  )
}

export default FighterPair
