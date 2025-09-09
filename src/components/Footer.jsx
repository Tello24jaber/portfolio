import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart, ArrowUp, MapPin } from 'lucide-react'
import { riseIn, staggerWrap, press } from '../lib/motion'
import { siteConfig } from '../content/site'
import { scrollToElement } from '../lib/utils'

const Footer = () => {
  const { name, socials, contact, location } = siteConfig

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'Services', href: '/services' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    projects: [
      { name: 'DineLink', href: '/projects/dinelink' },
      { name: 'OneSalt', href: '/projects/onesalt' },
      { name: 'Just Cook', href: '/projects/just-cook' },
    ],
    services: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'E-Commerce', href: '/services#ecommerce' },
      { name: 'Restaurant Tech', href: '/services#restaurant-tech' },
      { name: 'Backend & APIs', href: '/services#backend' },
    ]
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[var(--surface)] border-t border-white/10">
      <div className="container-custom">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 lg:py-20"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={riseIn} className="lg:col-span-1">
              <Link 
                to="/" 
                className="inline-block text-3xl font-bold text-[var(--primary)] hover:text-[var(--primary-600)] transition-colors mb-4 focus-ring rounded-lg px-2 py-1"
              >
                {name}
              </Link>
              
              <p className="text-[var(--muted)] mb-6 leading-relaxed">
                Full-stack developer specializing in React, Node.js, and AI-powered restaurant technology. 
                Winner of Falling Walls Lab Jordan 2025.
              </p>

              <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-4">
                <MapPin size={16} />
                <span>{location}</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <motion.a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] hover:bg-white/5 transition-all focus-ring"
                  whileHover={{ y: -2 }}
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </motion.a>
                
                <motion.a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] hover:bg-white/5 transition-all focus-ring"
                  whileHover={{ y: -2 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </motion.a>
                
                <motion.a
                  href={socials.email}
                  className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] hover:bg-white/5 transition-all focus-ring"
                  whileHover={{ y: -2 }}
                  aria-label="Email Contact"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={riseIn}>
              <h3 className="font-semibold text-[var(--text)] mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors focus-ring rounded-md px-2 py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Featured Projects */}
            <motion.div variants={riseIn}>
              <h3 className="font-semibold text-[var(--text)] mb-6">Featured Projects</h3>
              <nav className="space-y-3">
                {navigation.projects.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors focus-ring rounded-md px-2 py-1"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/projects"
                  className="block text-[var(--primary)] hover:text-[var(--primary-600)] transition-colors focus-ring rounded-md px-2 py-1 font-medium"
                >
                  View All Projects →
                </Link>
              </nav>
            </motion.div>

            {/* Services */}
            <motion.div variants={riseIn}>
              <h3 className="font-semibold text-[var(--text)] mb-6">Services</h3>
              <nav className="space-y-3">
                {navigation.services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors focus-ring rounded-md px-2 py-1"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="block text-[var(--primary)] hover:text-[var(--primary-600)] transition-colors focus-ring rounded-md px-2 py-1 font-medium"
                >
                  View All Services →
                </Link>
              </nav>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            variants={riseIn}
            className="text-center py-8 border-t border-white/10 mb-8"
          >
            <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern web technologies and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div {...press}>
                <Link
                  to="/Contact"
                  className="btn-primary"
                >
                  Get Started Today
                  <Mail size={18} />
                </Link>
              </motion.div>
              
              <motion.div {...press}>
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Chat
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            variants={riseIn}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} {name}. Made with</span>
              <Heart size={16} className="text-red-400" />
             
            </div>

            <div className="flex items-center gap-6">
             

              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] hover:bg-white/5 transition-all focus-ring"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer