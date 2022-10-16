import type { NextPage } from 'next'
import { useFight } from '@lib/hooks/useFight'
import { Title } from '@mantine/core'
import { useRecoilValue } from 'recoil'
import { redState, blueState } from '@lib/store'
import Page from '@ui/Page'

const Results: NextPage = () => {
  const redId = useRecoilValue(redState)
  const blueId = useRecoilValue(blueState)

  const { fightResult } = useFight(redId, blueId)

  return (
    <Page>
      {fightResult ? (
        <Title order={2}>Winner: {fightResult.winner.name}</Title>
      ) : (
        <Title order={2}>No results available</Title>
      )}
    </Page>
  )
}

export default Results
