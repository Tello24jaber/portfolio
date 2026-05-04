import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react'

import Section from '../components/Section'
import { getProjectById } from '../content/projects'
import { riseIn, staggerWrap } from '../lib/motion'
import { cn } from '../lib/utils'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const {
    title,
    description,
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
    <main className="pt-24">
      <Section padding="default">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={riseIn} className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors focus-ring rounded-lg px-3 py-2"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div variants={riseIn}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {category && (
                <span className="text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-md px-3 py-1">
                  {category}
                </span>
              )}
              <span className={cn(
                'text-sm font-medium rounded-md px-3 py-1 border',
                statusColors[status] ?? statusColors.Completed
              )}>
                {status ?? 'Completed'}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
                <Calendar size={14} />
                {year}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
              {title}
            </h1>

            <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={18} />
                  View Project
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {role && (
                <div className="card p-5">
                  <div className="flex items-center gap-2 text-[var(--muted)] text-sm mb-1">
                    <User size={14} />
                    Role
                  </div>
                  <div className="font-semibold text-[var(--text)]">{role}</div>
                </div>
              )}
              <div className="card p-5">
                <div className="flex items-center gap-2 text-[var(--muted)] text-sm mb-1">
                  <Calendar size={14} />
                  Year
                </div>
                <div className="font-semibold text-[var(--text)]">{year}</div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                <Tag size={16} className="text-[var(--primary)]" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-white/5 border border-white/10 rounded-md text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </main>
  )
}

export default ProjectDetail