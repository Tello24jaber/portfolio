FILE: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>Talal Jaber - Full-Stack Developer | React, Node.js, AI Solutions</title>
  <meta name="description" content="Full-stack developer specializing in React, Node.js, and AI-powered restaurant tech. Winner of Falling Walls Lab Jordan 2025." />
  <meta name="keywords" content="full-stack developer, React, Node.js, restaurant tech, AI, Talal Jaber" />
  <meta name="author" content="Talal Jaber" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Talal Jaber - Full-Stack Developer" />
  <meta property="og:description" content="Winner of Falling Walls Lab Jordan 2025. Specializing in React, Node.js, and AI restaurant solutions." />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:type" content="website" />
  
  <!-- Preload Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <script>
    // Theme detection before render to prevent flash
    (function() {
      const theme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', theme === 'dark');
    })();
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

FILE: postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

FILE: tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        'primary-600': 'var(--primary-600)',
        accent: 'var(--accent)',
        ring: 'var(--ring)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px rgba(0,0,0,0.35)',
        card: '0 0 0 1px rgba(255,255,255,0.04)',
      },
      borderRadius: {
        '2xl': '1rem'
      },
      animation: {
        'hero-gradient': 'hero-gradient 14s ease infinite',
        'shine': 'shine 2s ease-in-out infinite',
      },
      keyframes: {
        'hero-gradient': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' }
        },
        'shine': {
          '0%': { transform: 'translateX(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) rotate(45deg)' }
        }
      }
    },
  },
  plugins: [],
}
```

FILE: src/main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/base.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

FILE: src/App.jsx
```jsx
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
```

FILE: src/styles/base.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables for Themes */
:root {
  /* Emerald Theme (Default) */
  --bg: #0b0f14;
  --surface: #0f172a;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --primary: #10b981;
  --primary-600: #059669;
  --accent: #22d3ee;
  --ring: #34d399;
}

.dark {
  /* Midnight Theme */
  --bg: #030712;
  --surface: #0b1220;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --primary: #60a5fa;
  --primary-600: #3b82f6;
  --accent: #a78bfa;
  --ring: #60a5fa;
}

/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  transition: background-color 0.18s ease, color 0.18s ease;
  background: var(--bg);
  color: var(--text);
}

/* Skip to content link for accessibility */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary);
  color: black;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  z-index: 9999;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-600);
}

/* Component Utilities */
@layer components {
  .btn-primary {
    @apply inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-black hover:bg-[var(--primary-600)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-black transition-all duration-200;
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[var(--text)] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-black transition-all duration-200;
  }

  .card {
    @apply rounded-2xl border border-white/10 bg-[var(--surface)] shadow-card backdrop-blur-sm;
  }

  .badge {
    @apply rounded-lg bg-white/5 px-2.5 py-1 text-xs text-[var(--text)] ring-1 ring-white/10;
  }

  .container-custom {
    @apply mx-auto max-w-7xl px-6 lg:px-8;
  }

  .section-padding {
    @apply py-16 sm:py-20 lg:py-28;
  }
}

/* Hero Background Gradient */
.hero-gradient {
  background: linear-gradient(135deg, var(--bg) 0%, rgba(16, 185, 129, 0.1) 50%, var(--bg) 100%);
  animation: hero-gradient 14s ease infinite;
}

/* Shine Effect for Cards */
.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%) rotate(45deg);
  transition: transform 0.6s;
}

.shine-effect:hover::after {
  transform: translateX(100%) rotate(45deg);
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }
}

/* Focus styles for better accessibility */
.focus-ring {
  @apply focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none;
}
```

FILE: src/lib/motion.js
```js
// Global motion configurations and variants

// Timing & Easing defaults
export const defaultDuration = 0.6
export const defaultEase = [0.22, 1, 0.36, 1]
export const staggerDelay = 0.08
export const sectionStagger = 0.12

// Spring configuration for hover effects
export const hoverSpring = {
  type: 'spring',
  stiffness: 320,
  damping: 24
}

// Utility to check for reduced motion preference
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Animation Variants
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: shouldReduceMotion() ? 0.01 : defaultDuration, 
      ease: defaultEase 
    } 
  }
}

export const riseIn = {
  hidden: { 
    opacity: 0, 
    y: shouldReduceMotion() ? 0 : 16 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: shouldReduceMotion() ? 0.01 : defaultDuration, 
      ease: defaultEase 
    } 
  }
}

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: shouldReduceMotion() ? 1 : 0.98 
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: shouldReduceMotion() ? 0.01 : 0.5 
    } 
  }
}

export const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: shouldReduceMotion() ? 0 : staggerDelay
    }
  }
}

export const hoverLift = shouldReduceMotion() ? {} : {
  whileHover: {
    y: -4,
    scale: 1.02,
    transition: hoverSpring
  }
}

export const press = shouldReduceMotion() ? {} : {
  whileTap: { scale: 0.98 }
}

// Section entrance variants
export const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: shouldReduceMotion() ? 0 : sectionStagger
    }
  }
}

// Timeline draw animation
export const timelineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: shouldReduceMotion() ? 0.01 : 1.5, ease: "easeInOut" },
      opacity: { duration: shouldReduceMotion() ? 0.01 : 0.3 }
    }
  }
}

// Route transition variants
export const routeVariants = {
  initial: { opacity: 0, y: shouldReduceMotion() ? 0 : 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: shouldReduceMotion() ? 0 : -20 }
}

// Modal/Lightbox variants
export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: shouldReduceMotion() ? 1 : 0.8
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: shouldReduceMotion() ? 0.01 : 0.3,
      ease: defaultEase
    }
  },
  exit: {
    opacity: 0,
    scale: shouldReduceMotion() ? 1 : 0.8,
    transition: {
      duration: shouldReduceMotion() ? 0.01 : 0.2
    }
  }
}

// Backdrop variants for modals
export const backdropVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: shouldReduceMotion() ? 0.01 : 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: shouldReduceMotion() ? 0.01 : 0.2 }
  }
}
```

