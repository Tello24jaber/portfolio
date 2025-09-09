import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Clock,
  Send,
  ExternalLink
} from 'lucide-react'

import Section from '../components/Section'
import { siteConfig } from '../content/site'
import { riseIn, staggerWrap, hoverLift } from '../lib/motion'
import { copyToClipboard } from '../lib/utils'

const Contact = () => {
  const location = useLocation()
  const selectedService = location.state?.service || ''

  const contactMethods = [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp Chat',
      subtitle: 'Instant messaging',
      value: siteConfig.contact.phone,
      action: 'Chat Now',
      href: siteConfig.socials.whatsapp,
      primary: true,
      description: 'Quick responses, file sharing, voice messages'
    },
    {
      icon: 'Mail',
      title: 'Email',
      subtitle: 'Professional communication',
      value: siteConfig.contact.email,
      action: 'Send Email',
      href: siteConfig.socials.email,
      primary: false,
      description: 'Detailed discussions, project briefs, file attachments'
    },
    {
      icon: 'Phone',
      title: 'Phone Call',
      subtitle: 'Direct conversation',
      value: siteConfig.contact.phone,
      action: 'Call Now',
      href: `tel:${siteConfig.contact.phone}`,
      primary: false,
      description: 'Real-time discussion, immediate feedback'
    }
  ]

  const handleCopy = async (text, method) => {
    const success = await copyToClipboard(text)
    if (success) {
      // You could add a toast notification here
      console.log(`${method} copied to clipboard`)
    }
  }

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-4 months. I provide detailed timelines during the initial consultation.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! I offer post-launch support including bug fixes, updates, and maintenance. Support packages can be customized based on your needs.'
    },
    {
      question: 'What is your development process?',
      answer: 'I follow a structured process: Discovery & Planning → Design & Architecture → Development & Testing → Deployment & Launch. Regular communication throughout ensures alignment with your vision.'
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! I collaborate seamlessly with existing teams, whether as a lead developer, team member, or consultant. I adapt to your preferred workflows and tools.'
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

          <motion.div variants={riseIn} className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
              Let's Work Together
            </h1>
            
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              Ready to bring your ideas to life? I'm here to help you create something amazing. 
              Choose your preferred way to get in touch and let's start the conversation.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Usually respond within 24 hours</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Contact Methods */}
      <Section background="muted">
        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={riseIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Multiple ways to reach me - pick what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
  const IconComponent = Icons[method.icon]
  
  return (
    <motion.div
      key={method.title}
      variants={riseIn}
      className={`relative group ${method.primary ? 'md:scale-105' : ''}`}
    >
                  <motion.div
                    {...hoverLift}
                    className={`card p-6 text-center h-full ${
                      method.primary 
                        ? 'border-[var(--primary)]/30 bg-[var(--primary)]/5' 
                        : ''
                    }`}
                  >
                    {method.primary && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-[var(--primary)] text-black px-3 py-1 rounded-full text-xs font-medium">
                          Recommended
                        </span>
                      </div>
                    )}

                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      method.primary 
                        ? 'bg-[var(--primary)]/20 border-2 border-[var(--primary)]/30' 
                        : 'bg-white/10 border border-white/20'
                    }`}>
                      <IconComponent 
                        size={24} 
                        className={method.primary ? 'text-[var(--primary)]' : 'text-[var(--accent)]'} 
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text)] mb-2">
                      {method.title}
                    </h3>
                    
                    <p className="text-sm text-[var(--muted)] mb-4">
                      {method.subtitle}
                    </p>

                    <p className="text-sm text-[var(--muted)] mb-6">
                      {method.description}
                    </p>

                    <div className="space-y-3">
                      <button
                        onClick={() => handleCopy(method.value, method.title)}
                        className="w-full px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[var(--text)] hover:bg-white/10 transition-colors focus-ring"
                      >
                        {method.value}
                      </button>

                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : '_self'}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`btn-${method.primary ? 'primary' : 'secondary'} w-full justify-center`}
                      >
                        <IconComponent size={18} />
                        {method.action}
                        {method.href.startsWith('http') && <ExternalLink size={14} />}
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          

          {/* Additional Info */}
          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-[var(--text)] mb-4">
                Current Availability
              </h3>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[var(--text)] font-medium">Available for new projects</span>
              </div>

              <div className="space-y-3 text-sm text-[var(--muted)]">
                <div>• Currently accepting 2-3 new projects</div>
                <div>• Next available start date: Within 1-2 weeks</div>
                <div>• Response time: Usually within 24 hours</div>
                <div>• Time zone: GMT+3 (Jordan Standard Time)</div>
              </div>
            </div>

            {/* What to Include */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-[var(--text)] mb-4">
                What to Include in Your Message
              </h3>
              
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>• Brief description of your project or idea</li>
                <li>• Your goals and target audience</li>
                <li>• Timeline expectations and budget range</li>
                <li>• Any specific requirements or preferences</li>
                <li>• Existing materials (wireframes, designs, etc.)</li>
              </ul>

              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-sm text-blue-300">
                  💡 The more details you provide, the better I can understand your needs and provide an accurate quote.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-[var(--text)] mb-6">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="cursor-pointer text-[var(--text)] font-medium hover:text-[var(--primary)] transition-colors">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed pl-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="muted">
        <motion.div
          variants={riseIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
              Prefer a Quick Chat?
            </h2>
            
            <p className="text-xl text-[var(--muted)] mb-8">
              Sometimes a quick conversation can clarify everything faster than emails. 
              I'm just a WhatsApp message away for immediate questions or project discussions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                <MessageCircle size={20} />
                Start WhatsApp Chat
              </a>
              
              <Link
                to="/projects"
                className="btn-secondary text-lg px-8 py-4"
              >
                View My Portfolio
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-sm text-[var(--muted)]">
                🔒 Your information is always kept confidential • 🚀 Free initial consultation • ⚡ Quick response guaranteed
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  )
}

export default Contact