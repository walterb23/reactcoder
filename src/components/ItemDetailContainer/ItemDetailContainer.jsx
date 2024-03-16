import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore,doc,getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [producto,setProducto] =  useState([]);

    const {id} = useParams()

        useEffect(()=> {
           const db = getFirestore()

           const nuevoDoc = doc(db,"dbmotos",id)

           getDoc(nuevoDoc)
           .then(res => {
            const data = res.data()
            const nuevoProducto = {id: res.id,...data}
            setProducto(nuevoProducto)
        })
        .catch(error => console.log(error))
        },[])


  return (  
    <div>
    <ItemDetail producto={producto}/>

    </div>
  )
}

export default ItemDetailContainer