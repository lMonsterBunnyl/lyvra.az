import { useInView } from '../hooks/useInView'
import { SectionLabel } from './shared'

export default function EditorialStatement() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section
      id="editorial"
      ref={ref}
      className="relative overflow-hidden bg-bio-deep px-5 py-32 md:px-8 md:py-40 lg:px-10"
    >
      {/* Botanical line drawing */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-bio-ivory"
        style={{ opacity: inView ? 0.1 : 0.04 }}
        viewBox="0 0 800 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        aria-hidden="true"
      >
        <path d="M100 350 Q200 200 400 180 Q600 160 700 100" />
        <path d="M150 300 Q250 150 450 140 Q550 130 650 80" opacity="0.5" />
        <ellipse cx="400" cy="180" rx="120" ry="60" opacity="0.3" />
        <path d="M380 160 Q400 120 420 160" opacity="0.6" />
        <path d="M360 170 Q340 130 350 100" opacity="0.4" />
        <path d="M440 170 Q460 130 450 100" opacity="0.4" />
      </svg>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <SectionLabel light>LYVRA / Beauty Science</SectionLabel>
        </div>

        <h2
          className={`reveal mt-8 font-serif text-4xl font-light leading-tight tracking-tight text-bio-ivory md:text-5xl lg:text-7xl ${
            inView ? 'visible' : ''
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Natural does not mean primitive.
        </h2>

        <p
          className={`reveal mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bio-ivory/70 md:text-lg ${
            inView ? 'visible' : ''
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          LYVRA approaches botanical hair care with the precision, restraint and curiosity of modern beauty science.
        </p>
      </div>
    </section>
  )
}
