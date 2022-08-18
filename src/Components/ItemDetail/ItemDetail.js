import { Grid } from "@mui/material";
import React, { useContext } from "react";
import "./ItemDetail.css";
import imagenD from './../../assets/default-image.png';
import ItemCount from "../ItemCount/ItemCount";
import {useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";


const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useContext(cartContext);

    const onAdd= (cantidad) => {
        setGoToCart(true);
        addProduct(data,cantidad);
        console.log(data)
    };

    return (
        <Grid container p={10} className="detalle-container">
            <Grid item xs={6} p={2}>
                <img className="imagen-detalle" src={imagenD} alt="" />
            </Grid>
            <Grid item xs={6} className="datos-detalle">
                <h1>{data.title}</h1>
                <h2>{data.description}</h2>
                <h2>{data.price}</h2>
            {
                goToCart 
                ? <Link to='/cart' className="terminarCompra">Terminar compra</Link>
                : <ItemCount initial={1} stock={10} onAdd={onAdd} className="itemCount"/>
            }
            </Grid>
        </Grid>
    );
}

export default ItemDetail