import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/common/Layout'
import { lightTheme } from '../theme'
import GlobalStyle from '../theme/globalStyle'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
