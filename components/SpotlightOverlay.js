'use client'

import { useEffect, useRef, useState } from 'react'

const RADIUS = 160        // circle radius in px
const SPEED = 2.2         // px per frame
const EXPAND_DURATION = 700 // ms for the expansion animation

export default function SpotlightOverlay() {
  const canvasRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const velRef = useRef({ x: SPEED, y: SPEED * 0.7 })
  const rafRef = useRef(null)
  const expandRef = useRef(null) // { startTime, startR, fromX, fromY }
  const [done, setDone] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Size canvas to viewport
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // seed position to center on first load
      if (posRef.current.x === 0 && posRef.current.y === 0) {
        posRef.current = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        }
      }
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (timestamp) => {
      const W = canvas.width
      const H = canvas.height

      // --- Expansion animation ---
      if (expandRef.current) {
        const { startTime, startR, fromX, fromY } = expandRef.current
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / EXPAND_DURATION, 1)
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        const maxR = Math.sqrt(W * W + H * H) // guaranteed full coverage
        const r = startR + (maxR - startR) * eased

        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = 'rgba(10,10,10,0.97)'
        ctx.fillRect(0, 0, W, H)

        // cut out the expanding circle
        ctx.save()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.beginPath()
        ctx.arc(fromX, fromY, r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        if (progress >= 1) {
          // fully expanded — clear canvas and mark done
          ctx.clearRect(0, 0, W, H)
          setDone(true)
          return
        }
        rafRef.current = requestAnimationFrame(draw)
        return
      }

      // --- Normal bouncing ---
      const pos = posRef.current
      const vel = velRef.current

      pos.x += vel.x
      pos.y += vel.y

      // Bounce off edges
      if (pos.x - RADIUS < 0) { pos.x = RADIUS; vel.x = Math.abs(vel.x) }
      if (pos.x + RADIUS > W) { pos.x = W - RADIUS; vel.x = -Math.abs(vel.x) }
      if (pos.y - RADIUS < 0) { pos.y = RADIUS; vel.y = Math.abs(vel.y) }
      if (pos.y + RADIUS > H) { pos.y = H - RADIUS; vel.y = -Math.abs(vel.y) }

      // Draw dark overlay
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = 'rgba(10,10,10,0.97)'
      ctx.fillRect(0, 0, W, H)

      // Cut out the spotlight circle using composite
      ctx.save()
      ctx.globalCompositeOperation = 'destination-out'

      // Soft edge: radial gradient from fully transparent to opaque
      const gradient = ctx.createRadialGradient(
        pos.x, pos.y, RADIUS * 0.55,
        pos.x, pos.y, RADIUS
      )
      gradient.addColorStop(0, 'rgba(0,0,0,1)')   // fully revealed at center
      gradient.addColorStop(1, 'rgba(0,0,0,0)')   // fades at edge

      ctx.beginPath()
      ctx.arc(pos.x, pos.y, RADIUS, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
      ctx.restore()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleClick = (e) => {
    cancelAnimationFrame(rafRef.current)
    expandRef.current = {
      startTime: performance.now(),
      startR: RADIUS,
      fromX: posRef.current.x,
      fromY: posRef.current.y,
    }
    rafRef.current = requestAnimationFrame((ts) => {
      expandRef.current.startTime = ts
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const loop = (timestamp) => {
        const W = canvas.width
        const H = canvas.height
        const { startTime, startR, fromX, fromY } = expandRef.current
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / EXPAND_DURATION, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const maxR = Math.sqrt(W * W + H * H)
        const r = startR + (maxR - startR) * eased

        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = 'rgba(10,10,10,0.97)'
        ctx.fillRect(0, 0, W, H)

        ctx.save()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.beginPath()
        ctx.arc(fromX, fromY, r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        if (progress >= 1) {
          ctx.clearRect(0, 0, W, H)
          setDone(true)
          return
        }
        rafRef.current = requestAnimationFrame(loop)
      }
      rafRef.current = requestAnimationFrame(loop)
    })
  }

  if (done) return null

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      className="fixed inset-0 z-[100]"
      style={{ cursor: 'none' }}
    />
  )
}
