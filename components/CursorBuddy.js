'use client'

import { useEffect, useRef, useState } from 'react'

export default function CursorBuddy() {
  const glowRef = useRef(null)
  const dotRef = useRef(null)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const mobile = window.matchMedia('(pointer: coarse)').matches
    setIsMobile(mobile)
    if (mobile) return

    const glow = glowRef.current
    const dot = dotRef.current

    const handleMouseMove = (e) => {
      if (glow) {
        glow.style.background = `radial-gradient(900px circle at ${e.clientX}px ${e.clientY}px, rgba(102, 103, 171, 0.15), transparent 80%)`
      }
      if (dot) {
        dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Radial gradient glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-30"
        style={{ background: 'transparent' }}
      />
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: 'rgba(102, 103, 171, 1)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
