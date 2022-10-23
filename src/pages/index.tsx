import type { NextPage } from 'next'
import { useState } from 'react'
import { useSearch } from '@lib/hooks/useSearch'
import { Button, Group, Loader, Text, TextInput } from '@mantine/core'
import SearchResult from '@ui/SearchResult'
import FighterPair from '@ui/FighterPair'
import { useRouter } from 'next/router'
import Page from '@ui/Page'
import { useFavorites } from '@lib/hooks/useFavorites'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const { searchResult, isLoading } = useSearch(search)
  const { favorites, isLoading: favoritesLoading } = useFavorites()

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
        {search ? (
          <>
            {searchResult?.map((item: any) => (
              <SearchResult key={item.id} ingredient={item} />
            ))}
            {isLoading && <Loader />}
          </>
        ) : (
          <>
            <Text>Pick from favorites:</Text>
            {favorites?.map((item: any) => (
              <SearchResult key={item.id} ingredient={item} />
            ))}
            {favoritesLoading && <Loader />}
          </>
        )}
      </ul>
    </Page>
  )
}

export default Home
