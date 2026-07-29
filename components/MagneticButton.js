import { useRef, useState, useEffect } from 'react'

let prefersReduced = false
if (typeof window !== 'undefined') {
  prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function MagneticButton({ children, className = '', onClick, as: Tag = 'button', href, ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    if (prefersReduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 60) {
      const pull = Math.max(0, (60 - dist) / 60) * 6
      const angle = Math.atan2(dy, dx)
      setPos({ x: Math.cos(angle) * pull, y: Math.sin(angle) * pull })
    } else {
      setPos({ x: 0, y: 0 })
    }
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  const style = prefersReduced ? {} : {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: 'transform 0.15s ease-out',
  }

  if (Tag === 'a') {
    return (
      <a ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave} style={style} className={className} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave} onClick={onClick} style={style} className={className} {...props}>
      {children}
    </button>
  )
}
