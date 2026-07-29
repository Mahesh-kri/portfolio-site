const techs = [
  { name: 'Java 17', color: '#ED8B00', logo: 'M8 2L2 22h4l1-4h10l1 4h4L16 2H8zm3 5.5l2.5 8h-5l2.5-8z' },
  { name: 'Spring Boot', color: '#6DB33F', logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
  { name: 'Apache Kafka', color: '#231F20', textColor: '#D8DCE0', logo: 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' },
  { name: 'Aerospike', color: '#C22127', logo: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7 3.5v7l-7 3.5-7-3.5v-7l7-3.5zM8 9v6l4 2V7l-4 2zm5-2v10l4-2V9l-4-2z' },
  { name: 'Docker', color: '#2496ED', logo: 'M13 5h-2v2h2V5zm-3 0H8v2h2V5zM7 5H5v2h2V5zm12 4h-2v2h2V9zm-3 0h-2v2h2V9zm-3 0H9v2h2V9zm-3 0H5v2h2V9zm10-2h-2v2h2V7zM7 11H3v6c0 1.1.9 2 2 2h4c2.21 0 4-1.79 4-4v-4H7z' },
  { name: 'AWS', color: '#FF9900', logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 15h-2v-5h-2v5h-2v-7h6v7zm-8-8V7h8v2H8z' },
  { name: 'Spring Boot 3, Spring 6 & Hibernate', color: '#E23DE0', logo: 'M12 2L2 7v10l10 5 10-5V7L12 2z' },
  { name: 'Apache POI', color: '#6DB33F', logo: 'M4 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4z' },
  { name: 'Apache Camel', color: '#DC4F00', logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z' },
  { name: 'Next.js', color: '#D8DCE0', logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 14h-2V8h-2v8h-2v-8H7v-2h8v10z' },
  { name: 'Tailwind CSS', color: '#06B6D4', logo: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7 3.5v7l-7 3.5-7-3.5v-7l7-3.5zM8 9v6l4 2V7l-4 2zm5-2v10l4-2V9l-4-2z' },
  { name: 'Python', color: '#3776AB', logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
]

const offsets = [0, 1.2, 2.8, 0.7, 3.5, 1.9, 2.1, 0.5, 3.0, 1.5, 2.5, 0.3, 3.2]
const durations = [4, 5, 3.5, 4.5, 6, 3.8, 5.2, 4.2, 3.2, 5.5, 4.8, 3.6, 5.8]

export default function TechStack() {
  return (
    <section id="tech" className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {techs.map((t, i) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 cursor-default badge-buzz"
              style={{
                border: `1px solid ${t.color}33`,
                color: t.textColor || t.color,
                background: `${t.color}0A`,
                animation: `float-tech ${durations[i]}s ease-in-out ${offsets[i]}s infinite`,
                boxShadow: `0 0 12px ${t.color}08`,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 flex-shrink-0"
                fill="currentColor"
                style={{ opacity: 0.8 }}
              >
                <path d={t.logo} />
              </svg>
              <span className="leading-none">{t.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
