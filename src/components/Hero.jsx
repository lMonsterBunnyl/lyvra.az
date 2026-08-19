import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { PrimaryButton, SecondaryButton, SectionLabel } from './shared'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    const timers = [
      setTimeout(() => setLoaded(true), 100),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (reduced) return
    const onScroll = () => {
      requestAnimationFrame(() => setScrollY(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduced])

  const heroProgress = reduced ? 0 : Math.min(1, scrollY / 800)
  const productScale = reduced ? 1 : 1 - heroProgress * 0.08
  const productY = reduced ? 0 : -heroProgress * 60
  const textOpacity = reduced ? 1 : 1 - heroProgress * 1.2
  const bgWarmth = reduced ? 0 : heroProgress * 0.04

  const delay = (ms) => ({
    transitionDelay: loaded ? `${ms}ms` : '0ms',
  })

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #FAF8F2 0%, rgb(${243 + bgWarmth * 255}, ${239 + bgWarmth * 255}, ${230 + bgWarmth * 255}) 100%)`,
      }}
    >
      {/* Stone surface */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bio-surface/40 to-transparent" />

      {/* Botanical shadow */}
      <div
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 opacity-[0.07]"
        style={{
          background: 'radial-gradient(ellipse, #707842 0%, transparent 70%)',
          transform: reduced ? undefined : `translateY(${scrollY * 0.05}px)`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-24 pt-28 md:px-8 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-16 lg:pt-24">
        {/* Copy */}
        <div
          className="lg:col-span-5"
          style={{ opacity: Math.max(0, textOpacity) }}
        >
          <div
            className={`reveal ${loaded ? 'visible' : ''}`}
            style={delay(300)}
          >
            <SectionLabel>LYVRA / Hair Science</SectionLabel>
          </div>

          <h1
            className={`reveal mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight text-bio-text md:text-6xl lg:text-7xl ${
              loaded ? 'visible' : ''
            }`}
            style={delay(600)}
          >
            Nature, refined by{' '}
            <span className="text-bio-botanical">science.</span>
          </h1>

          <p
            className={`reveal mt-6 max-w-md text-base leading-relaxed text-bio-olive/90 md:text-lg ${
              loaded ? 'visible' : ''
            }`}
            style={delay(750)}
          >
            Advanced nourishment for stronger, softer, healthier-looking hair — developed around the intelligence of natural oils.
          </p>

          <div
            className={`reveal mt-10 flex flex-wrap items-center gap-6 ${loaded ? 'visible' : ''}`}
            style={delay(900)}
          >
            <PrimaryButton href="#ritual">Explore the Ritual</PrimaryButton>
            <SecondaryButton href="#science">Discover Hair Science</SecondaryButton>
          </div>
        </div>

        {/* Product composition */}
        <div className="relative lg:col-span-7">
          <div
            className="relative mx-auto max-w-2xl"
            style={{
              transform: `translateY(${productY}px) scale(${productScale})`,
              transition: reduced ? 'none' : 'transform 0ms linear',
            }}
          >
            {/* Soft shadow */}
            <div
              className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-[100%] bg-bio-olive/10 blur-2xl"
              aria-hidden="true"
            />

            <div
              className={`reveal relative ${loaded ? 'visible' : ''}`}
              style={delay(450)}
            >
              <img
                src="/images/biofera-collection.png"
                alt="LYVRA hair care collection — nourishing hair oil, botanical serum, and daily elixir bottles with natural wood caps on a warm ivory surface"
                className="relative z-10 w-full object-contain transition-transform duration-700"
                style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                fetchPriority="high"
              />
            </div>

            {/* Scientific annotations */}
            <Annotation
              label="100 ML"
              className="right-[8%] top-[18%]"
              loaded={loaded}
              delay={350}
            />
            <Annotation
              label="NOURISHING HAIR OIL"
              className="left-[2%] top-[42%]"
              loaded={loaded}
              delay={400}
              lineDirection="left"
            />
            <Annotation
              label="BOTANICAL FORMULA"
              className="right-[5%] bottom-[22%]"
              loaded={loaded}
              delay={450}
            />

            {/* Decorative leaves */}
            <svg
              className="pointer-events-none absolute -bottom-2 left-[15%] h-8 w-8 text-bio-botanical/40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              aria-hidden="true"
            >
              <path d="M12 20C8 16 4 12 4 8c0-2 2-4 4-4 2 0 4 1 4 4 0 4-4 8-8 12" />
            </svg>
            <svg
              className="pointer-events-none absolute -right-1 top-[30%] h-6 w-6 text-bio-botanical/30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              aria-hidden="true"
            >
              <path d="M4 12c4-2 8-2 12 0M8 8c2 1 4 1 6 0M10 16c2-1 4-1 6 0" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-[0.22em] text-bio-olive/60 uppercase">
          Scroll to Discover
        </span>
        <ChevronDown
          className="h-4 w-4 animate-pulse text-bio-olive/50"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

function Annotation({ label, className, loaded, delay, lineDirection = 'right' }) {
  return (
    <div
      className={`reveal absolute hidden md:block ${className} ${loaded ? 'visible' : ''}`}
      style={{ transitionDelay: loaded ? `${delay}ms` : '0ms' }}
    >
      <div className="flex items-center gap-2">
        {lineDirection === 'left' && (
          <span
            className={`line-draw h-px w-8 bg-bio-olive/30 ${loaded ? 'visible' : ''}`}
            style={{ transitionDelay: loaded ? `${delay + 200}ms` : '0ms' }}
          />
        )}
        <span className="font-sans text-[9px] tracking-[0.22em] text-bio-olive/70 uppercase whitespace-nowrap">
          {label}
        </span>
        {lineDirection === 'right' && (
          <span
            className={`line-draw h-px w-8 bg-bio-olive/30 ${loaded ? 'visible' : ''}`}
            style={{ transitionDelay: loaded ? `${delay + 200}ms` : '0ms' }}
          />
        )}
      </div>
    </div>
  )
}
