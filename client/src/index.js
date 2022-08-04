import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/home';
import Register from './pages/register';
import './index.css'
//import createRoot from 'react-dom'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



ReactDOM.render(
  


  <BrowserRouter>


  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      </Route>
      <Route path="register" element={<Register/>}/>
    
   
  </Routes>

</BrowserRouter>,

  document.getElementById('root')
);


