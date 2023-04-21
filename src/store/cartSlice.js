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
        const index = state.items.findIndex(object => {
          return object.id === action.payload;
        });
        state.items.splice(index, 1)
      }
    },
})

export const { addProduct, removeProduct } = cartSlice.actions