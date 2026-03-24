'use client'

import { motion } from 'framer-motion'

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'C#', 'SQL', 'LaTeX'] },
  { category: 'ML / AI', items: ['PyTorch', 'XGBoost', 'ResNet', 'U-Net', 'Transformers', 'scikit-learn'] },
  { category: 'Web', items: ['React', 'Next.js', 'Node.js', 'Three.js', 'Tailwind CSS'] },
  { category: 'Tools', items: ['Git', 'Azure', 'Docker', 'Jupyter', 'Conda'] },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-2">Background</p>
        <h2 className="text-3xl font-bold text-white mb-10">About</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
          I studied Architecture at the University of Glasgow, where my dissertation on Amazon distribution centres first got me thinking about how data-driven algorithms shape physical spaces. That thread kept pulling. At David Chipperfield Architects, I joined the digital transformation team and dove headfirst into data modelling, business intelligence, and engineering queries. It was a steep learning curve that made me realise I wanted to build the systems themselves, not just use them.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
          That led me to a Master's in Information Technologies at the Technical University of Munich, specialising in software development and AI. Along the way, I worked with Siemens on legacy system modernisation and completed my thesis at MIT's Senseable City Lab, building a Bayesian fusion model for urban species classification.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
          I bring an architect's instinct for structure and clarity to software. How systems are organised matters as much as whether they work. I'm looking for roles in software engineering, ML, or data engineering where I can keep building things that connect computation to the real world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          {skills.map(s => (
            <div key={s.category}>
              <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-2">{s.category}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
