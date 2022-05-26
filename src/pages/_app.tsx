import Head from 'next/head'
import Router from 'next/router'
import { AppProps } from 'next/app'

import NProgress from 'nprogress'

import { GlobalStyle } from '../styles/global'
import { AnimatePresence } from 'framer-motion'

import Header from '../components/Header'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>NextFlix</title>
      </Head>
      <Header>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Header>
      <GlobalStyle />
    </>
  )
}

export default MyApp
