
import './App.css'
import ContenedorDetail from './components/ContenedorDetail/ContenedorDetail'
import NavBar from './components/NavBar/NavBar'
import Brand from './components/Brand/Brand'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Error from './components/Error/Error'
import Footer from './components/Footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  

  return (  
  
  <>
    <BrowserRouter>
    
    <Brand/>

     <NavBar/>
  
      <Routes>

        <Route path='/' element={<ItemListContainer/> }/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

       

        <Route path='*' element= {<Error/>}/>

       </Routes>
     
     </BrowserRouter>
  
   <Footer/>
    </>
  )
}

export default App
