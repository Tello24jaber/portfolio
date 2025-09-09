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