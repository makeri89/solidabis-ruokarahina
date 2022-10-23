import type { NextPage } from 'next'
import { Title } from '@mantine/core'
import Page from '@ui/Page'
import FightResult from '@ui/FightResult'

const Results: NextPage = () => {
  return (
    <Page>
      <Title order={2}>Fight results</Title>
      <FightResult />
    </Page>
  )
}

export default Results
