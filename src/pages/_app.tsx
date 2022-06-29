import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import React from 'react'
import { lightTheme } from '../theme'
import GlobalStyle from '../theme/globalStyle'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
