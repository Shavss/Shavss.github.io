'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-sm border-b border-stroke' : ''
      }`}
      style={{ backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent' }}
    >
      <div className="max-w-[720px] mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        <a
          href="#"
          className="font-display text-base font-bold tracking-tight text-ink"
        >
          KR<span className="text-accent">.</span>
        </a>

        <div className="flex gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link font-mono text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
