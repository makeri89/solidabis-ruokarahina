import { Text, Title } from '@mantine/core'
import { CSSProperties } from 'react'

interface Props {
  label: string
  value: string
  style?: CSSProperties
}

const InfoPair = ({ label, value, style }: Props) => {
  return (
    <div style={style}>
      <Title order={3}>{label}</Title> <Text>{value}</Text>
    </div>
  )
}

export default InfoPair
