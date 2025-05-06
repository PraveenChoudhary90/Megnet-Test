
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pagas/Home'
import InsertProduct from './Pagas/InsertProduct'
import CartData from './Pagas/CartData'
import Success from './Pagas/Success'
import Failed from './Pagas/Failed'
import CheckOut from './Pagas/checkout'
import ProductData from './Pagas/ProductData'


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='insert' element={<InsertProduct/>}/>
      <Route path='cartdata' element={<CartData/>}/>
      <Route path='checkout' element={<CheckOut/>}/>
      <Route path='success' element={<Success/>}/>
      <Route path='failed' element={<Failed/>}/>
      <Route path='product' element={<ProductData/>}/>
      </Route>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
