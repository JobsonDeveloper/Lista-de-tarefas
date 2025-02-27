import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroSlice from './reducers/filtro'
import temasSlice from './reducers/temas'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroSlice,
    temas: temasSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
