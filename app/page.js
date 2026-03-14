import CursorBuddy from '../components/CursorBuddy'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <CursorBuddy />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
