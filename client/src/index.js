import { StrictMode } from "react";
import React  from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./utils/useAuth";
import './index.css'
import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



//import createRoot from 'react-dom'


root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
       
          <App />
    
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);


