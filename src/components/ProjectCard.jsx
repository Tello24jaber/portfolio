import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Calendar } from 'lucide-react'
import { riseIn, hoverLift, press } from '../lib/motion'
import { cn } from '../lib/utils'

const ProjectCard = ({ project, index = 0 }) => {
  const {
    id,
    title,
    shortDescription,
    technologies,
    link,
    year,
    status,
    role,
    category
  } = project

  const statusColors = {
    Active: 'bg-green-500/15 text-green-400 border-green-500/25',
    Deployed: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
    'In Progress': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
    Completed: 'bg-slate-500/15 text-slate-400 border-slate-500/25',
  }

  return (
    <motion.div
      variants={riseIn}
      transition={{ delay: index * 0.07 }}
    >
      <motion.div
        {...hoverLift}
        className="card p-6 h-full flex flex-col gap-4"
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {category && (
                <span className="text-xs font-medium text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-md px-2 py-0.5">
                  {category}
                </span>
              )}
              <span className={cn(
                'text-xs font-medium rounded-md px-2 py-0.5 border',
                statusColors[status] ?? statusColors.Completed
              )}>
                {status ?? 'Completed'}
              </span>
            </div>
            <h3 className="font-bold text-lg text-[var(--text)] leading-snug">
              {title}
            </h3>
          </div>
          <span className="flex items-center gap-1 text-xs text-[var(--muted)] shrink-0">
            <Calendar size={12} />
            {year}
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">
          {shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-[var(--muted)]"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="px-2 py-0.5 text-xs text-[var(--muted)]">
              +{technologies.length - 5}
            </span>
          )}
        </div>

        {/* Footer: role + link */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          {role && (
            <span className="text-xs text-[var(--muted)]">{role}</span>
          )}
          {link && (
            <motion.a
              {...press}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-600)] transition-colors focus-ring rounded-md px-1"
              aria-label={`Visit ${title}`}
            >
              Visit <ExternalLink size={14} />
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
