import { fetcher } from '@lib/utils'
import useSWR from 'swr'

export const useIngredient = (id?: string) => {
  const { data, error } = useSWR(id ? `/api/ingredient/${id}` : null, fetcher)

  return {
    ingredient: data,
    isLoading: !error && !data,
    error,
  }
}
