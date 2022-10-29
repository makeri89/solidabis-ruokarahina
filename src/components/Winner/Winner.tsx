import { Ingredient } from '@lib/types'
import { Box, Title } from '@mantine/core'
import IngredientCard from '@ui/IngredientCard'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

interface Props {
  ingredient: Ingredient
}

const Winner = ({ ingredient }: Props) => {
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
    }, 10000)
  }, [])
  return (
    <Box
      sx={{
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Confetti
        width={width}
        height={height}
        numberOfPieces={400}
        recycle={showConfetti}
      />

      <Title order={3}>Winner is:</Title>
      <IngredientCard ingredient={ingredient} />
    </Box>
  )
}

export default Winner
