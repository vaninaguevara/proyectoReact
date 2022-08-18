import React,{useState, createContext} from 'react';

export const cartContext = createContext();

const {Provider} = cartContext

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, cantidad) => {
        console.log(item)

        console.log(isInCart(item.id))
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, cantidad: cantidad} : product
            }));
            console.log("entra a actiaulizar",cart)
        }else {
            setCart([...cart, { ...item,cantidad}])
            console.log({ ...item,cantidad})
            console.log("carga uno nuevo",cart)
        }
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
        
        
    )
}

export default CartProvider