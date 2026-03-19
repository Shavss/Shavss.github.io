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
      scrolled ? 'bg-[#0E1529]/90 backdrop-blur border-b border-black/5' : ''
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="text-gray-900 font-bold tracking-widest text-sm">
          KR<span className="text-[#6667AB]">.</span>
        </a>
        <div className="flex gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="nav-link text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="https://github.com/Shavss"
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#6667AB] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
