import React from 'react';
import Login from "./components/common/login/Login"
import Info from "./components/common/info/Info"
import Navbar from "./components/common/navbar/Navbar"
import Title from "./components/common/title/Title"
import {
  Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap'
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';
import { render } from '@testing-library/react';



function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/dashboard":
      component = <Dashboard />
      break
  }
  
  return (
    <div className="app">
      <Login />
      <Title />
      <Info />
      <Navbar />
      
      
      <img src="https://cdn.discordapp.com/attachments/1031065709679222886/1031222815350857840/Ellipse_14.png" className="background-image"></img>
      
    </div>
    
  );
}

export default App;
