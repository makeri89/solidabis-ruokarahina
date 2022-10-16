import { useSearch } from '@lib/hooks/useSearch'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const { searchResult } = useSearch(search)

  return (
    <div>
      Ruokarahina
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {searchResult?.map((item: any) => (
          <li key={item.id}>{item.name.fi}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
