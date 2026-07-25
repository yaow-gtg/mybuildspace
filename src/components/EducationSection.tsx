export default function EducationSection() {
  return (
    <div className="space-y-8">
      <div className="glass rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-semibold text-white">
              D3 Teknik Komputer
            </h3>
            <p className="text-accent">Universitas Pembangunan Panca Budi</p>
          </div>
          <span className="text-zinc-400 text-sm whitespace-nowrap">
            2023 — Present
          </span>
        </div>
        <p className="text-zinc-300 leading-relaxed">
          Focused on cloud engineering, specializing in maximizing cloud
          computing services to build scalable and efficient infrastructure.
          Experienced in deploying and managing resources across major cloud
          platforms, with a strong emphasis on automation, monitoring, and cost
          optimization. Passionate about architecting resilient cloud-native
          solutions that drive innovation and business growth.
        </p>
      </div>

      <div className="glass rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Cloud Computing
            </h3>
            <p className="text-accent">Amazon Web Services</p>
          </div>
          <span className="text-zinc-400 text-sm whitespace-nowrap">
            2025
          </span>
        </div>
        <p className="text-zinc-300 leading-relaxed">
          Learned the fundamentals of cloud computing on AWS and applied them
          in my undergraduate thesis project. Gained hands-on experience with
          core AWS services including EC2, S3, and Lambda, and explored
          cloud architecture patterns for scalable and cost-efficient
          deployments.
        </p>
      </div>
    </div>
  )
}
