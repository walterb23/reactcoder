import React,{useState,useEffect} from 'react'
import "./itemlistcontainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs,getFirestore,query,where } from 'firebase/firestore';
const ItemListContainer = () => {

  const [productos,setProductos] = useState([]);

  const {categoryId} =useParams()

  useEffect(()=>{

    const db = getFirestore() 

    const misProductos = 
    categoryId ?
    query(collection(db,"dbmotos"),where("category","==",categoryId))
    
    :
    collection(db,"dbmotos")

    getDocs(misProductos)
    .then((res) => {
      const nuevosProductos = res.docs.map((doc)=>{
        const data = doc.data()
        return {id: doc.id,...data} 
      })
      setProductos(nuevosProductos)
    })
    .catch((error) =>console.log(error))
    },[categoryId])
 
    

  return (
    <div className='colorItem'> 

      {productos.length == 0 ? 
      
      <h1>CARGANDO PRODUCTOS...</h1>  
      :  
      <ItemList productos={productos}/>
      }
    </div>
  )
}
export default ItemListContainer 