// src/content/projects.js - Updated with correct information

export const projects = [
  {
    id: 'dinelink',
    title: 'DineLink – Smart Restaurant Management Platform',
    shortDescription: 'AI-powered restaurant management startup transforming dining operations',
    description: 'A comprehensive restaurant management platform that transforms traditional dining operations into intelligent, data-driven experiences. Founded and leading a startup that combines modern web technology with artificial intelligence.',
    detailedDescription: `DineLink is my startup venture that revolutionizes restaurant operations by combining modern web technology with artificial intelligence. As the founder, I've led the development of a platform that offers a complete solution for both customers and restaurant staff, accessible entirely through web browsers without requiring app downloads.

The system features an AI Smart Ordering Assistant that guides customers through menu selections, a real-time staff heatmap showing service efficiency, and an AI Business Advisor providing actionable insights. The platform maintains real-time control over all operations with a comprehensive feedback loop system.

Built with enterprise-grade scalability in mind, DineLink can handle multiple restaurant locations while providing centralized management and analytics. The QR code-based access ensures seamless customer onboarding while the progressive web app architecture delivers native app-like performance.`,
    
    features: [
      'AI Smart Ordering Assistant for personalized recommendations',
      'Real-time staff heatmaps and performance analytics',
      'AI Business Advisor with actionable insights',
      'Real-time operational control and monitoring',
      'Comprehensive feedback loop system',
      'QR code-based customer access',
      'Mobile-optimized progressive web app',
      'Multi-location management capabilities'
    ],
    
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'SQL', 'Next.js', 'Tailwind', 'Python', 'Cloudflare', 'Digital Ocean'],
    category: 'Startup',
    status: 'Active',
    year: '2025 ',
    duration: 'Ongoing',
    
    impact: {
      recognition: 'Winner of Falling Walls Lab Jordan 2025',
      achievement: 'Selected to represent Jordan at Global Finale in Berlin',
      program: 'Developed through GJU Mentorship Program',
      testing: 'Successfully pilot tested with restaurant partners'
    },
    
    vision: 'Transform blind, outdated restaurant operations into intelligent, data-driven hospitality experiences that delight customers and empower staff.',
    
    link: 'dinelink.org',
    images: {
      cover: '/images/projects/dinelink-cover.jpg',
      gallery: [
        '/images/projects/dinelink-1.jpg',
        '/images/projects/dinelink-2.jpg'
      ]
    },
    
    role: 'Founder & CEO',
    team: 'Startup team with development partners',
    
    challenges: [
      'Building scalable restaurant management architecture',
      'Implementing AI-driven analytics and recommendations',
      'Ensuring reliable QR code-based access across devices',
      'Creating intuitive interfaces for restaurant staff'
    ],
    
    solutions: [
      'Enterprise-grade backend with Java Spring Boot',
      'Custom AI algorithms for operational insights',
      'Robust QR code generation with error correction',
      'User-centered design with extensive testing'
    ],
    
    featured: true,
    priority: 1
  },
  
  {
    id: 'onesalt',
    title: 'OneSalt – Online Clothing Store',
    shortDescription: 'Full-stack e-commerce platform for Jordanian fashion brand',
    description: 'Complete e-commerce solution featuring customer storefront, admin management system, and secure backend API. Built for a Jordanian clothing brand with modern design and seamless shopping experience.',
    detailedDescription: `OneSalt represents a complete e-commerce ecosystem built from the ground up for a Jordanian clothing brand. The project encompasses three main components: a customer-facing storefront, a comprehensive admin panel, and a robust backend API.

The storefront provides an elegant shopping experience with product catalog browsing, detailed product pages, shopping cart functionality, secure checkout process, and order confirmation flow. The admin panel empowers store managers with product management, order processing, inventory tracking, and customer management capabilities.

The backend API ensures secure data handling, user authentication, order processing, and payment integration. The entire system is deployed with modern development practices for seamless updates and maintenance.`,
    
    features: [
      'Modern responsive product catalog',
      'Detailed product pages with image galleries',
      'Shopping cart with persistent storage',
      'Secure checkout and payment processing',
      'Admin dashboard for product management',
      'Order management and tracking system',
      'Customer management and analytics',
      'Inventory tracking and alerts',
      'Real-time order status updates'
    ],
    
    technologies: ['React.js', 'Vite', 'Tailwind', 'Node.js', 'Express', 'Supabase'],
    category: 'E-Commerce',
    status: 'Deployed',
    year: 'Aug 2025',
    duration: '4 weeks',
    
    deployment: {
      frontend: 'Modern hosting platform',
      backend: 'Cloud deployment',
      database: 'Supabase',
      development: 'Vite build system'
    },
    
    link: 'wearonesalt.com',
    
    images: {
      cover: '/images/projects/onesalt-cover.jpg',
      gallery: [
        '/images/projects/onesalt-1.jpg',
        '/images/projects/onesalt-2.jpg'
      ]
    },
    
    role: 'Full-Stack Developer',
    team: 'Solo project',
    
    challenges: [
      'Implementing secure payment processing',
      'Creating intuitive admin interface for non-tech users',
      'Ensuring fast loading times for product images',
      'Managing complex product variants and inventory'
    ],
    
    solutions: [
      'Integrated trusted payment gateways with encryption',
      'Designed user-centered admin workflow with clear navigation',
      'Implemented image optimization and lazy loading',
      'Created flexible product variant system with Supabase'
    ],
    
    featured: true,
    priority: 2
  },
  
  {
    id: 'just-cook',
    title: 'Just Cook – Smart Restaurant Ordering System',
    shortDescription: 'Browser-based ordering system with Google Sheets backend integration',
    description: 'Innovative restaurant ordering and management system using Google Sheets as a database backend. Features real-time order tracking, admin dashboard, and comprehensive order management tools.',
    detailedDescription: `Just Cook demonstrates innovative use of Google Sheets as a backend database for a fully functional restaurant ordering system. This approach provides an accessible, cost-effective solution while maintaining professional functionality.

The system features a customer-facing ordering interface that's completely browser-based, requiring no app installation. Customers can browse the menu, customize orders, and track their order status in real-time. The admin dashboard provides comprehensive order management with search, filtering, status updates, and reporting capabilities.

Integration with Google Sheets API creates a powerful yet simple backend system that's both flexible and maintainable. The solution includes print-ready order formats for kitchen operations, making it perfect for small to medium restaurants.`,
    
    features: [
      'Browser-based customer ordering interface',
      'Real-time order tracking and updates',
      'Admin dashboard with comprehensive management',
      'Advanced search and filtering capabilities',
      'Order status management and notifications',
      'Print-ready order formats for kitchen staff',
      'Google Sheets integration for data management',
      'Automated order numbering and timestamps',
      'Cost-effective solution for small restaurants'
    ],
    
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Sheets API'],
    category: 'Restaurant Tech',
    status: 'Deployed',
    year: ' 2025',
    duration: '2 weeks',
    
    innovation: {
      approach: 'Using Google Sheets as a database alternative',
      benefit: 'Cost-effective solution with familiar interface for restaurant staff',
      scalability: 'Easy data management and reporting through Sheets interface'
    },
    
    link:'justcook1.netlify.app',
    
    
    images: {
      cover: '/images/projects/justcook-cover.jpg',
      gallery: [
        '/images/projects/justcook-1.jpg',
        '/images/projects/justcook-2.jpg'
      ]
    },
    
    role: 'Full-Stack Developer & Systems Designer',
    team: 'Solo project',
    
    challenges: [
      'Working within Google Sheets API limitations',
      'Ensuring data consistency without traditional database features',
      'Creating responsive interface without modern frameworks',
      'Managing real-time updates through Sheets backend'
    ],
    
    solutions: [
      'Implemented clever caching and batching strategies',
      'Created data validation layers in Google Apps Script',
      'Used modern CSS Grid and Flexbox for responsiveness',
      'Developed efficient polling system for near real-time updates'
    ],
    
    featured: true,
    priority: 3
  }
]

// Utility functions
export function getFeaturedProjects() {
  return projects
    .filter(project => project.featured)
    .sort((a, b) => a.priority - b.priority)
}

export function getProjectById(id) {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category) {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export function getProjectCategories() {
  return [...new Set(projects.map(project => project.category))]
}

export function getProjectTags() {
  const allTags = projects.reduce((tags, project) => {
    return tags.concat(project.technologies)
  }, [])
  return [...new Set(allTags)].sort()
}

export function searchProjects(query) {
  const searchTerm = query.toLowerCase()
  return projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
  )
}