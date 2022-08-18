import React from "react";
import Item from "./Item/Item";
import { Grid } from "@mui/material";

const ItemList = ({data= []}) => {

    return (
        data.map(producto => 
            <Grid item md={4} p={2}>
                <Item key={producto.id} info={producto} />
                
            </Grid>
        )
    )
}

export default ItemList