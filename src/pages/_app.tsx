import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { RecoilRoot } from 'recoil'
import { theme } from '@lib/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MantineProvider>
  )
}

export default MyApp
