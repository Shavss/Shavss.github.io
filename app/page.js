import Nav from '../components/Nav'
import Hero from '../components/Hero'
import InstitutionsBanner from '../components/InstitutionsBanner'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import CursorGrid from '../components/CursorGrid'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <CursorGrid />
      <Nav />
      <div className="relative z-[1] max-w-[720px] min-w-[320px] mx-auto">
        <Hero />
        <InstitutionsBanner />
        <Projects />
        <Contact />
      </div>
      <ThemeSwitcher />
    </main>
  )
}
