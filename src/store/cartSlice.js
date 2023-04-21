import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}
  
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.items.push(action.payload)
      },
      removeProduct: (state, action) => {
        // state.items.splice(index, 1)
      }
    },
})

export const { addProduct } = cartSlice.actions