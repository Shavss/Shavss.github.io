'use client'

import { motion } from 'framer-motion'
import AIOrb from './AiOrb'

const TECHS = [
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PyTorch',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-[#7c6af7] text-sm tracking-widest uppercase mb-4 font-mono">
          Hi, I&apos;m
        </p>

        {/* Name + orb row — orb pushed to far right */}
        <div className="flex items-center gap-6 mb-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Kacper Ryske
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-light mt-2">
              Software Developer &amp; ML Researcher
            </h2>
          </div>
          <div className="hidden md:block ml-auto">
            <AIOrb size={180} />
          </div>
        </div>

        <p className="text-gray-500 max-w-xl leading-relaxed text-sm mb-10">
          I'm a software developer with an architect's attention to detail and an
          engineering mindset. I build automation tools, data pipelines, and intelligent
          systems that make complex work simpler. I'm particularly interested in AI,
          analytical systems, and building robust software for real-world applications.
        </p>

        <div className="flex gap-4 flex-wrap mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#7c6af7] text-white text-sm tracking-widest uppercase rounded hover:bg-[#6a58e0] transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/10 text-gray-300 text-sm tracking-widest uppercase rounded hover:border-[#7c6af7] hover:text-white transition-all"
          >
            Contact
          </a>
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-4 gap-3">
          {TECHS.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#7c6af7]/40 hover:bg-white/10 transition-all"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="text-xs text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}
