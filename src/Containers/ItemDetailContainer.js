import React, {useState, useEffect} from "react";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from './../firebase/firebase';
import { doc, collection, getDoc, query ,where} from "firebase/firestore";


// const productos = [
//     { id: 1, title: "titulo 1" , urlPicture: "./../assets/default.image.png",category: "2" , descripcion: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: 500},
//     { id: 2, title: "titulo 2" , urlPicture: "./../assets/default.image.png",category: "2", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: 1000},
//     { id: 3, title: "titulo 3" , urlPicture: "./../assets/default.image.png",category: "1", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: 1750},
//     { id: 4, title: "titulo 4" , urlPicture: "./../assets/default.image.png",category: "3", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: 550},
//     { id: 5, title: "titulo 5" , urlPicture: "./../assets/default.image.png", category: "1",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: 600},
// ];
      

const ItemDetailContainer = () => {

    const [data,setData] = useState({});

    const {detalle} = useParams();

    useEffect(() => {
        const productos = (collection( db , "productos"));
        const refDoc = doc(productos,detalle)
        getDoc(refDoc).then(p=>{
        //    const productsList =  p.docs.map(producto=>{
        //     return {
        //         id:producto.id,
        //         ...producto.data(),
        //     }})
            setData(p.data());
            
        })
        // const getData = new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(productos);
        //     },2000);
        // });
        // getData.then(res => setData(res));
        // getData.then(res => setData(res.find(product => product.id === parseInt(detalle))));
    },[detalle])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer