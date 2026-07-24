'use client'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with payment gateway, inventory management, and real-time analytics dashboard.',
    url: 'https://ecommerce-demo.vercel.app',
    tags: ['Next.js', 'React', 'Laravel', 'AWS'],
    gradient: 'from-purple-600/20 to-blue-600/20',
  },
  {
    title: 'Admin Dashboard',
    description:
      'Comprehensive admin panel with data visualization, user management, and role-based access control.',
    url: 'https://dashboard-prod.netlify.app',
    tags: ['React', 'Next.js', 'Azure', 'CSS'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
  },
  {
    title: 'Company Profile',
    description:
      'Modern company landing page with dynamic content, SEO optimization, and multi-language support.',
    url: 'https://company-site.vercel.app',
    tags: ['Next.js', 'React.js', 'HTML', 'JS'],
    gradient: 'from-violet-600/20 to-purple-600/20',
  },
  {
    title: 'API Service',
    description:
      'RESTful API service with authentication, rate limiting, caching, and comprehensive documentation.',
    url: 'https://api-service.example.com',
    tags: ['Laravel', 'AWS', 'Vercel', 'JS'],
    gradient: 'from-amber-600/20 to-orange-600/20',
  },
]

export default function ProjectsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-6">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group glass rounded-xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
        >
          <div
            className={`h-32 rounded-lg mb-4 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-zinc-500 group-hover:text-purple-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Visit website</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </a>
      ))}
    </div>
  )
}
