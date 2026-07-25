'use client'

import { useRef, useMemo, type ComponentType } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiVercel,
  SiLaravel,
  SiHtml5,
  SiCss,
  SiJavascript,
} from 'react-icons/si'
import { FaAws, FaMicrosoft } from 'react-icons/fa6'

interface Tech {
  name: string
  color: string
  bgColor: string
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
}

const techs: Tech[] = [
  {
    name: 'React.js',
    color: '#61DAFB',
    bgColor: 'rgba(97,218,251,0.08)',
    icon: (props) => <SiReact color="#61DAFB" {...props} />,
  },
  {
    name: 'Next.js',
    color: '#ffffff',
    bgColor: 'rgba(255,255,255,0.06)',
    icon: (props) => <SiNextdotjs color="#ffffff" {...props} />,
  },
  {
    name: 'Vercel',
    color: '#ffffff',
    bgColor: 'rgba(255,255,255,0.06)',
    icon: (props) => <SiVercel color="#ffffff" {...props} />,
  },
  {
    name: 'AWS',
    color: '#FF9900',
    bgColor: 'rgba(255,153,0,0.08)',
    icon: (props) => <FaAws color="#FF9900" {...props} />,
  },
  {
    name: 'Azure',
    color: '#0078D4',
    bgColor: 'rgba(0,120,212,0.08)',
    icon: (props) => <FaMicrosoft color="#0078D4" {...props} />,
  },
  {
    name: 'Laravel',
    color: '#FF2D20',
    bgColor: 'rgba(255,45,32,0.08)',
    icon: (props) => <SiLaravel color="#FF2D20" {...props} />,
  },
  {
    name: 'HTML',
    color: '#E34F26',
    bgColor: 'rgba(227,79,38,0.08)',
    icon: (props) => <SiHtml5 color="#E34F26" {...props} />,
  },
  {
    name: 'CSS',
    color: '#1572B6',
    bgColor: 'rgba(21,114,182,0.08)',
    icon: (props) => <SiCss color="#1572B6" {...props} />,
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    bgColor: 'rgba(247,223,30,0.08)',
    icon: (props) => <SiJavascript color="#F7DF1E" {...props} />,
  },
]

function TechIcon({ tech }: { tech: Tech }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const bgColor = useMemo(() => {
    const hex = tech.color.replace('#', '')
    const r = Number.parseInt(hex.slice(0, 2), 16)
    const g = Number.parseInt(hex.slice(2, 4), 16)
    const b = Number.parseInt(hex.slice(4, 6), 16)
    return `rgba(${r},${g},${b},0.08)`
  }, [tech.color])

  const Icon = tech.icon

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / 8).toFixed(2)
    const rotateY = ((centerX - x) / 8).toFixed(2)
    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.boxShadow = `0 0 40px ${tech.color}33, 0 0 80px ${tech.color}11`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)'
    card.style.boxShadow = 'none'
  }

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl cursor-pointer transition-all duration-200"
      style={{
        background: bgColor,
        border: '1px solid rgba(255,255,255,0.06)',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-3xl md:text-4xl">
        <Icon className="w-full h-full" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <span className="text-xs font-medium text-zinc-300">{tech.name}</span>
    </div>
  )
}

export default function TechStack() {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-5 max-w-md mx-auto">
      {techs.map((tech) => (
        <TechIcon key={tech.name} tech={tech} />
      ))}
    </div>
  )
}
