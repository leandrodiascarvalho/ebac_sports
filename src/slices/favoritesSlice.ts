import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../services/api'

type FavoritesState = {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.items.findIndex((p) => p.id === produto.id)

      if (index === -1) {
        state.items.push(produto)
      } else {
        state.items.splice(index, 1)
      }
    }
  }
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
