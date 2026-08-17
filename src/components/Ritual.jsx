import { useInView } from '../hooks/useInView'
import { SectionLabel } from './shared'

const steps = [
  {
    num: '01',
    title: 'PREPARE',
    description: 'Warm a small amount between your palms.',
  },
  {
    num: '02',
    title: 'APPLY',
    description: 'Work gently through mid-lengths and ends.',
  },
  {
    num: '03',
    title: 'FINISH',
    description: 'Smooth through the lengths for a naturally polished finish.',
  },
]

export default function Ritual() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section
      id="ritual"
      ref={ref}
      className="bg-gradient-to-b from-bio-sage/30 to-bio-bg px-5 py-24 md:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>04 / The Ritual</SectionLabel>
        <h2
          className={`reveal mt-6 font-serif text-4xl font-light tracking-tight text-bio-text md:text-5xl lg:text-6xl ${
            inView ? 'visible' : ''
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          A few drops. A different feeling.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <RitualStep key={step.num} step={step} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function RitualStep({ step, inView, index }) {
  return (
    <div className="group relative">
      <span
        className={`reveal block font-serif text-6xl font-light text-bio-sage/50 md:text-7xl ${
          inView ? 'visible' : ''
        }`}
        style={{ transitionDelay: `${300 + index * 200}ms` }}
      >
        {step.num}
      </span>

      <div
        className={`line-draw mt-4 h-px w-12 bg-bio-olive/30 ${inView ? 'visible' : ''}`}
        style={{ transitionDelay: `${400 + index * 200}ms` }}
      />

      {/* Oil drop illustration */}
      <svg
        className={`reveal mt-8 h-12 w-12 text-bio-botanical/40 transition-transform duration-700 ${
          inView ? 'visible -translate-y-3' : ''
        }`}
        style={{ transitionDelay: `${450 + index * 200}ms` }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        aria-hidden="true"
      >
        <path d="M12 2C8 8 6 12 6 16a6 6 0 0012 0c0-4-2-8-6-14z" />
        <path d="M12 14v4" opacity="0.5" />
      </svg>

      <h3
        className={`reveal mt-6 font-sans text-xs tracking-[0.18em] text-bio-text uppercase ${
          inView ? 'visible' : ''
        }`}
        style={{ transitionDelay: `${550 + index * 200}ms` }}
      >
        {step.title}
      </h3>

      <p
        className={`reveal mt-3 text-sm leading-relaxed text-bio-olive/80 ${inView ? 'visible' : ''}`}
        style={{ transitionDelay: `${600 + index * 200}ms` }}
      >
        {step.description}
      </p>
    </div>
  )
}
