import { useEffect, useRef } from 'react'

const H_LINES = [
  { top: '12%', baseSpeed: 18 },
  { top: '28%', baseSpeed: 14 },
  { top: '42%', baseSpeed: 22 },
  { top: '58%', baseSpeed: 16 },
  { top: '75%', baseSpeed: 20 },
]

const V_LINES = [
  { left: '12%', baseSpeed: 24 },
  { left: '35%', baseSpeed: 18 },
  { left: '62%', baseSpeed: 28 },
  { left: '85%', baseSpeed: 22 },
]

const THRESHOLD = 160
const MAX_MULTIPLIER = 2.5

export default function PipelineBackground() {
  const bgRef = useRef(null)
  const cursorRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(null)

  useEffect(() => {
    const bg = bgRef.current
    if (!bg) return

    const hEls = bg.querySelectorAll('.pipeline-line')
    const vEls = bg.querySelectorAll('.pipeline-line-vert')
    const hData = [...hEls].map((el, i) => ({ el, baseSpeed: H_LINES[i].baseSpeed }))
    const vData = [...vEls].map((el, i) => ({ el, baseSpeed: V_LINES[i].baseSpeed }))

    const tick = () => {
      const cursor = cursorRef.current

      for (const { el, baseSpeed } of hData) {
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(cursor.y - rect.top)
        if (dist < THRESHOLD) {
          const t = 1 - dist / THRESHOLD
          const duration = baseSpeed / (1 + t * (MAX_MULTIPLIER - 1))
          el.style.setProperty('--speed', `${duration}s`)
        } else {
          el.style.setProperty('--speed', `${baseSpeed}s`)
        }
      }

      for (const { el, baseSpeed } of vData) {
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(cursor.x - rect.left)
        if (dist < THRESHOLD) {
          const t = 1 - dist / THRESHOLD
          const duration = baseSpeed / (1 + t * (MAX_MULTIPLIER - 1))
          el.style.setProperty('--speed', `${duration}s`)
        } else {
          el.style.setProperty('--speed', `${baseSpeed}s`)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const handleMouse = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouse)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMouse)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={bgRef} className="pipeline-bg" aria-hidden="true">
      {H_LINES.map((line, i) => (
        <div key={`h-${i}`} className="pipeline-line" style={{ top: line.top, '--speed': `${line.baseSpeed}s` }} />
      ))}
      {V_LINES.map((line, i) => (
        <div key={`v-${i}`} className="pipeline-line-vert" style={{ left: line.left, '--speed': `${line.baseSpeed}s` }} />
      ))}
    </div>
  )
}
