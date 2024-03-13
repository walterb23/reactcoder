import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)
  console.log(cart)
    return (
    <>
        {cart.length == 0
        ? 

        <>
        <h1>CARRITO VACIO</h1>
        <Link to={"/"}>Inicio</Link>
        </>   

        :

        <>
        <h3>Lista de Carrito</h3>
        <div>
            {cart.map ((p) => (
                <CartItem key={p.id} producto={p} eliminarItem={eliminarItem}/>
             ))}
              <p>Total: ${totalCarrito}</p>
              <button onClick={vaciarCarrito}>Vaciar carrito</button>

        </div>
            
         </>
    }
     
    </>
  );
};
export default Cart ;