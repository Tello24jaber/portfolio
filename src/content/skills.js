export const skills = [
  // Frontend Technologies
  {
    name: 'HTML5',
    level: 5,
    category: 'Frontend',
    keywords: ['markup', 'semantic', 'accessibility'],
    icon: 'FileCode2',
    description: 'Semantic markup and modern HTML5 features'
  },
  {
    name: 'CSS3',
    level: 5,
    category: 'Frontend',
    keywords: ['styling', 'responsive', 'animations'],
    icon: 'Palette',
    description: 'Advanced CSS including Grid, Flexbox, and animations'
  },
  {
    name: 'JavaScript',
    level: 5,
    category: 'Frontend',
    keywords: ['es6', 'async', 'dom'],
    icon: 'Code2',
    description: 'Modern JavaScript ES6+ and DOM manipulation'
  },
  {
    name: 'React.js',
    level: 5,
    category: 'Frontend',
    keywords: ['components', 'hooks', 'state'],
    icon: 'Atom',
    description: 'Advanced React with hooks, context, and modern patterns'
  },
  {
    name: 'Next.js',
    level: 2,
    category: 'Frontend',
    keywords: ['ssr', 'routing', 'optimization'],
    icon: 'Boxes',
    description: 'Server-side rendering and static site generation'
  },
  {
    name: 'Tailwind CSS',
    level: 5,
    category: 'Frontend',
    keywords: ['utility', 'responsive', 'design'],
    icon: 'Wind',
    description: 'Utility-first CSS framework for rapid UI development'
  },
  {
    name: 'Vite',
    level: 4,
    category: 'Frontend',
    keywords: ['build', 'dev-tools', 'fast'],
    icon: 'Bolt',
    description: 'Lightning-fast build tool for modern web projects'
  },

  // Backend Technologies
  {
    name: 'Node.js',
    level: 4,
    category: 'Backend',
    keywords: ['runtime', 'server', 'api'],
    icon: 'Server',
    description: 'Server-side JavaScript runtime and API development'
  },
  {
    name: 'Express.js',
    level: 4,
    category: 'Backend',
    keywords: ['framework', 'middleware', 'routing'],
    icon: 'Route',
    description: 'Fast and minimalist web framework for Node.js'
  },
  {
    name: 'Java',
    level: 4,
    category: 'Backend',
    keywords: ['oop', 'enterprise', 'robust'],
    icon: 'Coffee',
    description: 'Object-oriented programming and enterprise applications'
  },
  {
    name: 'Spring Boot',
    level: 1,
    category: 'Backend',
    keywords: ['framework', 'microservices', 'java'],
    icon: 'Leaf',
    description: 'Java framework for building enterprise applications'
  },

  // Database Technologies
  {
    name: 'Supabase',
    level: 4,
    category: 'Database',
    keywords: ['postgresql', 'realtime', 'auth'],
    icon: 'Database',
    description: 'Open-source Firebase alternative with PostgreSQL'
  },
  {
    name: 'PostgreSQL',
    level: 2,
    category: 'Database',
    keywords: ['relational', 'sql', 'advanced'],
    icon: 'Cylinder',
    description: 'Advanced relational database with powerful features'
  },
  {
    name: 'SQL',
    level: 2,
    category: 'Database',
    keywords: ['queries', 'joins', 'optimization'],
    icon: 'Table2',
    description: 'Complex queries, joins, and database optimization'
  },
  {
    name: 'Google Sheets API',
    level: 4,
    category: 'Database',
    keywords: ['integration', 'automation', 'data'],
    icon: 'Sheet',
    description: 'Integration and automation with Google Sheets'
  },

  // DevOps & Deployment
  {
    name: 'CI/CD',
    level: 3,
    category: 'DevOps',
    keywords: ['automation', 'pipeline', 'deployment'],
    icon: 'Workflow',
    description: 'Continuous integration and deployment pipelines'
  },
  {
    name: 'Deployment',
    level: 4,
    category: 'DevOps',
    keywords: ['netlify', 'vercel', 'render'],
    icon: 'Rocket',
    description: 'Cloud deployment on Netlify, Vercel, and Render'
  },
  {
    name: 'Git & GitHub',
    level: 4,
    category: 'DevOps',
    keywords: ['version-control', 'collaboration', 'workflow'],
    icon: 'GitBranch',
    description: 'Version control and collaborative development workflows'
  },

  // APIs & Integration
  {
    name: 'REST APIs',
    level: 4,
    category: 'APIs',
    keywords: ['http', 'json', 'integration'],
    icon: 'Network',
    description: 'RESTful API design, development, and integration'
  },
  {
    name: 'Google Apps Script',
    level: 4,
    category: 'APIs',
    keywords: ['automation', 'google', 'scripting'],
    icon: 'Code',
    description: 'Automation and custom functions for Google Workspace'
  },

  // Emerging Technologies
  {
    name: 'AI Integration',
    level: 2,
    category: 'AI/ML',
    keywords: ['chatgpt', 'automation', 'smart'],
    icon: 'Bot',
    description: 'Integration of AI services for smart applications'
  },
  {
    name: 'Progressive Web Apps',
    level: 3,
    category: 'Frontend',
    keywords: ['pwa', 'offline', 'mobile'],
    icon: 'Smartphone',
    description: 'Building app-like web experiences with PWA features'
  }
]

// Utility functions for working with skills
export function getSkillsByCategory(category) {
  return skills.filter(skill => skill.category === category)
}

export function getSkillCategories() {
  return [...new Set(skills.map(skill => skill.category))]
}

export function getTopSkills(limit = 8) {
  return skills
    .sort((a, b) => b.level - a.level)
    .slice(0, limit)
}