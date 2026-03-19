import CursorBuddy from '../components/CursorBuddy'
import SpotlightOverlay from '../components/SpotlightOverlay'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0e1529]">
      <SpotlightOverlay />
      <CursorBuddy />
      <div className="mx-auto w-1/2 min-w-[320px]">
        <Nav />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  )
}
