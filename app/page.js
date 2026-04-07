import Nav from '../components/Nav'
import Hero from '../components/Hero'
import InstitutionsBanner from '../components/InstitutionsBanner'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <Nav />
      <div className="max-w-6xl mx-auto">
        <Hero />
        <InstitutionsBanner />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
