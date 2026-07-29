import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : ''
      }`}
      style={{
        background: scrolled ? 'rgba(10,10,15,0.8)' : 'transparent',
        borderBottom: '1px solid rgba(61,232,224,0.06)',
        borderBottomColor: scrolled ? 'rgba(61,232,224,0.06)' : 'transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#about" className="text-sm tracking-wider text-text/60 hover:text-neon-cyan transition-colors">
          <span className="text-neon-cyan">$</span> mahesh.dev
        </a>

        <ul className="hidden md:flex gap-8 text-sm items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="glitch-hover relative text-text/40 hover:text-neon-cyan transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-lg text-text/60"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div style={{ background: 'rgba(10,10,15,0.95)', borderTop: '1px solid rgba(61,232,224,0.06)' }}>
          <ul className="flex flex-col gap-4 p-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-text/40 hover:text-neon-cyan transition-colors text-sm"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
