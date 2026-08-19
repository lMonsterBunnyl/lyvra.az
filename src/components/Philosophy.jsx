import { useInView } from '../hooks/useInView'
import { SectionLabel, BotanicalIcon } from './shared'

const principles = [
  {
    title: 'BOTANICAL',
    description: 'Rooted in natural oils and plant-derived ingredients chosen for their nourishing character.',
  },
  {
    title: 'PRECISE',
    description: 'Every formulation is measured, tested and refined with modern hair science in mind.',
  },
  {
    title: 'INTENTIONAL',
    description: 'Nothing unnecessary — only what your hair ritual truly needs.',
  },
]

export default function Philosophy() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section id="philosophy" ref={ref} className="relative bg-bio-bg px-5 py-24 md:px-8 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div className={`reveal ${inView ? 'visible' : ''}`}>
              <SectionLabel>01 / The Philosophy</SectionLabel>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h2
              className={`reveal font-serif text-4xl font-light leading-tight tracking-tight text-bio-text md:text-5xl lg:text-6xl ${
                inView ? 'visible' : ''
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Hair care, returned to what matters.
            </h2>

            <p
              className={`reveal mt-8 max-w-2xl text-base leading-relaxed text-bio-olive/90 md:text-lg ${
                inView ? 'visible' : ''
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              LYVRA brings together botanical oils, thoughtful formulations and modern hair science to create nourishment without unnecessary complexity.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {principles.map((p, i) => (
                <div key={p.title} className="group">
                  <div
                    className={`reveal flex items-center gap-3 ${inView ? 'visible' : ''}`}
                    style={{ transitionDelay: `${400 + i * 150}ms` }}
                  >
                    <BotanicalIcon />
                    <h3 className="font-sans text-xs tracking-[0.18em] text-bio-text uppercase">
                      {p.title}
                    </h3>
                  </div>
                  <p
                    className={`reveal mt-4 text-sm leading-relaxed text-bio-olive/80 ${inView ? 'visible' : ''}`}
                    style={{ transitionDelay: `${500 + i * 150}ms` }}
                  >
                    {p.description}
                  </p>
                  <div
                    className={`line-draw mt-6 h-px w-full bg-bio-olive/20 ${inView ? 'visible' : ''}`}
                    style={{ transitionDelay: `${600 + i * 150}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
