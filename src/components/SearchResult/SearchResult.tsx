import { blueState, redState } from '@lib/store'
import { Ingredient } from '@lib/types'
import { Button, Group, Text } from '@mantine/core'
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
        borderBottom: '1px solid',
        borderColor: colors.greenOpaque,
        minWidth: '60vw',
      }}
      data-testid="search-result"
    >
      <Button
        onClick={() => setRedId(ingredient.id)}
        sx={{
          backgroundColor: colors.red,
          '&:hover': {
            backgroundColor: colors.red,
          },
        }}
      >
        Set to red corner
      </Button>
      <Text
        sx={{
          overflowWrap: 'break-word',
          maxWidth: '400px',
          textAlign: 'center',
        }}
      >
        {ingredient.name}
      </Text>
      <Button
        onClick={() => setBlueId(ingredient.id)}
        sx={{
          backgroundColor: colors.blue,
          '&:hover': { backgroundColor: colors.blue },
        }}
      >
        Set to blue corner
      </Button>
    </Group>
  )
}

export default SearchResult
