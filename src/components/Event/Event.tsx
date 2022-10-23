import { Text, Title } from '@mantine/core'
import { Event as EventType } from '@lib/types'
import { CSSProperties } from 'react'

interface Props {
  event: EventType
}

const InfoPair = ({
  label,
  value,
  style,
}: {
  label: string
  value: string
  style?: CSSProperties
}) => {
  return (
    <div style={style}>
      <Title order={3}>{label}</Title> <Text>{value}</Text>
    </div>
  )
}

const Event = ({ event }: Props) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        background: '#22222255',
      }}
    >
      <InfoPair
        label="Time"
        value={event.time.toFixed(2)}
        style={{ gridRow: 'span 2' }}
      />
      <InfoPair label="Attacker" value={event.attacker.name} />
      <InfoPair label="Defender" value={event.defender.name} />
      <InfoPair label="Damage" value={event.damage.toFixed(2)} />
      <InfoPair label="Health" value={event.defenderHealth.toFixed(2)} />
    </div>
  )
}

export default Event
