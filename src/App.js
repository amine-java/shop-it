import React from 'react';
import './App.css';
import { ListProducts } from './components/listProducts/ListProducts';
import { Cart } from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <Cart/>
      <ListProducts/>
    </div>
  );
}

export default App;
