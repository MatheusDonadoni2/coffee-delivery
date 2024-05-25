import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/globals'

import { Home } from './pages/home/home'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}