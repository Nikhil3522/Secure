import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../Component/PrivateRoute';
import Navbar from '../Component/Navbar';
import {
        Home, 
        Encryption, 
        Login, 
        Signup, 
        Welcome, 
        Decryption, 
        PassGenerator, 
        PassManager,
        PassStrengthChecker,
        History
      } from '../Page' 
const App = () =>{
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />
        <Route path="encryption" 
          element={
            <PrivateRoute>
              <Encryption />
            </PrivateRoute>
          } 
        />
        <Route path="/decryption" 
          element={
            <PrivateRoute>
              <Decryption />
            </PrivateRoute>
          } 
        />
        <Route path="/password-generator" 
          element={
            <PrivateRoute>
              <PassGenerator />
            </PrivateRoute>
          } 
        />
        <Route path="/password-manager" 
          element={
            <PrivateRoute>
              <PassManager />
            </PrivateRoute>
          } 
        />
        <Route path="/pass-strength-checker" 
          element={
            <PrivateRoute>
              <PassStrengthChecker />
            </PrivateRoute>
          } 
        />
        <Route path="/history" 
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          } 
        />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
