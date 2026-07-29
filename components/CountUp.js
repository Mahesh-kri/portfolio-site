import { useEffect, useRef, useState } from 'react'

export default function CountUp({ end, suffix = '', suffixPos = 'after', decimals = 0 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true
        const target = Number(end)
        const duration = 1200
        const start = performance.now()

        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setVal(Math.round(eased * target * Math.pow(10, decimals)) / Math.pow(10, decimals))
          if (t < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [end, decimals])

  return (
    <span ref={ref}>
      {suffixPos === 'before' && suffix}{val}{suffixPos === 'after' && suffix}
    </span>
  )
}
