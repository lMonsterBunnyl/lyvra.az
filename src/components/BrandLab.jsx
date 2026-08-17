import { useInView } from '../hooks/useInView'
import { SectionLabel } from './shared'

const principles = ['FORMULATE', 'REFINE', 'RITUALIZE']

export default function BrandLab() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="bg-bio-ivory px-5 py-24 md:px-8 md:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Texture image */}
        <div
          className={`reveal relative aspect-[4/5] overflow-hidden ${inView ? 'visible' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-bio-sage/30 via-bio-botanical/10 to-bio-wood/20" />
          <img
            src="/images/biofera-collection.png"
            alt="Close-up of BioFera product textures — botanical oils and natural wood cap details"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bio-ivory/30 to-transparent" />
        </div>

        {/* Copy */}
        <div>
          <div className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <SectionLabel>The BioFera Approach</SectionLabel>
          </div>

          <h2
            className={`reveal mt-6 font-serif text-4xl font-light tracking-tight text-bio-text md:text-5xl ${
              inView ? 'visible' : ''
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Less noise. More intention.
          </h2>

          <div className="mt-12 space-y-8">
            {principles.map((p, i) => (
              <div key={p}>
                <div
                  className={`reveal flex items-center gap-4 ${inView ? 'visible' : ''}`}
                  style={{ transitionDelay: `${450 + i * 150}ms` }}
                >
                  <span className="font-sans text-xs tracking-[0.18em] text-bio-text uppercase">{p}</span>
                  <div className={`line-draw h-px flex-1 bg-bio-olive/20 ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${500 + i * 150}ms` }} />
                </div>
              </div>
            ))}
          </div>

          <p
            className={`reveal mt-10 text-sm leading-relaxed text-bio-olive/80 md:text-base ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: '800ms' }}
          >
            Every BioFera product begins with a question: what does hair actually need? We formulate with botanical intelligence, refine through modern science, and ritualize the experience of daily nourishment.
          </p>
        </div>
      </div>
    </section>
  )
}
