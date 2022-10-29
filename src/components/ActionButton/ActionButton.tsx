import { colors } from '@lib/colors'
import { Button, ButtonProps } from '@mantine/core'

interface Props extends ButtonProps {
  value: string
  onClick: () => void
}

const ActionButton = ({ value, onClick, ...props }: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: colors.green,
        '&:hover': {
          backgroundColor: colors.green,
        },
      }}
      onClick={onClick}
      {...props}
    >
      {value}
    </Button>
  )
}

export default ActionButton
