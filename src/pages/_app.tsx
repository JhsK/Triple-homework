import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/common/Layout'
import { lightTheme } from '../theme'
import GlobalStyle from '../theme/globalStyle'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>TRIPLE Homework</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0,user-scalable=yes,viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="TRIPLE Homework" />
        <meta name="author" content="sungkyu" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
