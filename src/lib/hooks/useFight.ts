import { fetcher } from '@lib/utils'
import useSWR from 'swr'

export const useFight = (red: string, blue: string) => {
  const { data, error } = useSWR(
    red && blue ? ['/api/fight', { params: { red, blue } }] : null,
    fetcher
  )

  return {
    fightResult: data,
    isLoading: !error && !data,
    error,
  }
}
