import React,{useState,createContext} from "react";
export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])
         const agregarCarrito = (producto,cantidad) => {
console.log(producto)
console.log(cantidad)
            const productoExistente = cart.findIndex(p => p.producto.id == producto.id)
         
            if(productoExistente == -1){
                setCart([...cart,{producto,cantidad}])
            }else{
        const newCart = [...cart]
        newCart[productoExistente].cantidad += cantidad
        setCart(newCart)
      }
    }
    const eliminarItem = (productoId) =>{
        const newCart = cart.filter(item => item.producto.id !== productoId)
        setCart(newCart)
    }
    const vaciarCarrito = () =>{
        setCart([])
    }
    const cantidadCarrito = () => {
        const totalQuatity = cart.reduce((total,item)=> total+item.cantidad,0)
        return totalQuatity
    }
    const totalCarrito = () =>{
        const totalPrice = cart.reduce((total,item) => total + (item.producto.precio *item.cantidad))
        return totalPrice
    }
return(

    <CartContext.Provider value={{
        cart,
        eliminarItem,
        vaciarCarrito,
        cantidadCarrito,
        totalCarrito,
        agregarCarrito
    }}>
    {children}
    </CartContext.Provider>
)

}
export default CartProvider