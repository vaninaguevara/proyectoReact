import logo from './logo.svg';
import './App.css';
import Header from './Components/NavBar/NavBar.js';
import ItemListContainer from './Containers/ItemListContainer.js';
import { Fragment } from 'react';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './Components/ItemDetail/ItemDetail';

function App() {
  return (
    <>
    
    <div className='container-total'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/categoria/:id' element={<ItemListContainer />}></Route>
          <Route path='/detalle/:detalle' element={<ItemDetailContainer />}></Route>
        </Routes>
        <ItemListContainer props='4'/>
        <ItemDetailContainer />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;