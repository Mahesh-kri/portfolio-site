import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/ui/Reveal'
import {
  FaRunning,
  FaBookOpen,
  FaMusic,
  FaLanguage,
  FaPlane,
  FaArrowLeft,
  FaInstagram,
  FaGlobeAsia,
  FaLaptopCode,
  FaHeart,
} from 'react-icons/fa'

const places = [
  { name: 'Meghalaya', emoji: '🌧️' },
  { name: 'Nepal', emoji: '🏔️' },
  { name: 'Kasol', emoji: '🌲' },
  { name: 'Tosh', emoji: '🏡' },
  { name: 'Kuari Pass', emoji: '⛰️' },
  { name: 'Rajasthan', emoji: '🏜️' },
  { name: 'Goa', emoji: '🌊' },
]

const hobbies = [
  { icon: FaRunning, label: 'Running', desc: 'Casual runner, tracking on Strava — more about consistency than pace 🏃' },
  { icon: FaBookOpen, label: 'Reading', desc: 'Fiction, tech blogs, and the occasional philosophy rabbit hole 📚' },
  { icon: FaMusic, label: 'Music', desc: 'Guitar, lo-fi beats, and discovering new artists on repeat 🎸' },
  { icon: FaLanguage, label: 'Languages', desc: 'English, Malayalam, Hindi — learning Japanese & French 🌐' },
]

const lifeComponents = [
  { label: 'Code', emoji: '💻' },
  { label: 'Fitness', emoji: '🏋️' },
  { label: 'Books', emoji: '📖' },
  { label: 'Music', emoji: '🎵' },
  { label: 'Travel', emoji: '🌍' },
  { label: 'Gaming', emoji: '🎮' },
]

const routine = [
  { time: '7:00 AM', activity: 'Wake up ☀️' },
  { time: '9:00 AM', activity: 'Work / Code 💻' },
  { time: '1:00 PM', activity: 'Lunch 🍛' },
  { time: '5:00 PM', activity: 'Run / Gym 🏃' },
  { time: '7:00 PM', activity: 'Dinner 🍜' },
  { time: '9:00 PM', activity: 'Read / Music 📖🎵' },
  { time: '11:00 PM', activity: 'Sleep 🌙' },
]

const futurePlans = [
  'Move to Dublin 🇮🇪',
  'MSc in DevOps 🎓',
  'Run a half-marathon 🏃',
  'Learn Japanese 🇯🇵',
  'Visit Japan 🇯🇵',
  'Build more open-source 🧑‍💻',
]

