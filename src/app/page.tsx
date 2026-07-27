import StarField from '@/components/StarField'
import ProfileAvatar from '@/components/ProfileAvatar'
import ScrollReveal from '@/components/ScrollReveal'
import AboutSection from '@/components/AboutSection'
import TechStack from '@/components/TechStack'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarField />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Farhan Ridho Illahi
            </h1>
            <p className="text-base md:text-lg text-zinc-300 mt-4 max-w-xl text-left">
              Computer Engineering Student & Fullstack Developer. Helping people through innovative and solution driven digital solutions
            </p>
            <div className="flex justify-start gap-4 mt-8">
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
          <div className="flex-shrink-0">
            <ProfileAvatar />
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
            <ProjectsSection limit={2} showSeeAll />
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}
