import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

  return (

<Link to={`/detalle/${producto.id}`}>

       <div   key={producto.id} className='itemPosition'>
           <h2 className='itemText'>{producto.nombre}</h2>
           <img className='img' src={producto.img} alt={producto.nombre} />
      
       </div>
 
</Link>
 )
}

export default Item  