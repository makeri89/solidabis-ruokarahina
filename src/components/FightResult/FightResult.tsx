import { useFight } from '@lib/hooks/useFight'
import { useRecoilValue } from 'recoil'
import { redState, blueState } from '@lib/store'
import { Button, Group, Loader, Text } from '@mantine/core'
import FighterPair from '@ui/FighterPair'
import Event from '@ui/Event'
import { Event as EventType } from '@lib/types'
import { useEffect, useState } from 'react'

const speeds = {
  slow: 1000,
  medium: 500,
  fast: 100,
  super: 10,
}

const FightResult = () => {
  const redId = useRecoilValue(redState)
  const blueId = useRecoilValue(blueState)

  const [speed, setSpeed] = useState(speeds.medium)
  const [events, setEvents] = useState<EventType[]>([])
  const [time, setTime] = useState(0)
  const [timeRunning, setTimeRunning] = useState(false)
  const [finished, setFinished] = useState(false)

  const { fightResult, isLoading } = useFight(redId, blueId)

  useEffect(() => {
    let interval: any
    if (timeRunning) {
      interval = setInterval(() => {
        setTime((t) => t + 1)
      }, speed)
    } else if (!timeRunning) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [speed, timeRunning])

  useEffect(() => {
    if (fightResult) {
      setEvents(fightResult.events.filter((e: EventType) => e.time <= time))
    }
    if (time > fightResult?.totalTime) {
      setTimeRunning(false)
      setFinished(true)
    }
  }, [fightResult, time])

  if (isLoading) {
    return <Loader />
  }

  const handleTimeSetToSlow = () => {
    setSpeed(speeds.slow)
  }

  const handleTimeSetToMedium = () => {
    setSpeed(speeds.medium)
  }

  const handleTimeSetToFast = () => {
    setSpeed(speeds.fast)
  }

  const handleTimeSetToSuper = () => {
    setSpeed(speeds.super)
  }

  return (
    <Group sx={{ flexDirection: 'column' }}>
      <FighterPair />
      {!finished && (
        <>
          <Button onClick={() => setTimeRunning(true)}>Start fight</Button>
          {time > 0 && (
            <>
              <Text>Elapsed: {time} s</Text>
              <Text>Set speed of time</Text>
              <Group>
                <Button onClick={handleTimeSetToSlow}>Slow</Button>
                <Button onClick={handleTimeSetToMedium}>Medium</Button>
                <Button onClick={handleTimeSetToFast}>Fast</Button>
                <Button onClick={handleTimeSetToSuper}>Super</Button>
              </Group>
            </>
          )}
        </>
      )}
      <Group sx={{ flexDirection: 'column-reverse' }}>
        {events.map((event: EventType) => (
          <Event key={event.time} event={event} />
        ))}
        {finished && (
          <Text size="xl" weight="600">
            Winner is: {fightResult.winner.name}
          </Text>
        )}
      </Group>
    </Group>
  )
}

export default FightResult
