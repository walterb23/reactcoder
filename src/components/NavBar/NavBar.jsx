import React from "react"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import Brand from "../Brand/Brand";
import { Link, NavLink } from "react-router-dom";
const NavBar =() => {

    return(
    <>
       <div > 
            <ul className="navbarItenAlig ">
      
                 
                        
                             <NavLink className="navbarItemText" to={'/'} >Inicio</NavLink>
                        
                        
                             <NavLink className="navbarItemText" to={'categoria/Naked'}>Naked</NavLink> 
                       
                      
                              <NavLink className="navbarItemText" to={'categoria/Superbikes'}>Super-Bikes</NavLink>       
                       
                    
                             <NavLink className="navbarItemText" to={'categoria/Cross'}>Cross</NavLink>       
                        
                     
                             <NavLink className="navbarItemText" to={'categoria/Electrica'}>Electrica</NavLink>       
                       
             </ul>


       </div>
        
        
        <CartWidget/>
    </>

    )
}
export default NavBar;