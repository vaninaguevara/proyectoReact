import { Grid } from "@mui/material";
import React from "react";
import "./ItemDetail.css";
import imagenD from './../../assets/default-image.png';
import ItemCount from "../ItemCount/ItemCount";
import {useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false)

    const onAdd= (cantidad) => {
        setGoToCart(true);
    }

    return (
        <Grid container p={10} className="detalle-container">
            <Grid item xs={6} p={2}>
                <img className="imagen-detalle" src={imagenD} alt="" />
            </Grid>
            <Grid item xs={6} className="datos-detalle">
                <h1>{data.title}</h1>
                <h2>{data.descripcion}</h2>
                <h2>{data.price}</h2>
            </Grid>
            {
                goToCart 
                ? <Link to='/cart'>Terminar compra</Link>
                : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }
        </Grid>
    );
}

export default ItemDetail