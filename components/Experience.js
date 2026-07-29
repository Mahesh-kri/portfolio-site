import { useEffect, useRef } from 'react'

const companies = [
  {
    name: 'Hatio Innovations',
    location: 'Kochi, India',
    period: 'July 2024 – July 2026',
    role: 'Software Development Engineer-I',
    desc: `My main role so far — I work as a backend engineer within Hatio in the ONDC ecosystem. I've architected Kafka event pipelines with DLQ, retry, and idempotency handling for high-throughput financial flows, cut processing time by ~75% through SAX parser optimization, and built a multithreaded batch pipeline that improved report delivery speed by ~55%. I've also implemented full auth stacks (Spring Security, JWT, 2FA, RBAC), designed DB architecture during solutioning sessions, mentored interns, and separately built a production-ready admin dashboard for another project within Hatio.`,
  },
  {
    name: 'Suntec Business Solutions',
    location: 'Trivandrum, Kerala',
    period: 'Jan 2024 – Jul 2024',
    role: 'Project Intern',
    desc: `A fintech-focused internship where I built and enhanced REST APIs on a live production codebase, applying functional programming patterns for cleaner code, and handled testing and debugging with JUnit and Mockito.`,
  },
  {
    name: 'UST',
    location: 'Remote',
    period: 'May 2023 – Jul 2023',
    role: 'Internship Trainee, UI/UX',
    desc: `My earliest internship, working with UST's Innovation team on a task manager webapp — hands-on design work rather than backend engineering, which is part of why I understand both sides of a product now.`,
  },
]

export default function Experience() {
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
    <section id="experience" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs md:text-sm font-mono tracking-[0.2em] text-neon-cyan/60 mb-1">{'>'} experience</p>
        <h2 ref={headerRef} className="text-lg md:text-xl font-medium text-text mb-6">The places I've worked at</h2>

        <div className="space-y-5">
          {companies.map((c, i) => (
            <div
              key={c.name}
              className="p-5 rounded-xl transition-all duration-300"
              style={{
                border: '1px solid rgba(61,232,224,0.06)',
                background: 'rgba(61,232,224,0.02)',
                borderLeft: '2px solid rgba(61,232,224,0.06)',
              }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                <p className="text-sm font-medium text-text">{c.name} <span className="text-text/40 font-normal">&mdash; {c.location}</span></p>
                <span className="text-[10px] text-text/30 whitespace-nowrap">{c.period}</span>
              </div>
              <p className="text-xs text-neon-cyan/60 mb-2">{c.role}</p>
              <p className="text-xs text-text/50 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