FILE: src/lib/utils.js
```js
import { clsx } from 'clsx'

// Utility function for conditional class names
export function cn(...inputs) {
  return clsx(inputs)
}

// Check if user prefers reduced motion
export function shouldReduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Format date utility
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

// Smooth scroll to element
export function scrollToElement(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: shouldReduceMotion() ? 'auto' : 'smooth',
      block: 'start'
    })
  }
}

// Copy text to clipboard
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    } catch (fallbackErr) {
      document.body.removeChild(textArea)
      return false
    }
  }
}

// Debounce function for search/filter inputs
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for scroll events
export function throttle(func, limit) {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Generate slug from string
export function generateSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// Check if element is in viewport
export function isInViewport(element, offset = 0) {
  if (!element) return false
  
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Animate counter from 0 to target value
export function animateCounter(element, target, duration = 800) {
  if (!element || shouldReduceMotion()) {
    element.textContent = target
    return
  }

  const start = 0
  const increment = target / (duration / 16) // 60fps
  let current = start
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current)
  }, 16)
}

// Get theme preference
export function getThemePreference() {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme')
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Set theme
export function setTheme(theme) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme)
  }
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

// Toggle theme
export function toggleTheme() {
  const currentTheme = getThemePreference()
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  return newTheme
}

// Filter projects by category and search term
export function filterProjects(projects, category = 'all', searchTerm = '') {
  return projects.filter(project => {
    const matchesCategory = category === 'all' || project.tags.some(tag => 
      tag.toLowerCase() === category.toLowerCase()
    )
    
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })
}

// Get unique tags from projects
export function getProjectTags(projects) {
  const allTags = projects.reduce((tags, project) => {
    return tags.concat(project.tags)
  }, [])
  
  return [...new Set(allTags)].sort()
}

// Validate email format
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Format phone number for WhatsApp
export function formatWhatsAppNumber(number) {
  // Remove all non-digit characters
  const cleaned = number.replace(/\D/g, '')
  
  // Add country code if missing (assuming Jordan +962)
  if (!cleaned.startsWith('962')) {
    return '962' + cleaned
  }
  
  return cleaned
}

// Get contrast color for background
export function getContrastColor(hexColor) {
  // Convert hex to RGB
  const r = parseInt(hexColor.substr(1, 2), 16)
  const g = parseInt(hexColor.substr(3, 2), 16)
  const b = parseInt(hexColor.substr(5, 2), 16)
  
  // Calculate brightness
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000
  
  // Return black or white based on brightness
  return brightness > 128 ? '#000000' : '#ffffff'
}
```

FILE: src/content/site.js
```js
export const siteConfig = {
  name: 'Talal Jaber',
  title: 'Full-Stack Developer',
  location: 'Jordan',
  shortBio: 'Winner of Falling Walls Lab Jordan 2025. Building intelligent restaurant tech and modern web solutions.',
  fullBio: 'I\'m a passionate full-stack developer specializing in React, Node.js, and AI-powered solutions. Currently focusing on restaurant technology and smart business systems. Winner of Falling Walls Lab Jordan 2025, representing Jordan at the Global Finale in Berlin.',
  
  contact: {
    email: 't.jaber2@gju.edu.jo',
    phone: '+962790489125',
    whatsapp: '962790489125'
  },
  
  socials: {
    github: 'https://github.com/Tello24jaber',
    linkedin: 'https://www.linkedin.com/in/talal-jaber-02132b2b9',
    email: 'mailto:t.jaber2@gju.edu.jo',
    whatsapp: 'https://wa.me/962790489125'
  },
  
  stats: [
    { label: 'Projects Completed', value: 10, suffix: '+' },
    { label: 'Technologies Mastered', value: 15, suffix: '+' },
    { label: 'Years of Experience', value: 3, suffix: '+' },
    { label: 'Happy Clients', value: 8, suffix: '+' }
  ],
  
  seo: {
    title: 'Talal Jaber - Full-Stack Developer | React, Node.js, AI Solutions',
    description: 'Full-stack developer specializing in React, Node.js, and AI-powered restaurant tech. Winner of Falling Walls Lab Jordan 2025.',
    keywords: 'full-stack developer, React, Node.js, restaurant tech, AI, Talal Jaber, web development, JavaScript',
    url: 'talalportfolio.netlify.app',
    image: '/og-image.png'
  }
}
```

FILE: src/content/achievements.js
```js
export const achievements = [
  {
    id: 'falling-walls-jo-2025',
    title: 'Winner – Falling Walls Lab Jordan',
    organization: 'Falling Walls',
    date: '2025',
    description: 'Selected to represent Jordan at the Global Finale in Berlin with DineLink - an AI-powered restaurant management platform.',
    details: 'Competed against innovative startups and research projects across Jordan. DineLink was recognized for its potential to revolutionize restaurant operations through AI assistance and real-time analytics.',
    link: '[[ADD LINK]]',
    icon: 'Trophy',
    image: '/images/achievements/falling-walls.jpg',
    type: 'award',
    featured: true
  },
  {
    id: 'representing-jordan-berlin-2025',
    title: 'Representing Jordan – Global Finale, Berlin',
    organization: 'Falling Walls',
    date: '2025',
    description: 'Showcasing DineLink on the global stage at the Falling Walls Lab Global Finale in Berlin.',
    details: 'One of 100 selected participants worldwide to present breakthrough innovations that have the potential to change the world.',
    link: '[[ADD LINK]]',
    icon: 'Flag',
    image: '/images/achievements/berlin-2025.jpg',
    type: 'recognition',
    featured: true
  },
  {
    id: 'gju-mentorship-2024',
    title: 'GJU Mentorship Program Participant',
    organization: 'German Jordanian University',
    date: '2024',
    description: 'Selected for the prestigious mentorship program focusing on entrepreneurship and technology innovation.',
    details: 'Worked closely with industry mentors to develop DineLink and gain insights into startup ecosystem and business development.',
    link: null,
    icon: 'GraduationCap',
    image: '/images/achievements/gju-mentorship.jpg',
    type: 'program',
    featured: false
  },
  {
    id: 'dinelink-pilot-success',
    title: 'DineLink Successful Pilot Testing',
    organization: 'DineLink Project',
    date: '2024',
    description: 'Successfully completed pilot testing of DineLink platform with multiple restaurant partners.',
    details: 'Achieved significant improvements in order processing efficiency and customer satisfaction scores during the testing phase.',
    link: null,
    icon: 'CheckCircle',
    image: '/images/achievements/pilot-testing.jpg',
    type: 'milestone',
    featured: false
  }
]
```

