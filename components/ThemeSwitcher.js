'use client'

import { useState, useEffect } from 'react'

const THEMES = ['a', 'b', 'c']
const ACCENTS = { a: '#D4580A', b: '#39FF6E', c: '#D4580A' }

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('a')
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved && THEMES.includes(saved)) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  const applyTheme = (t) => {
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('theme', t)
  }

  const cycle = () => {
    const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]
    applyTheme(next)
  }

  const others = THEMES.filter(t => t !== theme)

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && others.map(t => (
        <button
          key={t}
          onClick={() => applyTheme(t)}
          className="w-6 h-6 border border-rule flex items-center justify-center transition-opacity cursor-pointer"
          aria-label={`Switch to theme ${t.toUpperCase()}`}
        >
          <span
            className="block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: ACCENTS[t] }}
          />
        </button>
      ))}
      <button
        onClick={cycle}
        className="w-8 h-8 border border-rule flex items-center justify-center cursor-pointer"
        aria-label="Cycle theme"
      >
        <span
          className="block w-3 h-3 rounded-full"
          style={{ backgroundColor: ACCENTS[theme] }}
        />
      </button>
    </div>
  )
}
