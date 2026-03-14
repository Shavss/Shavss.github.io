'use client'

import { motion } from 'framer-motion'

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
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Kacper Ryske
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6">
          Software Engineer &amp; ML Researcher
        </h2>
        <p className="text-gray-500 max-w-xl leading-relaxed text-sm mb-10">
          I build full-stack applications and machine learning systems — from
          3D BIM web platforms to multimodal deep learning pipelines.
          Currently pursuing MSc in Information Technologies for the Built Environment.
        </p>
        <div className="flex gap-4 flex-wrap">
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
      </motion.div>

      {/* Decorative grid dot */}
      <div className="absolute right-0 top-1/4 w-72 h-72 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 10 }).map((_, i) =>
            Array.from({ length: 10 }).map((_, j) => (
              <circle key={`${i}-${j}`} cx={i * 22} cy={j * 22} r="1.5" fill="white" />
            ))
          )}
        </svg>
      </div>
    </section>
  )
}
