'use client'

import { motion } from 'framer-motion'

const TECHS = [
  'Python', 'PyTorch', 'React', 'Next.js',
  'JavaScript', 'PostgreSQL', 'Docker', 'Git',
]

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Thick rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[3px] bg-ink mb-10 md:mb-14"
        />

        {/* Name — massive typographic statement */}
        <motion.h1
          variants={fade}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-5xl md:text-[6rem] lg:text-[9rem] font-bold leading-[0.88] tracking-tight text-ink uppercase"
        >
          Kacper<br />Ryske
        </motion.h1>

        {/* Thin rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-rule mt-8 mb-8 md:mt-12 md:mb-10"
        />

        {/* Two-column: role + bio */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16"
        >
          <div>
            <h2 className="font-display text-sm md:text-base text-ink uppercase tracking-wider leading-relaxed">
              Software Developer<br />
              &amp; ML Researcher
            </h2>
          </div>
          <div>
            <p className="font-body text-sm text-muted leading-relaxed">
              Software developer with an architect&apos;s eye for structure.
              I build automation tools, data pipelines, and intelligent systems
              that make complex work simpler. Particularly interested in AI,
              analytical systems, and robust software for real-world applications.
            </p>
          </div>
        </motion.div>

        {/* Thin rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-rule mt-8 mb-6 md:mt-10 md:mb-8"
        />

        {/* Tech stack + CTAs */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-6"
        >
          <p className="font-mono text-xs text-muted tracking-wider">
            {TECHS.join(' / ')}
          </p>
          <div className="flex gap-8">
            <a
              href="#projects"
              className="font-mono text-xs text-ink tracking-wider uppercase hover:text-accent transition-colors"
            >
              View Work &rarr;
            </a>
            <a
              href="#contact"
              className="font-mono text-xs text-ink tracking-wider uppercase hover:text-accent transition-colors"
            >
              Contact &rarr;
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
