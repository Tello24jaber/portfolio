import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import Projects from './routes/Projects'
import ProjectDetail from './routes/ProjectDetail'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'
import Achievements from './routes/Achievements'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App