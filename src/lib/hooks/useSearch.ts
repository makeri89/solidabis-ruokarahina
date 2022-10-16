import { fetcher } from '@lib/utils'
import useSWR from 'swr'

export const useSearch = (query: string) => {
  const { data, error } = useSWR(
    query ? ['/api/search', { params: { query } }] : null,
    fetcher
  )

  return {
    searchResult: data,
    isLoading: !error && !data,
    error,
  }
}
