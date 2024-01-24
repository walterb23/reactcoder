import React from 'react'
import "./itemlistcontainer.css"
const ItemListContainer = ({greeting}) => {
  return (
    <div className='colorItem'>
      <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer