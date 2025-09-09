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