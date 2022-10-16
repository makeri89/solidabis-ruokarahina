import { useIngredient } from '@lib/hooks/useIngredient'
import { useSearch } from '@lib/hooks/useSearch'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [id, setId] = useState(undefined)
  const { searchResult } = useSearch(search)

  const { ingredient } = useIngredient(id)

  console.log(ingredient)

  return (
    <div>
      Ruokarahina
      {ingredient && (
        <div>
          <h2>{ingredient.name}</h2>
          <p>{ingredient.health.toFixed(2)} hp</p>
        </div>
      )}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {searchResult?.map((item: any) => (
          <li key={item.id} onClick={() => setId(item.id)}>
            {item.name.fi}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
