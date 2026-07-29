import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import { useState } from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCheck,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGlobeAmericas,
  FaGraduationCap,
  FaRocket,
  FaArrowLeft,
} from 'react-icons/fa'

const infoCards = [
  { icon: FaEnvelope, label: 'Email', value: 'maheshkrishnap.mec@gmail.com', href: 'mailto:maheshkrishnap.mec@gmail.com', action: 'copy' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mahesh-krishnap', href: 'https://www.linkedin.com/in/mahesh-krishnap', action: 'link' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/Mahesh-kri', href: 'https://github.com/Mahesh-kri', action: 'link' },
  { icon: FaMapMarkerAlt, label: 'From', value: 'Kochi, India' },
  { icon: FaGlobeAmericas, label: 'Moving to', value: 'Dublin, Ireland' },
  { icon: FaBriefcase, label: 'Experience', value: '2+ years' },
  { icon: FaGraduationCap, label: 'Education', value: 'B.Tech CSE + MSc DevOps (starting)' },
]

export default function Contact() {
  const [toast, setToast] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('maheshkrishnap.mec@gmail.com')
      setToast(true)
      setTimeout(() => setToast(false), 2000)
    } catch (e) {}
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono" style={{ color: 'var(--neon-cyan)' }}>$</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(0,255,245,0.15)] to-transparent" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-gray-200">
              Get in Touch
            </h1>
            <p className="text-sm text-gray-500 mt-2 max-w-xl leading-relaxed">
              Wondering what&apos;s next,drop an email! I&apos;d genuinely like to hear from you.
            </p>
          </Reveal>

          <div className="mt-8 grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              <Reveal>
                <div
                  className="p-5 rounded-xl"
                  style={{
                    border: '1px solid rgba(0,255,245,0.08)',
                    background: 'rgba(15,15,26,0.3)',
                  }}
                >
                  <h3 className="text-sm font-heading text-gray-300 mb-4">Send a message</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'rgba(0,255,245,0.4)' }}>Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="your name"
                        className="mt-1 w-full px-3 py-2 rounded-lg text-sm text-gray-400 placeholder-gray-700 focus:outline-none transition-all duration-300 font-mono"
                        style={{
                          background: 'rgba(10,10,15,0.5)',
                          border: '1px solid rgba(0,255,245,0.08)',
                        }}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'rgba(0,255,245,0.4)' }}>Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="mt-1 w-full px-3 py-2 rounded-lg text-sm text-gray-400 placeholder-gray-700 focus:outline-none transition-all duration-300 font-mono"
                        style={{
                          background: 'rgba(10,10,15,0.5)',
                          border: '1px solid rgba(0,255,245,0.08)',
                        }}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'rgba(0,255,245,0.4)' }}>Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="what's on your mind?"
                        className="mt-1 w-full px-3 py-2 rounded-lg text-sm text-gray-400 placeholder-gray-700 focus:outline-none transition-all duration-300 font-mono resize-none"
                        style={{
                          background: 'rgba(10,10,15,0.5)',
                          border: '1px solid rgba(0,255,245,0.08)',
                        }}
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const subject = encodeURIComponent(`Re: ${form.name || 'portfolio visitor'}`)
                        const body = encodeURIComponent(form.message)
                        window.open(`mailto:maheshkrishnap.mec@gmail.com?subject=${subject}&body=${body}`)
                      }}
                      className="w-full py-2.5 rounded-lg text-xs font-mono transition-all duration-300"
                      style={{
                        color: '#0a0a0f',
                        background: 'var(--neon-cyan)',
                        boxShadow: '0 0 15px rgba(0,255,245,0.25)',
                      }}
                    >
                      Send Email &rarr;
                    </motion.button>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-2 space-y-2">
              {infoCards.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.04}>
                  {c.action === 'copy' ? (
                    <button
                      onClick={copyEmail}
                      className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300"
                      style={{
                        border: '1px solid rgba(0,255,245,0.06)',
                        background: 'rgba(15,15,26,0.3)',
                      }}
                    >
                      <c.icon className="text-sm flex-shrink-0" style={{ color: 'var(--neon-cyan)' }} />
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono uppercase" style={{ color: 'rgba(0,255,245,0.4)' }}>{c.label}</div>
                        <div className="text-xs text-gray-500 truncate">{c.value}</div>
                      </div>
                    </button>
                  ) : c.action === 'link' ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                      style={{
                        border: '1px solid rgba(0,255,245,0.06)',
                        background: 'rgba(15,15,26,0.3)',
                      }}
                    >
                      <c.icon className="text-sm flex-shrink-0" style={{ color: 'var(--neon-cyan)' }} />
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono uppercase" style={{ color: 'rgba(0,255,245,0.4)' }}>{c.label}</div>
                        <div className="text-xs text-gray-500 truncate">{c.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{
                        border: '1px solid rgba(0,255,245,0.06)',
                        background: 'rgba(15,15,26,0.3)',
                      }}
                    >
                      <c.icon className="text-sm flex-shrink-0" style={{ color: 'rgba(0,255,245,0.3)' }} />
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono uppercase" style={{ color: 'rgba(0,255,245,0.4)' }}>{c.label}</div>
                        <div className="text-xs text-gray-500">{c.value}</div>
                      </div>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono"
              style={{
                background: 'rgba(0,255,245,0.08)',
                border: '1px solid rgba(0,255,245,0.15)',
                color: 'var(--neon-cyan)',
              }}
            >
              <FaCheck />
              email copied to clipboard
            </motion.div>
          )}

          <section className="mt-12">
            <Reveal>
              <div
                className="p-5 rounded-xl"
                style={{
                  border: '1px solid rgba(255,0,255,0.12)',
                  background: 'rgba(255,0,255,0.04)',
                }}
              >
                <div className="flex items-start gap-3">
                  <FaRocket
                    className="text-base mt-0.5 animate-float flex-shrink-0"
                    style={{ color: 'var(--neon-cyan)' }}
                  />
                  <div>
                    <p className="text-xs font-mono tracking-wider" style={{ color: 'rgba(0,255,245,0.7)' }}>Current status</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Currently transitioning &mdash; based in Kochi, moving to Dublin this September for an MSc in Development Operations. Open to contract work and conversations in the meantime.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section className="mt-10 text-center">
            <Reveal>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono hover:text-gray-200 transition-colors duration-300"
                style={{ color: 'var(--neon-cyan)' }}
              >
                <FaArrowLeft /> back to home
              </a>
            </Reveal>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