FILE: src/content/skills.js
```js
export const skills = [
  // Frontend Technologies
  {
    name: 'HTML5',
    level: 5,
    category: 'Frontend',
    keywords: ['markup', 'semantic', 'accessibility'],
    icon: 'FileCode2',
    description: 'Semantic markup and modern HTML5 features'
  },
  {
    name: 'CSS3',
    level: 5,
    category: 'Frontend',
    keywords: ['styling', 'responsive', 'animations'],
    icon: 'Palette',
    description: 'Advanced CSS including Grid, Flexbox, and animations'
  },
  {
    name: 'JavaScript',
    level: 5,
    category: 'Frontend',
    keywords: ['es6', 'async', 'dom'],
    icon: 'Code2',
    description: 'Modern JavaScript ES6+ and DOM manipulation'
  },
  {
    name: 'React.js',
    level: 5,
    category: 'Frontend',
    keywords: ['components', 'hooks', 'state'],
    icon: 'Atom',
    description: 'Advanced React with hooks, context, and modern patterns'
  },
  {
    name: 'Next.js',
    level: 4,
    category: 'Frontend',
    keywords: ['ssr', 'routing', 'optimization'],
    icon: 'Boxes',
    description: 'Server-side rendering and static site generation'
  },
  {
    name: 'Tailwind CSS',
    level: 5,
    category: 'Frontend',
    keywords: ['utility', 'responsive', 'design'],
    icon: 'Wind',
    description: 'Utility-first CSS framework for rapid UI development'
  },
  {
    name: 'Vite',
    level: 4,
    category: 'Frontend',
    keywords: ['build', 'dev-tools', 'fast'],
    icon: 'Bolt',
    description: 'Lightning-fast build tool for modern web projects'
  },

  // Backend Technologies
  {
    name: 'Node.js',
    level: 4,
    category: 'Backend',
    keywords: ['runtime', 'server', 'api'],
    icon: 'Server',
    description: 'Server-side JavaScript runtime and API development'
  },
  {
    name: 'Express.js',
    level: 4,
    category: 'Backend',
    keywords: ['framework', 'middleware', 'routing'],
    icon: 'Route',
    description: 'Fast and minimalist web framework for Node.js'
  },
  {
    name: 'Java',
    level: 4,
    category: 'Backend',
    keywords: ['oop', 'enterprise', 'robust'],
    icon: 'Coffee',
    description: 'Object-oriented programming and enterprise applications'
  },
  {
    name: 'Spring Boot',
    level: 3,
    category: 'Backend',
    keywords: ['framework', 'microservices', 'java'],
    icon: 'Leaf',
    description: 'Java framework for building enterprise applications'
  },

  // Database Technologies
  {
    name: 'Supabase',
    level: 4,
    category: 'Database',
    keywords: ['postgresql', 'realtime', 'auth'],
    icon: 'Database',
    description: 'Open-source Firebase alternative with PostgreSQL'
  },
  {
    name: 'PostgreSQL',
    level: 4,
    category: 'Database',
    keywords: ['relational', 'sql', 'advanced'],
    icon: 'Cylinder',
    description: 'Advanced relational database with powerful features'
  },
  {
    name: 'SQL',
    level: 4,
    category: 'Database',
    keywords: ['queries', 'joins', 'optimization'],
    icon: 'Table2',
    description: 'Complex queries, joins, and database optimization'
  },
  {
    name: 'Google Sheets API',
    level: 4,
    category: 'Database',
    keywords: ['integration', 'automation', 'data'],
    icon: 'Sheet',
    description: 'Integration and automation with Google Sheets'
  },

  // DevOps & Deployment
  {
    name: 'CI/CD',
    level: 3,
    category: 'DevOps',
    keywords: ['automation', 'pipeline', 'deployment'],
    icon: 'Workflow',
    description: 'Continuous integration and deployment pipelines'
  },
  {
    name: 'Deployment',
    level: 4,
    category: 'DevOps',
    keywords: ['netlify', 'vercel', 'render'],
    icon: 'Rocket',
    description: 'Cloud deployment on Netlify, Vercel, and Render'
  },
  {
    name: 'Git & GitHub',
    level: 4,
    category: 'DevOps',
    keywords: ['version-control', 'collaboration', 'workflow'],
    icon: 'GitBranch',
    description: 'Version control and collaborative development workflows'
  },

  // APIs & Integration
  {
    name: 'REST APIs',
    level: 4,
    category: 'APIs',
    keywords: ['http', 'json', 'integration'],
    icon: 'Network',
    description: 'RESTful API design, development, and integration'
  },
  {
    name: 'Google Apps Script',
    level: 3,
    category: 'APIs',
    keywords: ['automation', 'google', 'scripting'],
    icon: 'Code',
    description: 'Automation and custom functions for Google Workspace'
  },

  // Emerging Technologies
  {
    name: 'AI Integration',
    level: 3,
    category: 'AI/ML',
    keywords: ['chatgpt', 'automation', 'smart'],
    icon: 'Bot',
    description: 'Integration of AI services for smart applications'
  },
  {
    name: 'Progressive Web Apps',
    level: 3,
    category: 'Frontend',
    keywords: ['pwa', 'offline', 'mobile'],
    icon: 'Smartphone',
    description: 'Building app-like web experiences with PWA features'
  }
]

// Utility functions for working with skills
export function getSkillsByCategory(category) {
  return skills.filter(skill => skill.category === category)
}

export function getSkillCategories() {
  return [...new Set(skills.map(skill => skill.category))]
}

export function getTopSkills(limit = 8) {
  return skills
    .sort((a, b) => b.level - a.level)
    .slice(0, limit)
}
```

