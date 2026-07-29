import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: 'rgba(61,232,224,0.04)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text/30 tracking-wider">Mahesh Krishna P</p>
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
              className="text-sm text-text/20 hover:text-neon-cyan transition-colors"
            >
              <s.icon />
            </a>
          ))}
        </div>
        <p className="text-[10px] text-text/20 tracking-wider">Built with Next.js.</p>
      </div>
    </footer>
  )
}
