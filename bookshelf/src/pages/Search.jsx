import React, { useContext } from 'react'
import { bookContext } from '../Contexts/BooksContext'
import Bookcard from '../Components/Bookcard'



function Search() {

    const {books} = useContext(bookContext)


  return (
    <div>
      {books.map(item=> <Bookcard data={item}/>)}
    </div>
  )
}

export default Search
