import { useEffect, useRef } from 'react'

let prefersReduced = false
if (typeof window !== 'undefined') {
  prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

let isTouchDevice = false
if (typeof window !== 'undefined') {
  isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

const interactives = new Set(['a', 'button', 'input', 'textarea', 'select', 'label'])

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (prefersReduced || isTouchDevice) return

    const style = document.createElement('style')
    style.textContent = 'body, body * { cursor: none !important; }'
    document.head.appendChild(style)

    const handleMouse = (e) => {
      const el = cursorRef.current
      if (!el) return

      el.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`

      const target = document.elementFromPoint(e.clientX, e.clientY)
      if (target) {
        const tag = target.tagName.toLowerCase()
        const role = target.getAttribute('role')
        const isClickable = interactives.has(tag) ||
          role === 'button' ||
          target.onclick ||
          target.classList.contains('cursor-pointer') ||
          target.closest('a, button, [role="button"], .cursor-pointer')

        if (isClickable) {
          el.style.width = '28px'
          el.style.height = '28px'
          el.style.borderColor = 'rgba(61,232,224,0.6)'
          el.style.borderWidth = '1.5px'
          el.style.boxShadow = '0 0 20px rgba(61,232,224,0.3), inset 0 0 10px rgba(61,232,224,0.1)'
          el.style.background = 'rgba(61,232,224,0.08)'
        } else {
          el.style.width = '20px'
          el.style.height = '20px'
          el.style.borderColor = 'rgba(61,232,224,0.3)'
          el.style.borderWidth = '1px'
          el.style.boxShadow = '0 0 6px rgba(61,232,224,0.08)'
          el.style.background = 'transparent'
        }
      }
    }

    const handleLeave = () => {
      const el = cursorRef.current
      if (el) el.style.opacity = '0'
    }

    const handleEnter = () => {
      const el = cursorRef.current
      if (el) el.style.opacity = '1'
    }

    window.addEventListener('mousemove', handleMouse)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      style.remove()
      window.removeEventListener('mousemove', handleMouse)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [])

  if (prefersReduced || isTouchDevice) return null

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        width: '20px',
        height: '20px',
        border: '1px solid rgba(61,232,224,0.3)',
        borderRadius: '50%',
        boxShadow: '0 0 6px rgba(61,232,224,0.08)',
        background: 'transparent',
        willChange: 'transform, width, height',
        pointerEvents: 'none',
        left: '0',
        top: '0',
      }}
    />
  )
}
