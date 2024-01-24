import React from "react"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar =() => {

    return(
    <>
       
        
        <ul className="navbaritem">
            <li className="item">
                <a>Inicio</a>
            </li>
            <li className="item">
                 <a>Productos</a>
            </li>
            <li className="item">
                 <a>Empresa</a>
            </li>
        </ul>
        <CartWidget/>
    </>

    )
}
export default NavBar;