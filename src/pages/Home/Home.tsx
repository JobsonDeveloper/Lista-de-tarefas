import React from 'react'
import BotaoAdicionar from '../../components/BotaoAdicionar/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas/ListaDeTarefas'
import BotaoTema from '../../components/BotaoTema/BotaoTema'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltro />
      <ListaDeTarefas />
      <BotaoAdicionar />
      <BotaoTema />
    </>
  )
}

export default Home
