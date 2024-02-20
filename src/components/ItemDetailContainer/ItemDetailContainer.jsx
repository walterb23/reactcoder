import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto,setProductos] =  useState([]);

    const {id} =useParams  

        useEffect(()=> {
            const fetchData = async () => {
                try {
                    const response = await feach("/productos.json");
                    const data =await response.json()
                    const product = data.find((p)=>p.id==id)
                    setProductos(product)
                }catch(error){
                    console.log("Error en el fetch "+error)
                }

            }
            fetchData()
        },[])

         

  return (  
    <div>

    <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer