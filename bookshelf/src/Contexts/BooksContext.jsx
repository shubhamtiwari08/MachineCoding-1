import React, { createContext } from 'react'
import { books } from '../database/bookData'

export const bookContext = createContext()



function BooksProvider({children}) {
  return (
    <bookContext.Provider value={{books}}>
    {children}
    </bookContext.Provider>
  )
}

export default BooksProvider
