import React, {useState, useEffect} from "react";
import ItemDetail from "../Components/ItemDetail/ItemDetail";

const productos = { id: 1, title: "Titulo de la imagen" , urlPicture: "./../assets/default.image.png", descripcion: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"}
    

const ItemDetailContainer = () => {

    const [data,setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            },2000);
        });
        getData.then(res => setData(res));
    },[])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer