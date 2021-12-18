import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: { products: [], productInfo: null },
  reducers: {
    getProducts(state, action) {
      state.products = [...action.payload]
      console.log(state.products)
    },
    getProductInfo(state, action) {
      state.productInfo = { ...action.payload }
    },
    filterByYear(state, action) {
      state.products = [...action.payload]
    }
  }
})

export const productActions = productSlice.actions

export default productSlice
