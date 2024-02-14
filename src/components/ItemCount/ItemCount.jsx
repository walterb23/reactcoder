import React, {useState} from 'react'

const ItemCount = () => {

    const [contador,setContador] = useState(0);

    const decrementar = () => {
        if(contador > 0){
             setContador(contador - 1)
             alert("Producto Retirado")
     }
    }
    const incrementar = () => {
        if(contador < 10){
            setContador(contador + 1)
            agregarCarrito ()
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