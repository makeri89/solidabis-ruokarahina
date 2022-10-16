import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MantineProvider>
  )
}

export default MyApp
