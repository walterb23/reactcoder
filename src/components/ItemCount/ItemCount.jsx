import React, {useState} from 'react'
import "./itemCount.css"

const ItemCount = ({initial,stock,onAdd}) => {

    const [contador,setContador] = useState(1);

    const decrementar = () => {
        if(contador > initial){
             setContador(contador - 1)
            
     }
    }
    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
          
      }
    }
   const agregarCarrito = () => {
    onAdd(contador)
   }
   
  return (

    <div>
       <p>Cantidad en Carrito:{contador} </p> 
       
      <div>
        <button className='itemCountButton' onClick = {incrementar}>Sumar</button>

        <button className='itemCountButton' onClick = {decrementar}>Restar</button>
       
        <button className='itemCountButton' onClick = {agregarCarrito}>Add Carrito</button>
     </div>
      
     

    </div>
  ) 
}

export default ItemCount