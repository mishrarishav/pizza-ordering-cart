import React from 'react';
import './App.css';
import PizzaCatalog from './components/PizzaCatalog';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <PizzaCatalog />
      <Cart />
    </div>
  );
}

export default App;
