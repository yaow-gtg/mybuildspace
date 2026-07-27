import type { Metadata } from 'next'
import StarField from '@/components/StarField'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectsSection from '@/components/ProjectsSection'

export const metadata: Metadata = {
  title: 'Projects — Farhan Ridho Illahi',
  description:
    'A collection of projects built by Farhan Ridho Illahi — from fullstack apps to landing pages.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects — Farhan Ridho Illahi',
    description:
      'A collection of projects built by Farhan Ridho Illahi — from fullstack apps to landing pages.',
  },
  twitter: {
    title: 'Projects — Farhan Ridho Illahi',
    description:
      'A collection of projects built by Farhan Ridho Illahi — from fullstack apps to landing pages.',
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
            <p className="text-zinc-400 text-center mb-12 md:mb-16 max-w-lg mx-auto">
              A collection of projects I&apos;ve built — from fullstack apps to landing pages.
            </p>
            <ProjectsSection />
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
