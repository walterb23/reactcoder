import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ContenedorDetail = () => {

  const [producto,setProducto] = useState([]);

  const {idProducto} = useParams()

    useEffect(()=>{

  },[])
  console.log(idProducto)

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ContenedorDetail 