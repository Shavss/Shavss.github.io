'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['about', 'projects', 'contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5' : ''
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="text-white font-bold tracking-widest text-sm">
          KR<span className="text-[#7c6af7]">.</span>
        </a>
        <div className="flex gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="nav-link text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="https://github.com/Shavss"
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-widest uppercase text-gray-400 hover:text-[#7c6af7] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
