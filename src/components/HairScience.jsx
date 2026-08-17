import { useInView } from '../hooks/useInView'
import { SectionLabel } from './shared'

const cards = [
  {
    num: '01',
    title: 'NOURISH',
    description: 'Helps replenish the look and feel of dry, stressed strands.',
  },
  {
    num: '02',
    title: 'SOFTEN',
    description: 'Lightweight botanical oils help improve softness and manageability.',
  },
  {
    num: '03',
    title: 'GLOW',
    description: 'Leaves hair looking smoother, healthier and naturally luminous.',
  },
]

export default function HairScience() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="science" ref={ref} className="bg-bio-cream px-5 py-24 md:px-8 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>02 / Hair Science</SectionLabel>

        <h2
          className={`reveal mt-6 max-w-4xl font-serif text-4xl font-light leading-tight tracking-tight text-bio-text md:text-5xl lg:text-6xl ${
            inView ? 'visible' : ''
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          Designed around the way hair actually needs nourishment.
        </h2>

        {/* Hair fiber diagram */}
        <div
          className={`reveal relative mx-auto my-16 max-w-lg ${inView ? 'visible' : ''}`}
          style={{ transitionDelay: '300ms' }}
        >
          <HairFiberDiagram active={inView} />
        </div>

        {/* Science cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((card, i) => (
            <ScienceCard key={card.num} card={card} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HairFiberDiagram({ active }) {
  return (
    <div className="relative flex items-center justify-center py-12" aria-hidden="true">
      <svg viewBox="0 0 300 200" className="h-48 w-full max-w-md" fill="none">
        {/* Outer cuticle layers */}
        {[0, 1, 2].map((i) => (
          <ellipse
            key={i}
            cx="150"
            cy="100"
            rx={18 + i * 8}
            ry={70 - i * 5}
            stroke="#707842"
            strokeWidth="0.5"
            opacity={0.3 + i * 0.15}
            className={active ? 'animate-pulse' : ''}
            style={{ animationDuration: `${4 + i}s` }}
          />
        ))}

        {/* Central cortex */}
        <ellipse cx="150" cy="100" rx="12" ry="55" fill="rgba(170, 181, 121, 0.12)" stroke="#AAB579" strokeWidth="0.75" />

        {/* Nourishment particles */}
        {active &&
          [0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i}
              r="2"
              fill="#AAB579"
              opacity="0.6"
            >
              <animateMotion
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
                path={`M${60 + i * 20},${40 + i * 15} Q${100 + i * 10},${80 + i * 5} 150,100`}
              />
              <animate attributeName="opacity" values="0;0.8;0" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}

        {/* Labels */}
        <text x="150" y="185" textAnchor="middle" className="fill-bio-olive/50 text-[8px] tracking-widest" style={{ fontFamily: 'Manrope, sans-serif' }}>
          HAIR FIBER STRUCTURE
        </text>
      </svg>
    </div>
  )
}

function ScienceCard({ card, inView, index }) {
  return (
    <article
      className={`group relative border border-bio-text/10 bg-bio-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:border-bio-olive/40 md:p-10 ${
        inView ? 'reveal visible' : 'reveal'
      }`}
      style={{ transitionDelay: `${450 + index * 150}ms` }}
    >
      <span className="font-serif text-5xl font-light text-bio-sage/60 md:text-6xl">{card.num}</span>
      <p className="mt-4 font-sans text-[10px] tracking-[0.22em] text-bio-olive uppercase">Module {card.num}</p>
      <h3 className="mt-3 font-sans text-sm font-medium tracking-[0.14em] text-bio-text uppercase">
        {card.title}
      </h3>

      {/* Botanical illustration */}
      <svg
        className="absolute right-6 top-6 h-10 w-10 text-bio-botanical/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        aria-hidden="true"
      >
        <path d="M12 3C8 8 6 12 6 16c0 2 1 4 3 5M12 3c4 5 6 9 6 13 0 2-1 4-3 5" />
      </svg>

      <p className="mt-6 text-sm leading-relaxed text-bio-olive/80 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
        {card.description}
      </p>
    </article>
  )
}
