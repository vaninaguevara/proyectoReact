import logo from './logo.svg';
import './App.css';
import Header from './Components/NavBar/NavBar.js';
import ItemListContainer from './Containers/ItemListContainer.js';
import { Fragment } from 'react';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartContext';


function App() {
  return (
    <>
    
    <div className='container-total'>
      <BrowserRouter>
        <Header />
        <CartProvider>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/categoria/:id' element={<ItemListContainer />}/>
            <Route path='/detalle/:detalle' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
        {/* <ItemListContainer props='4'/> */}
        {/* <ItemDetailContainer /> */}
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;