import { Card, Image, Text } from '@mantine/core'
import { Ingredient } from '@lib/types'

interface Props {
  ingredient: Ingredient
}

const IngredientCard = ({ ingredient }: Props) => {
  return (
    <Card shadow="md" p="md" radius="md" withBorder>
      {ingredient.link && (
        <Card.Section>
          <Image
            src={ingredient.link}
            alt={ingredient.name}
            height={200}
            width={400}
          />
        </Card.Section>
      )}
      <Text size="lg">{ingredient.name}</Text>
      <Text>HP: {ingredient.health.toFixed(2)}</Text>
      <Text>Attack: {ingredient.attackPower.toFixed(2)}</Text>
      <Text>Defence: {ingredient.defencePower.toFixed(2)}</Text>
      <Text>Attack speed: {ingredient.delay.toFixed(2)}</Text>
    </Card>
  )
}

export default IngredientCard
