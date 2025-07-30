import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';  // Importing Home page
import Donate from './pages/Donate'; 
import SignUp from './pages/SignUp'; 
import AboutUs from './pages/AboutUs'; 
import Navbar from './components/Layout/Navbar'; // Assuming you have a Navbar component
import Footer from './components/Layout/Footer'; // Assuming you have a Footer component

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
