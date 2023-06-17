import React, { useContext } from 'react'
import { bookContext } from '../Contexts/BooksContext'
import Bookcard from '../Components/Bookcard'



function Search() {

    const {booksData} = useContext(bookContext)


  return (
    <div>
      {booksData.map(item=> <Bookcard data={item}/>)}
    </div>
  )
}

export default Search
