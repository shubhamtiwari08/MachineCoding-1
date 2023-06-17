import React from 'react'
import './Book.css'



function Book() {
  return (
    <div className='main-container'>
      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41j-s9fHJcL.jpg" alt="" />
      <h4>How to kill a mockingbird</h4>
      <h5>harper lee</h5>
    <select name="books" id="books">
      <option value="none">None</option>
      <option value="wanttoread">Want to read</option>
      <option value="currentlyreading">Currently reading</option>
      <option value="read">Read</option>
    </select>
    </div>
  )
}

export default Book
