import { useState, useEffect } from 'react'

const sections = [
  { id: 'philosophy', label: 'PHILOSOPHY' },
  { id: 'science', label: 'SCIENCE' },
  { id: 'formula', label: 'FORMULA' },
  { id: 'ritual', label: 'RITUAL' },
  { id: 'collection', label: 'COLLECTION' },
]

export default function ScrollProgress() {
  const [active, setActive] = useState('philosophy')

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
      )

      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <aside
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex"
      aria-label="Page sections"
    >
      {/* Progress rail */}
      <div className="relative mr-1 h-32 w-px bg-bio-olive/15">
        <div
          className="absolute top-0 left-0 w-full bg-bio-botanical transition-all duration-500"
          style={{
            height: `${((sections.findIndex((s) => s.id === active) + 1) / sections.length) * 100}%`,
          }}
        />
      </div>

      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="font-sans text-[9px] tracking-[0.18em] uppercase transition-opacity duration-300"
          style={{ opacity: active === id ? 1 : 0.35, color: active === id ? '#707842' : '#707842' }}
        >
          {label}
        </a>
      ))}
    </aside>
  )
}
