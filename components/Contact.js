import { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import MagneticButton from './MagneticButton'

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'maheshkrishnap.mec@gmail.com',
    href: 'mailto:maheshkrishnap.mec@gmail.com',
    action: 'copy',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mahesh-krishnap',
    href: 'https://www.linkedin.com/in/mahesh-krishnap',
    action: 'link',
  },
]

export default function Contact() {
  const [toast, setToast] = useState(false)
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('maheshkrishnap.mec@gmail.com')
      setToast(true)
      setTimeout(() => setToast(false), 2000)
    } catch (e) {}
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs md:text-sm font-mono tracking-[0.2em] text-neon-cyan/60 mb-1">$ contact</p>
        <h2 ref={headerRef} className="text-lg md:text-xl font-medium text-text mb-2">Let&apos;s Talk</h2>
        <p className="text-sm text-text/50 max-w-xl leading-relaxed mb-8">
          Wondering what&apos;s next, drop an email — I&apos;d genuinely like to hear from you.
        </p>

        <div className="flex flex-wrap gap-3">
          {contactItems.map((item) => (
            item.action === 'copy' ? (
              <button
                key={item.label}
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300"
                style={{
                  border: '1px solid rgba(61,232,224,0.08)',
                  background: 'rgba(61,232,224,0.02)',
                }}
              >
                <item.icon className="text-neon-cyan text-sm" />
                <span className="text-xs text-text/60">{item.value}</span>
                <span className="text-[10px] text-neon-cyan/50 ml-1">copy</span>
              </button>
            ) : (
              <MagneticButton
                key={item.label}
                as="a"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300"
                style={{
                  border: '1px solid rgba(61,232,224,0.08)',
                  background: 'rgba(61,232,224,0.02)',
                }}
              >
                <item.icon className="text-neon-cyan text-sm" />
                <span className="text-xs text-text/60">{item.value}</span>
              </MagneticButton>
            )
          ))}
        </div>

        {toast && (
          <div className="toast-pop mt-4 inline-flex items-center gap-2 px-3 py-2 rounded text-xs font-mono" style={{
            border: '1px solid rgba(61,232,224,0.15)',
            background: 'rgba(61,232,224,0.05)',
            color: 'var(--neon-cyan)',
            boxShadow: '0 0 15px rgba(61,232,224,0.1)',
          }}>
            email copied to clipboard
          </div>
        )}
      </div>
    </section>
  )
}
