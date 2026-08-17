import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function BotanicalField() {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        const progress = 1 - rect.bottom / (window.innerHeight + rect.height)
        container.style.setProperty('--parallax', progress.toFixed(4))
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduced])

  const parallax = (factor) =>
    reduced
      ? {}
      : {
          transform: `translateY(calc(var(--parallax, 0) * ${factor}px))`,
        }

  return (
    <div
      ref={containerRef}
      className="relative h-48 overflow-hidden bg-gradient-to-b from-bio-bg via-bio-sage/20 to-bio-cream md:h-64"
      aria-hidden="true"
    >
      {/* Large blurred leaves */}
      <svg
        className="absolute -left-16 top-0 h-64 w-64 text-bio-botanical/15"
        style={parallax(-30)}
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <ellipse cx="100" cy="100" rx="80" ry="120" transform="rotate(-20 100 100)" opacity="0.6" />
      </svg>

      <svg
        className="absolute right-[10%] top-8 h-48 w-48 text-bio-olive/10"
        style={parallax(25)}
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M100 20 Q140 80 100 180 Q60 80 100 20" opacity="0.8" />
        <path d="M100 40 Q120 90 100 160" opacity="0.5" />
      </svg>

      <svg
        className="absolute left-[30%] bottom-0 h-40 w-40 text-bio-botanical/12"
        style={parallax(20)}
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <ellipse cx="100" cy="100" rx="60" ry="90" transform="rotate(15 100 100)" />
      </svg>

      <svg
        className="absolute right-[25%] -bottom-8 h-56 w-56 text-bio-sage/30"
        style={parallax(-20)}
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
      >
        <path d="M40 160 Q80 60 160 40 Q100 100 40 160" />
      </svg>

      {/* Translucent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bio-translucent/30 to-transparent" />
    </div>
  )
}
