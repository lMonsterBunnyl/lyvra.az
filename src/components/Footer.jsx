import { Logo } from './shared'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Hair Science', href: '#science' },
  { label: 'Ritual', href: '#ritual' },
  { label: 'Collection', href: '#collection' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Privacy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-bio-deep px-5 py-16 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Left */}
          <div>
            <Logo light />
            <p className="mt-4 font-sans text-[10px] tracking-[0.22em] text-bio-ivory/50 uppercase">
              Botanical Hair Care / Beauty Science
            </p>
          </div>

          {/* Center */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-bio-ivory/60 transition-colors duration-300 hover:text-bio-sage"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right */}
          <nav aria-label="Social and legal links">
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-bio-ivory/60 transition-colors duration-300 hover:text-bio-sage"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 border-t border-bio-ivory/10 pt-8">
          <p className="font-sans text-[10px] tracking-[0.22em] text-bio-ivory/40 uppercase">
            © 2026 BioFera
          </p>
        </div>
      </div>
    </footer>
  )
}
