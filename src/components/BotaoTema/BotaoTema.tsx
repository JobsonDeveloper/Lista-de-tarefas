import React from 'react'
import { Botao } from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { alteraTema } from '../../store/reducers/temas'

const BotaoTema = () => {
  const dispatch = useDispatch()
  const tema = useSelector((state: RootReducer) => state.temas.tipo)

  const mudaTema = () => {
    if (tema === 'light') {
      dispatch(alteraTema('dark'))
    } else {
      dispatch(alteraTema('light'))
    }
  }

  return (
    <Botao onClick={mudaTema}>
      {tema === 'light' ? (
        <i className="bi bi-moon-fill"></i>
      ) : (
        <i className="bi bi-brightness-high-fill"></i>
      )}
    </Botao>
  )
}

export default BotaoTema
