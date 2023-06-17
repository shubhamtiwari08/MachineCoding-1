import React, { useContext } from 'react'
import './Bookshelf.css'
import Bookcard from '../Components/Bookcard'
import { bookContext } from '../Contexts/BooksContext'


function Bookshelf() {

  const {books,booksData,setBooksData} = useContext(bookContext)

  const finalBooks = booksData?.data

  const Read = finalBooks.filter(item=> item.read === 'Read')
  const WantToRead = finalBooks.filter(item=>item.read === 'wantToRead')
  const currentlyReading = finalBooks.filter(item=>item.read === 'currentlyReading')

  return (
     <div className='bookshelf-container'>
      <div className="currently-reading">
      <h1>currently Reading</h1>
      {currentlyReading.map(item =><Bookcard data={item}/>)}
      </div>
      <div className="want-to-read">
       <h1>Want to Read</h1>
       {WantToRead.map(item =><Bookcard data={item}/>)}
      </div>
      <div className="read">
       <h1>Read</h1>
       {Read.map(item => <Bookcard data={item}/>)}
      </div>
    </div>
  )
}

export default Bookshelf
