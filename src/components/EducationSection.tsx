export default function EducationSection() {
  return (
    <div className="space-y-8">
      <div className="glass rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-semibold text-white">
              D3 Teknik Informatika
            </h3>
            <p className="text-purple-400">Universitas — Computer Science</p>
          </div>
          <span className="text-zinc-500 text-sm whitespace-nowrap">
            2021 — 2024
          </span>
        </div>
        <p className="text-zinc-400 leading-relaxed">
          Focused on software engineering, web development, and database
          management. Graduated with hands-on experience building full-stack
          applications and collaborating on team-based software projects.
        </p>
      </div>

      <div className="glass rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Fullstack Web Development Bootcamp
            </h3>
            <p className="text-purple-400">Online Course — Intensive Program</p>
          </div>
          <span className="text-zinc-500 text-sm whitespace-nowrap">
            2024
          </span>
        </div>
        <p className="text-zinc-400 leading-relaxed">
          Intensive bootcamp covering modern web technologies including
          React.js, Next.js, Node.js, cloud deployment, and database
          management. Built multiple production-ready projects with modern
          development workflows.
        </p>
      </div>
    </div>
  )
}
