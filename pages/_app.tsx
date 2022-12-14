import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Navbar from 'components/main/navbar'
import { ContentContainer, DarkTheme, GlobalStyles } from 'styled/main'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={DarkTheme}>
    <GlobalStyles />
    <ContentContainer className="block-center">
      <Navbar />
      <Component {...pageProps} />
    </ContentContainer>
  </ThemeProvider>
}
