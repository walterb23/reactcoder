import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./cart.css"

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)
  console.log(cart)
    return (
    <>
        {cart.length == 0
        ? 

        <>
        <h1 className='cartTitulo'>NO agregaste productos al CARRITO</h1>
      
        </>   

        :

        <>
        <h1 className='cartTitulo'>Carrito</h1>
        <div className='cartDiv'>
            {cart.map ((p) => (
                <CartItem key={p.id} producto={p} eliminarItem={eliminarItem}/>
             ))}
              <p className='cartDivText'>Total: ${totalCarrito}</p>
              <button className='cartButton' onClick={vaciarCarrito}>Vaciar carrito</button>
            <button className='cartButton' >Pagar</button>
        </div>
            
         </>
    }
     
    </>
  );
};
export default Cart ;