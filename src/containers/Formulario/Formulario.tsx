import React, { ChangeEvent, FormEvent, useState } from 'react'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../Styles/Styles'
import { Form, Opcao, Opcoes } from './Styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  const redirecionar = useNavigate()

  const cadastarTarefa = (ev: FormEvent) => {
    ev.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        status: enums.Status.PENDENTE,
        descricao
      })
    )
    redirecionar('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>

      <Form onSubmit={cadastarTarefa}>
        <Campo
          type="text"
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          placeholder="Título"
        />

        <Campo
          as="textarea"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          placeholder="Descrição da tarefa"
        />

        <Opcoes>
          <p>Prioridade</p>
          <div>
            {Object.values(enums.Prioridade).map((prioridade) => (
              <Opcao key={prioridade}>
                <input
                  value={prioridade}
                  onChange={({ target }) =>
                    setPrioridade(target.value as enums.Prioridade)
                  }
                  type="radio"
                  name="Prioridade"
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            ))}
          </div>
        </Opcoes>

        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