FILE: src/content/projects.js
```js
export const projects = [
  {
    id: 'dinelink',
    title: 'DineLink – Smart Restaurant Management Platform',
    shortDescription: '100% browser-based QR-accessible restaurant management with AI assistance',
    description: 'A comprehensive restaurant management platform that transforms traditional dining operations into intelligent, data-driven experiences. Features AI-powered ordering assistance, real-time staff analytics, and business intelligence tools.',
    detailedDescription: `DineLink revolutionizes restaurant operations by combining modern web technology with artificial intelligence. The platform offers a complete solution for both customers and restaurant staff, accessible entirely through web browsers without requiring app downloads.

The system features an AI Smart Ordering Assistant that guides customers through menu selections, a real-time staff heatmap showing service efficiency, and an AI Business Advisor providing actionable insights. The platform maintains real-time control over all operations with a comprehensive feedback loop system.

Built with scalability in mind, DineLink can handle multiple restaurant locations while providing centralized management and analytics. The QR code-based access ensures seamless customer onboarding while the progressive web app architecture delivers native app-like performance.`,
    
    features: [
      'AI Smart Ordering Assistant for personalized recommendations',
      'Real-time staff heatmaps and performance analytics',
      'AI Business Advisor with actionable insights',
      'Real-time operational control and monitoring',
      'Comprehensive feedback loop system',
      'QR code-based customer access',
      'Mobile-optimized progressive web app',
      'Multi-location management capabilities'
    ],
    
    technologies: ['React', 'Tailwind', 'Node.js', 'Express', 'Supabase', 'AI/ML', 'PWA'],
    category: 'Full-Stack',
    status: 'Active',
    year: '2025',
    
    impact: {
      recognition: 'Winner of Falling Walls Lab Jordan 2025',
      achievement: 'Selected to represent Jordan at Global Finale in Berlin',
      program: 'Developed through GJU Mentorship Program',
      testing: 'Successfully pilot tested with restaurant partners'
    },
    
    vision: 'Turn blind, outdated restaurant operations into intelligent, data-driven hospitality experiences that delight customers and empower staff.',
    
    links: {
      demo: '[[ADD DEMO LINK]]',
      repo: '[[ADD REPO LINK]]',
      live: '[[ADD LIVE LINK]]'
    },
    
    images: {
      cover: '/images/projects/dinelink-cover.jpg',
      gallery: [
        '/images/projects/dinelink-1.jpg',
        '/images/projects/dinelink-2.jpg',
        '/images/projects/dinelink-3.jpg',
        '/images/projects/dinelink-4.jpg'
      ]
    },
    
    role: 'Lead Full-Stack Developer & Product Designer',
    team: 'Solo project with mentorship',
    duration: '6 months',
    
    challenges: [
      'Implementing real-time analytics without performance impact',
      'Creating intuitive AI interaction patterns',
      'Ensuring reliable QR code-based access across devices',
      'Balancing feature richness with simplicity'
    ],
    
    solutions: [
      'Optimized database queries and caching strategies',
      'Designed conversational AI interface with fallback options',
      'Implemented robust QR code generation with error correction',
      'Created progressive feature disclosure in UI design'
    ],
    
    featured: true,
    priority: 1
  },
  
  {
    id: 'onesalt',
    title: 'OneSalt – Online Clothing Store',
    shortDescription: 'Full-stack e-commerce platform for Jordanian fashion brand',
    description: 'Complete e-commerce solution featuring customer storefront, admin management system, and secure backend API. Built for a Jordanian clothing brand with modern design and seamless shopping experience.',
    detailedDescription: `OneSalt represents a complete e-commerce ecosystem built from the ground up for a Jordanian clothing brand. The project encompasses three main components: a customer-facing storefront, a comprehensive admin panel, and a robust backend API.

The storefront provides an elegant shopping experience with product catalog browsing, detailed product pages, shopping cart functionality, secure checkout process, and order confirmation flow. The admin panel empowers store managers with product management, order processing, inventory tracking, and customer management capabilities.

The backend API ensures secure data handling, user authentication, order processing, and payment integration. The entire system is deployed with CI/CD pipelines for seamless updates and maintenance.`,
    
    features: [
      'Modern responsive product catalog',
      'Detailed product pages with image galleries',
      'Shopping cart with persistent storage',
      'Secure checkout and payment processing',
      'Admin dashboard for product management',
      'Order management and tracking system',
      'Customer management and analytics',
      'Inventory tracking and alerts',
      'CI/CD deployment pipeline'
    ],
    
    technologies: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'Supabase', 'CI/CD'],
    category: 'E-Commerce',
    status: 'Deployed',
    year: '2024',
    
    deployment: {
      frontend: 'Netlify',
      backend: 'Render',
      database: 'Supabase',
      cicd: 'GitHub Actions'
    },
    
    links: {
      live: '[[ADD LIVE LINK]]',
      repo: '[[ADD REPO LINK]]',
      admin: '[[ADD ADMIN LINK]]'
    },
    
    images: {
      cover: '/images/projects/onesalt-cover.jpg',
      gallery: [
        '/images/projects/onesalt-1.jpg',
        '/images/projects/onesalt-2.jpg',
        '/images/projects/onesalt-3.jpg',
        '/images/projects/onesalt-4.jpg'
      ]
    },
    
    role: 'Full-Stack Developer',
    team: 'Solo project',
    duration: '4 months',
    
    challenges: [
      'Implementing secure payment processing',
      'Creating intuitive admin interface',
      'Ensuring fast loading times for product images',
      'Managing complex product variants and inventory'
    ],
    
    solutions: [
      'Integrated trusted payment gateways with encryption',
      'Designed user-centered admin workflow',
      'Implemented image optimization and lazy loading',
      'Created flexible product variant system'
    ],
    
    featured: true,
    priority: 2
  },
  
  {
    id: 'just-cook',
    title: 'Just Cook – Smart Restaurant Ordering System',
    shortDescription: 'Browser-based ordering system with Google Sheets backend',
    description: 'Innovative restaurant ordering and management system using Google Sheets as a database backend. Features real-time order tracking, admin dashboard, and comprehensive order management tools.',
    detailedDescription: `Just Cook demonstrates innovative use of Google Sheets as a backend database for a fully functional restaurant ordering system. This approach provides an accessible, cost-effective solution while maintaining professional functionality.

