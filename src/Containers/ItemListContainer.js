import React from "react";
import ItemCount from "../Components/ItemCount/ItemCount";

const ItemListContainer = ({props}) => {

    const onAdd= (cantidad) => {
        console.log(`compraste ${cantidad} unidades`);
    }
        
    return (  
        <>
            <h3>Cantidad de items {props}</h3>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
    )
    
}
export default ItemListContainer