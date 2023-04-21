import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsSlice } from './productsSlice'
import { cartSlice } from './cartSlice'
// import { usersApi } from './services/usersApi'

export const store = configureStore({
  reducer: {
    // [usersApi.reducerPath]: usersApi.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(usersApi.middleware),
})

setupListeners(store.dispatch)
