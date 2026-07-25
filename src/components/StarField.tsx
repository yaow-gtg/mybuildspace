'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stars: HTMLDivElement[] = []

    for (let i = 0; i < 250; i++) {
      const star = document.createElement('div')
      star.style.cssText = `
        position: absolute;
        width: ${Math.random() * 2 + 1}px;
        height: ${Math.random() * 2 + 1}px;
        background: white;
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.4 + 0.15};
        animation: twinkle ${Math.random() * 4 + 2}s ease-in-out ${Math.random() * 6}s infinite;
      `
      container.appendChild(star)
      stars.push(star)
    }

    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div')
      star.style.cssText = `
        position: absolute;
        width: ${Math.random() * 2 + 2}px;
        height: ${Math.random() * 2 + 2}px;
        background: white;
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.4 + 0.3};
        animation: twinkle ${Math.random() * 5 + 3}s ease-in-out ${Math.random() * 8}s infinite;
        box-shadow: 0 0 4px rgba(255,255,255,0.3);
      `
      container.appendChild(star)
      stars.push(star)
    }

    return () => {
      stars.forEach((s) => s.remove())
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden" />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-light/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-dark/8 rounded-full blur-3xl" />
      </div>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="shooting-star" style={{ top: '15%', right: '20%', animationDelay: '1s' }} />
        <div className="shooting-star" style={{ top: '35%', right: '40%', animationDelay: '6s', animationDuration: '5s' }} />
        <div className="shooting-star" style={{ top: '55%', right: '30%', animationDelay: '12s', animationDuration: '3.5s' }} />
        <div className="shooting-star" style={{ top: '25%', right: '50%', animationDelay: '18s', animationDuration: '4.5s' }} />
        <div className="shooting-star" style={{ top: '45%', right: '15%', animationDelay: '24s', animationDuration: '3s' }} />
      </div>
    </>
  )
}
