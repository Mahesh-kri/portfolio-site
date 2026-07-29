import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import MagneticButton from './MagneticButton'

const projects = [
  {
    title: 'Retail-OS',
    date: 'March 2026',
    desc: 'A full-stack retail management platform built for a live production client, designed to handle the day-to-day operations of an active retail business in one place for the admin and staff with — Inventory management, POS billing, CRM, Referral & loyalty program, Sales Reports and analytics.',
    tags: ['Spring Boot', 'Next.js'],
    status: 'Live client project',
    screenshots: [
      { src: '/screenshots/shot-1.png' },
      { src: '/screenshots/shot-2.png' },
      { src: '/screenshots/shot-3.png' },
      { src: '/screenshots/shot-4.png' },
    ],
  },
]

export default function Projects() {
  const [projectIdx, setProjectIdx] = useState(0)
  const [shotIdx, setShotIdx] = useState(0)
  const headerRef = useRef(null)

  const p = projects[projectIdx]

  useEffect(() => {
    setShotIdx(0)
  }, [projectIdx])

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
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs md:text-sm font-mono tracking-[0.2em] text-neon-cyan/60 mb-1">{'>'} projects</p>
        <h2 ref={headerRef} className="text-lg md:text-xl font-medium text-text mb-6">Things I've built</h2>

        <div
          className="rounded-xl transition-all duration-300 group"
          style={{
            border: '1px solid rgba(61,232,224,0.06)',
            background: 'rgba(61,232,224,0.02)',
          }}
        >
          {/* Header row: title + date + project nav */}
          <div className="flex items-center justify-between p-5 pb-0">
            <div className="flex items-center gap-3 min-w-0">
              <h3 className="text-sm font-medium text-text truncate">{p.title}</h3>
              {p.date && <span className="text-[10px] text-text/30 whitespace-nowrap">{p.date}</span>}
            </div>
            {projects.length > 1 && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setProjectIdx((i) => (i - 1 + projects.length) % projects.length)}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(61,232,224,0.05)',
                    color: 'rgba(61,232,224,0.5)',
                    border: '1px solid rgba(61,232,224,0.1)',
                  }}
                >
                  <FaChevronLeft className="text-[10px]" />
                </button>
                <span className="text-[10px] font-mono text-text/30 min-w-[24px] text-center">
                  {projectIdx + 1}/{projects.length}
                </span>
                <button
                  onClick={() => setProjectIdx((i) => (i + 1) % projects.length)}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(61,232,224,0.05)',
                    color: 'rgba(61,232,224,0.5)',
                    border: '1px solid rgba(61,232,224,0.1)',
                  }}
                >
                  <FaChevronRight className="text-[10px]" />
                </button>
              </div>
            )}
          </div>

          {/* Description + tags */}
          <div className="px-5 pt-3">
            <p className="text-xs text-text/50 leading-relaxed mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-2 items-center">
              {p.tags.map((t) => (
                <span key={t} className="text-[9px] px-2 py-0.5 rounded tracking-wider" style={{ border: '1px solid rgba(61,232,224,0.08)', color: 'rgba(61,232,224,0.5)' }}>
                  {t}
                </span>
              ))}
              {p.status && (
                <span className="text-[9px] px-2 py-0.5 rounded tracking-wider" style={{ border: '1px solid rgba(226,61,224,0.12)', color: 'rgba(226,61,224,0.6)' }}>
                  {p.status}
                </span>
              )}
            </div>
          </div>

          {/* Screenshot */}
          <div className="px-5 py-4 flex justify-center">
            <div
              className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden"
              style={{
                border: '1px solid rgba(61,232,224,0.08)',
                background: 'rgba(61,232,224,0.02)',
              }}
            >
              <Image
                src={p.screenshots[shotIdx].src}
                alt={`${p.title} screenshot ${shotIdx + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
                priority
              />

              {p.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => setShotIdx((i) => (i - 1 + p.screenshots.length) % p.screenshots.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: 'rgba(10,10,15,0.6)',
                      color: 'rgba(61,232,224,0.6)',
                      border: '1px solid rgba(61,232,224,0.1)',
                    }}
                  >
                    <FaChevronLeft className="text-xs" />
                  </button>
                  <button
                    onClick={() => setShotIdx((i) => (i + 1) % p.screenshots.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: 'rgba(10,10,15,0.6)',
                      color: 'rgba(61,232,224,0.6)',
                      border: '1px solid rgba(61,232,224,0.1)',
                    }}
                  >
                    <FaChevronRight className="text-xs" />
                  </button>
                </>
              )}

              <span
                className="absolute bottom-2 right-2 text-[9px] font-mono px-2 py-0.5 rounded"
                style={{
                  background: 'rgba(10,10,15,0.6)',
                  color: 'rgba(61,232,224,0.4)',
                }}
              >
                {shotIdx + 1} / {p.screenshots.length}
              </span>
            </div>
          </div>

          {/* GitHub link */}
          <div className="px-5 pb-5">
            <MagneticButton
              as="a"
              href="https://github.com/Mahesh-kri"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-text/40 hover:text-neon-cyan transition-colors"
            >
              <FaGithub className="text-sm" /> More on GitHub &rarr;
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
