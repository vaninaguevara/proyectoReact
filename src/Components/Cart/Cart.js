import * as React from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import ItemCart from './../ItemCart/ItemCart';
import { useContext} from 'react'
import { collection, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Cart.css'

const Cart = () => {

    const datosComprador = {
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juanperez@gmail.com',
    }

    const finalizarCompra = () => {
        const ventasColecction = collection(db, 'ventas');
        addDoc(ventasColecction,{
            datosComprador,
            items: [{nombre: "algo"}],
            date: serverTimestamp(),
            total: 500,
        })
    }

    const { cart, totalPrice } = useContext(cartContext);

    if (cart.length === 0){
        return (
            <>
                <Typography component="div" variant="h5">
                    No hay elementos en el carrito
                </Typography>
                <Link to='/'> Hacer compras</Link>
            </>
        )
    }
    return(
        <>
            <div className='carrito-container'>
                <Grid container>
                {
                    cart.map(product => 
                    <ItemCart key={product.id} product={product}/>)
                }
                </Grid>
                <Typography component="div" variant="h5">
                    Total: ${totalPrice()}
                </Typography>
                <Link to={`/compra`} className="tarjeta">
                    <Button variant="outlined" size="medium">
                        Agregar Datos de Envio
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default Cart