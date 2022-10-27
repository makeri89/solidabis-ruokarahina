import type { NextPage } from 'next'
import { useState } from 'react'
import { useSearch } from '@lib/hooks/useSearch'
import { Button, Group, Loader, Text, TextInput } from '@mantine/core'
import SearchResult from '@ui/SearchResult'
import FighterPair from '@ui/FighterPair'
import { useRouter } from 'next/router'
import Page from '@ui/Page'
import { useFavorites } from '@lib/hooks/useFavorites'
import { useRecoilValue } from 'recoil'
import { blueState, redState } from '@lib/store'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const redId = useRecoilValue(redState)
  const blueId = useRecoilValue(blueState)

  const { searchResult, isLoading } = useSearch(search)
  const { favorites, isLoading: favoritesLoading } = useFavorites()

  const handleFight = () => {
    router.push('/results')
  }

  return (
    <Page>
      <FighterPair />
      <Button disabled={!redId || !blueId} onClick={handleFight}>
        Start the fight!
      </Button>
      <Group>
        <label htmlFor="search">
          <Text>Search for ingredients:</Text>
        </label>
        <TextInput
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
