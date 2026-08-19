import { useRef } from 'react'
import { useElementScrollProgress } from '../hooks/useScrollProgress'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { SectionLabel } from './shared'

const ingredients = [
  { name: 'ARGAN', position: 'top-[12%] left-[8%]', lineAngle: '45deg' },
  { name: 'JOJOBA', position: 'top-[20%] right-[6%]', lineAngle: '-45deg' },
  { name: 'BOTANICAL OILS', position: 'bottom-[28%] left-[4%]', lineAngle: '30deg' },
  { name: 'VITAMIN-RICH BLEND', position: 'bottom-[20%] right-[2%]', lineAngle: '-30deg' },
]

const circleLabels = ['BOTANICAL OILS', 'LIGHTWEIGHT TEXTURE', 'DAILY RITUAL']

export default function HeroProduct() {
  const sectionRef = useRef(null)
  const progress = useElementScrollProgress(sectionRef)
  const reduced = useReducedMotion()

  const rotation = reduced ? 0 : progress * 8
  const scale = reduced ? 1 : 1 - progress * 0.04
  const translateY = reduced ? 0 : -progress * 40

  const getIngredientOpacity = (index) => {
    const threshold = 0.35 + index * 0.12
    return Math.min(1, Math.max(0, (progress - threshold) / 0.15))
  }

  return (
    <section
      id="formula"
      ref={sectionRef}
      className="relative"
      style={{ height: reduced ? 'auto' : '260vh' }}
    >
      <div
        className={`${reduced ? 'relative py-24' : 'sticky top-0 h-svh'} flex items-center overflow-hidden`}
        style={{
          background: 'linear-gradient(180deg, #E8E2D5 0%, #F3EFE6 40%, #D7DEC0 100%)',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="text-center">
            <SectionLabel>The Signature Formula</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-bio-text md:text-5xl lg:text-6xl">
              Nourishment, made visible.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-bio-olive/90 md:text-base">
              LYVRA Nourishing Hair Oil is designed to bring natural oils into a refined daily ritual for softer, smoother, shinier-looking hair.
            </p>
          </div>

          {/* Product with orbit */}
          <div className="relative mx-auto mt-12 max-w-md md:max-w-lg">
            {/* Rotating circle */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div
                className="relative h-[120%] w-[120%] rounded-full border border-bio-olive/10"
                style={{
                  transform: reduced ? undefined : `rotate(${progress * 360}deg)`,
                  transition: reduced ? undefined : 'transform 0ms linear',
                }}
              >
                {circleLabels.map((label, i) => {
                  const angle = (i / circleLabels.length) * 360 - 90
                  const rad = (angle * Math.PI) / 180
                  const x = 50 + 46 * Math.cos(rad)
                  const y = 50 + 46 * Math.sin(rad)
                  return (
                    <span
                      key={label}
                      className="absolute font-sans text-[8px] tracking-[0.18em] text-bio-olive/50 uppercase whitespace-nowrap"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: reduced
                          ? 'translate(-50%, -50%)'
                          : `translate(-50%, -50%) rotate(${-progress * 360}deg)`,
                      }}
                    >
                      {label}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Product image */}
            <div
              className="relative z-10 mx-auto"
              style={{
                transform: reduced
                  ? undefined
                  : `translateY(${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
              }}
            >
              <img
                src="/images/biofera-collection.png"
                alt="LYVRA Nourishing Hair Oil — translucent green and ivory bottles with natural wood caps"
                className="mx-auto w-full max-w-xs object-contain md:max-w-sm"
                loading="lazy"
              />
              <div className="absolute -bottom-3 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-[100%] bg-bio-olive/10 blur-xl" aria-hidden="true" />
            </div>

            {/* Ingredient annotations */}
            {ingredients.map((ing, i) => (
              <div
                key={ing.name}
                className={`absolute hidden md:block ${ing.position}`}
                style={{
                  opacity: getIngredientOpacity(i),
                  filter: reduced ? 'none' : `blur(${(1 - getIngredientOpacity(i)) * 8}px)`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="line-draw h-px w-10 bg-bio-olive/40"
                    style={{
                      transform: `scaleX(${getIngredientOpacity(i)})`,
                      transformOrigin: 'left center',
                    }}
                  />
                  <span className="font-sans text-[9px] tracking-[0.2em] text-bio-olive uppercase whitespace-nowrap">
                    {ing.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
