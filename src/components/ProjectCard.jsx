import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, Eye, Calendar, Tag } from 'lucide-react'
import { riseIn, hoverLift, press } from '../lib/motion'
import { cn } from '../lib/utils'

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  const {
    id,
    title,
    shortDescription,
    technologies,
    images,
    link, // Fixed: destructure direct link property
    year,
    status,
    impact
  } = project

  return (
    <motion.div
      variants={riseIn}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'group relative',
        featured ? 'md:col-span-2' : ''
      )}
    >
      <motion.div
        {...hoverLift}
        className="card overflow-hidden h-full shine-effect"
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={images.cover}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={`/projects/${id}`}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors focus-ring"
                aria-label="View project details"
              >
                <Eye size={20} />
              </Link>
            </motion.div>

            {link && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <a
                  href={`https://${link}`} // Fixed: add https protocol
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors focus-ring"
                  aria-label="View live project"
                >
                  <ExternalLink size={20} />
                </a>
              </motion.div>
            )}

            {/* Removed GitHub repo link since it doesn't exist in the data */}
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className={cn(
              'px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm',
              status === 'Active' && 'bg-green-500/20 text-green-300 border border-green-500/30',
              status === 'Deployed' && 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
              status === 'In Progress' && 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
              !status && 'bg-white/20 text-white border border-white/30'
            )}>
              {status || 'Completed'}
            </span>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30 backdrop-blur-sm">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <Link
                to={`/projects/${id}`}
                className="group-hover:text-[var(--primary)] transition-colors focus-ring rounded-md"
              >
                <h3 className="font-bold text-xl text-[var(--text)] line-clamp-1">
                  {title}
                </h3>
              </Link>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-[var(--muted)] ml-3">
              <Calendar size={14} />
              <span>{year}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[var(--muted)] leading-relaxed mb-4 line-clamp-3">
            {shortDescription}
          </p>

          {/* Impact/Recognition */}
          {impact?.recognition && (
            <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300 font-medium">
                🏆 {impact.recognition}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-colors"
              >
                <Tag size={12} />
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium text-[var(--muted)]">
                +{technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.div {...press} className="flex-1">
              <Link
                to={`/projects/${id}`}
                className="btn-primary w-full justify-center text-sm"
              >
                View Details
                <Eye size={16} />
              </Link>
            </motion.div>

            {/* Quick Actions */}
            <div className="flex gap-1">
              {link && (
                <a
                  href={`https://${link}`} // Fixed: add https protocol
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] hover:bg-white/5 transition-colors focus-ring"
                  aria-label="View live project"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard