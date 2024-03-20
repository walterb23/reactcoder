import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./cart.css"

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)
 
    return (
    <div>
        {cart.length == 0
        ?  

        <>
        <h1 className='cartTitulo'>NO agregaste productos al CARRITO</h1>
        <button className='cartButton'>
              <Link className='cartButtonLink' to= {'/'}>ENCONTRA LA MOTO PARA VOS</Link>
                </button>
        </>   

        :

        <div>
        <h1 className='cartTitulo'>Carrito</h1>
      
            {cart.map ((p) => (
                <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem}/>
             ))}
             <li className='cartDiv'>
              <p className='cartDivText'>Total: $ {totalCarrito()}</p>

              <button className='cartButton'  onClick={vaciarCarrito}>Vaciar carrito</button>

              <button className='cartButton'>
              <Link className='cartButtonLink' to= {'/checkout'}>Terminar Compra</Link>
                </button>

             
              <button className='cartButton'>
              <Link className='cartButtonLink' to= {'/'}>Seguir combrando</Link>
                </button>

             </li>
          
  
            
         </div> 
    }
    
    </div>
  );
};
export default Cart ;