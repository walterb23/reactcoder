import React, {useState} from 'react'

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

        <button onClick = {incrementar}>Sumar</button>

        <button onClick = {decrementar}>Restar</button>
       
        <button onClick = {agregarCarrito}>Add Carrito</button>
     

    </div>
  ) 
}

export default ItemCount