import { Grid } from "@mui/material";
import React,{ useState, useEffect} from "react";
import ItemCount from "../Components/ItemCount/ItemCount";
import ItemList from "../Components/ItemList";

const productos = [
{ id: 1, title: "titulo 1" , urlPicture: "./../assets/default.image.png", descripcion: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
{ id: 2, title: "titulo 2" , urlPicture: "./../assets/default.image.png", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
{ id: 3, title: "titulo 3" , urlPicture: "./../assets/default.image.png", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
{ id: 4, title: "titulo 4" , urlPicture: "./../assets/default.image.png", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
{ id: 5, title: "titulo 5" , urlPicture: "./../assets/default.image.png", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ultrices sagittis. Duis in ex finibus, lobortis quam sit amet, pellentesque tortor. Donec gravida tincidunt tristique", price: "$10"},
]

const ItemListContainer = ({props}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            },2000);
        });
        getData.then(res => setData(res));
    },[])

    const onAdd= (cantidad) => {
        console.log(`compraste ${cantidad} unidades`);
    }
        
    return (  
        <>
            <h3>Cantidad de items {props}</h3>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <Grid container p={2}>
                
                    <ItemList data= {data} />
               
            </Grid>
        </>
    )
    
}
export default ItemListContainer