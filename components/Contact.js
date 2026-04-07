'use client'

import { motion } from 'framer-motion'

const LINKS = [
  {
    label: 'Email',
    href: 'mailto:kacper.ryske@outlook.com',
    text: 'kacper.ryske@outlook.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Shavss',
    text: 'github.com/Shavss',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kacper-ryske-30125824a/',
    text: 'linkedin.com/in/kacper-ryske',
    external: true,
  },
]

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-10">
      {/* Thick rule */}
      <div className="h-[3px] bg-ink mb-10 md:mb-14" />

      <motion.div {...fade} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-[28px] md:text-[36px] text-ink uppercase tracking-tight leading-[1.1] mb-6">
          Let&apos;s Work<br />Together
        </h2>
        <p className="prose-body text-muted max-w-md mb-12">
          Open to software engineering and ML roles. Feel free to reach out.
        </p>
      </motion.div>

      {/* Contact links — ruled list */}
      <div className="h-px bg-rule" />
      {LINKS.map(link => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noreferrer' : undefined}
          className="flex justify-between items-center py-4 border-b border-rule group hover:pl-2 transition-all"
        >
          <span className="font-mono text-xs text-muted tracking-wider uppercase">
            {link.label}
          </span>
          <span className="font-body text-[15px] text-ink group-hover:text-accent transition-colors">
            {link.text}
          </span>
        </a>
      ))}

      {/* Footer */}
      <div className="mt-20 pt-6 border-t border-rule flex justify-between items-center">
        <p className="font-mono text-xs text-muted tracking-wider">
          KR<span className="text-accent">.</span>
        </p>
        <p className="font-mono text-xs text-muted tracking-wider">
          2026
        </p>
      </div>
    </section>
  )
}
