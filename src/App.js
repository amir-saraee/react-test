import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Users from './pages/Users'
import Products from './pages/Products'
import Layout from './components/UI/Layout'
import UserSingle from './pages/UserSingle'
import ProductSingle from './pages/ProductSingle'
import Crypto from './pages/Crypto'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserSingle />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductSingle />} />
        <Route path='/crypto' element={<Crypto />} />
      </Route>
    </Routes>
  )
}

export default App
