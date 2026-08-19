import { Leaf } from 'lucide-react'

export function Logo({ className = '', light = false }) {
  return (
    <a href="#" className={`group inline-flex flex-col items-center gap-0.5 ${className}`} aria-label="LYVRA home">
      <Leaf
        className={`h-3 w-3 transition-colors duration-300 ${
          light ? 'text-bio-ivory/70 group-hover:text-bio-sage' : 'text-bio-olive group-hover:text-bio-botanical'
        }`}
        strokeWidth={1.25}
      />
      <span
        className={`font-serif text-lg tracking-[0.22em] transition-colors duration-300 ${
          light ? 'text-bio-ivory group-hover:text-bio-sage' : 'text-bio-text group-hover:text-bio-olive'
        }`}
      >
        LYVRA
      </span>
    </a>
  )
}

export function PrimaryButton({ children, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full bg-bio-deep px-6 py-3 text-sm font-medium tracking-wide text-bio-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A5430] ${className}`}
    >
      {children}
      <svg
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </a>
  )
}

export function SecondaryButton({ children, href = '#', className = '', light = false }) {
  return (
    <a
      href={href}
      className={`secondary-cta inline-block text-sm font-medium tracking-wide transition-colors duration-300 ${
        light ? 'text-bio-ivory/80 hover:text-bio-ivory' : 'text-bio-text hover:text-bio-olive'
      } ${className}`}
    >
      {children}
    </a>
  )
}

export function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`font-sans text-[10px] tracking-[0.22em] uppercase md:text-[11px] ${
        light ? 'text-bio-ivory/60' : 'text-bio-olive'
      }`}
    >
      {children}
    </p>
  )
}

export function BotanicalIcon({ className = '' }) {
  return (
    <svg className={`botanical-leaf h-5 w-5 text-bio-botanical ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3C8 8 6 12 6 16c0 2 1 4 3 5M12 3c4 5 6 9 6 13 0 2-1 4-3 5M12 3v18" />
    </svg>
  )
}