The system features a customer-facing ordering interface that's completely browser-based, requiring no app installation. Customers can browse the menu, customize orders, and track their order status in real-time. The admin dashboard provides comprehensive order management with search, filtering, status updates, and reporting capabilities.

Integration with Google Sheets API, SheetDB, and Google Apps Script creates a powerful backend system that's both flexible and maintainable. The solution includes CSV export functionality and print-ready order formats for kitchen operations.`,
    
    features: [
      'Browser-based customer ordering interface',
      'Real-time order tracking and updates',
      'Admin dashboard with comprehensive management',
      'Advanced search and filtering capabilities',
      'Order status management and notifications',
      'CSV export for reporting and analysis',
      'Print-ready order formats for kitchen',
      'Google Sheets integration for data management',
      'Automated order numbering and timestamps'
    ],
    
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Sheets API', 'Apps Script', 'SheetDB'],
    category: 'Restaurant Tech',
    status: 'Deployed',
    year: '2023',
    
    innovation: {
      approach: 'Using Google Sheets as a database alternative',
      benefit: 'Cost-effective solution with familiar interface for staff',
      scalability: 'Easy data management and reporting through Sheets'
    },
    
    links: {
      live: '[[ADD LIVE LINK]]',
      demo: '[[ADD DEMO LINK]]',
      repo: '[[ADD REPO LINK]]'
    },
    
    images: {
      cover: '/images/projects/justcook-cover.jpg',
      gallery: [
        '/images/projects/justcook-1.jpg',
        '/images/projects/justcook-2.jpg',
        '/images/projects/justcook-3.jpg'
      ]
    },
    
    role: 'Full-Stack Developer & Systems Designer',
    team: 'Solo project',
    duration: '3 months',
    
    challenges: [
      'Working within Google Sheets API limitations',
      'Ensuring data consistency without traditional database features',
      'Creating responsive interface without framework',
      'Managing real-time updates through Sheets backend'
    ],
    
    solutions: [
      'Implemented clever caching and batching strategies',
      'Created data validation layers in Apps Script',
      'Used modern CSS Grid and Flexbox for responsiveness',
      'Developed polling system for near real-time updates'
    ],
    
    featured: true,
    priority: 3
  }
]

// Utility functions
export function getFeaturedProjects() {
  return projects
    .filter(project => project.featured)
    .sort((a, b) => a.priority - b.priority)
}

