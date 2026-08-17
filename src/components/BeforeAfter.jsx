import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function BeforeAfter() {
  const sectionRef = useRef(null)
  const [dividerPos, setDividerPos] = useState(50)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const progress = 1 - rect.bottom / (window.innerHeight + rect.height * 0.5)
        const pos = 30 + Math.min(1, Math.max(0, progress)) * 40
        setDividerPos(pos)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduced])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bio-bg px-5 py-24 md:px-8 md:py-32 lg:px-10"
      aria-label="Hair transformation concept"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-bio-olive/10 md:aspect-[2/1]">
          {/* Before side */}
          <div className="absolute inset-0 bg-gradient-to-br from-bio-surface to-bio-cream">
            <HairTexture variant="before" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12">
              <span className="font-sans text-[10px] tracking-[0.22em] text-bio-olive/60 uppercase">Before</span>
              <p className="mt-3 font-serif text-2xl font-light text-bio-olive/70 md:text-3xl">
                Dry / Dull / Unruly
              </p>
            </div>
          </div>

          {/* After side — clipped */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-bio-sage/40 to-bio-ivory"
            style={{ clipPath: `inset(0 0 0 ${dividerPos}%)` }}
          >
            <HairTexture variant="after" />
            <div className="absolute inset-0 flex flex-col items-end justify-center p-8 text-right md:p-12">
              <span className="font-sans text-[10px] tracking-[0.22em] text-bio-deep/60 uppercase">After</span>
              <p className="mt-3 font-serif text-2xl font-light text-bio-deep md:text-3xl">
                Soft / Smooth / Luminous
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 z-10 w-px bg-bio-olive/30"
            style={{ left: `${dividerPos}%` }}
            aria-hidden="true"
          >
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bio-olive/30 bg-bio-ivory px-3 py-1">
              <span className="font-sans text-[8px] tracking-[0.18em] text-bio-olive uppercase">Feel</span>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-sm leading-relaxed text-bio-olive/70">
          Hair that feels softer. Hair that looks smoother. Natural-looking shine — without exaggerated claims.
        </p>
      </div>
    </section>
  )
}

function HairTexture({ variant }) {
  const isAfter = variant === 'after'
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-20"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d={`M${i * 35},0 Q${i * 35 + 15},${isAfter ? 80 : 120} ${i * 35 + 8},200`}
          fill="none"
          stroke={isAfter ? '#707842' : '#96704A'}
          strokeWidth={isAfter ? '0.8' : '1.2'}
          opacity={isAfter ? 0.4 : 0.25}
        />
      ))}
    </svg>
  )
}
