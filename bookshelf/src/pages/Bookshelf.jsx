import React from 'react'
import Book from '../Components/Book'

function Bookshelf() {
  return (
     <div>
      <div className="currently-reading"><Book/></div>
      <div className="want-to-read"></div>
      <div className="read"></div>
    </div>
  )
}

export default Bookshelf
