
import './App.css'
import ContenedorDetail from './components/ContenedorDetail/ContenedorDetail'
import NavBar from './components/NavBar/NavBar'
import Brand from './components/Brand/Brand'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import Footer from './components/Footer/Footer'


const App = () => {
  

  return (
    <>
     
     <Brand/>
     <NavBar/>
  
     <ItemListContainer/>  
     <ContenedorDetail Id={1}/>
     <Footer/>
    </>
  )
}

export default App
