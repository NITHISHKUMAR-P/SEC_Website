import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className='header'>
          <Link to='/' className='link'>Home</Link>
          <Link to='/product' className='link'>Product</Link>
          <Link to='/cart' className='link'>Cart</Link>
          <Link to='/checkout' className='link'>Checkout</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
      <center className='footer'>
        <p className='footer2'>© BrokN Games. All rights reserved.</p>
      </center>
    </React.Fragment>
  );
}

export default App;
