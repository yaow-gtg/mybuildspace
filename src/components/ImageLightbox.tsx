'use client'

import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentIndex > 0) onPrev()
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNext()
    },
    [onClose, onPrev, onNext, currentIndex, images.length]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const total = images.length
  const isFirst = currentIndex === 0
  const isLast = currentIndex === total - 1

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        className="absolute top-3 right-3 md:top-4 md:right-4 z-50 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 cursor-pointer"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {total > 1 && !isFirst && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 cursor-pointer"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {total > 1 && !isLast && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 cursor-pointer"
          aria-label="Next"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full max-w-[95vw] lg:max-w-4xl h-auto max-h-[85vh] object-contain"
        />
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-white text-xs md:text-sm">
            {currentIndex + 1} / {total}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
