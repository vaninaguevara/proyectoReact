import * as React from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import ItemCart from './../ItemCart/ItemCart';
import { useContext} from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

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
                <p>No hay elementos en el carrito</p>
                <Link to='/'> Hacer compras</Link>
            </>
        )
    }
    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>total: {totalPrice()}</p>
            <button onClick={finalizarCompra}>Concretar compra</button>
        </>
    )
}

export default Cart