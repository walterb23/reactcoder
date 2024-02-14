import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ContenedorDetail = ({Id}) => {

  const [producto,setProducto] = useState([]);

  useEffect(()=>{

    const fetchData = async () => { 
         try {
           const response = await fetch("../productos.json");
           const data = await response.json()
           const product = data.find((p)=>p.Id == Id)
           setProducto(product)
        }catch(error) {
             console.log("Error en el fetch "+error)
        }
      }
      fetchData()
      
    },[Id]) 

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ContenedorDetail