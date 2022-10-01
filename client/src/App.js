
import './App.css';
import React from "react";
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import About from './pages/about';
import { dashboardPage } from "./pages/dashboard";
import { SettingsPage } from "./pages/settings";
import { ProtectedLayout } from "./components/ProtectedLayout";


import {
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
            <Route path="/user" element={<ProtectedLayout />}>
               <Route path="dashboard" element={<dashboardPage />} />
               <Route path="settings" element={<SettingsPage />} />
             </Route>
          </Routes>
      
       
    

    </div>
  );
}

export default App;
