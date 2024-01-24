
import './App.css'
import Contenedor from './components/Contenedor/Contenedor'
import NavBar from './components/NavBar/NavBar'
import Brand from './components/Brand/Brand'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  

  return (
    <>
     <Brand/>
    
     <NavBar/>
     
     <Contenedor/>

     <ItemListContainer greeting={"Proximamente se actualizara nuestro catalogo!"}/>
    </>
  )
}

export default App
