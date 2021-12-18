import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/Products/ProductCard'
import { fetchProductInfo } from '../store/productActions'

const ProductSingle = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.productInfo)

  useEffect(() => {
    dispatch(fetchProductInfo(id))
  }, [dispatch, id])

  return <ProductCard product={product} />
}

export default ProductSingle
