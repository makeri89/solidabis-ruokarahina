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
import ActionButton from '@ui/ActionButton'
import ResultList from '@ui/ResultList'

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
      <ActionButton
        value="Go to fight"
        onClick={handleFight}
        disabled={!redId || !blueId}
      />
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
      {!search && <Text weight={600}>Pick from favorites:</Text>}
      <ResultList
        results={search ? searchResult : favorites}
        loading={search ? isLoading : favoritesLoading}
      />
    </Page>
  )
}

export default Home
