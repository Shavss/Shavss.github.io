'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CursorBuddy() {
  const [isMobile, setIsMobile] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const handleMouseMove = useCallback((e) => {
    cursorX.set(e.clientX - 12)
    cursorY.set(e.clientY - 12)
  }, [cursorX, cursorY])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('mousemove', handleMouseMove)

    const interactables = document.querySelectorAll('a, button, [data-hover]')
    const onEnter = () => setIsHovering(true)
    const onLeave = () => setIsHovering(false)
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [handleMouseMove])

  if (isMobile) return null

  return (
    <>
      {/* Main dot cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div
          animate={{
            width: isHovering ? 28 : 10,
            height: isHovering ? 28 : 10,
            backgroundColor: isHovering ? 'rgba(124,106,247,0.6)' : 'rgba(124,106,247,1)',
            borderRadius: '50%',
          }}
          transition={{ duration: 0.2 }}
          style={{ marginTop: isHovering ? -4 : 0, marginLeft: isHovering ? -4 : 0 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{
          x: useSpring(cursorX, { damping: 35, stiffness: 300 }),
          y: useSpring(cursorY, { damping: 35, stiffness: 300 }),
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering ? 'rgba(124,106,247,0.8)' : 'rgba(124,106,247,0.3)',
            marginTop: isHovering ? -12 : -6,
            marginLeft: isHovering ? -12 : -6,
          }}
          transition={{ duration: 0.2 }}
          style={{
            borderRadius: '50%',
            border: '1.5px solid rgba(124,106,247,0.3)',
          }}
        />
      </motion.div>
    </>
  )
}
