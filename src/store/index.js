import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import userSlice from './userSlice'

const store = configureStore({
  reducer: { user: userSlice.reducer, product: productSlice.reducer }
})

export default store
