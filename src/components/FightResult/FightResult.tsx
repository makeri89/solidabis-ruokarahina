import { useFight } from '@lib/hooks/useFight'
import { useRecoilValue } from 'recoil'
import { redState, blueState } from '@lib/store'
import { Button, Loader } from '@mantine/core'
import FighterPair from '@ui/FighterPair'
import Event from '@ui/Event'
import { Event as EventType } from '@lib/types'
import { useState } from 'react'

const FightResult = () => {
  const redId = useRecoilValue(redState)
  const blueId = useRecoilValue(blueState)

  const [phase, setPhase] = useState(0)
  const [events, setEvents] = useState<EventType[]>([])

  const { fightResult, isLoading } = useFight(redId, blueId)

  console.log(fightResult)

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setPhase(phase + 1)
    setEvents(fightResult?.events.slice(Math.max(phase - 3, 0), phase + 1))
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <FighterPair />
      winner is {fightResult?.winner.name}
      {events.map((event: EventType) => (
        <Event key={event.time} event={event} />
      ))}
      <Button onClick={handleNext}>Next</Button>
    </div>
  )
}

export default FightResult
