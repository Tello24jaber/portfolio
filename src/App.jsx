import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import Projects from './routes/Projects'
import ProjectDetail from './routes/ProjectDetail'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'

import { fadeIn } from './lib/motion'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App