import fs from 'fs'
import path from 'path'
import { all } from '/data/projectsData'
import CaseStudy from '../../../components/CaseStudy'
import CursorGrid from '../../../components/CursorGrid'
import ThemeSwitcher from '../../../components/ThemeSwitcher'

const IMAGE_EXT = /\.(png|jpe?g|webp|avif|gif)$/i

function loadGallery(folder) {
  if (!folder) return []
  const dir = path.join(process.cwd(), 'public', 'images', folder)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter(f => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(f => `/images/${folder}/${f}`)
}

export function generateStaticParams() {
  return all.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const project = all.find(p => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.name} — Kacper Ryske`,
    description: project.description,
  }
}

export default function ProjectPage({ params }) {
  const index = all.findIndex(p => p.slug === params.slug)
  const baseProject = all[index]
  const project = { ...baseProject, images: loadGallery(baseProject.imageFolder) }
  const prev = index > 0 ? all[index - 1] : null
  const next = index < all.length - 1 ? all[index + 1] : null

  return (
    <main className="relative min-h-screen bg-canvas">
      <CursorGrid />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <CaseStudy project={project} index={index} prev={prev} next={next} />
      </div>
      <ThemeSwitcher />
    </main>
  )
}
