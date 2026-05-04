import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, MapPin, Mail, Github, Linkedin } from 'lucide-react'
import { riseIn, staggerWrap } from '../lib/motion'
import { siteConfig } from '../content/site'
import cvFile from '../assets/talal.pdf'

const skills = [
  { label: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Vue.js', 'TypeScript'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'FastAPI', 'Express.js'] },
  { label: 'Database', items: ['PostgreSQL', 'MySQL', 'Supabase'] },
  { label: 'AI / ML', items: ['Python', 'SVM', 'MediaPipe', 'Signal Processing', 'LLMs'] },
  { label: 'DevOps', items: ['Docker', 'GitHub Actions', 'AWS', 'Netlify', 'Linux'] },
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
]

const experience = [
  { role: 'Front-End Lead', org: 'H20 Digital Solutions', period: 'Nov 2025 – Present' },
  { role: 'Founder & CTO', org: 'DineLink (Startup)', period: 'Feb 2025 – Present' },
  { role: 'Ambassador – Jordan', org: 'Falling Walls Foundation', period: 'Apr 2026 – Present' },
  { role: 'Technical Director', org: 'GDG Amman', period: 'Aug 2025 – Present' },
  { role: 'Freelance Full-Stack Developer', org: 'Self-employed', period: 'Feb 2025 – Present' },
]

const highlights = [
  { value: 'Top 100', label: 'Global Innovator', sub: 'Falling Walls, Berlin · 2,700+ applicants' },
  { value: '1st', label: 'Falling Walls Jordan', sub: 'Among 50+ national innovators' },
  { value: '9+', label: 'Freelance Projects', sub: 'Delivered within 4-week deadlines' },
]

const Home = () => {
  return (
    <main id="main-content" className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div variants={staggerWrap} initial="hidden" animate="show">

          {/* ── Desktop: two-column grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 pt-10 lg:pt-16">

            {/* ── LEFT COLUMN ── */}
            <div className="space-y-12">

              {/* Hero */}
              <motion.div variants={riseIn}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-[var(--muted)]">Available for work</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text)] mb-3 leading-tight">
                  Talal Jaber
                </h1>
                <p className="text-xl lg:text-2xl text-[var(--primary)] font-medium mb-4">
                  Software Engineer & Full-Stack Developer
                </p>
                <div className="flex items-center gap-2 text-[var(--muted)] text-sm mb-5">
                  <MapPin size={14} />
                  <span>Amman, Jordan · German Jordanian University</span>
                </div>
                <p className="text-[var(--muted)] leading-relaxed text-base lg:text-lg max-w-2xl">
                  {siteConfig.fullBio}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href={cvFile} download className="btn-primary">
                    <Download size={16} /> Download CV
                  </a>
                  <Link to="/contact" className="btn-secondary">
                    <Mail size={16} /> Contact Me
                  </Link>
                  <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={riseIn}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {highlights.map((h) => (
                    <div key={h.label} className="card p-5">
                      <div className="text-2xl font-bold text-[var(--primary)] mb-1">{h.value}</div>
                      <div className="font-semibold text-[var(--text)] text-sm mb-1">{h.label}</div>
                      <div className="text-xs text-[var(--muted)]">{h.sub}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div variants={riseIn}>
                <h2 className="text-base font-bold text-[var(--text)] mb-4 uppercase tracking-wide opacity-60">Experience</h2>
                <div className="space-y-0">
                  {experience.map((e) => (
                    <div key={e.role} className="flex items-start justify-between gap-4 py-3 border-b border-white/5 last:border-0">
                      <div>
                        <span className="font-medium text-[var(--text)] text-sm">{e.role}</span>
                        <span className="text-[var(--muted)] text-sm"> · {e.org}</span>
                      </div>
                      <span className="text-xs text-[var(--muted)] shrink-0 pt-0.5">{e.period}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Explore — hidden on desktop (shown in right column) */}
              <motion.div variants={riseIn} className="lg:hidden">
                <h2 className="text-base font-bold text-[var(--text)] mb-4 uppercase tracking-wide opacity-60">Explore</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link to="/projects" className="card p-5 hover:border-[var(--primary)]/40 transition-colors group">
                    <div className="font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors mb-1">Projects</div>
                    <div className="text-sm text-[var(--muted)]">9+ projects — full-stack, ML, IoT</div>
                  </Link>
                  <Link to="/services" className="card p-5 hover:border-[var(--primary)]/40 transition-colors group">
                    <div className="font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors mb-1">Services</div>
                    <div className="text-sm text-[var(--muted)]">Web development, e-commerce & more</div>
                  </Link>
                  <Link to="/contact" className="card p-5 hover:border-[var(--primary)]/40 transition-colors group">
                    <div className="font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors mb-1">Contact</div>
                    <div className="text-sm text-[var(--muted)]">WhatsApp, email, or phone</div>
                  </Link>
                </div>
              </motion.div>

            </div>

            {/* ── RIGHT COLUMN (desktop sidebar) ── */}
            <motion.div variants={riseIn} className="space-y-8 lg:pt-2">

              {/* Skills */}
              <div className="card p-6">
                <h2 className="text-base font-bold text-[var(--text)] mb-4 uppercase tracking-wide opacity-60">Skills</h2>
                <div className="space-y-3">
                  {skills.map((group) => (
                    <div key={group.label} className="flex flex-wrap items-start gap-x-3 gap-y-1.5">
                      <span className="text-xs font-semibold text-[var(--primary)] w-16 shrink-0 pt-0.5">{group.label}</span>
                      <div className="flex flex-wrap gap-1">
                        {group.items.map((item) => (
                          <span key={item} className="px-1.5 py-0.5 text-xs bg-white/5 border border-white/10 rounded text-[var(--muted)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="card p-6">
                <h2 className="text-base font-bold text-[var(--text)] mb-3 uppercase tracking-wide opacity-60">Education</h2>
                <div className="font-semibold text-[var(--text)] text-sm">B.Sc. Computer Engineering</div>
                <div className="text-xs text-[var(--muted)] mt-1">German Jordanian University (GJU)</div>
                <div className="text-xs text-[var(--muted)]">2023 – Present</div>
              </div>

              {/* Explore cards — desktop only */}
              <div className="hidden lg:block space-y-3">
                <h2 className="text-base font-bold text-[var(--text)] mb-4 uppercase tracking-wide opacity-60">Explore</h2>
                <Link to="/projects" className="card p-4 hover:border-[var(--primary)]/40 transition-colors group flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">Projects</div>
                    <div className="text-xs text-[var(--muted)]">9+ full-stack, ML & IoT projects</div>
                  </div>
                  <span className="text-[var(--primary)] text-lg">→</span>
                </Link>
                <Link to="/services" className="card p-4 hover:border-[var(--primary)]/40 transition-colors group flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">Services</div>
                    <div className="text-xs text-[var(--muted)]">Web dev, e-commerce & more</div>
                  </div>
                  <span className="text-[var(--primary)] text-lg">→</span>
                </Link>
                <Link to="/contact" className="card p-4 hover:border-[var(--primary)]/40 transition-colors group flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">Contact</div>
                    <div className="text-xs text-[var(--muted)]">WhatsApp, email, or phone</div>
                  </div>
                  <span className="text-[var(--primary)] text-lg">→</span>
                </Link>
              </div>

            </motion.div>
          </div>

        </motion.div>
      </div>
    </main>
  )
}

export default Home
