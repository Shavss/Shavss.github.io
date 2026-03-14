import CursorBuddy from '../components/CursorBuddy'
import SpotlightOverlay from '../components/SpotlightOverlay'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <SpotlightOverlay />
      <CursorBuddy />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
