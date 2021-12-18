import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductList from '../components/Products/ProductList'
import { fetchProducts } from '../store/productActions'
import { productActions } from '../store/productSlice'

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #ffa502;
  color: #fff;
  margin: 0 1rem;
  cursor: pointer;
`

const Div = styled.div`
  border-bottom: 1px solid #fff;
  padding: 1rem 0;
`

function Users() {
  const products = useSelector((state) => state.product.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const filterHandler = () => {
    const newProducts = products.filter((p) => p.year < 2004)
    dispatch(productActions.filterByYear(newProducts))
  }

  const allProductsHandler = () => {
    dispatch(fetchProducts())
  }

  return (
    <>
      <Div>
        <Button onClick={allProductsHandler}>All Products</Button>
        <Button onClick={filterHandler}>Filter before 2004</Button>
      </Div>
      <ProductList products={products} />
    </>
  )
}

export default Users
