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
                      <div className="flex items-center gap-3">
                        {/* Type Badge */}
                        <span className={cn(
                          'px-2 py-1 text-xs font-medium rounded-md',
                          item.type === 'award' && 'bg-yellow-500/20 text-yellow-300',
                          item.type === 'recognition' && 'bg-green-500/20 text-green-300',
                          item.type === 'program' && 'bg-blue-500/20 text-blue-300',
                          item.type === 'milestone' && 'bg-purple-500/20 text-purple-300',
                          !item.type && 'bg-white/10 text-[var(--muted)]'
                        )}>
                          {item.type || 'Event'}
                        </span>

                        {/* Featured Badge */}
                        {item.featured && (
                          <span className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--primary)]/20 text-[var(--primary)]">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* External Link */}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-[var(--primary)] hover:text-[var(--primary-600)] transition-colors focus-ring rounded-md p-1"
                        >
                          <span>Learn More</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: 'spring' }}
                    className="w-8 h-8 rounded-full bg-[var(--surface)] border-2 border-[var(--primary)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors"
                  >
                    <IconComponent size={16} className="text-[var(--primary)]" />
                  </motion.div>
                </div>

                {/* Image (if available) */}
                {item.image && (
                  <div className={cn(
                    'hidden md:block w-5/12',
                    isEven ? 'ml-8' : 'mr-8'
                  )}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Timeline