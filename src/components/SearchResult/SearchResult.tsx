import { blueState, redState } from '@lib/store'
import { Ingredient } from '@lib/types'
import { Button, Group } from '@mantine/core'
import { useRecoilState } from 'recoil'
import { colors } from '@lib/colors'

type SearchedIngredient = Pick<Ingredient, 'id' | 'name'>

interface Props {
  ingredient: SearchedIngredient
}

const SearchResult = ({ ingredient }: Props) => {
  const [redId, setRedId] = useRecoilState(redState)
  const [blueId, setBlueId] = useRecoilState(blueState)

  const selectedToRed = redId === ingredient.id
  const selectedToBlue = blueId === ingredient.id

  return (
    <li>
      <Group
        p={10}
        sx={{
          backgroundColor: selectedToRed
            ? colors.redOpaque
            : selectedToBlue
            ? colors.blueOpaque
            : 'white',
          borderRadius: 8,
          justifyContent: 'space-between',
        }}
      >
        <Button
          onClick={() => setRedId(ingredient.id)}
          sx={{
            backgroundColor: colors.red,
          }}
        >
          Set to red corner
        </Button>
        <div>{ingredient.name}</div>
        <Button
          onClick={() => setBlueId(ingredient.id)}
          sx={{ backgroundColor: colors.blue }}
        >
          Set to blue corner
        </Button>
      </Group>
    </li>
  )
}

export default SearchResult