export function getProjectById(id) {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category) {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export function getProjectCategories() {
  return [...new Set(projects.map(project => project.category))]
}

export function getProjectTags() {
  const allTags = projects.reduce((tags, project) => {
    return tags.concat(project.technologies)
  }, [])
  return [...new Set(allTags)].sort()
}

export function searchProjects(query) {
  const searchTerm = query.toLowerCase()
  return projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
  )
}
```

FILE: src/content/services.js
```js
export const services = [
  {
    id: 'custom-web-development',
    title: 'Custom Web Development',
    shortDescription: 'Modern, responsive websites built with React and Next.js',
    description: 'I create custom web applications using cutting-edge technologies like React, Next.js, and Tailwind CSS. Every project is built with performance, SEO, and user experience in mind.',
    
    icon: 'Code2',
    
    features: [
      'React & Next.js applications',
      'Responsive design with Tailwind CSS',
      'Lightning-fast Vite build system',
      'SEO optimization and meta management',
      'Progressive Web App capabilities',
      'Modern JavaScript ES6+ features',
      'Component-based architecture',
      'Performance optimization'
    ],
    
    technologies: ['React', 'Next.js', 'Tailwind', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
    
    deliverables: [
      'Fully responsive web application',
      'Source code with documentation',
      'Performance optimization report',
      'SEO setup and configuration',
      'Deployment and hosting setup',
      'Post-launch support and maintenance'
    ],
    
    timeline: '2-8 weeks depending on complexity',
    startingPrice: 'From $1,500',
    
    processSteps: [
      'Discovery and requirements gathering',
      'Design mockups and user flow planning',
      'Development with regular progress updates',
      'Testing across devices and browsers',
      'Deployment and launch',
      'Training and handover'
    ],
    
    idealFor: [
      'Businesses needing modern web presence',
      'Startups launching digital products',
      'Companies upgrading legacy websites',
      'Organizations requiring custom functionality'
    ]
  },
  
  {
    id: 'ecommerce-solutions',
    title: 'E-Commerce Solutions',
    shortDescription: 'Complete online stores with product catalogs and payment processing',
    description: 'Full-featured e-commerce platforms with product management, secure checkout, payment integration, and admin dashboards. Perfect for businesses ready to sell online.',
    
    icon: 'ShoppingCart',
    
    features: [
      'Product catalog with search and filters',
      'Shopping cart and wishlist functionality',
      'Secure checkout process',
      'Payment gateway integration',
      'Admin dashboard for management',
      'Order tracking and management',
      'Inventory management system',
      'Customer account management',
      'Analytics and reporting'
    ],
    
    technologies: ['React', 'Node.js', 'Supabase', 'Stripe/PayPal', 'Tailwind', 'Express'],
    
    deliverables: [
      'Complete e-commerce website',
      'Admin panel for store management',
      'Payment processing setup',
      'Product and order management system',
      'Customer management tools',
      'Analytics dashboard',
      'Mobile-responsive design',
      'Training materials and documentation'
    ],
    
    timeline: '6-12 weeks for complete solution',
    startingPrice: 'From $3,500',
    
    processSteps: [
      'Business requirements and feature planning',
      'Design and user experience wireframing',
      'Backend API and database development',
      'Frontend store development',
      'Payment integration and testing',
      'Admin panel development',
      'Testing and quality assurance',
      'Launch and merchant training'
    ],
    
    idealFor: [
      'Retail businesses going online',
      'Brands launching direct-to-consumer',
      'Service providers with products',
      'Existing stores needing upgrades'
    ]
  },
  
  {
    id: 'restaurant-tech-systems',
    title: 'Restaurant Tech Systems',
    shortDescription: 'Smart ordering systems and operational dashboards for restaurants',
    description: 'Specialized technology solutions for restaurants including smart ordering systems, staff analytics, AI assistants, and operational dashboards to modernize restaurant operations.',
    
    icon: 'UtensilsCrossed',
    
    features: [
      'QR code-based ordering systems',
      'Real-time order tracking',
      'Staff performance analytics',
      'AI-powered ordering assistance',
      'Kitchen display systems',
      'Customer feedback collection',
      'Menu management tools',
      'Sales analytics and reporting',
      'Multi-location management'
    ],
    
    technologies: ['React', 'Node.js', 'Supabase', 'AI/ML APIs', 'PWA', 'Real-time WebSockets'],
    
    deliverables: [
      'Customer ordering interface',
      'Kitchen management dashboard',
      'Staff analytics platform',
      'Menu management system',
      'Real-time order tracking',
      'Performance reporting tools',
      'QR code generation system',
      'Training and implementation support'
    ],
    
    timeline: '8-16 weeks for complete system',
    startingPrice: 'From $5,000',
    
    processSteps: [
      'Restaurant operations analysis',
      'System requirements and workflow mapping',
      'Custom solution architecture design',
      'Core platform development',
      'AI integration and testing',
      'Staff training and pilot testing',
      'Full deployment and optimization',
      'Ongoing support and improvements'
    ],
    
    idealFor: [
      'Restaurants modernizing operations',
      'Restaurant chains needing consistency',
      'Food service businesses seeking efficiency',
      'Establishments wanting data-driven insights'
    ],
    
    caseStudy: 'DineLink - Winner of Falling Walls Lab Jordan 2025'
  },
  
  {
    id: 'backend-apis',
    title: 'Backend & APIs',
    shortDescription: 'Robust server-side solutions with RESTful APIs and database design',
    description: 'Scalable backend systems with RESTful APIs, database design, authentication, and third-party integrations. Built with Node.js, Express, and modern database solutions.',
    
    icon: 'Server',
    
    features: [
      'RESTful API development',
      'Database design and optimization',
      'User authentication and authorization',
      'Third-party API integrations',
      'Data validation and security',
      'Real-time features with WebSockets',
      'Automated testing and documentation',
      'Performance monitoring and logging'
    ],
    
    technologies: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'JWT', 'REST APIs'],
    
    deliverables: [
      'Complete backend API system',
      'Database schema and setup',
      'Authentication system',
      'API documentation',
      'Security implementation',
      'Testing suite',
      'Deployment configuration',
      'Monitoring and logging setup'
    ],
    
    timeline: '4-10 weeks depending on complexity',
    startingPrice: 'From $2,500',
    
    processSteps: [
      'Requirements gathering and API planning',
      'Database design and architecture',
      'Core API development',
      'Authentication and security implementation',
      'Integration with third-party services',
      'Testing and documentation',
      'Deployment and monitoring setup',
      'Performance optimization'
    ],
    
    idealFor: [
      'Applications needing scalable backends',
      'Mobile apps requiring API services',
      'Businesses with complex data needs',
      'Companies integrating multiple systems'
    ]
  },
  
  {
    id: 'devops-deployment',
    title: 'DevOps & Deployment',
    shortDescription: 'CI/CD pipelines and cloud deployment solutions',
    description: 'Streamlined deployment processes with CI/CD pipelines, cloud hosting setup, monitoring, and automated workflows for reliable and efficient application delivery.',
    
    icon: 'Rocket',
    
    features: [
      'CI/CD pipeline setup',
      'Cloud hosting deployment',
      'Automated testing workflows',
      'Environment configuration',
      'Performance monitoring',
      'Error tracking and logging',
      'Backup and recovery systems',
      'Security scanning and updates'
    ],
    
    technologies: ['GitHub Actions', 'Netlify', 'Vercel', 'Render', 'Docker', 'Git'],
    
    deliverables: [
      'Automated deployment pipeline',
      'Production environment setup',
      'Staging and development environments',
      'Monitoring and alerting system',
      'Backup and recovery procedures',
      'Security configuration',
      'Documentation and runbooks',
      'Team training on workflows'
    ],
    
    timeline: '2-6 weeks for complete setup',
    startingPrice: 'From $1,200',
    
    processSteps: [
      'Current infrastructure assessment',
      'CI/CD strategy and tool selection',
      'Pipeline development and testing',
      'Environment setup and configuration',
      'Monitoring and logging implementation',
      'Security and backup configuration',
      'Team training and handover',
      'Ongoing optimization and support'
    ],
    
    idealFor: [
      'Teams wanting automated deployments',
      'Growing applications needing scalability',
      'Companies improving development workflows',
      'Organizations requiring reliable operations'
    ]
  },
  
  {
    id: 'consulting-workflow-engineering',
    title: 'Consulting & Workflow Engineering',
    shortDescription: 'Process optimization and custom automation solutions',
    description: 'Strategic consulting to optimize business processes, automate workflows, and implement custom solutions that improve efficiency and reduce manual work.',
    
    icon: 'Workflow',
    
    features: [
      'Business process analysis',
      'Workflow automation design',
      'Custom integration solutions',
      'Data flow optimization',
      'System integration planning',
      'Performance improvement strategies',
      'Technology stack recommendations',
      'Training and change management'
    ],
    
    technologies: ['Google Apps Script', 'Zapier', 'Custom APIs', 'Database Integration', 'Various Platforms'],
    
    deliverables: [
      'Process analysis and recommendations',
      'Custom automation solutions',
      'Integration implementations',
      'Workflow documentation',
      'Team training materials',
      'Performance improvement metrics',
      'Maintenance and support plan',
      'Future roadmap and recommendations'
    ],
    
    timeline: '1-8 weeks depending on scope',
    startingPrice: 'From $800',
    
    processSteps: [
      'Current process assessment',
      'Pain point identification and analysis',
      'Solution design and recommendations',
      'Custom automation development',
      'Testing and validation',
      'Implementation and deployment',
      'Team training and adoption',
      'Monitoring and optimization'
    ],
    
    idealFor: [
      'Businesses with repetitive manual processes',
      'Teams needing better data flows',
      'Organizations seeking efficiency gains',
      'Companies wanting to leverage automation'
    ]
  }
]

