import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    isLoading: false,
}
  
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.products = [...action.payload]
      },
      setLoading: (state, action) => {
        state.isLoading = action.payload;
      }
    },
})

export const { setProducts, setLoading } = productsSlice.actions