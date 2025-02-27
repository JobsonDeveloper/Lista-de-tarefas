import React from 'react'
import Formulario from '../../containers/Formulario/Formulario'
import BarraLateral from '../../containers/BarraLateral/BarraLateral'
import BotaoTema from '../../components/BotaoTema/BotaoTema'

const Cadastro = () => (
  <>
    <BarraLateral mostrarFiltro={false} />
    <Formulario />
    <BotaoTema />
  </>
)

export default Cadastro
