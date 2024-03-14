import React, {useContext} from 'react'
import "./cartwidget.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
<ItemCount/>
const CartWidget = () => {

  const {cantidadCarrito} = useContext(CartContext)
  console.log(cantidadCarrito())
  return (
    <Link to= {'/cart'}>
    <div>
      <img className='logo' src="/img/carrito-de-compras.png" alt="" />
      <p className='cartWidgetText'> {cantidadCarrito() == 0 ? null : "+"+cantidadCarrito()}</p>
    </div>
    </Link>


   );
};

export default CartWidget