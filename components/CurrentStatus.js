import { useEffect, useRef } from 'react'

export default function CurrentStatus() {
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
    <section id="currently" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs md:text-sm font-mono tracking-[0.2em] text-neon-cyan/60 mb-1">{'>'} currently</p>
        <h2 ref={headerRef} className="text-lg md:text-xl font-medium text-text mb-6">Future Plans?</h2>

        <div
          className="p-6 rounded-xl"
          style={{
            border: '1px solid rgba(226,61,224,0.08)',
            background: 'rgba(226,61,224,0.02)',
          }}
        >
          <p className="text-sm text-text mb-3 font-medium" style={{ color: 'var(--neon-magenta)' }}>
            Transitioning into Platform Engineering.
          </p>
          <p className="text-sm text-text/50 leading-relaxed">
            Currently pursuing my MSc in Computing with Development Operations at TU Dublin, where I&apos;m deepening my cloud and DevOps fundamentals — Docker, Kubernetes, Terraform, AWS, CI/CD — and shifting toward a platform-focused role. Open to conversations, collaborations, and coffee recommendations in Dublin.
          </p>
        </div>
      </div>
    </section>
  )
}
