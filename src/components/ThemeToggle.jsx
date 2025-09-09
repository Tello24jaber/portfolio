import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { getThemePreference, setTheme } from '../lib/utils'
import { cn } from '../lib/utils'

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setCurrentTheme(getThemePreference())
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setCurrentTheme(newTheme)
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-white/10 animate-pulse" />
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        'relative p-2 rounded-lg transition-all duration-200 focus-ring',
        'text-[var(--text)] hover:bg-white/10',
        'border border-transparent hover:border-white/20'
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: currentTheme === 'dark' ? 180 : 0,
          scale: 1
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {currentTheme === 'light' ? (
          <Moon size={20} className="text-[var(--muted)]" />
        ) : (
          <Sun size={20} className="text-[var(--accent)]" />
        )}
      </motion.div>
      
      {/* Indicator dot */}
      <motion.div
        className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--primary)]"
        initial={false}
        animate={{
          opacity: currentTheme === 'dark' ? 1 : 0,
          scale: currentTheme === 'dark' ? 1 : 0.5
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}

export default ThemeToggle