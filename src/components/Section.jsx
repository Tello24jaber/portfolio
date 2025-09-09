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