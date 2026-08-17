import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const ingredients = [
  {
    name: 'Argan Oil',
    benefit: 'Deep nourishment for dry, stressed strands',
    label: 'NOURISH',
    function: 'Moisture retention',
    texture: 'Light, silky',
    role: 'Core nourishing base',
    color: 'from-amber-50/80 to-bio-ivory',
  },
  {
    name: 'Jojoba',
    benefit: 'Helps improve softness and manageability',
    label: 'SOFTEN',
    function: 'Cuticle smoothing',
    texture: 'Weightless',
    role: 'Daily conditioning',
    color: 'from-yellow-50/60 to-bio-ivory',
  },
  {
    name: 'Botanical Extract',
    benefit: 'Antioxidant-rich plant compounds',
    label: 'PROTECT',
    function: 'Environmental shield',
    texture: 'Translucent',
    role: 'Protective layer',
    color: 'from-green-50/50 to-bio-ivory',
  },
  {
    name: 'Vitamin E Blend',
    benefit: 'Supports naturally luminous-looking hair',
    label: 'SMOOTH',
    function: 'Surface refinement',
    texture: 'Featherlight',
    role: 'Finishing glow',
    color: 'from-bio-sage/30 to-bio-ivory',
  },
  {
    name: 'Camellia Seed',
    benefit: 'Silken texture without heaviness',
    label: 'SMOOTH',
    function: 'Light emollient',
    texture: 'Silken',
    role: 'Mid-length care',
    color: 'from-orange-50/40 to-bio-ivory',
  },
]

export default function Ingredients() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="ingredients" ref={ref} className="overflow-hidden bg-bio-cream px-5 py-24 md:px-8 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2
          className={`reveal font-serif text-4xl font-light tracking-tight text-bio-text md:text-5xl lg:text-6xl ${
            inView ? 'visible' : ''
          }`}
        >
          From the botanical world to your ritual.
        </h2>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:mt-16 md:gap-8">
          {ingredients.map((ing, i) => (
            <IngredientCard key={ing.name} ingredient={ing} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IngredientCard({ ingredient, inView, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={`group relative w-64 shrink-0 md:w-72 ${inView ? 'reveal visible' : 'reveal'}`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
    >
      <div
        className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-b ${ingredient.color} transition-transform duration-700 group-hover:scale-[1.02]`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
      >
        {/* Botanical illustration */}
        <svg
          className="absolute inset-0 m-auto h-32 w-32 text-bio-botanical/25"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          aria-hidden="true"
        >
          <path d="M50 10 Q70 40 50 90 Q30 40 50 10" />
          <path d="M50 25 L50 75" opacity="0.5" />
          <path d="M50 40 Q35 35 25 30" opacity="0.4" />
          <path d="M50 50 Q65 45 75 40" opacity="0.4" />
        </svg>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end bg-bio-translucent p-5 transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <dl className="space-y-3 text-xs">
            <div>
              <dt className="font-sans tracking-[0.18em] text-bio-deep/60 uppercase">Function</dt>
              <dd className="mt-0.5 text-bio-text">{ingredient.function}</dd>
            </div>
            <div>
              <dt className="font-sans tracking-[0.18em] text-bio-deep/60 uppercase">Texture</dt>
              <dd className="mt-0.5 text-bio-text">{ingredient.texture}</dd>
            </div>
            <div>
              <dt className="font-sans tracking-[0.18em] text-bio-deep/60 uppercase">Role in Ritual</dt>
              <dd className="mt-0.5 text-bio-text">{ingredient.role}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-sans text-[10px] tracking-[0.22em] text-bio-olive uppercase">{ingredient.label}</p>
        <h3 className="mt-1 font-serif text-xl font-light text-bio-text">{ingredient.name}</h3>
        <p className="mt-2 text-sm text-bio-olive/80">{ingredient.benefit}</p>
      </div>
    </article>
  )
}
