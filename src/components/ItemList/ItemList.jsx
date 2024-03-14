import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"

const ItemList = ({productos}) => {

  return (
    <>
     <div className='itemList'>
        {
            productos.map((producto)=>{
                return(
                    <Item producto={producto}/>
                )
            }
            )
        }
    </div>   
    
    
    </>
   
  );
};

export default ItemList;
 
 