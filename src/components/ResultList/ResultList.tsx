import { Ingredient } from '@lib/types'
import { Loader } from '@mantine/core'
import SearchResult from '@ui/SearchResult'

interface Props {
  results: Ingredient[]
  loading: boolean
}

const ResultList = ({ results, loading }: Props) => {
  if (loading) return <Loader />
  return (
    <ul style={{ listStyle: 'none' }}>
      {results?.map((item: Ingredient) => (
        <li key={item.id}>
          <SearchResult ingredient={item} />
        </li>
      ))}
    </ul>
  )
}

export default ResultList
