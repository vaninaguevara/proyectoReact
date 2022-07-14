import React,{useState, useContext, createContext} from 'react';

export const cartContext = createContext();

const {Provider} = cartContext

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, nuevaCantidad) => {
        const newCart = cart.filter(product => product.id !== item.id);
        newCart.push({...item, cantidad:nuevaCantidad});
        setCart(newCart);
    } 

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <div>
            <Provider value ={{
                addProduct,
                clearCart,
                isInCart,
                removeProduct
            }}>
                {children}
            </Provider>
        </div>
    )
}

export default CartProvider