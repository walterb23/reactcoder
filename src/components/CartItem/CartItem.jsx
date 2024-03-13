import React from 'react'

const CartItem = ({producto,eliminarItem}) => {
  return (
    <div>
        <img src={producto.producto.img} alt={producto.producto.nombre} />
        <h3>{producto.producto.nombre}</h3>
        <p>Cantidad: {producto.cantidad}</p>
        <p>Valor unitario: ${producto.producto.precio*producto.cantidad}</p>
        <button onClick={()=>eliminarItem(producto.producto.id)}>Eliminarproducto</button>
    </div>
  );
};

export default CartItem ;