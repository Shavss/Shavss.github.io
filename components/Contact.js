'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-[#6667AB] text-xs tracking-widest uppercase mb-2">Get In Touch</p>
        <h2 className="text-3xl font-bold text-[#2D2926] mb-4">Contact</h2>
        <p className="text-[#2D2926]/55 text-sm max-w-md mx-auto mb-10">
          Open to software engineering and ML roles. Feel free to reach out.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:kacper@example.com"
            className="px-8 py-3 bg-[#2D2926] text-[#F2EFE4] text-sm tracking-widest uppercase rounded hover:bg-[#6667AB] transition-colors"
            data-hover
          >
            Email Me
          </a>
          <a
            href="https://github.com/Shavss"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-[#2D2926]/20 text-[#2D2926] text-sm tracking-widest uppercase rounded hover:border-[#6667AB] hover:text-[#6667AB] transition-all"
            data-hover
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kacper-ryske"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-[#2D2926]/20 text-[#2D2926] text-sm tracking-widest uppercase rounded hover:border-[#6667AB] hover:text-[#6667AB] transition-all"
            data-hover
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <div className="mt-20 pt-8 border-t border-[#2D2926]/10 text-center">
        <p className="text-[#2D2926]/35 text-xs tracking-widest">
          KR<span className="text-[#6667AB]">.​</span> &mdash; Built with Next.js
        </p>
      </div>
    </section>
  )
}
