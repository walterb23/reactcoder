import React from "react"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar =() => {

    return(
    <>
       
        
        <ul className="navbaritem">
            <div>
                <a className="item">Inicio</a>

                <a  className="item">Productos</a>

               <a  className="item">Empresa</a>

             </div>
        </ul>
        <CartWidget/>
    </>

    )
}
export default NavBar;