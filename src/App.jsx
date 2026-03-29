import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import LoginSignUp from './Pages/LoginSignUp'
import Cart from './Pages/Cart'
import Footer from './Component/Footer/Footer'
import banner_mens from './Component/assets/banner_mens.png'
import banner_women from './Component/assets/banner_women.png'
import banner_kids from './Component/assets/banner_kids.png'




const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/mens' element={<ShopCategory category={"men"} banner={banner_mens} />} />

        <Route path='/womens' element={<ShopCategory category={"women"} banner={banner_women} />} />
        <Route path='/kids' element={<ShopCategory category={"kid"} banner={banner_kids} />} />

        <Route path='/login' element={<LoginSignUp />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
