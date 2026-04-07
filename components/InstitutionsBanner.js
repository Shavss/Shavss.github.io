'use client'

import { useEffect, useRef } from 'react'

const INSTITUTIONS = [
  'Technical University of Munich',
  'University of Glasgow',
  'Siemens',
  'David Chipperfield Architects',
  'ZM-I',
  'Innovia Partners',
  'MIT Senseable City Lab',
]

const ITEMS = [...INSTITUTIONS, ...INSTITUTIONS]

export default function InstitutionsBanner() {
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const rafRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const speed = 0.35

    const tick = () => {
      if (!pausedRef.current) {
        const halfWidth = track.scrollWidth / 2
        posRef.current += speed
        if (posRef.current >= halfWidth) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const pause = () => { pausedRef.current = true }
    const resume = () => { pausedRef.current = false }

    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(rafRef.current)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <div className="py-10 border-y border-rule">
      <p className="font-mono text-xs text-muted tracking-[0.2em] uppercase mb-6 px-6 md:px-10">
        Collaborations
      </p>

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
          {ITEMS.map((name, i) => (
            <div key={i} className="inline-flex items-center flex-shrink-0">
              <span className="font-mono text-xs tracking-wider uppercase text-muted px-4 md:px-6">
                {name}
              </span>
              <span className="text-muted font-mono text-xs select-none">&mdash;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
