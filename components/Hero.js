import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import TextSwap from './TextSwap'
import MagneticButton from './MagneticButton'

const roles = [
  'backend engineer',
  'distributed-systems tinkerer',
  'event-driven systems builder',
  'Kafka enthusiast',
  'platform engineering aspirant',
]

export default function Hero() {
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
    <section id="about" className="relative flex items-center pt-20 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

          {/* Text */}
          <div className="flex-1">
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] text-neon-cyan/60 mb-4">
              {'>'} about
            </p>

            <h1 ref={headerRef} className="text-3xl md:text-5xl leading-tight font-medium tracking-tight text-text">
              Hello, I&apos;m{" "}
              <span className="text-neon-cyan">Mahesh Krishna </span>
            </h1>

            <p className="text-sm md:text-base text-neon-cyan/70 mt-3 h-6">
              <TextSwap texts={roles} />
            </p>

            <p className="mt-4 text-sm text-text/60 max-w-xl leading-relaxed">
              Backend engineer building clean, reliable event-driven systems — currently based in Dublin.
            </p>

            <div className="mt-6 flex gap-4 items-center">
              <MagneticButton
                as="a"
                href="/portfolio-site/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded text-sm font-mono transition-all duration-300"
                style={{
                  border: '1px solid rgba(61,232,224,0.2)',
                  color: 'var(--neon-cyan)',
                }}
              >
                View Resume
              </MagneticButton>
              <div className="flex gap-4 items-center">
                {[
                  { icon: FaGithub, href: 'https://github.com/Mahesh-kri' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mahesh-krishnap' },
                  { icon: FaEnvelope, href: 'mailto:maheshkrishnap.mec@gmail.com' },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-text/30 hover:text-neon-cyan transition-all duration-300 hover:scale-110"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative group">
              <div
                className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                style={{
                  background: 'radial-gradient(circle, rgba(61,232,224,0.15) 0%, transparent 70%)',
                }}
              />
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(61,232,224,0.3)',
                  boxShadow: '0 0 25px rgba(61,232,224,0.1), inset 0 0 15px rgba(61,232,224,0.03)',
                }}
              >
                <Image
                  src="/portfolio-site/profile.jpg"
                  alt="Mahesh"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
