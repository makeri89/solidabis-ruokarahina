import { blueState, redState } from '@lib/store'
import { Ingredient } from '@lib/types'
import { Button, Group } from '@mantine/core'
import { useRecoilState } from 'recoil'

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
            ? '#f5424255'
            : selectedToBlue
            ? '#4287f555'
            : 'white',
          borderRadius: 8,
          justifyContent: 'space-between',
        }}
      >
        <Button color="red" onClick={() => setRedId(ingredient.id)}>
          Set to red corner
        </Button>
        <div>{ingredient.name}</div>
        <Button onClick={() => setBlueId(ingredient.id)}>
          Set to blue corner
        </Button>
      </Group>
    </li>
  )
}

export default SearchResult
