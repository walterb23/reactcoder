import React from 'react'
import "./cartItem.css"

const CartItem = ({producto,eliminarItem}) => {
  return (
    <div className='cartItemDiv'>
        <img className='cartItemImg' src={producto.producto.img} alt={producto.producto.nombre} />
        <h3 className='cartItemText' >{producto.producto.nombre}</h3>
        <p className='cartItemText'>Cantidad: {producto.cantidad}</p>
        <p className='cartItemText'>Unidad: ${producto.producto.precio*producto.cantidad}</p>
        <button className='cartItemButton' onClick={()=>eliminarItem(producto.producto.id)}>Eliminar producto</button>
    </div>
  );
};

export default CartItem ;