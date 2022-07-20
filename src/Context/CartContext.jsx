import React,{useState, createContext} from 'react';

export const cartContext = createContext();

const {Provider} = cartContext

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, nuevaCantidad) => {
        const newCart = cart.filter(product => product.id !== item.id);
        newCart.push({...item, cantidad:nuevaCantidad});
        setCart(newCart);
    } 

    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.cantidad * act.price , 0)
    }

    const totalProducts = () => {
        return cart.reduce((acumulador,productoActual) => acumulador + productoActual.cantidad, 0)
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
                removeProduct,
                totalPrice,
                totalProducts,
                cart
            }}>
                {children}
            </Provider>
        </div>
    )
}

export default CartProvider