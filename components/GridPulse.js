'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const ROWS = [
  { label: 'X', pad: 4 },
  { label: 'Y', pad: 4 },
  { label: 'RES', pad: 0 },
]

export default function GridPulse() {
  const mouseRef = useRef({ x: 0, y: 0 })
  const resRef = useRef({ w: 0, h: 0 })

  const xRef = useRef(null)
  const yRef = useRef(null)
  const resValRef = useRef(null)

  const [mounted, setMounted] = useState(false)

  const updateRes = useCallback(() => {
    resRef.current = { w: window.innerWidth, h: window.innerHeight }
    if (resValRef.current) {
      resValRef.current.textContent = `${resRef.current.w}\u00D7${resRef.current.h}`
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    updateRes()

    function onMouseMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      const mx = String(Math.round(e.clientX)).padStart(4, '0')
      const my = String(Math.round(e.clientY)).padStart(4, '0')
      if (xRef.current) xRef.current.textContent = mx
      if (yRef.current) yRef.current.textContent = my
    }

    function onResize() {
      updateRes()
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [updateRes])

  const refs = [xRef, yRef, resValRef]

  return (
    <div
      className="hidden md:block"
      style={{
        width: '180px',
        height: '130px',
        border: '1px solid var(--color-rule)',
        background: 'var(--color-surface)',
        padding: '12px',
        fontFamily: 'var(--font-space-mono), monospace',
        fontSize: '11px',
        lineHeight: '20px',
      }}
    >
      {ROWS.map((row, i) => (
        <div key={row.label} style={{ display: 'flex' }}>
          <span
            style={{
              color: 'var(--color-muted)',
              width: '36px',
              flexShrink: 0,
            }}
          >
            {row.label}
          </span>
          <span style={{ color: 'var(--color-ink)' }}>
            <span ref={refs[i]}>{mounted ? '—' : '—'}</span>
            {i === ROWS.length - 1 && (
              <span className="grid-pulse-cursor">&#9611;</span>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}
