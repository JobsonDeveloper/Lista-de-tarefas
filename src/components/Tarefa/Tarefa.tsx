import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './Styles'
import * as enums from '../../utils/enums/Tarefa'
import { useDispatch } from 'react-redux'
import { alterarStatus, editar, remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoRemover, BotaoSalvar } from '../../Styles/Styles'

type Props = TarefaClass

type PropsRetornaTag = {
  parametro: string
}

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const [editando, setEditanto] = useState(false)
  const dispatch = useDispatch()
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  const toggleEditando = () => {
    if (editando) {
      setDescricao(descricaoOriginal)
    }
    setEditanto(!editando)
  }

  const RetornaTag = ({ parametro }: PropsRetornaTag) => {
    if (parametro === 'status') {
      if (status === enums.Status.CONCLUIDA) {
        return <S.TagConcluida>{status}</S.TagConcluida>
      } else if (status === enums.Status.PENDENTE) {
        return <S.TagPendente>{status}</S.TagPendente>
      }
    } else {
      if (prioridade === enums.Prioridade.URGENTE) {
        return <S.TagUrgente>{prioridade}</S.TagUrgente>
      } else if (prioridade === enums.Prioridade.IMPORTENTE) {
        return <S.TagImportante>{prioridade}</S.TagImportante>
      } else if (prioridade === enums.Prioridade.NORMAL) {
        return <S.TagNormal>{prioridade}</S.TagNormal>
      }
    }

    return <S.TagNormal>Não classificada</S.TagNormal>
  }

  const salvaEdicao = () => {
    dispatch(
      editar({
        id,
        titulo,
        prioridade,
        status,
        descricao
      })
    )
    setEditanto(false)
  }

  const mudaStatus = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      alterarStatus({
        id,
        finalizado: ev.target.checked
      })
    )
  }

  return (
    <S.Card>
      <>
        <label htmlFor={titulo}>
          {!editando && (
            <input
              type="checkbox"
              id={titulo}
              onChange={mudaStatus}
              checked={status === enums.Status.CONCLUIDA}
            />
          )}
          <S.Titulo>
            {editando && <em>Editando: </em>} {titulo}
          </S.Titulo>
        </label>

        <RetornaTag parametro="status" />
        <RetornaTag parametro="prioridade" />

        <S.Descricao
          disabled={!editando}
          value={descricao}
          onChange={(ev) => setDescricao(ev.target.value)}
        />

        <S.BarraAcao>
          {editando ? (
            <>
              <BotaoSalvar onClick={salvaEdicao}>Salvar</BotaoSalvar>
              <Botao onClick={toggleEditando}>Cancelar</Botao>
            </>
          ) : (
            <>
              <Botao onClick={toggleEditando}>Editar</Botao>
              <BotaoRemover onClick={() => dispatch(remover(id))}>
                Remover
              </BotaoRemover>
            </>
          )}
        </S.BarraAcao>
      </>
    </S.Card>
  )
}

export default Tarefa
