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
// Filter projects by category and search term
export function filterProjects(projects, category = 'all', searchTerm = '') {
  if (!projects || !Array.isArray(projects)) {
    return []
  }

  return projects.filter(project => {
    // Use technologies instead of tags, with fallback
    const projectTags = project.technologies || project.tags || []
    
    const matchesCategory = category === 'all' || projectTags.some(tag => 
      tag.toLowerCase() === category.toLowerCase()
    )
    
    const matchesSearch = searchTerm === '' || 
      (project.title && project.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.shortDescription && project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) ||
      projectTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
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