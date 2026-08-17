import { useInView } from '../hooks/useInView'
import { SectionLabel } from './shared'

const products = [
  {
    name: 'Nourishing Hair Oil',
    category: 'Signature Formula',
    description: 'With natural oils for stronger, softer, shinier-looking hair.',
    price: '$48',
    featured: true,
  },
  {
    name: 'Botanical Hair Serum',
    category: 'Collection',
    description: 'A lightweight serum inspired by the BioFera botanical collection.',
    price: '$52',
    featured: false,
  },
  {
    name: 'Daily Hair Elixir',
    category: 'Collection',
    description: 'An everyday elixir for refined nourishment and natural luminosity.',
    price: '$44',
    featured: false,
  },
]

export default function Collection() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const hero = products[0]
  const secondary = products.slice(1)

  return (
    <section id="collection" ref={ref} className="bg-bio-bg px-5 py-24 md:px-8 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>05 / Collection</SectionLabel>
        <h2
          className={`reveal mt-6 font-serif text-4xl font-light tracking-tight text-bio-text md:text-5xl ${
            inView ? 'visible' : ''
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          The BioFera collection.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Hero product — 55% */}
          <ProductCard product={hero} inView={inView} delay={300} className="lg:col-span-7" large />

          {/* Stacked secondary — 45% */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {secondary.map((product, i) => (
              <ProductCard key={product.name} product={product} inView={inView} delay={450 + i * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, inView, delay, className = '', large = false }) {
  return (
    <article
      className={`group relative overflow-hidden bg-bio-ivory transition-all duration-700 hover:-translate-y-1.5 ${
        inView ? 'reveal visible' : 'reveal'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`relative overflow-hidden bg-gradient-to-br from-bio-sage/20 to-bio-ivory ${large ? 'aspect-[4/3]' : 'aspect-[16/10]'}`}>
        <img
          src="/images/biofera-collection.png"
          alt={`BioFera ${product.name} — premium botanical hair care`}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bio-ivory/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className={`border border-t-0 border-bio-text/8 p-6 ${large ? 'md:p-8' : 'md:p-6'}`}>
        <p className="font-sans text-[10px] tracking-[0.22em] text-bio-olive uppercase">{product.category}</p>
        <h3 className={`mt-2 font-serif font-light text-bio-text ${large ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-bio-olive/80">{product.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-sans text-sm text-bio-text">{product.price}</span>
          <a
            href="#"
            className="group/link inline-flex items-center gap-1 text-xs tracking-[0.12em] text-bio-olive uppercase transition-colors duration-300 hover:text-bio-botanical"
          >
            View Product
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </article>
  )
}
