import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Candidates from './pages/Candidates';
import ElectionLaw from './pages/ElectionLaw';
import Faq from './pages/Faq';
import HowToVote from './pages/HowToVote';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
