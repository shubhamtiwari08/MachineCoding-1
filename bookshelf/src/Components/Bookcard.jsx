import React, { useContext } from 'react'
import './Book.css'
import { bookContext } from '../Contexts/BooksContext'



function Bookcard({data}) {
  const {id,image,title,author} = data
const {bookDispatch} = useContext(bookContext)


const handleInput =(e)=>{
  if(e.target.value === "none"){
  return bookDispatch({type:"NONE",payload:id})
  }else if(e.target.value === "wanttoread"){
    return bookDispatch({type: "WANT_TO_READ", payload:id})
  }else if(e.target.value === "currentlyreading"){
    return bookDispatch({type: "CURRENTLY_READING", payload:id})
  }else if(e.target.value === "read"){
     return bookDispatch({type: "READ", payload:id})
  }
}

  return (
    <div className='main-container'>
      <img src={image} alt={title} />
      <h4>title : {title}</h4>
      <h5>Author : {author}</h5>
    <select name="books" id="books" onChange={handleInput}>
      <option value="none">None</option>
      <option value="wanttoread">Want to read</option>
      <option value="currentlyreading">Currently reading</option>
      <option value="read">Read</option>
    </select>
    </div>
  )
}

export default Bookcard
