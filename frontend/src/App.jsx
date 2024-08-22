import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<h1>about</h1>} />
        <Route path='/candidates' element={<h1>Candidates</h1>} />
        <Route path='/election-law' element={<h1>Election Law</h1>} />
        <Route path='/faq' element={<h1>Faq</h1>} />
        <Route path='/how-to-vote' element={<h1>How to Vote</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
