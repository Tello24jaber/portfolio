import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { siteConfig } from '../content/site'

const Footer = () => {
  const { name, socials } = siteConfig

  return (
    <footer className="border-t border-white/10 bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand + nav */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-sm">
            <Link to="/" className="font-bold text-[var(--primary)] hover:opacity-80 transition-opacity">
              {name}
            </Link>
            <Link to="/projects" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Projects</Link>
            <Link to="/services" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Services</Link>
            <Link to="/contact" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Contact</Link>
          </div>

          {/* Social links + back to top */}
          <div className="flex items-center gap-2">
            <a href={socials.github} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={socials.email}
              className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary)] transition-colors ml-1"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-[var(--muted)] mt-6">
          © {new Date().getFullYear()} {name} · Amman, Jordan
        </p>
      </div>
    </footer>
  )
}

export default Footer

