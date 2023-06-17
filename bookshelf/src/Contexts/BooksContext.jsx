import React, { createContext, useReducer } from 'react'
import { books } from '../database/bookData'
import { bookReducer } from '../Reducer/BookReducer'

export const bookContext = createContext()



function BooksProvider({children}) {

  const [booksData,bookDispatch] = useReducer(bookReducer,{
    data:books
  })

  return (
    <bookContext.Provider value={{booksData,bookDispatch,books}}>
    {children}
    </bookContext.Provider>
  )
}

export default BooksProvider
