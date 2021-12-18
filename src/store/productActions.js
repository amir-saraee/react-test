import axios from 'axios'
import { productActions } from './productSlice'

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('https://reqres.in/api/products')
    console.log(res)

    dispatch(productActions.getProducts(res.data.data))
  } catch (err) {
    console.log(err)
  }
}

export const fetchProductInfo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://reqres.in/api/products/${id}`)
    dispatch(productActions.getProductInfo(res.data.data))
  } catch (err) {
    console.log(err)
  }
}
