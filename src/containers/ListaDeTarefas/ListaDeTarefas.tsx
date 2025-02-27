import Tarefa from '../../components/Tarefa/Tarefa'
import { MainContainer, Titulo } from '../../Styles/Styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()
  const tarefasLength = tarefas.length

  const ResultadoFiltragem = () => {
    return (
      <Titulo as="p">
        {tarefasLength} Tarefa
        {tarefasLength != 1 && <>s</>} marcada
        {tarefasLength != 1 && <>s</>} como &quot;
        {criterio} {valor?.toLowerCase()}&ldquo;{''}
        {termo && termo.length > 0 && (
          <>
            e &quot;
            {termo}&ldquo;
          </>
        )}
      </Titulo>
    )
  }

  return (
    <MainContainer>
      <ResultadoFiltragem />

      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <Tarefa
              id={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              status={item.status}
              prioridade={item.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
