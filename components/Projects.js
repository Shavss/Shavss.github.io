'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Thesis: PoE Fusion — Insect Classification',
    description:
      'Multimodal deep learning pipeline fusing ResNet-18 image features with XGBoost environmental context via Product-of-Experts fusion for insect species classification.',
    tags: ['Python', 'PyTorch', 'XGBoost', 'ResNet-18', 'Jupyter'],
    url: 'https://github.com/Shavss/thesis-poe-fusion',
  },
  {
    name: 'ITBE Fusion Lab — BIM Web Platform',
    description:
      'Full-stack web app for TU Munich enabling interactive 3D visualization of building performance and IFC/BIM data using React, Three.js, IFC.js, Node.js, and Azure hosting.',
    tags: ['React', 'Node.js', 'Three.js', 'IFC.js', 'Azure'],
    url: 'https://github.com/Shavss/ITBE-Fusion-Lab',
  },
  {
    name: 'Deep Vectorization of Technical Drawings',
    description:
      'Python deep learning pipeline converting technical drawings to vector formats using U-Net, transformers, and post-processing for precise line detection and SVG generation.',
    tags: ['Python', 'U-Net', 'Transformers', 'OpenCV', 'SVG'],
    url: 'https://github.com/Shavss/Software-Lab',
  },
  {
    name: 'Automated PDF Data Extraction Pipeline',
    description:
      'Python tool that parses engineering PDFs using modular scrapers and inserts structured data into local or Azure SQL databases with automated workflows.',
    tags: ['Python', 'SQL', 'Azure', 'Automation'],
    url: 'https://github.com/Shavss/data-managment',
  },
  {
    name: 'Kitty Split — Group Expense App',
    description:
      'C# prototype for creating and managing shared expense groups, tracking transactions, user activity, comments, and financial summaries with upgradeable group features.',
    tags: ['C#', '.NET', 'REST API', 'SQL'],
    url: 'https://github.com/Shavss/kitty-split-prototype',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-2">Selected Work</p>
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="project-card block p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#7c6af7]/40 hover:bg-white/[0.04] group"
            data-hover
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[#a89cf7] transition-colors">
                {p.name}
              </h3>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-[#7c6af7] transition-colors flex-shrink-0 ml-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M7 7h10v10" />
              </svg>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
