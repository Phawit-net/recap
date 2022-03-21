import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routes'
import theme from './theme'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
