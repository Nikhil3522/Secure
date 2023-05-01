import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
        Home, 
        Encryption, 
        Login, 
        Signup, 
        Welcome, 
        Decryption, 
        PassGenerator, 
        PassManager
      } from '../Page' 
const App = () =>{
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="encryption" element={<Encryption />} />
        <Route path="/decryption" element={<Decryption />} />
        <Route path="/password-generator" element={<PassGenerator />} />
        <Route path="/password-manager" element={<PassManager />} />




      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