// Utility functions
export function getServiceById(id) {
  return services.find(service => service.id === id)
}

export function getFeaturedServices(limit = 4) {
  return services.slice(0, limit)
}

export function getServicesByCategory(category) {
  // Could add categories if needed in the future
  return services
}

export function getServiceTechnologies() {
  const allTech = services.reduce((tech, service) => {
    return tech.concat(service.technologies)
  }, [])
  return [...new Set(allTech)].sort()
}
```

FILE: src/components/Section.jsx
```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'
import { sectionVariants } from '../lib/motion'

const Section = ({ 
  children, 
  className = '',
  containerClassName = '',
  id,
  background = 'default',
  padding = 'default',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    small: 'py-8 sm:py-12',
    default: 'py-16 sm:py-20 lg:py-28',
    large: 'py-20 sm:py-32 lg:py-40'
  }

  const backgroundClasses = {
    default: '',
    muted: 'bg-white/2',
    gradient: 'bg-gradient-to-b from-transparent via-white/2 to-transparent'
  }

  return (
    <motion.section
      id={id}
      className={cn(
        'relative',
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      <div className={cn('container-custom', containerClassName)}>
        {children}
      </div>
    </motion.section>
  )
}

export default Section
```

FILE: src/components/Navbar.jsx
```jsx
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
```

FILE: src/components/ThemeToggle.jsx
```jsx
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
```

FILE: src/components/Hero.jsx
```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerWrap, riseIn, fadeIn, hoverLift, press } from '../lib/motion'
import { siteConfig } from '../content/site'
import { cn } from '../lib/utils'

const Hero = () => {
  const { name, title, location, shortBio, socials } = siteConfig

  return (
    <section id="main-content" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Greeting */}
          <motion.div variants={riseIn} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-sm text-[var(--muted)]">Available for freelance</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={riseIn}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Hello, I'm{' '}
            <span className="text-[var(--primary)]">{name}</span>
            <br />
            <span className="text-[var(--text)]">{title}</span>
          </motion.h1>

          {/* Location */}
          <motion.div 
            variants={riseIn}
            className="flex items-center gap-2 mb-6 text-[var(--muted)]"
          >
            <MapPin size={18} />
            <span>{location}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={riseIn}
            className="text-lg lg:text-xl text-[var(--muted)] max-w-2xl mb-8 leading-relaxed"
          >
            {shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={riseIn}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.div {...hoverLift} {...press}>
              <Link
                to="/projects"
                className="btn-primary group"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div {...hoverLift} {...press}>
              <a
                href="#" // Add your CV/resume link here
                className="btn-secondary group"
                download
              >
                Download CV
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={riseIn}
            className="flex items-center gap-4"
          >
            <span className="text-sm text-[var(--muted)]">Connect with me:</span>
            <div className="flex items-center gap-3">
              <motion.a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] hover:bg-white/5 transition-all duration-200 focus-ring"
                {...hoverLift}
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </motion.a>
              
              <motion.a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] hover:bg-white/5 transition-all duration-200 focus-ring"
                {...hoverLift}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a
                href={socials.email}
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] hover:bg-white/5 transition-all duration-200 focus-ring"
                {...hoverLift}
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[var(--primary)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
```

FILE: src/components/Stat.jsx
```jsx
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { animateCounter } from '../lib/utils'
import { riseIn } from '../lib/motion'

const Stat = ({ value, suffix = '', label, delay = 0 }) => {
  const ref = useRef(null)
  const countRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated && countRef.current) {
      animateCounter(countRef.current, value)
      setHasAnimated(true)
    }
  }, [isInView, value, hasAnimated])

  return (
    <motion.div
      ref={ref}
      variants={riseIn}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ delay }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-2">
        <span ref={countRef}>0</span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-[var(--muted)] font-medium">
        {label}
      </div>
    </motion.div>
  )
}

export default Stat
```

FILE: src/components/SkillsCloud.jsx
```jsx
import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { riseIn, hoverLift, staggerWrap } from '../lib/motion'
import { cn } from '../lib/utils'

