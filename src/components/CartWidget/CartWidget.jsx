import React from 'react'
import "./cartwidget.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
<ItemCount/>
const CartWidget = () => {
  return (
    <Link to={'/carrito'}>
    
      <img className='logo' src="/img/carrito-de-compras.png" alt="" />
    <p>0 </p>
    
 </Link>
   )
}

export default CartWidget