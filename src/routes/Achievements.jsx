import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Trophy, Flag, Mic, Star, Lightbulb, GraduationCap, Shield } from 'lucide-react'
import { riseIn, staggerWrap } from '../lib/motion'
import { achievements } from '../content/achievements'

const iconMap = {
  Trophy,
  Flag,
  Mic,
  Star,
  Lightbulb,
  GraduationCap,
  Shield,
}

const typeColors = {
  award: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  recognition: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  competition: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  program: 'text-green-400 bg-green-400/10 border-green-400/20',
  training: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
}

const Achievements = () => {
  const featured = achievements.filter((a) => a.featured)
  const rest = achievements.filter((a) => !a.featured)

  return (
    <main id="main-content" className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div variants={staggerWrap} initial="hidden" animate="show">

          {/* Header */}
          <motion.div variants={riseIn} className="pt-10 lg:pt-16 mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-3">Achievements</h1>
            <p className="text-[var(--muted)]">Awards, recognitions, and programs I've been part of.</p>
          </motion.div>

          {/* Featured */}
          <motion.div variants={riseIn} className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-4">Highlights</h2>
            <div className="space-y-4">
              {featured.map((a) => {
                const Icon = iconMap[a.icon] || Trophy
                return (
                  <div key={a.id} className="card p-5 border-[var(--primary)]/20">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                        <Icon size={18} className="text-[var(--primary)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-[var(--text)] text-sm leading-snug">{a.title}</h3>
                          <span className="text-xs text-[var(--muted)] shrink-0">{a.date}</span>
                        </div>
                        <div className="text-xs text-[var(--primary)] font-medium mb-2">{a.organization}</div>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">{a.description}</p>
                        {a.link && (
                          <a
                            href={a.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-3 text-xs text-[var(--primary)] hover:underline"
                          >
                            Read more <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Rest */}
          <motion.div variants={riseIn}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-4">More</h2>
            <div className="space-y-3">
              {rest.map((a) => {
                const Icon = iconMap[a.icon] || Trophy
                const colorClass = typeColors[a.type] || typeColors.program
                return (
                  <div key={a.id} className="card p-4">
                    <div className="flex items-start gap-3">
                      <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border ${colorClass}`}>
                        <Icon size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-0.5">
                          <h3 className="font-medium text-[var(--text)] text-sm leading-snug">{a.title}</h3>
                          <span className="text-xs text-[var(--muted)] shrink-0">{a.date}</span>
                        </div>
                        <div className="text-xs text-[var(--muted)] mb-1">{a.organization}</div>
                        <p className="text-xs text-[var(--muted)] leading-relaxed">{a.description}</p>
                        {a.link && (
                          <a
                            href={a.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-xs text-[var(--primary)] hover:underline"
                          >
                            Read more <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  )
}

export default Achievements
