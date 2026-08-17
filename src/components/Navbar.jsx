import { useState, useEffect } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Logo, PrimaryButton } from './shared'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Hair Science', href: '#science' },
  { label: 'Ritual', href: '#ritual' },
  { label: 'Collection', href: '#collection' },
]

export default function Navbar({ darkMode = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = darkMode || scrolled

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        loaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm -translate-y-2'
      }`}
      style={{
        background: isDark
          ? 'rgba(48, 56, 32, 0.72)'
          : 'rgba(243, 239, 230, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10" aria-label="Main navigation">
        <Logo light={isDark} />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link text-xs font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
                  isDark ? 'text-bio-ivory/70 hover:text-bio-sage' : 'text-bio-olive hover:text-bio-botanical'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            aria-label="Search"
            className={`rounded-full p-2 transition-colors duration-300 ${
              isDark ? 'text-bio-ivory/70 hover:text-bio-ivory' : 'text-bio-olive hover:text-bio-botanical'
            }`}
          >
            <Search className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Shopping bag"
            className={`rounded-full p-2 transition-colors duration-300 ${
              isDark ? 'text-bio-ivory/70 hover:text-bio-ivory' : 'text-bio-olive hover:text-bio-botanical'
            }`}
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <PrimaryButton href="#collection" className="hidden md:inline-flex !py-2.5 !text-xs">
            Explore Collection
          </PrimaryButton>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className={`rounded-full p-2 lg:hidden ${
              isDark ? 'text-bio-ivory/70' : 'text-bio-olive'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="border-t border-bio-olive/10 px-5 py-6 lg:hidden"
          style={{
            background: isDark ? 'rgba(48, 56, 32, 0.95)' : 'rgba(243, 239, 230, 0.98)',
          }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm tracking-[0.12em] uppercase ${
                    isDark ? 'text-bio-ivory/80' : 'text-bio-olive'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
