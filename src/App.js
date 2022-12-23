
import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Gallery from './Components/Gallery';
import LogIn from './Components/LogIn';
import Signup from './Components/SignUp';
import AddGallery from './Components/AddGallery';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/addgallery" element={<AddGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
