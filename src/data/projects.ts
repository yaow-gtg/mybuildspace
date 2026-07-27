export interface Project {
  title: string
  description: string
  url: string
  tags: string[]
  images: string[]
  gradient: string
}

export const projects: Project[] = [
  {
    title: 'Portofolio',
    description:
      'Personal portfolio website showcasing projects, skills, and experience. Built with Next.js and Tailwind CSS featuring a cosmic dark theme.',
    url: 'https://mybuildspace.vercel.app',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    images: ['/images/porto.png'],
    gradient: 'from-accent/20 to-accent-light/20',
  },
  {
    title: 'Company Profile',
    description:
      'Professional website for an auto repair shop specializing in 4WD vehicles while also serving regular cars. Features service showcases, workshop information, and contact integration.',
    url: 'https://4wdspeedcenter.vercel.app/',
    images: ['/images/4wdspeedcenter.png'],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    gradient: 'from-accent/20 to-accent-dark/20',
  },
  {
    title: 'Admin Dashboard',
    description:
      'Comprehensive admin panel with data visualization, user management, and role-based access control.',
    url: 'https://dashboard-prod.netlify.app',
    tags: ['React', 'Next.js', 'Azure', 'CSS'],
    images: [],
    gradient: 'from-accent/20 to-accent-dark/20',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with payment gateway, inventory management, and real-time analytics dashboard.',
    url: 'https://ecommerce-demo.vercel.app',
    tags: ['Next.js', 'React', 'Laravel', 'AWS'],
    images: [],
    gradient: 'from-accent-light/20 to-accent-dark/20',
  },
]
