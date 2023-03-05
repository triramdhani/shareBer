import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPageWithLayout } from './page'
interface AppPropsLayout extends AppProps {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
