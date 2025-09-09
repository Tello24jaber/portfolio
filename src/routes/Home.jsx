import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

import Section from '../components/Section'
import Hero from '../components/Hero'
import Stat from '../components/Stat'
import SkillsCloud from '../components/SkillsCloud'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'

import { siteConfig } from '../content/site'
import { skills, getTopSkills } from '../content/skills'
import { achievements } from '../content/achievements'
import { projects, getFeaturedProjects } from '../content/projects'
import { services, getFeaturedServices } from '../content/services'
import { riseIn, staggerWrap, press } from '../lib/motion'

const Home = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 3)
  const featuredServices = getFeaturedServices().slice(0, 3)
  const topSkills = getTopSkills(12)
  const featuredAchievements = achievements.filter(a => a.featured)

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Section padding="small" background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {siteConfig.stats.map((stat, index) => (
            <Stat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              Technologies & Skills
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              I work with modern technologies to build scalable, efficient, and user-friendly applications
            </p>
          </motion.div>

          <SkillsCloud skills={topSkills} layout="grid" />

          <motion.div variants={riseIn} className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-600)] transition-colors font-medium focus-ring rounded-lg px-3 py-2"
            >
              View All Skills & Experience
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="projects" background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={index === 0}
                index={index}
              />
            ))}
          </div>

          <motion.div variants={riseIn} className="text-center">
            <motion.div {...press}>
              <Link
                to="/projects"
                className="btn-primary"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Achievements Timeline */}
      <Section id="achievements">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="text-[var(--primary)]" size={24} />
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)]">
                Achievements & Recognition
              </h2>
            </div>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Milestones and recognition that mark my journey as a developer
            </p>
          </motion.div>

          <Timeline items={featuredAchievements} />
        </motion.div>
      </Section>

      {/* Services Preview */}
      <Section id="services" background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              How I Can Help You
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              From web development to restaurant tech solutions, I provide comprehensive services to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>

          <motion.div variants={riseIn} className="text-center">
            <motion.div {...press}>
              <Link
                to="/services"
                className="btn-primary"
              >
                View All Services
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section padding="large">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={riseIn} className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
              Ready to Build Something
              <span className="text-[var(--primary)]"> Amazing</span>?
            </h2>
            
            <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
              Let's discuss your project and create a solution that exceeds your expectations. 
              From concept to deployment, I'm here to help you succeed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div {...press}>
                <Link
                  to="/contact"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              
              <motion.div {...press}>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  WhatsApp Chat
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </main>
  )
}

export default Home