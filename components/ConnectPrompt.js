import { useState, useRef, useCallback, useEffect } from 'react'
import { useCinema } from '../lib/CinemaContext'

let prefersReduced = false
if (typeof window !== 'undefined') {
  prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const REPULSION_RADIUS = 110
const REPULSION_STRENGTH = 150

export default function ConnectPrompt() {
  const { state } = useCinema()
  const [dodges, setDodges] = useState(0)
  const [flare, setFlare] = useState(false)
  const [message, setMessage] = useState(null)
  const containerRef = useRef(null)
  const noRef = useRef(null)
  const rafRef = useRef(null)
  const cursorRef = useRef({ x: -9999, y: -9999 })
  const offsetRef = useRef({ x: 0, y: 0 })
  const rotationRef = useRef(0)
  const wasRepellingRef = useRef(false)

  const tick = useCallback(() => {
    if (prefersReduced) return
    const btn = noRef.current
    if (!btn) return

    const cursor = cursorRef.current
    const bRect = btn.getBoundingClientRect()

    const cx = bRect.left + bRect.width / 2
    const cy = bRect.top + bRect.height / 2
    const dx = cursor.x - cx
    const dy = cursor.y - cy
    const dist = Math.sqrt(dx * dx + dy * dy)

    let targetOX = 0
    let targetOY = 0

    if (dist < REPULSION_RADIUS && dist > 0) {
      const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS
      const angle = Math.atan2(dy, dx)
      targetOX = -Math.cos(angle) * force * REPULSION_STRENGTH
      targetOY = -Math.sin(angle) * force * REPULSION_STRENGTH
      rotationRef.current = -angle * (180 / Math.PI) * 0.08

      if (!wasRepellingRef.current) {
        wasRepellingRef.current = true
        setDodges((d) => d + 1)
      }
    } else {
      rotationRef.current = 0
      wasRepellingRef.current = false
    }

    const ox = offsetRef.current.x + (targetOX - offsetRef.current.x) * 0.2
    const oy = offsetRef.current.y + (targetOY - offsetRef.current.y) * 0.2
    offsetRef.current = { x: ox, y: oy }
    btn.style.transform = `translate(${ox}px, ${oy}px) rotate(${rotationRef.current}deg)`

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    if (prefersReduced || state.phase !== 'portfolio') return
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [tick, state.phase])

  const handleMouseMove = useCallback((e) => {
    cursorRef.current = { x: e.clientX, y: e.clientY }
  }, [])

  const handleNoPointerDown = useCallback((e) => {
    if (prefersReduced) return
    e.preventDefault()
    cursorRef.current = { x: e.clientX, y: e.clientY }
  }, [])

  const handleYes = () => {
    setFlare(true)
    setTimeout(() => {
      setFlare(false)
      setMessage('thanks! please use the contact options below ✦')
      setTimeout(() => setMessage(null), 4000)
    }, 500)
  }

  const glowIntensity = Math.min(dodges / 5, 1)
  const glow = `0 0 ${6 + glowIntensity * 12}px rgba(61,232,224,${0.1 + glowIntensity * 0.2})`
  const yesGlow = `0 0 ${10 + glowIntensity * 25}px rgba(61,232,224,${0.2 + glowIntensity * 0.3}), 0 0 ${20 + glowIntensity * 50}px rgba(61,232,224,${0.1 + glowIntensity * 0.15})`

  if (state.phase !== 'portfolio') return null

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={containerRef}
          className="relative w-full rounded-xl overflow-hidden"
          style={{
            border: '1px solid rgba(61,232,224,0.06)',
            background: 'rgba(61,232,224,0.02)',
            minHeight: '180px',
          }}
          onMouseMove={handleMouseMove}
        >
          <div className="flex flex-col items-center justify-center py-10 gap-6">
            <p className="text-sm text-text/70 tracking-wide">
              are you gonna connect with me?
            </p>

            <div className="flex items-center justify-center">
              <button
                onClick={handleYes}
                className="relative z-10 px-6 py-2.5 rounded text-sm font-mono transition-all duration-300"
                style={{
                  border: '1px solid rgba(61,232,224,0.3)',
                  color: 'var(--neon-cyan)',
                  background: 'rgba(61,232,224,0.05)',
                  boxShadow: flare
                    ? '0 0 40px rgba(61,232,224,0.4), 0 0 80px rgba(61,232,224,0.2)'
                    : yesGlow,
                  transform: flare ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {flare ? '✦ yes!' : 'yes'}
              </button>

              <button
                ref={noRef}
                onPointerDown={handleNoPointerDown}
                onClick={(e) => e.preventDefault()}
                className="px-6 py-2.5 rounded text-sm font-mono select-none cursor-default shrink-0"
                style={{
                  border: '1px solid rgba(61,232,224,0.3)',
                  color: 'var(--neon-cyan)',
                  background: 'rgba(61,232,224,0.05)',
                  boxShadow: glow,
                  marginLeft: '12px',
                  opacity: prefersReduced ? 0.3 : undefined,
                }}
              >
                no
              </button>
            </div>
          </div>

          {message && (
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-xs text-neon-cyan/70 animate-pulse-glow">{message}</span>
            </div>
          )}

          {flare && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(61,232,224,0.15) 0%, transparent 70%)',
                animation: 'flare-out 0.5s ease-out forwards',
              }}
            />
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes flare-out {
          0% { opacity: 1; transform: scale(0.5); }
          100% { opacity: 0; transform: scale(2.5); }
        }
      `}</style>
    </section>
  )
}
