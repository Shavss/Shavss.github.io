'use client'

import { motion } from 'framer-motion'

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'C#', 'SQL', 'LaTeX'] },
  { category: 'ML / AI', items: ['PyTorch', 'XGBoost', 'ResNet', 'U-Net', 'Transformers', 'scikit-learn'] },
  { category: 'Web', items: ['React', 'Next.js', 'Node.js', 'Three.js', 'Tailwind CSS'] },
  { category: 'Tools', items: ['Git', 'Azure', 'Docker', 'Jupyter', 'Conda'] },
]

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10">
      {/* Section header */}
      <motion.div {...fade} transition={{ duration: 0.5 }}>
        <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
          Background
        </p>
        <div className="h-[3px] bg-ink mb-10 md:mb-14" />
      </motion.div>

      {/* Two-column: bio + skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <motion.div {...fade} transition={{ duration: 0.6 }}>
          <p className="font-body text-sm text-muted leading-relaxed mb-6">
            I studied Architecture at the University of Glasgow, where my
            dissertation on Amazon distribution centres first got me thinking
            about how data-driven algorithms shape physical spaces. That thread
            kept pulling. At David Chipperfield Architects, I joined the digital
            transformation team and dove headfirst into data modelling, business
            intelligence, and engineering queries.
          </p>
          <p className="font-body text-sm text-muted leading-relaxed">
            That led me to a Master&apos;s in Information Technologies at the
            Technical University of Munich, specialising in software development
            and AI. Along the way, I worked with Siemens on legacy system
            modernisation and completed my thesis at MIT&apos;s Senseable City Lab,
            building a Bayesian fusion model for urban species classification.
            I bring an architect&apos;s instinct for structure and clarity to software
            &mdash; how systems are organised matters as much as whether they work.
          </p>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }}>
          {skills.map(s => (
            <div key={s.category} className="mb-8 last:mb-0">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-accent tracking-wider uppercase whitespace-nowrap">
                  {s.category}
                </span>
                <div className="flex-1 h-px bg-rule" />
              </div>
              <p className="font-mono text-xs text-muted tracking-wide leading-loose">
                {s.items.join(' / ')}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
