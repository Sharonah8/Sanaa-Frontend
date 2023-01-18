import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import MainGallery from './Components/MainGallery';
import Cart from './Components/Cart';
// import Footer from './Components/Footer';
import LogIn from './Components/LogIn';
import Signup from './Components/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";
import Payment from './Components/Payment';
import AddGallery from './Components/AddGallery';
import GalleryListing from './Components/GalleryListing';
import UpdateGallery from './Components/UpdateGallery';
import Feedback from './Components/Feedback';
import FeedbackDisplay from './Components/FeedbackDisplay';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<MainGallery/>} />
        <Route exact path="/addgallery" element={<AddGallery />} />
        <Route exact path="/gallerylisting" element={<GalleryListing />} />
        <Route exact path="/updategallery" element={<UpdateGallery />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/feedbackdisplay" element={<FeedbackDisplay />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}


export default App;