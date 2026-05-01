'use client'

import { useEffect, useCallback, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageGalleryModal({ images, isOpen, onClose, startIndex = 0 }) {
  const [i, setI] = useState(startIndex)
  const touchX = useRef(null)

  useEffect(() => {
    if (isOpen) setI(startIndex)
  }, [isOpen, startIndex])

  const total = images?.length ?? 0
  const next = useCallback(() => setI(v => (v + 1) % total), [total])
  const prev = useCallback(() => setI(v => (v - 1 + total) % total), [total])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    },
    [onClose, next, prev]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  // Preload neighbours
  useEffect(() => {
    if (!isOpen || total === 0) return
    const preload = (idx) => {
      const img = new Image()
      img.src = images[(idx + total) % total]
    }
    preload(i + 1)
    preload(i - 1)
  }, [i, isOpen, images, total])

  if (!images || total === 0) return null

  const current = images[i]
  const filename = current.split('/').pop()
  const counter = `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
    touchX.current = null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-canvas" style={{ opacity: 0.96 }} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider uppercase flex items-center gap-2"
          >
            Close
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 z-20 font-mono text-xs text-accent tracking-[0.2em] uppercase">
            {counter}
          </div>

          {/* Prev arrow */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous image"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-muted hover:text-accent transition-colors"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next arrow */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next image"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-muted hover:text-accent transition-colors"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="relative w-full max-w-6xl mx-6 md:mx-16"
            style={{ aspectRatio: '16 / 10' }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="absolute -inset-px border border-rule" style={{ pointerEvents: 'none' }} />

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={current}
                alt={filename}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
              />
            </AnimatePresence>
          </motion.div>

          {/* Filename strip */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center pointer-events-none">
            <span className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase truncate max-w-[60%]">
              {filename}
            </span>
            <span className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase hidden md:block">
              ← / → to navigate · Esc to close
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
