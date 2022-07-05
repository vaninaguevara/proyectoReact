import logo from './logo.svg';
import './App.css';
import Header from './Components/NavBar/NavBar.js';
import ItemListContainer from './Containers/ItemListContainer.js';
import { Fragment } from 'react';
import ItemDetailContainer from './Containers/ItemDetailContainer';

function App() {
  return (
    <>
    <div className='container-total'>
      <Header />
      <ItemListContainer props='4'/>
      <ItemDetailContainer />
    </div>
    </>
  );
}

export default App;