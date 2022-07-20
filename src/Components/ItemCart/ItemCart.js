import React,{ useContext} from "react";
import { Grid } from "@mui/material";
import { cartContext } from "../../Context/CartContext";

const ItemCart = ({product}) => {

    const {removeProduct} = useContext(cartContext);

    return (
        <div>
            <img src={product.img} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Candidad: {product.cantidad}</p>
                <p>Precio unidad : {product.price}</p>
                <p>Subtotal: ${product.cantidad * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart