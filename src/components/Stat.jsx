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