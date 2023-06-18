import React, { useContext } from 'react'
import { bookContext } from '../Contexts/BooksContext'
import Bookcard from '../Components/Bookcard'
import { books } from '../database/bookData'


function Search() {


  return (
    <div>
      {books.map(item=> <Bookcard data={item}/>)}
    </div>
  )
}

export default Search
