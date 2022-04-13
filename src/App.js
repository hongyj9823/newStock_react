import React, { useState, Component } from "react";
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom';
import './index.css';
import './App.css';

import HeadLogo from './components/HeadLogo.js';
import Footer from './components/Footer.js';

import NEWS from "./pages/NEWS";
import STOCK from "./pages/STOCK";
import NotFound from './pages/NotFound';


function App() {
  
  return (

      <div className='App'>
       <HeadLogo title = "newStock" />  
       
    <div>
        <Link to="/">NEWS</Link>
        <Link to="/stock">STOCK</Link>
        
      </div>
      <div>
        <Routes>
          <Route path="/" element={<NEWS />} />
          <Route path="/stock" element={<STOCK />} />
                </Routes>
      </div>
     
       <Footer/>
   
    </div>
   
  );
}

export default App;