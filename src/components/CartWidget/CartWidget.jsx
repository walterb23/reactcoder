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
    <div>
      <img className='logo' src="/img/carrito-de-compras.png" alt="" />
      <p>Unidades{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
    </div>
    


   );
};

export default CartWidget