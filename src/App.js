import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import MainGallery from './Components/MainGallery';
import AddGallery from './Components/AddGallery';
// import Footer from './Components/Footer';
import LogIn from './Components/LogIn';
import Signup from './Components/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<MainGallery/>} />
        <Route exact path="/addgallery" element={<AddGallery />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}


export default App;
