import React, {useState, useEffect} from "react";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const productos = [
    { id: 1, title: "titulo 1" , urlPicture: "./../assets/default.image.png",category: "2" , descripcion: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
    { id: 2, title: "titulo 2" , urlPicture: "./../assets/default.image.png",category: "2", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
    { id: 3, title: "titulo 3" , urlPicture: "./../assets/default.image.png",category: "1", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
    { id: 4, title: "titulo 4" , urlPicture: "./../assets/default.image.png",category: "3", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
    { id: 5, title: "titulo 5" , urlPicture: "./../assets/default.image.png", category: "1",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
    ]
      

const ItemDetailContainer = () => {

    const [data,setData] = useState({});

    const {detalle} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            },2000);
        });
        getData.then(res => setData(res));
        getData.then(res => setData(res.filter(productos.id === detalle)));
    },[detalle])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer