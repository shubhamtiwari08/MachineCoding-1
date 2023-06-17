import { useContext, useState } from 'react'
import './App.css'
import Routing from './Routes/Routes'
import { bookContext } from './Contexts/BooksContext'
import { useNavigate } from 'react-router'

function App() {

  const {bookDispatch,bookState} = useContext(bookContext)
  const Navigate = useNavigate()

  const handleSearch=(e)=>{
    bookDispatch({type:"FILTER",payload:(e.target.value.toLowerCase())})
  }

  return (  
         <div>
            <div className="seach-box">
               <button style={{padding:"1rem"}} onClick={()=>Navigate('/shelf')}>back</button> <input type="text" placeholder='seach books...' onClick={()=>Navigate('/search')}   onChange={handleSearch}/>
            </div>
         <Routing/>
         </div>
  )
}

export default App
