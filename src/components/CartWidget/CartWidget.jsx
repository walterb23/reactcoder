import React from 'react'
import "./cartwidget.css"
import ItemCount from '../ItemCount/ItemCount'
<ItemCount/>
const CartWidget = () => {
  return (
    <>
      <img className='logo' src="./img/carrito-de-compras.png" alt="" />
    <p>0 </p>
    </>
 
   )
}

export default CartWidget