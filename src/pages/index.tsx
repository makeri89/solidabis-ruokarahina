import type { NextPage } from 'next'
import { useState } from 'react'
import { useSearch } from '@lib/hooks/useSearch'
import { Button, Group, Text, TextInput } from '@mantine/core'
import SearchResult from '@ui/SearchResult'
import FighterPair from '@ui/FighterPair'
import { useRouter } from 'next/router'
import Page from '@ui/Page'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const { searchResult } = useSearch(search)

  const handleFight = () => {
    router.push('/results')
  }

  return (
    <Page>
      <FighterPair />
      <Button onClick={handleFight}>Start the fight!</Button>
      <Group>
        <Text>Search for ingredients:</Text>
        <TextInput value={search} onChange={(e) => setSearch(e.target.value)} />
      </Group>
      <ul style={{ listStyle: 'none' }}>
        {searchResult?.map((item: any) => (
          <SearchResult key={item.id} ingredient={item} />
        ))}
      </ul>
    </Page>
  )
}

export default Home
