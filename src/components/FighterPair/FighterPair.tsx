import { useIngredient } from '@lib/hooks/useIngredient'
import { blueState, redState } from '@lib/store'
import { Group, Loader, Text } from '@mantine/core'
import IngredientCard from '@ui/IngredientCard'
import { useRecoilValue } from 'recoil'

const FighterPair = () => {
  const redId = useRecoilValue(redState)
  const blueId = useRecoilValue(blueState)

  const { ingredient: red, isLoading: redLoading } = useIngredient(redId)
  const { ingredient: blue, isLoading: blueLoading } = useIngredient(blueId)

  if (!redId && !blueId) {
    return <></>
  }

  if (redLoading && blueLoading) {
    return <Loader />
  }

  return (
    <Group position="center" p={10} m={10} sx={{ background: '#12345655' }}>
      <Group sx={{ flexDirection: 'column' }}>
        <Text>In the red corner:</Text>
        {redLoading ? (
          <Loader />
        ) : (
          <div>
            <IngredientCard ingredient={red} />
          </div>
        )}
      </Group>
      <Group sx={{ flexDirection: 'column' }}>
        <Text>In the blue corner:</Text>
        {!blueId ? (
          <Text>No fighter yet</Text>
        ) : blueLoading ? (
          <Loader />
        ) : (
          <div>
            <IngredientCard ingredient={blue} />
          </div>
        )}
      </Group>
    </Group>
  )
}

export default FighterPair
