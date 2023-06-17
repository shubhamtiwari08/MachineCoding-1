import { useContext, useState } from 'react'
import './App.css'
import Routing from './Routes/Routes'
import { bookContext } from './Contexts/BooksContext'

function App() {

  const {bookDispatch,bookState} = useContext(bookContext)


  const handleSearch=(e)=>{
    bookDispatch({type:"FILTER",payload:(e.target.value.toLowerCase())})
  }

  return (  
         <div>
            <div className="seach-box">
                <input type="text" placeholder='seach books...'  onChange={handleSearch}/>
            </div>
         <Routing/>
         </div>
  )
}

export default App
