import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

import { projects } from '../content/projects'
import { riseIn, staggerWrap } from '../lib/motion'

const Projects = () => {
  const location = useLocation()

  return (
    <main className="pt-24">
      {/* Header Section */}
      <Section padding="default">
        <motion.div
          key={location.pathname} // Force re-render on route change
          variants={staggerWrap}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.div variants={riseIn} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors mb-6 focus-ring rounded-lg px-3 py-2"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
              My Projects
            </h1>
            
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in founding startups, 
              full-stack development, and innovative solutions for modern businesses.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Projects Grid */}
      <Section padding="small" background="muted">
        <motion.div
          key={`projects-${location.pathname}`} // Force re-render
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
              index={index}
            />
          ))}
        </motion.div>
      </Section>

      {/* Project Stats */}
      <Section>
        <motion.div
          key={`stats-${location.pathname}`} // Force re-render
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={riseIn} className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              Project Highlights
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Key achievements and milestones across my projects
            </p>
          </motion.div>

          <motion.div variants={riseIn}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6">
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">1</div>
                <div className="text-[var(--text)] font-semibold mb-1">Award-Winning Startup</div>
                <div className="text-sm text-[var(--muted)]">DineLink - Falling Walls Winner</div>
              </div>
              
              <div className="card p-6">
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">9+</div>
                <div className="text-[var(--text)] font-semibold mb-1">Technologies Used</div>
                <div className="text-sm text-[var(--muted)]">Full-stack expertise across projects</div>
              </div>
              
              <div className="card p-6">
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">3</div>
                <div className="text-[var(--text)] font-semibold mb-1">Major Projects</div>
                <div className="text-sm text-[var(--muted)]">From startup to e-commerce solutions</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <motion.div
          key={`cta-${location.pathname}`} // Force re-render
          variants={riseIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
              Have a Project in Mind?
            </h2>
            
            <p className="text-xl text-[var(--muted)] mb-8">
              Whether you're looking for a co-founder, need development work, or want to discuss innovative ideas - let's connect and create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Start a Conversation
              </Link>
              
              <Link
                to="/services"
                className="btn-secondary text-lg px-8 py-4"
              >
                View Services
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-sm text-[var(--muted)]">
                🚀 Open to partnerships • 💡 Always exploring new ideas • 🤝 Ready to collaborate
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  )
}

export default Projects