
import './App.css';
import React, { useState, useMemo, Header } from "react";
import ReactDOM from 'react-dom';

import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import About from './pages/about';
import { ProfilePage } from "./pages/Profile";
import { SettingsPage } from "./pages/Settings";
import { ProtectedLayout } from "./components/ProtectedLayout";
//import createRoot from 'react-dom'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {


  return (
    <div className="App App-header">
    
    
        
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
          </Routes>
      
       
    

    </div>
  );
}

export default App;
