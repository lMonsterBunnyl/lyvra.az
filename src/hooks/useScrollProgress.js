import { useState, useEffect, useRef, useCallback } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)

  const update = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const p = docHeight > 0 ? scrollTop / docHeight : 0
    setProgress(Math.min(1, Math.max(0, p)))
    document.documentElement.style.setProperty('--scroll-progress', p.toFixed(4))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        update()
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [update])

  return progress
}

export function useElementScrollProgress(ref) {
  const [progress, setProgress] = useState(0)
  const reduced = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduced.current = mq.matches

    const update = () => {
      const rect = el.getBoundingClientRect()
      const scrollable = el.offsetHeight - window.innerHeight
      if (scrollable <= 0) {
        setProgress(0)
        return
      }
      const scrolled = -rect.top
      const p = Math.min(1, Math.max(0, scrolled / scrollable))
      setProgress(reduced.current ? (p > 0.5 ? 1 : 0) : p)
      el.style.setProperty('--section-progress', p.toFixed(4))
    }

    const onScroll = () => requestAnimationFrame(update)
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ref])

  return progress
}
