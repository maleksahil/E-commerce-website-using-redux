import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
