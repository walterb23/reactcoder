import React from 'react'
import "./item.css"
const Item = ({producto}) => {
  return (

     <div  key={producto.Id}>
       <img className='img' src={producto.img} alt={producto.nombre} />
       <h2>{producto.nombre}</h2>
   
    </div>
  )
}

export default Item 