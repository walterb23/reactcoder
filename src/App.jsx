
import React,{useState} from 'react'
import "./App.css"
import NavBar from './components/NavBar/NavBar'
import Brand from './components/Brand/Brand'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Error from './components/Error/Error'
import Footer from './components/Footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'
import { useEffect } from "react"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import { getFirestore,collection,getDocs,query,where } from "firebase/firestore"


const App = () => {
  
   

  return (  
   <>
    <BrowserRouter>
    <CartProvider>
      <Brand/>

      <NavBar/>

      <Routes>

         <Route path='/' element={<ItemListContainer/>}/>

         <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

         <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

         <Route path='/cart' element= {<Cart/>}/>
 
         <Route path='*' element= {<Error/>}/>
 
       </Routes>
     
      <Footer/>

    </CartProvider>
    </BrowserRouter>
    
   </>
     
    
 )
}

export default App
  