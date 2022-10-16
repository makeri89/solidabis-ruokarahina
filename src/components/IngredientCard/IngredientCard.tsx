import { Card, Text } from '@mantine/core'
import { useRecoilValue } from 'recoil'
import { redState, blueState } from '@lib/store'
import { useIngredient } from '@lib/hooks/useIngredient'

interface Props {
  corner: 'red' | 'blue'
}

const IngredientCard = ({ corner }: Props) => {
  const id = useRecoilValue(corner === 'red' ? redState : blueState)
  const { ingredient, isLoading } = useIngredient(id)

  if (!id) return <></>

  if (isLoading) {
    return <Card>loading...</Card>
  }

  return (
    <Card shadow="sm" p="md">
      <Text>{ingredient.name}</Text>
      <Text>{ingredient.health.toFixed(2)} hp</Text>
    </Card>
  )
}

export default IngredientCard
