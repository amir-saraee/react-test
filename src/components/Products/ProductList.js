import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductList = ({ products }) => {
  return (
    <Box>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Box>
  )
}

export default ProductList
