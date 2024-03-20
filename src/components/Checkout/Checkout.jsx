import React, {useState, useContext}from 'react'
import {collection,addDoc,updateDoc,doc,getDoc,getFirestore} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import "./checkout.css"

const Checkout = () => {

    const {cart,totalCarrito,cantidadCarrito,vaciarCarrito} =useContext(CartContext)
    const [nombre,setNombre] =useState("")
    const [apellido,setApellido] =useState("")
    const [telefono,setTelefono] =useState("")
    const [email,setEmail] =useState("")
    const [emailConfirmacion,setEmailConfirmacion] =useState("")
    const [error,setError]=useState("")
    const [ordenId,setOrdenId] =useState("")
    const manejadorFormulario = (event) => {

    event.preventDefault()


    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
         setError("Completar todos los campos.")
     return;
    }
    if(email !== emailConfirmacion){
         setError("El email no coincide.")
     return;
    }

    const db = getFirestore()


    const orden= {
        items: cart.map((producto) =>({
             id: producto.producto.id,
             nombre: producto.producto.nombre,
             cantidad: producto.cantidad,
     })),
             total:totalCarrito(),
             fecha: new Date(),
             nombre,
             apellido,
             telefono,
             email
     }

    Promise.all(
         orden.items.map(async (productoOrden) => {
             const productoRef = doc(db,"dbmotos",productoOrden.id);
             const productoDoc = await getDoc(productoRef)
             const stockActual = productoDoc.data().stock

        await updateDoc(productoRef, {
        
            stock: stockActual - productoOrden.cantidad

          })
        })
    )
    .then(() => {
         addDoc(collection(db,"ordenes"),orden) 
    .then((docRef) => {
        setError("")
        setOrdenId(docRef.id)
        vaciarCarrito()
        setNombre("")
        setApellido(" ")
        setTelefono("0")
        setEmail(" ")
        setEmailConfirmacion("")
    })
    .catch((error) => {
          console.log(error)
          setError("Se progujo un error al generar la orden")
         })
    })
    .catch ((error) => {
         console.log(error)
         setError("No se actualizo el stock")
    })

     }
  return (
    <div className='checkoutDiv'>
        <h1 className='checkoutTitulo'>Datos de la operacion</h1>

        <form onSubmit={manejadorFormulario}>
        { /* Mapeo de Productos  */}
            {cart.map((producto) => (
                <div key ={producto.producto.id}>
                    <p className='checkoutDivText'>
                        {""}
                        {producto.producto.nombre} x {producto.cantidad}
                    </p>
                </div>  
            ))}

            <div>
                <label className='checkoutDivText' htmlFor=''>Nombre </label>
                <input name="Nombre" type="text" onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div>
                <label className='checkoutDivText' htmlFor=''>Apellido </label>
                <input name="Apellido" type="text" onChange={(e)=> setApellido(e.target.value)}/>
            </div> 
            <div>
                <label className='checkoutDivText' htmlFor=''>Telefono </label>
                <input name="Telefono" type="text" onChange={(e)=> setTelefono(e.target.value)}/>
            </div>
            <div>
                <label className='checkoutDivText' htmlFor=''>Email </label>
                <input name="Email" type="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
           
            <div>
                <label className='checkoutDivText' htmlFor=''>Repetir Email </label>
                <input name="EmailConfirmacion" type="Email" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
            </div>

          
            <button className='checkoutButton' type='submit'>Enviar Formulario</button>
            
            {error && <p style={{color: "yellow"}}>{error}</p> }

            {ordenId && (

                <p className='checkoutDivTextCompra'>¡Gracias por confiar en  JW-MOTOS. Su numero de orden es : {ordenId}</p>

            )}
        </form> 
    </div>
  )
}

export default Checkout