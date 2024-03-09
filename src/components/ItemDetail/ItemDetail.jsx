import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemDetail.css"
import Abstract from '../Abstract/Abstract';

const ItemDetail = ({producto}) => {
console.log(producto.nombre)
  return (


    <div className='itemDetailText'> 
    
        <h1>{producto.nombre}</h1>
        <img src={producto.img} alt={producto.nombre} />
      
        <h2>Precio : {producto.precio}</h2>
        <h2>Stock : {producto.stock}</h2>
        <h3>Descripcion {producto.descripcion}</h3>
         <Abstract/>
         <ItemCount initial={0} stock={producto.stock} />
       
    </div>

  );
};

export default ItemDetail;


 