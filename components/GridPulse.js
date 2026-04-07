'use client'

import { useEffect, useRef } from 'react'

export default function GridPulse() {
  const xRef = useRef(null)
  const yRef = useRef(null)
  const frmRef = useRef(null)
  const utcRef = useRef(null)
  const resRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const mouse = { x: 0, y: 0 }
    let frame = 0

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    const tick = () => {
      frame++
      if (xRef.current) xRef.current.textContent = String(mouse.x).padStart(4, '0')
      if (yRef.current) yRef.current.textContent = String(mouse.y).padStart(4, '0')
      if (frmRef.current) frmRef.current.textContent = String(frame).padStart(6, '0')
      if (utcRef.current) utcRef.current.textContent = new Date().toTimeString().slice(0, 8)
      if (resRef.current) resRef.current.textContent = `${window.innerWidth}\u00D7${window.innerHeight}`
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className="hidden md:block font-mono text-[11px] leading-[1.7] border border-rule p-3"
      style={{ minWidth: 160 }}
    >
      <div>
        <span className="text-muted">x: </span>
        <span className="text-ink" ref={xRef}>0000</span>
      </div>
      <div>
        <span className="text-muted">y: </span>
        <span className="text-ink" ref={yRef}>0000</span>
      </div>
      <div>
        <span className="text-muted">frm: </span>
        <span className="text-ink" ref={frmRef}>000000</span>
      </div>
      <div>
        <span className="text-muted">utc: </span>
        <span className="text-ink" ref={utcRef}>00:00:00</span>
      </div>
      <div>
        <span className="text-muted">res: </span>
        <span className="text-ink" ref={resRef}>0×0</span>
        <span className="terminal-cursor">_</span>
      </div>
    </div>
  )
}
