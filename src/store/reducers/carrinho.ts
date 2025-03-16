import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (!state.itens.find((p) => p.id === produto.id)) {
        state.itens.push(produto)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export const carrinhoReducer = carrinhoSlice.reducer
