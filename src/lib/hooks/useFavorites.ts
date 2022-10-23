import { fetcher } from '@lib/utils'
import useSWR from 'swr'

export const useFavorites = () => {
  const { data, error } = useSWR('/api/favorites', fetcher)

  return {
    favorites: data,
    isLoading: !error && !data,
    error,
  }
}
