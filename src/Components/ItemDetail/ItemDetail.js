import { Grid } from "@mui/material";
import React from "react";
import "./ItemDetail.css";
import imagenD from './../../assets/default-image.png';

const ItemDetail = ({data}) => {
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
        </Grid>
    );
}

export default ItemDetail