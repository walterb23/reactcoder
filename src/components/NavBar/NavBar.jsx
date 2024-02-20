import React from "react"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
const NavBar =() => {

    return(
    <>
       
        
        <ul className="navbarItem">
            <div >
             <NavLink className="navbarItemText" to={'/'} >Inicio</NavLink>
             <NavLink className="navbarItemText" to={'/carrito'}>Carrito</NavLink>
             <NavLink className="navbarItemText" to={'/detalle/:id'}>Detalle</NavLink>       

        </div>
        </ul>
        <CartWidget/>
    </>

    )
}
export default NavBar;