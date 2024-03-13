import React,{useState,useEffect} from 'react'
import "./itemlistcontainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos,setProductos] = useState([]);

  const {categoryId} =useParams()

  useEffect(()=>{

    const fetchData = async () => { 
         try {
           const response = await fetch("/productos.json");
           const data = await response.json()
          
           if(categoryId){
              const filteredProducts = data.filter((p) => p.category == categoryId)
              setProductos(filteredProducts)
           }else{
              setProductos(data)

           }

        }catch(error){
             console.log("Error en el fetch "+error)
        }
      }
      fetchData()
      
    },[categoryId])
 
    

  return (
    <div className='colorItem'> 

      {productos.length == 0 ? 
      
      <h1>CARGANDO...</h1> 
      :  
      <ItemList productos={productos}/>
      }
    </div>
  )
}
export default ItemListContainer