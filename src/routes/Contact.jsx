import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle, Github, Linkedin, MapPin } from 'lucide-react'
import { riseIn, staggerWrap } from '../lib/motion'
import { siteConfig } from '../content/site'

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+962 7 9048 9125',
    href: 'https://wa.me/962790489125',
    note: 'Fastest response · usually within a few hours',
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'talalhjaber@gmail.com',
    href: 'mailto:talalhjaber@gmail.com',
    note: 'For detailed project briefs and file attachments',
    primary: false,
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+962 7 9048 9125',
    href: 'tel:+962790489125',
    note: 'Available for calls during Jordan business hours',
    primary: false,
  },
]

const Contact = () => {
  return (
    <main id="main-content" className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          animate="show"
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={riseIn}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-[var(--muted)]">Available for work</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-3">Get in Touch</h1>
            <p className="text-[var(--muted)] leading-relaxed">
              Ready to start a project? Pick any method below. I respond within 24 hours.
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--muted)] mt-2">
              <MapPin size={14} />
              <span>{siteConfig.location}</span>
            </div>
          </motion.div>

          {/* Contact methods */}
          <motion.div variants={riseIn} className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('mailto') || method.href.startsWith('tel') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`card p-5 flex items-start gap-4 hover:border-[var(--primary)]/40 transition-colors group ${
                  method.primary ? 'border-[var(--primary)]/30 bg-[var(--primary)]/5' : ''
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                  method.primary ? 'bg-[var(--primary)]/20' : 'bg-white/5'
                }`}>
                  <method.icon size={20} className={method.primary ? 'text-[var(--primary)]' : 'text-[var(--muted)]'} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-[var(--text)] text-sm">{method.title}</span>
                    {method.primary && (
                      <span className="text-xs bg-[var(--primary)] text-black px-2 py-0.5 rounded-full font-medium">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-[var(--primary)] mt-0.5 group-hover:underline">{method.value}</div>
                  <div className="text-xs text-[var(--muted)] mt-1">{method.note}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div variants={riseIn} className="card p-5">
            <h2 className="font-semibold text-[var(--text)] mb-4 text-sm">Also find me on</h2>
            <div className="flex gap-4">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </main>
  )
}

export default Contact

