import type { Metadata } from 'next'
import StarField from '@/components/StarField'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectsSection from '@/components/ProjectsSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'All projects built by Farhan Ridho Illahi.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects',
    description: 'All projects built by Farhan Ridho Illahi.',
  },
  twitter: {
    title: 'Projects',
    description: 'All projects built by Farhan Ridho Illahi.',
  },
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen pt-14">
      <StarField />
      <section className="relative py-24 md:py-32 px-4">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
              Projects
            </h1>
            <p className="text-zinc-400 text-center mb-12 md:mb-16 mx-auto">I work on various projects, from simple websites to complex web applications</p>
            <ProjectsSection />
          </div>
        </ScrollReveal>
      </section>
      <Footer />
    </main>
  )
}
