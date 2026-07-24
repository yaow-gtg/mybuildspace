import StarField from '@/components/StarField'
import ProfileAvatar from '@/components/ProfileAvatar'
import ScrollReveal from '@/components/ScrollReveal'
import AboutSection from '@/components/AboutSection'
import TechStack from '@/components/TechStack'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarField />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
          <ProfileAvatar />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-8 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent text-center leading-tight">
            Farhan Ridho Illahi
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mt-4 max-w-xl text-center">
            Fullstack Developer crafting modern digital experiences
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-full transition-all text-white font-medium text-sm md:text-base"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-zinc-600 hover:border-purple-400 rounded-full transition-all text-zinc-300 font-medium text-sm md:text-base"
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Education
            </h2>
            <EducationSection />
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-6">

          <a
            href="#"
            className="text-zinc-500 hover:text-purple-400 transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-purple-400 transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-purple-400 transition-colors text-sm"
          >
            Email
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-400 transition-colors text-sm"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </main>
  )
}
