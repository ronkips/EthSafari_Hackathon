import React from 'react'
import { Route, Routes } from "react-router-dom";
import Buy from './components/buynfts/Buy';
import Landing from './components/landingpage/Landing'
import NavigateTo from './NavigateTo'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/Home" element={<NavigateTo />} /> 
        <Route path="/nftpage/:tokenId" element={<Buy />} />       
      </Routes>
    </div>
  )
}

export default App
