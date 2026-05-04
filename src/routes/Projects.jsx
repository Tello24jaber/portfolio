import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import ProjectCard from '../components/ProjectCard'

import { projects } from '../content/projects'
import { riseIn, staggerWrap } from '../lib/motion'

const Projects = () => {
  return (
    <main id="main-content" className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          animate="show"
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={riseIn}>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-3">Projects</h1>
            <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
              9+ projects spanning full-stack web apps, AI/ML systems, IoT, and startup platforms.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default Projects