export default function Personal() {
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
              hello again
            </h1>
            <p className="text-sm font-mono mt-1" style={{ color: 'rgba(0,255,245,0.6)' }}>
              the other side
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="mt-8 p-5 rounded-xl"
              style={{
                border: '1px solid rgba(0,255,245,0.08)',
                background: 'rgba(15,15,26,0.3)',
              }}
            >
              <p className="text-sm text-gray-500 leading-relaxed">
                Outside of backend systems and settlement pipelines, this is where I actually spend my headspace &mdash; a camera, a pair of running shoes, and a running list of places I haven&apos;t been yet.
              </p>
            </div>
          </Reveal>

          <section className="mt-12">
            <Reveal>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono" style={{ color: 'var(--neon-cyan)' }}>$</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(0,255,245,0.1)] to-transparent" />
              </div>
              <h2 className="font-heading text-lg text-gray-200 flex items-center gap-2">
                <FaHeart style={{ color: 'var(--neon-pink)' }} className="text-sm" />
                hobbies
              </h2>
            </Reveal>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {hobbies.map((h, i) => (
                <Reveal key={h.label} delay={i * 0.06}>
                  <div
                    className="p-4 rounded-xl transition-all duration-300"
                    style={{
                      border: '1px solid rgba(0,255,245,0.06)',
                      background: 'rgba(15,15,26,0.3)',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <h.icon className="text-base mt-0.5" style={{ color: 'var(--neon-cyan)' }} />
                      <div>
                        <h3 className="text-sm text-gray-300 font-heading">{h.label}</h3>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <Reveal>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono" style={{ color: 'var(--neon-cyan)' }}>$</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(0,255,245,0.1)] to-transparent" />
              </div>
              <h2 className="font-heading text-lg text-gray-200 flex items-center gap-2">
                <FaGlobeAsia style={{ color: 'var(--neon-green)' }} className="text-sm" />
                places i&apos;ve been
              </h2>
            </Reveal>
            <div className="mt-4 grid grid-cols-4 md:grid-cols-7 gap-2">
              {places.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.04}>
                  <div
                    className="p-2.5 rounded-xl text-center transition-all duration-300"
                    style={{
                      border: '1px solid rgba(0,255,245,0.06)',
                      background: 'rgba(15,15,26,0.3)',
                    }}
                  >
                    <div className="text-xl">{p.emoji}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5 font-mono truncate">{p.name}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="mt-3">
                <a
                  href="https://www.instagram.com/__mahesshh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono hover:text-gray-200 transition-colors"
                  style={{ color: 'var(--neon-pink)' }}
                >
                  <FaInstagram /> more on instagram &rarr;
                </a>
              </div>
            </Reveal>
          </section>

          <section className="mt-12">
            <Reveal>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono" style={{ color: 'var(--neon-cyan)' }}>$</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(0,255,245,0.1)] to-transparent" />
              </div>
              <h2 className="font-heading text-lg text-gray-200 flex items-center gap-2">
                <FaLaptopCode style={{ color: 'var(--neon-blue)' }} className="text-sm" />
                components of life
              </h2>
            </Reveal>
            <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-2">
              {lifeComponents.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.04}>
                  <div
                    className="p-3 rounded-xl text-center transition-all duration-300"
                    style={{
                      border: '1px solid rgba(0,255,245,0.06)',
                      background: 'rgba(15,15,26,0.3)',
                    }}
                  >
                    <div className="text-lg">{c.emoji}</div>
                    <div className="text-[10px] text-gray-500 mt-1 font-mono">{c.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <Reveal>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono" style={{ color: 'var(--neon-cyan)' }}>$</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(0,255,245,0.1)] to-transparent" />
              </div>
              <h2 className="font-heading text-lg text-gray-200 flex items-center gap-2">
                <FaRunning style={{ color: 'var(--neon-cyan)' }} className="text-sm" />
                daily routine
              </h2>
            </Reveal>
            <div className="mt-4 space-y-1">
              {routine.map((r, i) => (
                <Reveal key={r.time} delay={i * 0.04}>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.02] transition-colors">
                    <span className="text-xs font-mono w-16 flex-shrink-0" style={{ color: 'rgba(0,255,245,0.6)' }}>{r.time}</span>
                    <div className="h-[1px] flex-1" style={{ background: 'rgba(0,255,245,0.05)' }} />
                    <span className="text-xs text-gray-500">{r.activity}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <Reveal>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono" style={{ color: 'var(--neon-cyan)' }}>$</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(0,255,245,0.1)] to-transparent" />
              </div>
              <h2 className="font-heading text-lg text-gray-200 flex items-center gap-2">
                <FaPlane style={{ color: 'var(--neon-green)' }} className="text-sm" />
                future plans
              </h2>
            </Reveal>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
              {futurePlans.map((p, i) => (
                <Reveal key={p} delay={i * 0.04}>
                  <div
                    className="p-3 rounded-xl text-center transition-all duration-300"
                    style={{
                      border: '1px solid rgba(0,255,245,0.06)',
                      background: 'rgba(15,15,26,0.3)',
                    }}
                  >
                    <span className="text-xs text-gray-500">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mt-16 text-center">
            <Reveal>
              <p className="text-xs text-gray-600 font-mono">
                thanks for visiting
              </p>
            </Reveal>
          </section>

          <section className="mt-8 text-center">
            <Reveal>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono hover:text-gray-200 transition-colors duration-300 group"
                style={{ color: 'var(--neon-cyan)' }}
              >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                back to professional side &rarr;
              </a>
            </Reveal>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
