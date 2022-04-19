import React, { useState, Component } from "react";
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom';
import './index.css';
import './App.css';

import HeadLogo from './components/HeadLogo.js';
import Footer from './components/Footer.js';
import { keyword } from './components/BubbleChart/keyword.js';

import NEWS from "./pages/NEWS";
import STOCK from "./pages/STOCK";
import NotFound from './pages/NotFound';

import NEWS_DETAIL from "./components/BubbleChart/NEWS_DETAIL.jsx";
import children from "./components/BubbleChart/ChildComponent.js";


function App() {
  
  return (

      <div className='App'>
       <HeadLogo title = "newStock" />  
       
    <div >
        <Link to="/">NEWS</Link>
        <Link to="/stock">STOCK</Link>
        <Link to="/child">{children}</Link>
       
      </div>
      <div>
        <Routes>
          <Route path="/" element={<NEWS />} />
          <Route path="/stock" element={<STOCK />} />
          <Route path="/child" element={<NEWS_DETAIL />} />
        </Routes>
      </div>
     
       <Footer/>
   
    </div>
   
  );
}

export default App;