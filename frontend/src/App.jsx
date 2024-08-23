import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/AboutUs'; // Import AboutUs component
import NavBar from './components/NavBar'; // Import NavBar component

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/candidates' element={<h1>Candidates</h1>} />
        <Route path='/election-law' element={<h1>Election Law</h1>} />
        <Route path='/faq' element={<h1>FAQ</h1>} />
        <Route path='/how-to-vote' element={<h1>How to Vote</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
