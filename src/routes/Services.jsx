import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Check, ArrowRight } from 'lucide-react'

import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { services } from '../content/services'
import { riseIn, staggerWrap, scaleIn } from '../lib/motion'
import { cn } from '../lib/utils'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null)

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We discuss your requirements, goals, and vision to create a detailed project roadmap.'
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'I design the user experience and technical architecture that best serves your needs.'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Clean, efficient code development with comprehensive testing and quality assurance.'
    },
    {
      number: '04',
      title: 'Deployment & Launch',
      description: 'Seamless deployment with monitoring, documentation, and post-launch support.'
    }
  ]

  const testimonials = [
    {
      name: 'Restaurant Owner',
      role: 'DineLink Pilot Tester',
      content: 'The system completely transformed our operations. Order processing is now 3x faster and our staff can focus on what matters most - serving customers.',
      rating: 5
    },
    {
      name: 'E-commerce Client',
      role: 'OneSalt Project',
      content: 'Professional, reliable, and delivered exactly what we needed. The admin panel makes managing our inventory so much easier.',
      rating: 5
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

          <motion.div variants={riseIn} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
              Services & Solutions
            </h1>
            
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              From concept to deployment, I provide comprehensive development services 
              to help businesses succeed in the digital world. Specializing in modern 
              web technologies and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              
              <Link
                to="/projects"
                className="btn-secondary"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Services Grid */}
      <Section background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              What I Can Do For You
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Comprehensive development services tailored to your specific needs and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                detailed={true}
              />
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Process Section */}
      <Section>
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              My Development Process
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={scaleIn}
                className="text-center group"
              >
                <div className="relative mb-6">
                  {/* Step Number */}
                  <div className="w-20 h-20 mx-auto bg-[var(--primary)]/10 border-2 border-[var(--primary)]/20 rounded-full flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                    <span className="text-2xl font-bold text-[var(--primary)]">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[var(--primary)]/20 to-transparent transform -translate-y-0.5" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Why Choose Me */}
      <Section background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={riseIn}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
              Why Choose Me?
            </h2>
            
            <div className="space-y-6">
              {[
                'Award-winning developer with proven track record',
                'Specialization in modern web technologies and AI integration',
                'End-to-end service from concept to deployment',
                'Focus on performance, scalability, and user experience',
                'Regular communication and project updates',
                'Post-launch support and maintenance',
                'Competitive pricing with transparent process',
                'Commitment to deadlines and quality standards'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-[var(--primary)]/20 rounded-full mt-1">
                    <Check size={14} className="text-[var(--primary)]" />
                  </div>
                  <span className="text-[var(--muted)]">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={scaleIn}>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-6">
                Project Success Metrics
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[var(--text)]">Client Satisfaction</span>
                    <span className="text-[var(--primary)] font-bold">100%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[var(--primary)] h-2 rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[var(--text)]">On-time Delivery</span>
                    <span className="text-[var(--primary)] font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[var(--primary)] h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[var(--text)]">Code Quality</span>
                    <span className="text-[var(--primary)] font-bold">98%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[var(--primary)] h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-[var(--muted)] text-center">
                    Based on completed projects and client feedback
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Testimonials */}
      <Section>
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={riseIn}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                  ))}
                </div>
                
                <p className="text-[var(--muted)] leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-semibold text-[var(--text)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[var(--muted)]">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <motion.div
          variants={riseIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
              Ready to Start Your
              <span className="text-[var(--primary)]"> Project</span>?
            </h2>
            
            <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
              Let's discuss your requirements and create a solution that exceeds your expectations. 
              Free consultation and transparent pricing - no hidden costs or surprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              
              <a
                href="https://wa.me/962790489125"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                WhatsApp Chat
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                </svg>
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-[var(--muted)]">
                ✅ Free consultation • ✅ No commitment required • ✅ Quick response guaranteed
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  )
}

export default Services