import React, {useState, useEffect} from "react";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from './../firebase/firebase';
import { doc, collection, getDoc, query ,where} from "firebase/firestore";
      
const ItemDetailContainer = () => {

    const [data,setData] = useState({});

    const {detalle} = useParams();

    useEffect(() => {
        const productos = (collection( db , "productos"));
        const refDoc = doc(db,"productos",detalle)
        try{
            const aux =getDoc(refDoc).then(p=>{
                console.log(detalle)
                const a ={
                            id:detalle,
                            ...p.data(),
                        }
                setData(a)
                console.log(a)
                
            })
            console.log(aux)

            console.log(data)
        }catch(e){
            console.log(e)
        }
    },[detalle])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer