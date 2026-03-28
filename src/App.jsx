import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/signup';
import './App.css'
import Login from './pages/auth/signin';
import VerifyAccount from './pages/auth/verifyaccount';
import SignupBio from './pages/auth/signupBio';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  },[]);
  return (
    <Router>
      <Routes>
        <Route
          path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/verifyaccount' element={<VerifyAccount />} />
        <Route path='/bio' element={<SignupBio />} />
      </Routes>
    </Router>
  )
}

export default App
