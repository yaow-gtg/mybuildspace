'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ImageLightbox from './ImageLightbox'

interface Props {
  limit?: number
  showSeeAll?: boolean
}

const PREVIEW_LIMIT = 4

export default function ProjectsSection({ limit, showSeeAll }: Props) {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const displayed = limit ? projects.slice(0, limit) : projects

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {displayed.map((project) => (
          <div
            key={project.title}
            className="group glass rounded-xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
          >
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ) : (
              <div className="block">
                <h3 className="text-xl font-bold text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.images.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.images.slice(0, PREVIEW_LIMIT).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox({ images: project.images, index: i })}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-accent transition-colors"
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
                {project.images.length > PREVIEW_LIMIT && (
                  <button
                    onClick={() => setLightbox({ images: project.images, index: PREVIEW_LIMIT })}
                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-accent transition-colors"
                  >
                    <img
                      src={project.images[PREVIEW_LIMIT]}
                      alt=""
                      className="w-full h-full object-cover opacity-40 blur-[1px]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-accent font-semibold">
                      +{project.images.length - PREVIEW_LIMIT}
                    </span>
                  </button>
                )}
              </div>
            ) : (
              <div
                className={`mt-4 h-16 md:h-20 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-zinc-400"
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
            )}

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity"
              >
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
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 mt-4 text-sm text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-not-allowed">
                <span>URL not available</span>
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
              </span>
            )}
          </div>
        ))}
      </div>
      {showSeeAll && (
        <div className="flex justify-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-600 hover:border-accent rounded-full transition-all text-zinc-300 hover:text-accent font-medium text-sm"
          >
            See All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox(prev => prev && { ...prev, index: prev.index - 1 })}
          onNext={() => setLightbox(prev => prev && { ...prev, index: prev.index + 1 })}
        />
      )}
    </>
  )
}
