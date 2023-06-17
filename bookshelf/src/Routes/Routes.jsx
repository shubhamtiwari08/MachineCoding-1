import React from 'react'
import {Routes,Route } from 'react-router'
import Bookshelf from '../pages/Bookshelf'

function Routing() {
  return (
    <div>
      <Routes>
         <Route path='/shelf' element={<Bookshelf/>} />  
      </Routes>
    </div>
  )
}

export default Routing
