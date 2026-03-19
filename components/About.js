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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
