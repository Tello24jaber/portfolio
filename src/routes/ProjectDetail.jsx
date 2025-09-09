import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  User, 
  Clock, 
  Target, 
  Lightbulb,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Tag
} from 'lucide-react'

import Section from '../components/Section'
import { getProjectById } from '../content/projects'
import { riseIn, staggerWrap, scaleIn, modalVariants, backdropVariants } from '../lib/motion'
import { cn } from '../lib/utils'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = getProjectById(id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const {
    title,
    description,
    detailedDescription,
    features,
    technologies,
    images,
    links,
    year,
    status,
    impact,
    vision,
    role,
    team,
    duration,
    challenges,
    solutions
  } = project

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.gallery.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.gallery.length - 1 : prev - 1
    )
  }

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <Section padding="default">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          animate="show"
        >
          {/* Navigation */}
          <motion.div variants={riseIn} className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors focus-ring rounded-lg px-3 py-2"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={riseIn}>
              <div className="flex items-center gap-4 mb-6">
                <span className={cn(
                  'px-3 py-1 text-sm font-medium rounded-full',
                  status === 'Active' && 'bg-green-500/20 text-green-300',
                  status === 'Deployed' && 'bg-blue-500/20 text-blue-300',
                  status === 'In Progress' && 'bg-yellow-500/20 text-yellow-300',
                  !status && 'bg-white/20 text-white'
                )}>
                  {status || 'Completed'}
                </span>
                
                <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <Calendar size={14} />
                  <span>{year}</span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
                {title}
              </h1>

              <p className="text-xl text-[var(--muted)] leading-relaxed mb-6">
                {description}
              </p>

              {/* Impact/Recognition */}
              {impact?.recognition && (
                <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <p className="text-yellow-300 font-medium flex items-center gap-2">
                    🏆 {impact.recognition}
                  </p>
                  {impact.achievement && (
                    <p className="text-sm text-yellow-300/80 mt-1">
                      {impact.achievement}
                    </p>
                  )}
                </div>
              )}

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                {links.live && (
                  <a
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={18} />
                    View Live Site
                  </a>
                )}
              
                
              
              </div>
            </motion.div>

            {/* Cover Image */}
            <motion.div variants={scaleIn}>
              <div 
                className="aspect-video rounded-2xl overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={images.cover}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <ExternalLink size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Project Details */}
      <Section background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div variants={riseIn}>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">
                Project Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-[var(--muted)] leading-relaxed">
                  {detailedDescription || description}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            {vision && (
              <motion.div variants={riseIn} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[var(--primary)]/20 rounded-lg">
                    <Target size={20} className="text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text)]">Vision</h3>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">
                  {vision}
                </p>
              </motion.div>
            )}

            {/* Features */}
            {features && features.length > 0 && (
              <motion.div variants={riseIn}>
                <h3 className="text-2xl font-bold text-[var(--text)] mb-6">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle size={18} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--text)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Challenges & Solutions */}
            {challenges && solutions && (
              <motion.div variants={riseIn} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-500/20 rounded-lg">
                      <Lightbulb size={20} className="text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text)]">Challenges</h3>
                  </div>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="text-[var(--muted)] leading-relaxed">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <CheckCircle size={20} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text)]">Solutions</h3>
                  </div>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index} className="text-[var(--muted)] leading-relaxed">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Image Gallery */}
            {images.gallery && images.gallery.length > 0 && (
              <motion.div variants={riseIn}>
                <h3 className="text-2xl font-bold text-[var(--text)] mb-6">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image}
                        alt={`${title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div variants={riseIn} className="card p-6">
              <h3 className="text-xl font-bold text-[var(--text)] mb-6">
                Project Info
              </h3>
              
              <div className="space-y-4">
                {role && (
                  <div className="flex items-start gap-3">
                    <User size={18} className="text-[var(--primary)] mt-0.5" />
                    <div>
                      <div className="font-medium text-[var(--text)]">Role</div>
                      <div className="text-sm text-[var(--muted)]">{role}</div>
                    </div>
                  </div>
                )}

                {team && (
                  <div className="flex items-start gap-3">
                    <User size={18} className="text-[var(--primary)] mt-0.5" />
                    <div>
                      <div className="font-medium text-[var(--text)]">Team</div>
                      <div className="text-sm text-[var(--muted)]">{team}</div>
                    </div>
                  </div>
                )}

                {duration && (
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[var(--primary)] mt-0.5" />
                    <div>
                      <div className="font-medium text-[var(--text)]">Duration</div>
                      <div className="text-sm text-[var(--muted)]">{duration}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-[var(--primary)] mt-0.5" />
                  <div>
                    <div className="font-medium text-[var(--text)]">Year</div>
                    <div className="text-sm text-[var(--muted)]">{year}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={riseIn} className="card p-6">
              <h3 className="text-xl font-bold text-[var(--text)] mb-6">
                Technologies Used
              </h3>
              
              <div className="space-y-3">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <Tag size={14} className="text-[var(--primary)]" />
                    <span className="text-[var(--text)] text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Impact */}
            {impact && (
              <motion.div variants={riseIn} className="card p-6">
                <h3 className="text-xl font-bold text-[var(--text)] mb-6">
                  Impact & Results
                </h3>
                
                <div className="space-y-3">
                  {impact.recognition && (
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <div className="font-medium text-yellow-300">Recognition</div>
                      <div className="text-sm text-yellow-300/80">{impact.recognition}</div>
                    </div>
                  )}
                  
                  {impact.program && (
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="font-medium text-blue-300">Program</div>
                      <div className="text-sm text-blue-300/80">{impact.program}</div>
                    </div>
                  )}
                  
                  {impact.testing && (
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="font-medium text-green-300">Testing</div>
                      <div className="text-sm text-green-300/80">{impact.testing}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </Section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus-ring"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>

              {/* Navigation Buttons */}
              {images.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus-ring"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus-ring"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image */}
              <img
                src={images.gallery[currentImageIndex]}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Counter */}
              {images.gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                  {currentImageIndex + 1} / {images.gallery.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default ProjectDetail