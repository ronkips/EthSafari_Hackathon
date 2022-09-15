import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Buy from './components/buynfts/Buy'
import Createnft from './components/createnfts/Createnft'
import Home from './components/homepage/Home'
import Navbar from './components/navbar/Navbar'

const NavigateTo = () => {
  return (
    <div>
       <Routes>
        <Route path="nftpage:tokenId" element={<Buy />} />       
      </Routes>
          <Home />          
          <Createnft />
          <Navbar/>
      </div>
  )
}

export default NavigateTo