import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {

  return (

    <div> 
        <h1>{producto.nombre}</h1>
        <img src={producto.img} alt={producto.nombre} />
      
        <h2>Precio : {producto.precio}</h2>
        <h2>Stock : {producto.stock}</h2>
        <h3>Descripcion {producto.descripcion}</h3>
        <ItemCount/>
    </div>

  );
};

export default ItemDetail;


 