import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Events from './pages/Events'
import Curriculum from './pages/Curriculum';
import { Routes, Route } from 'react-router-dom';
import Feedback from './pages/Feedback';
import TandP from './pages/TandP';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/events' element={<Events />} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/tandp' element={<TandP />} />
      </Routes>
    </>
  )
}

export default App