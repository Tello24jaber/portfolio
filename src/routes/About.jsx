import React from 'react'
import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Download, 
  MapPin, 
  Mail, 
  Phone,
  Award,
  Code2,
  Heart,
  Target,
  Users,
  Lightbulb
} from 'lucide-react'

import Section from '../components/Section'
import SkillBar from '../components/SkillBar'
import Timeline from '../components/Timeline'
import { siteConfig } from '../content/site'
import { skills, getSkillsByCategory, getSkillCategories } from '../content/skills'
import { achievements } from '../content/achievements'
import { riseIn, staggerWrap } from '../lib/motion'
import cvFile from '../assets/talal.pdf'
const About = () => {
  const skillCategories = getSkillCategories()

  const values = [
    {
      icon: 'Code2',
      title: 'Clean Code',
      description: 'I believe in writing maintainable, scalable code that follows best practices and industry standards.'
    },
    {
      icon: 'Users',
      title: 'User-Centric',
      description: 'Every project starts with understanding the user needs and creating solutions that provide real value.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'I stay current with emerging technologies and love experimenting with new tools and frameworks.'
    },
    {
      icon: 'Target',
      title: 'Results-Driven',
      description: 'Focus on delivering measurable outcomes and business value through technology solutions.'
    }
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <Section>
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={riseIn} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors focus-ring rounded-lg px-3 py-2"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <motion.div variants={riseIn} className="lg:col-span-1">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 border border-white/10">
                  <img
                    src="/images/avatar.jpg"
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-white/10 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-[var(--text)]">Available for work</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div variants={riseIn}>
                <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4">
                  About {siteConfig.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6 text-[var(--muted)]">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{siteConfig.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award size={18} />
                    <span>Falling Walls Winner 2025</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={riseIn} className="prose prose-invert max-w-none">
                <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
                  {siteConfig.fullBio}
                </p>

                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  My journey began with curiosity about how things work on the web. Today, I specialize in 
                  creating comprehensive digital solutions that combine beautiful user interfaces with robust 
                  backend systems. I'm particularly passionate about restaurant technology and AI integration, 
                  as demonstrated by my award-winning DineLink platform.
                </p>

                <p className="text-[var(--muted)] leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or mentoring aspiring developers. I believe in continuous learning and sharing 
                  knowledge with the community.
                </p>
              </motion.div>

              {/* Contact Info & Actions */}
              <motion.div variants={riseIn} className="flex flex-wrap gap-4 pt-4">
                <a
                  href={cvFile}
                  download
                  className="btn-primary"
                >
                  <Download size={18} />
                  Download CV
                </a>
                
                <Link
                  to="/contact"
                  className="btn-secondary"
                >
                  <Mail size={18} />
                  Get in Touch
                </Link>
                
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Phone size={18} />
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Values Section */}
      <Section background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              My Values & Approach
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              The principles that guide my work and shape how I approach every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
{values.map((value, index) => {
 const IconComponent = Icons[value.icon]
  
  return (
    <motion.div
      key={value.title}
      variants={riseIn}
      className="card p-6 group hover:border-[var(--primary)]/30 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-xl group-hover:bg-[var(--primary)]/20 transition-colors">
          <IconComponent size={24} className="text-[var(--primary)]" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[var(--text)] mb-3">
            {value.title}
          </h3>
          <p className="text-[var(--muted)] leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
})}
          </div>
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section>
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category) => {
              const categorySkills = getSkillsByCategory(category)
              
              return (
                <motion.div key={category} variants={riseIn}>
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-8 text-center">
                    {category} Technologies
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categorySkills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Section>

      {/* Timeline Section */}
      <Section background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Timeline 
            items={achievements} 
            title="Professional Journey" 
          />
        </motion.div>
      </Section>

      {/* Fun Facts */}
      <Section>
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={riseIn} className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              Beyond the Code
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              A few personal insights that make me who I am
            </p>
          </motion.div>

          <motion.div variants={riseIn} className="card p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">1+</div>
                <div className="text-[var(--muted)]">Year of Experience</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">3+</div>
                <div className="text-[var(--muted)]">Projects Completed</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">100%</div>
                <div className="text-[var(--muted)]">Client Satisfaction</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 text-[var(--muted)]">
                <Heart size={18} className="text-red-400" />
                <span>Passionate about creating technology that makes a difference</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div
          variants={riseIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
              Let's Work Together
            </h2>
            
            <p className="text-xl text-[var(--muted)] mb-8">
              Ready to bring your ideas to life? I'm always excited to take on new challenges 
              and create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Start a Project
              </Link>
              
              <Link
                to="/projects"
                className="btn-secondary"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  )
}

export default About