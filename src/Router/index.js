import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, Encryption, Login, Signup} from '../Page' 
const App = () =>{
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="encryption" element={<Encryption />} />

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
