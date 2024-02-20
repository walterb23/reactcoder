import React,{useState,useEffect} from 'react'
import "./itemlistcontainer.css"
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {

  const [productos,setProductos] = useState([]);

  useEffect(()=>{

    const fetchData = async () => { 
         try {
           const response = await fetch("../productos.json");
           const data = await response.json()
           setProductos(data)
        }catch(error){
             console.log("Error en el fetch "+error)
        }
      }
      fetchData()
      
    },[])

    

  return (
    <div className='colorItem'> 

      <h1>{greeting}</h1>

      {productos.length == 0 ? 
      
      <h1>CARGANDO...</h1> 
      :  
      <ItemList productos={productos}/>
      }
    </div>
  )
}
export default ItemListContainer