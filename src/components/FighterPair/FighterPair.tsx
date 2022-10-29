import { colors } from '@lib/colors'
import { useIngredient } from '@lib/hooks/useIngredient'
import { blueState, redState } from '@lib/store'
import { Group, Loader, Text, Title } from '@mantine/core'
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
    <>
      <Title order={3}>Fighters</Title>
      <Group
        position="center"
        p={10}
        sx={{ background: colors.greenOpaque, borderRadius: '8px' }}
      >
        <Group
          p={10}
          sx={{
            flexDirection: 'column',
            background: colors.red,
            borderRadius: '15px',
            color: 'white',
          }}
        >
          <Text weight={600}>In the red corner:</Text>
          {!redId ? (
            <Text>No fighter yet</Text>
          ) : redLoading ? (
            <Loader />
          ) : (
            <div>
              <IngredientCard ingredient={red} />
            </div>
          )}
        </Group>
        <Group
          p={10}
          sx={{
            flexDirection: 'column',
            background: colors.blue,
            borderRadius: '15px',
            color: 'white',
          }}
        >
          <Text weight={600}>In the blue corner:</Text>
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
    </>
  )
}

export default FighterPair
