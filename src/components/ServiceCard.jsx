import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { ArrowRight, Clock, DollarSign, CheckCircle } from 'lucide-react'
import { riseIn, hoverLift, press } from '../lib/motion'
import { cn } from '../lib/utils'

const ServiceCard = ({ service, index = 0, detailed = false }) => {
  const {
    id,
    title,
    shortDescription,
    description,
    icon,
    features,
    technologies,
    deliverables,
    timeline,
    startingPrice,
    idealFor
  } = service

  const IconComponent = Icons[icon] || Icons.Code2

  return (
    <motion.div
      variants={riseIn}
      transition={{ delay: index * 0.1 }}
      className="group h-full"
    >
      <motion.div
        {...hoverLift}
        className="card p-6 h-full flex flex-col shine-effect"
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 group-hover:bg-[var(--primary)]/20 transition-colors">
            <IconComponent 
              size={24} 
              className="text-[var(--primary)] group-hover:scale-110 transition-transform" 
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-xl text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
              {title}
            </h3>
            <p className="text-[var(--muted)] text-sm line-clamp-2">
              {shortDescription}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--muted)] leading-relaxed mb-6 flex-1">
          {detailed ? description : shortDescription}
        </p>

        {/* Key Features */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-[var(--text)] mb-3 text-sm">
              Key Features:
            </h4>
            <ul className="space-y-2">
              {features.slice(0, detailed ? features.length : 4).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <CheckCircle size={14} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
              {!detailed && features.length > 4 && (
                <li className="text-sm text-[var(--muted)] pl-6">
                  +{features.length - 4} more features
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-[var(--text)] mb-3 text-sm">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 6 && (
                <span className="px-2 py-1 text-xs text-[var(--muted)]">
                  +{technologies.length - 6} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Project Info */}
        <div className="space-y-3 mb-6">
          {timeline && (
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <Clock size={16} className="text-[var(--accent)]" />
              <span>{timeline}</span>
            </div>
          )}
          
          {startingPrice && (
            <div className="flex items-center gap-2 text-sm">
              <DollarSign size={16} className="text-[var(--primary)]" />
              <span className="font-medium text-[var(--text)]">{startingPrice}</span>
            </div>
          )}
        </div>

        {/* Ideal For */}
        {idealFor && idealFor.length > 0 && !detailed && (
          <div className="mb-6">
            <h4 className="font-semibold text-[var(--text)] mb-3 text-sm">
              Perfect for:
            </h4>
            <ul className="space-y-1">
              {idealFor.slice(0, 3).map((item, i) => (
                <li key={i} className="text-sm text-[var(--muted)] flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <motion.div {...press} className="w-full">
            <Link
              to="/contact"
              state={{ service: title }}
              className="btn-primary w-full justify-center group"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
          
          <p className="text-xs text-center text-[var(--muted)] mt-2">
            Free consultation • Quick response
          </p>
        </div>

        {/* Case Study Badge */}
        {service.caseStudy && (
          <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-xs text-yellow-300 font-medium text-center">
              📊 Case Study: {service.caseStudy}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard