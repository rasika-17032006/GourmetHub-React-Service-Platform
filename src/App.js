import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Registration from "./components/registration";
import Abt from "./components/abt";
import Menu from "./components/menu";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Feedback from "./components/feedback";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/abt" element={<Abt />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;








































/*
import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyForm from './components/MyForm';
function App(){
  return(
    <div className="App">
      <MyForm></MyForm>
    </div>
  );
}
export default App;*/
















