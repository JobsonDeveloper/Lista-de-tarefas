import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

// const initialState: TarefasState = {
//   itens: [
//     {
//       id: 1,
//       titulo: 'Estudar TypeScript',
//       prioridade: enums.Prioridade.IMPORTENTE,
//       status: enums.Status.PENDENTE,
//       descricao:
//         'Estudar Funções e Arrays, criando um projeto prático com consumo de API'
//     },
//     {
//       id: 2,
//       titulo: 'Estudar React',
//       prioridade: enums.Prioridade.NORMAL,
//       status: enums.Status.CONCLUIDA,
//       descricao:
//         'Estudar Funções e Arrays, criando um projeto prático com consumo de API'
//     },
//     {
//       id: 3,
//       titulo: 'Estudar Java',
//       prioridade: enums.Prioridade.URGENTE,
//       status: enums.Status.CONCLUIDA,
//       descricao:
//         'Estudar Funções e Arrays, criando um projeto prático com consumo de API'
//     }
//   ]
// }

const adicionarNoStorage = (state: TarefasState) => {
  localStorage.setItem('LTtarefas', JSON.stringify(state))
}

let initialState: TarefasState = { itens: [] }
const val = localStorage.getItem('LTtarefas')

if (val !== null) {
  initialState = JSON.parse(val)
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id != action.payload)
      adicionarNoStorage(state)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const idxTarefa = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (idxTarefa >= 0) {
        state.itens[idxTarefa] = action.payload
      }
      adicionarNoStorage(state)
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaExiste) {
        alert('Esta tarefa já foi cadastrada antes!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(tarefaNova)
        adicionarNoStorage(state)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const idxTarefa = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (idxTarefa >= 0) {
        state.itens[idxTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }

      adicionarNoStorage(state)
    }
  }
})

export const { remover, editar, cadastrar, alterarStatus } =
  tarefasSlice.actions
export default tarefasSlice.reducer
