import StarField from '@/components/StarField'
import ProfileAvatar from '@/components/ProfileAvatar'
import ScrollReveal from '@/components/ScrollReveal'
import AboutSection from '@/components/AboutSection'
import TechStack from '@/components/TechStack'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import { FaGithub, FaInstagram } from 'react-icons/fa6'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarField />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
          <ProfileAvatar />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-8 text-white text-center leading-tight">
            Farhan Ridho Illahi
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 mt-4 max-w-xl text-center">
            Computer Engineering Student & Fullstack Developer. Helping people through innovative and solution driven digital solutions
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent hover:bg-accent-dark rounded-full transition-all text-background font-medium text-sm md:text-base"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-zinc-600 hover:border-accent rounded-full transition-all text-zinc-300 font-medium text-sm md:text-base"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative py-24 md:py-32 px-4"
      >
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
      </section>

      {/* Tech Stack */}
      <section
        id="tech"
        className="relative py-24 md:py-32 px-4"
      >
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-white">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </ScrollReveal>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative py-24 md:py-32 px-4"
      >
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-white">
              Projects
            </h2>
            <ProjectsSection />
          </div>
        </ScrollReveal>
      </section>

      {/* Education */}
      <section
        id="education"
        className="relative py-24 md:py-32 px-4"
      >
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-white">
              Education
            </h2>
            <EducationSection />
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 px-4">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="inline-flex items-center gap-5 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-full px-6 py-3">
            <span className="text-sm text-zinc-300 pr-5 border-r border-zinc-700">
              Contact Me
            </span>
            <a
              href="https://github.com/yaow-gtg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accent transition-all duration-200 hover:scale-125"
              title="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/farhanrii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accent transition-all duration-200 hover:scale-125"
              title="Instagram"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
