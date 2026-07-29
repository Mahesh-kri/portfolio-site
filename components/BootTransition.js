import { useEffect, useState, useRef } from 'react'
import { useCinema } from '../lib/CinemaContext'

const bootLines = [
  'loading kernel... ok',
  'mounting /experience... ok',
  'mounting /projects... ok',
]

const bootColors = [
  'rgba(61,232,224,0.8)',
  'rgba(226,61,224,0.7)',
  'rgba(61,232,224,0.8)',
]

let prefersReduced = false
if (typeof window !== 'undefined') {
  prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function BootTransition() {
  const { dispatch } = useCinema()
  const containerRef = useRef(null)
  const [phase, setPhase] = useState('collapse')

  useEffect(() => {
    if (prefersReduced) {
      dispatch({ type: 'BOOT_COMPLETE' })
      return
    }

    let t1, t2, t3

    t1 = setTimeout(() => setPhase('expand'), 150)
    t2 = setTimeout(() => setPhase('show-boot'), 350)
    t3 = setTimeout(() => {
      dispatch({ type: 'BOOT_COMPLETE' })
    }, 1100)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [dispatch])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
      {/* Neon energy flare — expands from center */}
      <div
        className={`absolute inset-0 ${phase === 'collapse' ? 'neon-flare' : ''} ${phase === 'expand' ? 'neon-flare-out' : ''}`}
        style={{ pointerEvents: 'none' }}
      />

      {/* Energy dash — racing streak across the middle */}
      {(phase === 'collapse' || phase === 'expand') && (
        <div className="energy-dash" style={{ pointerEvents: 'none' }} />
      )}

      {/* CRT collapse/expand overlay */}
      <div
        className={`absolute inset-0 ${phase === 'collapse' ? 'crt-collapse' : ''} ${phase === 'expand' || phase === 'show-boot' ? 'crt-expand' : ''}`}
        style={{ background: '#0A0A0F', transformOrigin: 'center' }}
      />

      {/* Boot messages */}
      {phase === 'show-boot' && (
        <div className="boot-message text-center space-y-1.5 relative z-10">
          {bootLines.map((line, i) => (
            <p
              key={line}
              className="text-xs md:text-sm tracking-wider"
              style={{
                color: bootColors[i],
                textShadow: `0 0 8px ${bootColors[i].replace('0.8', '0.2').replace('0.7', '0.15')}`,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
