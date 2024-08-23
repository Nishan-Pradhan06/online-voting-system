import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Candidates from './pages/Candidates';
import ElectionLaw from './pages/ElectionLaw';
import Faq from './pages/Faq';
import HowToVote from './pages/HowToVote';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/candidates' element={<Candidates />} />
        <Route path='/election-law' element={<ElectionLaw />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/how-to-vote' element={<HowToVote />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
