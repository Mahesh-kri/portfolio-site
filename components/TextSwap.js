import { useState, useEffect } from 'react'

export default function TextSwap({ texts, className = '' }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % texts.length), 2200)
    return () => clearInterval(t)
  }, [texts.length])

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        key={idx}
        className="transition-all duration-500 ease-in-out"
      >
        {texts[idx]}
      </span>
    </span>
  )
}
