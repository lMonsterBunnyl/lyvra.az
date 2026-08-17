import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import BotanicalField from './components/BotanicalField'
import HairScience from './components/HairScience'
import HeroProduct from './components/HeroProduct'
import Ritual from './components/Ritual'
import Collection from './components/Collection'
import Ingredients from './components/Ingredients'
import BeforeAfter from './components/BeforeAfter'
import EditorialStatement from './components/EditorialStatement'
import BrandLab from './components/BrandLab'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [navDark, setNavDark] = useState(false)

  useEffect(() => {
    const editorial = document.getElementById('editorial')
    if (!editorial) return

    const observer = new IntersectionObserver(
      ([entry]) => setNavDark(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '-80px 0px 0px 0px' }
    )

    observer.observe(editorial)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar darkMode={navDark} />
      <ScrollProgress />
      <main>
        <Hero />
        <Philosophy />
        <BotanicalField />
        <HairScience />
        <HeroProduct />
        <Ritual />
        <Collection />
        <Ingredients />
        <BeforeAfter />
        <EditorialStatement />
        <BrandLab />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
