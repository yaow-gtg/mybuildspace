'use client'

import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  src: string
  onClose: () => void
}

export default function ImageLightbox({ src, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        className="absolute top-3 right-3 md:top-4 md:right-4 z-50 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img src={src} alt="" className="w-full max-w-[95vw] lg:max-w-4xl h-auto max-h-[85vh] object-contain cursor-pointer" />
    </div>,
    document.body
  )
}
