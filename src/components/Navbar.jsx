import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn, throttle } from '../lib/utils'
import { fadeIn, riseIn } from '../lib/motion'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY
    
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY
      
      // Set scrolled state for backdrop
      setIsScrolled(currentScrollY > 20)
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      
      lastScrollY = currentScrollY
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="skip-link focus-ring"
      >
        Skip to content
      </a>

      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <nav 
          className={cn(
            'mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300',
            isScrolled ? 'mt-2' : 'mt-6'
          )}
        >
          <div className={cn(
            'flex items-center justify-between rounded-2xl border border-white/10 px-6 py-3 transition-all duration-300',
            isScrolled 
              ? 'bg-[var(--surface)]/95 backdrop-blur-xl shadow-lg' 
              : 'bg-[var(--surface)]/80 backdrop-blur-md'
          )}>
            {/* Logo */}
            <motion.div variants={riseIn}>
              <Link
                to="/"
                className="text-2xl font-bold text-[var(--primary)] hover:text-[var(--primary-600)] transition-colors focus-ring rounded-lg px-2 py-1"
              >
                Talal
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              variants={riseIn}
              className="hidden md:flex items-center space-x-1"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-ring',
                    location.pathname === item.href
                      ? 'bg-[var(--primary)] text-black'
                      : 'text-[var(--text)] hover:bg-white/10 hover:text-[var(--primary)]'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>

            {/* Theme Toggle & Mobile Menu Button */}
            <motion.div 
              variants={riseIn}
              className="flex items-center gap-2"
            >
              <ThemeToggle />
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-[var(--text)] hover:bg-white/10 transition-colors focus-ring"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -10,
            scale: isOpen ? 1 : 0.98
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            'md:hidden absolute top-full left-4 right-4 mt-2',
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          )}
        >
          <div className="rounded-2xl border border-white/10 bg-[var(--surface)]/95 backdrop-blur-xl shadow-xl p-4">
            <div className="space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={false}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : -20
                  }}
                  transition={{
                    duration: 0.2,
                    delay: isOpen ? index * 0.05 : 0
                  }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring',
                      location.pathname === item.href
                        ? 'bg-[var(--primary)] text-black'
                        : 'text-[var(--text)] hover:bg-white/10'
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar