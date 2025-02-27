import React, { useState } from 'react'
import BarraLateral from './containers/BarraLateral/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas/ListaDeTarefas'
import { ThemeProvider } from 'styled-components'
import light from './temas/Light'
import dark from './temas/Dark'
import GlobalStyles, { Container } from './Styles/Styles'
import { Provider, useSelector } from 'react-redux'
import store, { RootReducer } from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './pages/Cadastro/Cadastro'
import Home from './pages/Home/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastroTarefa',
    element: <Cadastro />
  }
])

const SiteComponent = () => {
  const tipo = useSelector((state: RootReducer) => state.temas.tipo)

  return (
    <ThemeProvider theme={tipo == 'light' ? light : dark}>
      <GlobalStyles />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </ThemeProvider>
  )
}

function App() {
  return (
    <Provider store={store} stabilityCheck="always">
      <SiteComponent />
    </Provider>
  )
}

export default App
