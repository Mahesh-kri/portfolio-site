import { useEffect } from 'react'
import { useCinema } from '../lib/CinemaContext'

export default function PlayScreen() {
  const { dispatch } = useCinema()

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space') {
        e.preventDefault()
        dispatch({ type: 'PLAY' })
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [dispatch])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none"
      style={{ background: '#0A0A0F' }}
    >
      <div className="scanline" />

      <div className="text-center space-y-8 relative z-10" onClick={(e) => e.stopPropagation()}>
        {/* Prompt line with blinking cursor */}
        <p className="text-sm md:text-base tracking-[0.2em] text-text/60">
          <span className="text-neon-cyan">&gt;</span> initialize mahesh.dev
          <span className="inline-block w-[2px] h-[1em] ml-0.5 bg-neon-cyan align-middle animate-cursor-blink" />
        </p>

        {/* Play button */}
        <button
          onClick={() => dispatch({ type: 'PLAY' })}
          className="pulse-glow w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 mx-auto group"
          style={{
            border: '2px solid rgba(61,232,224,0.3)',
            color: 'var(--neon-cyan)',
            animation: 'pulse-glow 2.5s ease-in-out infinite, float 4s ease-in-out infinite',
          }}
          aria-label="Play"
        >
          {/* Outer ring */}
          <div
            className="absolute inset-[-6px] rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500"
            style={{
              border: '1px solid rgba(61,232,224,0.15)',
              animation: 'spin 6s linear infinite',
            }}
          />
          {/* Inner ring */}
          <div
            className="absolute inset-[-12px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{
              border: '1px dashed rgba(61,232,224,0.1)',
              animation: 'spin 10s linear infinite reverse',
            }}
          />
          {/* Play icon */}
          <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 ml-1 relative z-10" fill="currentColor">
            <polygon points="6,4 20,12 6,20" />
          </svg>
        </button>

        {/* Hint text */}
        <p className="text-xs text-text/25 tracking-[0.15em] animate-pulse">
          press [ space ] or click play
        </p>
      </div>
    </div>
  )
}
