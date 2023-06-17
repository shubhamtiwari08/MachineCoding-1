import React from 'react'
import {Routes,Route } from 'react-router'
import Bookshelf from '../pages/Bookshelf'
import Search from '../pages/Search'

function Routing() {
  return (
    <div>
      <Routes>
         <Route path='/shelf' element={<Bookshelf/>} />  
         <Route path='/search' element={<Search/>} />  
      </Routes>
    </div>
  )
}

export default Routing
