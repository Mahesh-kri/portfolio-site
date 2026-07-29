import { useEffect, useRef } from 'react'

const hobbies = [
  'swimming', 'travelling', 'photography', 'movies',
  'cooking', 'dancing', 'hiking',
]

const places = [
  'Goa', 'Meghalaya', 'Parvati Valley', 'Nepal',
  'Uttarakhand', 'Rajasthan', 'Qatar',
]

const movies = [
  'The Curious Case of Benjamin Button', 'The Green Mile',
  'Breaking Bad','Yeh Jawaani Hai Deewani', 'Kumbalangi Nights',
]

export default function PersonalPeek() {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('glitch-trigger')
        setTimeout(() => el.classList.remove('glitch-trigger'), 400)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="peek" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs md:text-sm font-mono tracking-[0.2em] text-neon-cyan/60 mb-1">{'>'} beyond code</p>
        <h2 ref={headerRef} className="text-lg md:text-xl font-medium text-text mb-6">Peek into my world</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Hobbies */}
          <div
            className="p-5 rounded-xl"
            style={{
              border: '1px solid rgba(61,232,224,0.06)',
              background: 'rgba(61,232,224,0.02)',
            }}
          >
            <p className="text-xs font-mono tracking-wider text-neon-cyan/60 mb-3">hobbies</p>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <span
                  key={h}
                  className="text-[11px] px-2.5 py-1 rounded-full font-mono"
                  style={{
                    border: '1px solid rgba(61,232,224,0.1)',
                    color: 'rgba(61,232,224,0.6)',
                    background: 'rgba(61,232,224,0.03)',
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Places visited */}
          <div
            className="p-5 rounded-xl"
            style={{
              border: '1px solid rgba(226,61,224,0.06)',
              background: 'rgba(226,61,224,0.02)',
            }}
          >
            <p className="text-xs font-mono tracking-wider text-neon-magenta/60 mb-3">places visited</p>
            <div className="flex flex-wrap gap-2">
              {places.map((p) => (
                <span
                  key={p}
                  className="text-[11px] px-2.5 py-1 rounded-full font-mono"
                  style={{
                    border: '1px solid rgba(226,61,224,0.1)',
                    color: 'rgba(226,61,224,0.6)',
                    background: 'rgba(226,61,224,0.03)',
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Movies & shows */}
          <div
            className="p-5 rounded-xl"
            style={{
              border: '1px solid rgba(61,232,224,0.06)',
              background: 'rgba(61,232,224,0.02)',
            }}
          >
            <p className="text-xs font-mono tracking-wider text-neon-cyan/60 mb-3">movies & shows i loved</p>
            <div className="flex flex-wrap gap-2">
              {movies.map((m) => (
                <span
                  key={m}
                  className="text-[11px] px-2.5 py-1 rounded-full font-mono"
                  style={{
                    border: '1px solid rgba(61,232,224,0.1)',
                    color: 'rgba(61,232,224,0.6)',
                    background: 'rgba(61,232,224,0.03)',
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
