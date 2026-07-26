'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-14 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-5xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-tight hover:text-accent transition-colors"
        >
          FRI
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  active
                    ? 'bg-accent/10 text-accent font-medium'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
