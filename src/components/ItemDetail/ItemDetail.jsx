import React, {useState,useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemDetail.css"
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({producto}) => {

  const [cart,setCart] = useState(false)  

  const {agregarCarrito} = useContext(CartContext)

  const onAdd = (count) => {
    setCart(true)
agregarCarrito(producto,count)

  
  }
  return (


    <div className='itemDetailText'> 
    
        <h1>{producto.nombre}</h1>
        <img className='itemDetailImg' src={producto.img} alt={producto.nombre} />
      
        <h2>Precio : {producto.precio}</h2>
        <h2>Stock : {producto.stock}</h2>
        <h3>Descripcion {producto.descripcion}</h3>
       
        {producto.stock == 0 ?
         <h2>SIN STOCK</h2> 
         :
          (cart ? 
        <button className='itemDetailButton'><Link className='itemDetailTextCart' to= {'/cart'}>Carrito</Link></button> 
        : 
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        ) }
       
       
         
       
    </div>

  );
};

export default ItemDetail;


 