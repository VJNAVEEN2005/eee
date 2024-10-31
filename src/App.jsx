import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About'
import Events from './pages/Events'
import Curriculum from './pages/Curriculum';
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App