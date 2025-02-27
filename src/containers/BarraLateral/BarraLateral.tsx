import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard/FiltroCard'
import FiltroCards from '../../components/FiltroCard/FiltroCard'
import * as S from './Styles'
import { Botao, Campo } from '../../Styles/Styles'
import { RootReducer } from '../../store/store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()
  const redirecionar = useNavigate()

  return (
    <S.Aside>
      <article>
        {mostrarFiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(ev) => dispatch(alterarTermo(ev.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="Pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="Concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="Urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTENTE}
                criterio="prioridade"
                legenda="Importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="Normal"
              />
              <FiltroCard criterio="todas" legenda="Todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => redirecionar('/')} type="button">
            Voltar a lista de tarefas
          </Botao>
        )}
      </article>
    </S.Aside>
  )
}

export default BarraLateral
