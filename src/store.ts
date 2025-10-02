import { configureStore } from '@reduxjs/toolkit'
import api from './services/api'
import cartReducer from './slices/cartSlice'
import favoritesReducer from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

