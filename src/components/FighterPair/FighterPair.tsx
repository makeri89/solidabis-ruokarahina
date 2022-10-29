import { colors } from '@lib/colors'
import { useIngredient } from '@lib/hooks/useIngredient'
import { blueState, redState } from '@lib/store'
import { Group, Loader, Text, Title } from '@mantine/core'
import Fighter from '@ui/Fighter'
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
        <Fighter id={redId} loading={redLoading} color="red" ingredient={red} />
        <Fighter
          id={blueId}
          loading={blueLoading}
          color="blue"
          ingredient={blue}
        />
      </Group>
    </>
  )
}

export default FighterPair
