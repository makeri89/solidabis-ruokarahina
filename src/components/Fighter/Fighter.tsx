import { colors } from '@lib/colors'
import { Ingredient } from '@lib/types'
import { Group, Loader, Text } from '@mantine/core'
import IngredientCard from '@ui/IngredientCard'

interface Props {
  id: string
  loading: boolean
  color: string
  ingredient: Ingredient
}

const Fighter = ({ id, loading, color, ingredient }: Props) => {
  return (
    <Group
      p={10}
      sx={{
        flexDirection: 'column',
        background: color === 'red' ? colors.red : colors.blue,
        borderRadius: '15px',
        color: 'white',
      }}
      data-testid={`fighter-${color}`}
    >
      <Text weight={600}>In the red corner:</Text>
      {!id ? (
        <Text>No fighter yet</Text>
      ) : loading ? (
        <Loader />
      ) : (
        <div>
          <IngredientCard ingredient={ingredient} />
        </div>
      )}
    </Group>
  )
}

export default Fighter
