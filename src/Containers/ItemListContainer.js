import { Grid } from "@mui/material";
import React,{ useState, useEffect} from "react";

import ItemList from "../Components/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query,where } from "firebase/firestore";

const ItemListContainer = ({props}) => {

    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const productos = collection( db , 'productos');
        
        getDocs(productos).then(p => {
            console.log(p)
            const productsList = p.docs.map(producto =>{     
                return {
                    id: producto.id,
                    ...producto.data()
                }})
                setData(productsList);
                console.log(productsList)
        }) 
        console.log("id: ",id)
        if (id){
            console.log("id: ",id)
            const q = query (productos, where ('category','==',parseInt(id)));
            getDocs(q).then(p => {
                console.log(p)
                const productsList =  p.docs.map(producto =>{     
                    return {
                        id: producto.id,
                        ...producto.data(),
                    }})
                    setData(productsList);
                    console.log(productsList)
            }) 
        }
        
    },[id])

    
        
    return (  
        <>

            <Grid container p={2}>
                
                    <ItemList data= {data} />
               
            </Grid>
        </>
    )
    
}
export default ItemListContainer