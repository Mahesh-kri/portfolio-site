import CountUp from './CountUp'

const stats = [
  { end: 24, suffix: '', label: 'Age' },
  { end: 2, suffix: '+', label: 'Years of Experience' },
  { end: 3, suffix: '+', label: 'Projects Delivered' },
  { end: 1, suffix: 'L+', suffixPos: 'after', label: 'Daily Transactions Handled', multiplier: false },
]

export default function StatsBar() {
  return (
    <section id="stats" className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 md:p-5 rounded-xl text-center transition-all duration-300"
              style={{
                border: '1px solid rgba(61,232,224,0.06)',
                background: 'rgba(61,232,224,0.02)',
              }}
            >
              <p className="text-xl md:text-2xl font-medium text-neon-cyan">
                {s.suffixPos === 'before' ? (
                  <><span className="text-xs align-top">{s.suffix}</span><CountUp end={s.end} decimals={0} /></>
                ) : (
                  <><CountUp end={s.end} decimals={0} /><span className="text-xs align-top">{s.suffix}</span></>
                )}
              </p>
              <p className="text-[10px] md:text-xs text-text/40 mt-1 tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
