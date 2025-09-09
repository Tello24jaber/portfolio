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