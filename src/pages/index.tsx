import { useSearch } from '@lib/hooks/useSearch'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Container, TextInput, Title } from '@mantine/core'
import SearchResult from '@ui/SearchResult'
import FighterPair from '@ui/FighterPair'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const { searchResult } = useSearch(search)

  return (
    <Container>
      <Title>Ruokarahina</Title>
      <FighterPair />
      <TextInput value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul style={{ listStyle: 'none' }}>
        {searchResult?.map((item: any) => (
          <SearchResult key={item.id} ingredient={item} />
        ))}
      </ul>
    </Container>
  )
}

export default Home
