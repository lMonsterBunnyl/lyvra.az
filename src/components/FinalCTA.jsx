import { useInView } from '../hooks/useInView'
import { PrimaryButton, SecondaryButton } from './shared'

export default function FinalCTA() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="relative overflow-hidden bg-bio-bg px-5 py-24 md:px-8 md:py-32 lg:px-10">
      {/* Botanical accents */}
      <svg
        className="pointer-events-none absolute left-[8%] top-[20%] h-16 w-16 text-bio-botanical/20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        aria-hidden="true"
      >
        <path d="M12 20C8 16 4 12 4 8c0-2 2-4 4-4 2 0 4 1 4 4 0 4-4 8-8 12" />
      </svg>
      <svg
        className="pointer-events-none absolute right-[10%] bottom-[25%] h-12 w-12 text-bio-botanical/15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        aria-hidden="true"
      >
        <path d="M4 12c4-2 8-2 12 0M8 8c2 1 4 1 6 0" />
      </svg>

      <div className="mx-auto max-w-3xl text-center">
        <div
          className={`reveal mx-auto max-w-xs transition-all duration-1000 md:max-w-sm ${
            inView ? 'visible scale-100 opacity-100' : 'scale-[0.94] opacity-0'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
        >
          <img
            src="/images/biofera-collection.png"
            alt="LYVRA Nourishing Hair Oil collection — begin your hair ritual"
            className="w-full object-contain"
            loading="lazy"
          />
          <div className="mx-auto -mt-2 h-6 w-2/3 rounded-[100%] bg-bio-olive/10 blur-xl" aria-hidden="true" />
        </div>

        <h2
          className={`reveal mt-12 font-serif text-4xl font-light tracking-tight text-bio-text md:text-5xl lg:text-6xl ${
            inView ? 'visible' : ''
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Begin your hair ritual.
        </h2>

        <p
          className={`reveal mx-auto mt-6 max-w-md text-base leading-relaxed text-bio-olive/90 ${
            inView ? 'visible' : ''
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          Discover a more considered approach to everyday nourishment.
        </p>

        <div
          className={`reveal mt-10 flex flex-wrap items-center justify-center gap-6 ${inView ? 'visible' : ''}`}
          style={{ transitionDelay: '500ms' }}
        >
          <PrimaryButton href="#collection">Explore LYVRA</PrimaryButton>
          <SecondaryButton href="#formula">Discover the Formula</SecondaryButton>
        </div>
      </div>
    </section>
  )
}