const SkillsCloud = ({ skills, showLevel = true, layout = 'grid' }) => {
  const layouts = {
    grid: 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3',
    flex: 'flex flex-wrap gap-3',
    compact: 'flex flex-wrap gap-2'
  }

  const getLevelColor = (level) => {
    if (level >= 5) return 'text-[var(--primary)] ring-[var(--primary)]/20'
    if (level >= 4) return 'text-[var(--accent)] ring-[var(--accent)]/20'
    if (level >= 3) return 'text-blue-400 ring-blue-400/20'
    if (level >= 2) return 'text-yellow-400 ring-yellow-400/20'
    return 'text-[var(--muted)] ring-white/10'
  }

  const getLevelBars = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={cn(
          'h-1 w-full rounded-full transition-all duration-300',
          i < level ? 'bg-[var(--primary)]' : 'bg-white/10'
        )}
      />
    ))
  }

  return (
    <motion.div
      variants={staggerWrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={layouts[layout]}
    >
      {skills.map((skill, index) => {
        const IconComponent = Icons[skill.icon] || Icons.Code2

        return (
          <motion.div
            key={skill.name}
            variants={riseIn}
            className={cn(
              'group relative',
              layout === 'compact' ? 'inline-flex' : 'flex flex-col'
            )}
          >
            <motion.div
              {...hoverLift}
              className={cn(
                'relative overflow-hidden rounded-xl transition-all duration-300',
                'border border-white/10 bg-white/5 backdrop-blur-sm',
                'hover:bg-white/10 hover:border-white/20 hover:shadow-lg',
                'focus-within:ring-2 focus-within:ring-[var(--ring)] focus-within:ring-offset-2 focus-within:ring-offset-black',
                layout === 'compact' 
                  ? 'px-3 py-2 flex items-center gap-2' 
                  : 'p-4 text-center h-full'
              )}
            >
              {/* Icon */}
              <div className={cn(
                'flex-shrink-0',
                layout === 'compact' ? 'text-lg' : 'text-2xl mb-3'
              )}>
                <IconComponent 
                  className={cn(
                    'transition-all duration-300',
                    showLevel ? getLevelColor(skill.level).split(' ')[0] : 'text-[var(--primary)]',
                    'group-hover:scale-110'
                  )}
                  size={layout === 'compact' ? 18 : 24}
                />
              </div>

              {/* Skill Name */}
              <div className="min-w-0 flex-1">
                <h3 className={cn(
                  'font-semibold text-[var(--text)] truncate',
                  layout === 'compact' ? 'text-sm' : 'text-base mb-2'
                )}>
                  {skill.name}
                </h3>

                {/* Level Indicator */}
                {showLevel && layout !== 'compact' && (
                  <div className="flex gap-1 justify-center mb-2">
                    {getLevelBars(skill.level)}
                  </div>
                )}

                {/* Category Badge */}
                {layout !== 'compact' && (
                  <span className="badge text-xs">
                    {skill.category}
                  </span>
                )}
              </div>

              {/* Level number for compact layout */}
              {showLevel && layout === 'compact' && (
                <div className={cn(
                  'text-xs font-bold px-1.5 py-0.5 rounded',
                  getLevelColor(skill.level)
                )}>
                  {skill.level}
                </div>
              )}

              {/* Hover Tooltip */}
              {skill.description && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {skill.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                </div>
              )}

              {/* Shine effect */}
              <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default SkillsCloud
```

FILE: src/components/SkillBar.jsx
```jsx
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import * as Icons from 'lucide-react'
import { riseIn } from '../lib/motion'
import { cn } from '../lib/utils'

const SkillBar = ({ skill, index = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const IconComponent = Icons[skill.icon] || Icons.Code2
  const percentage = (skill.level / 5) * 100

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <motion.div
      ref={ref}
      variants={riseIn}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      {/* Skill Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[var(--primary)]/30 transition-colors">
            <IconComponent 
              size={20} 
              className="text-[var(--primary)] group-hover:scale-110 transition-transform" 
            />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text)] text-lg">
              {skill.name}
            </h3>
            <p className="text-sm text-[var(--muted)]">
              {skill.category}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[var(--primary)]">
            {skill.level}/5
          </span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  i < skill.level 
                    ? 'bg-[var(--primary)] scale-100' 
                    : 'bg-white/20 scale-75'
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: hasAnimated ? `${percentage}%` : 0 }}
            transition={{ 
              duration: 1, 
              delay: index * 0.1 + 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </motion.div>
        </div>
        
        {/* Percentage Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: hasAnimated ? 1 : 0,
            scale: hasAnimated ? 1 : 0.8
          }}
          transition={{ 
            duration: 0.3,
            delay: index * 0.1 + 0.8
          }}
          className="absolute right-0 -top-8 px-2 py-1 bg-black text-white text-xs rounded-md border border-white/20"
        >
          {percentage}%
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black" />
        </motion.div>
      </div>

      {/* Keywords */}
      {skill.keywords && (
        <div className="flex flex-wrap gap-1 mt-3">
          {skill.keywords.map((keyword, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--primary)]/30 transition-colors cursor-default"
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default SkillBar
```

FILE: src/components/Timeline.jsx
```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ExternalLink, Calendar } from 'lucide-react'
import { riseIn, staggerWrap, timelineDraw } from '../lib/motion'
import { cn } from '../lib/utils'

const Timeline = ({ items, title = "Timeline" }) => {
  return (
    <div className="space-y-8">
      {title && (
        <motion.h2 
          variants={riseIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold text-[var(--text)] text-center mb-12"
        >
          {title}
        </motion.h2>
      )}

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-0.5">
          <motion.div
            variants={timelineDraw}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="h-full w-full bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]"
            style={{ originY: 0 }}
          />
        </div>

        {/* Timeline Items */}
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {items.map((item, index) => {
            const IconComponent = Icons[item.icon] || Icons.Star
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.id}
                variants={riseIn}
                className={cn(
                  'relative flex items-center',
                  'md:justify-center',
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
              >
                {/* Content Card */}
                <div className={cn(
                  'flex-1 ml-12 md:ml-0 md:w-5/12',
                  isEven ? 'md:mr-8' : 'md:ml-8'
                )}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                    className="card p-6 shine-effect group cursor-pointer"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[var(--accent)] font-medium mt-1">
                          {item.organization}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--muted)] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Details (if available) */}
                    {item.details && (
                      <p className="text-sm text-[var(--muted)] opacity-75 mb-4">
                        {item.details}
                      </p>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3