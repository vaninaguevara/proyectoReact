import * as React from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import ItemCart from './../ItemCart/ItemCart';
import { useContext} from 'react'

const Cart = () => {

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
            <p>
                total: {totalPrice()}
            </p>
        </>
    )
}

export default Cart