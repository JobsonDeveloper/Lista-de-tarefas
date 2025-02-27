import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TemaState = {
  tipo: string
}

const initialState: TemaState = {
  tipo: 'light'
}

const temasSlice = createSlice({
  name: 'tema',
  initialState,
  reducers: {
    alteraTema: (state, action: PayloadAction<string>) => {
      state.tipo = action.payload
    }
  }
})

export const { alteraTema } = temasSlice.actions
export default temasSlice.reducer
