import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0.5rem;
`

const LinkStyle = {}

const ProductCard = ({ product }) => {
  return (
    <>
      {product && (
        <Card>
          <div
            style={{ background: product.color, width: '100%', height: '50px' }}
          ></div>
          <div>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </div>
          <div>{product.year}</div>
          <div>{product.pantone_value}</div>
        </Card>
      )}
    </>
  )
}

export default ProductCard
