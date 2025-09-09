import React from 'react'
import { motion } from 'framer-motion'
import { Search, X, Filter } from 'lucide-react'
import { riseIn, staggerWrap, press } from '../lib/motion'
import { cn } from '../lib/utils'

const ProjectFilters = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  projectCount,
  totalCount
}) => {
  return (
    <motion.div
      variants={staggerWrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Search Bar */}
      <motion.div variants={riseIn} className="relative max-w-md mx-auto">
        <div className="relative">
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted)]" 
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-[var(--primary)] transition-all"
          />
          {searchTerm && (
            <motion.button
              {...press}
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-[var(--muted)] hover:text-[var(--text)] transition-colors focus-ring rounded"
              aria-label="Clear search"
            >
              <X size={16} />
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div variants={riseIn}>
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <Filter size={16} />
            <span>Filter by category:</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {/* All Categories */}
          <motion.button
            {...press}
            onClick={() => onCategoryChange('all')}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-ring',
              activeCategory === 'all'
                ? 'bg-[var(--primary)] text-black ring-2 ring-[var(--ring)] ring-offset-2 ring-offset-black'
                : 'bg-white/5 text-[var(--text)] border border-white/10 hover:bg-white/10 hover:border-[var(--primary)]/30'
            )}
          >
            All Projects
          </motion.button>

          {/* Individual Categories */}
          {categories.map((category) => (
            <motion.button
              key={category}
              {...press}
              onClick={() => onCategoryChange(category)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-ring',
                activeCategory === category
                  ? 'bg-[var(--primary)] text-black ring-2 ring-[var(--ring)] ring-offset-2 ring-offset-black'
                  : 'bg-white/5 text-[var(--text)] border border-white/10 hover:bg-white/10 hover:border-[var(--primary)]/30'
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Results Counter */}
      <motion.div 
        variants={riseIn}
        className="text-center"
      >
        <p className="text-sm text-[var(--muted)]">
          Showing <span className="font-medium text-[var(--text)]">{projectCount}</span> of{' '}
          <span className="font-medium text-[var(--text)]">{totalCount}</span> projects
          {searchTerm && (
            <span className="ml-1">
              for "<span className="text-[var(--primary)]">{searchTerm}</span>"
            </span>
          )}
          {activeCategory !== 'all' && (
            <span className="ml-1">
              in <span className="text-[var(--primary)]">{activeCategory}</span>
            </span>
          )}
        </p>
      </motion.div>

      {/* Active Filters */}
      {(searchTerm || activeCategory !== 'all') && (
        <motion.div 
          variants={riseIn}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xs text-[var(--muted)]">Active filters:</span>
          
          {activeCategory !== 'all' && (
            <motion.button
              {...press}
              onClick={() => onCategoryChange('all')}
              className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--primary)]/20 text-[var(--primary)] rounded-md text-xs hover:bg-[var(--primary)]/30 transition-colors focus-ring"
            >
              {activeCategory}
              <X size={12} />
            </motion.button>
          )}
          
          {searchTerm && (
            <motion.button
              {...press}
              onClick={() => onSearchChange('')}
              className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--primary)]/20 text-[var(--primary)] rounded-md text-xs hover:bg-[var(--primary)]/30 transition-colors focus-ring"
            >
              "{searchTerm}"
              <X size={12} />
            </motion.button>
          )}
          
          <motion.button
            {...press}
            onClick={() => {
              onCategoryChange('all')
              onSearchChange('')
            }}
            className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors focus-ring rounded px-1"
          >
            Clear all
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}
export function filterProjects(projects, category = 'all', searchTerm = '') {
  if (!projects || !Array.isArray(projects)) {
    return []
  }

  return projects.filter(project => {
    // Use technologies instead of tags, with fallback
    const projectTags = project.technologies || project.tags || []
    
    const matchesCategory = category === 'all' || projectTags.some(tag => 
      tag.toLowerCase() === category.toLowerCase()
    )
    
    const matchesSearch = searchTerm === '' || 
      (project.title && project.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.shortDescription && project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) ||
      projectTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })
}
export default ProjectFilters