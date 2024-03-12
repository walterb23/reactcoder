import React, {useState} from 'react'

const ItemCount = ({initial,stock,onAdd}) => {

    const [contador,setContador] = useState(0);

    const decrementar = () => {
        if(contador > initial){
             setContador(contador - 1)
             onAdd(contador  - 1)
     }
    }
    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
            onAdd(contador + 1)
      }
    }
    const agregarCarrito = () => {
        alert(" Productos Agregados al Carrito")
      
    }
    const vaciarCarrito = () => {
        if(contador > 0){
          setContador(contador - contador)
           alert("Carrito Desechado")
       
     }
    }
  return (

    <div>
       <p>Cantidad en Carrito:{contador} </p> 

        <button onClick = {incrementar}>Sumar</button>

        <button onClick = {decrementar}>Restar </button>
       
        <button onClick = {vaciarCarrito}>Vaciar Carrito</button>

    </div>
  ) 
}

export default ItemCount