import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { GoldDivider, FloralCorner, KuthuVilakku } from './Decorations'

const families = [
  {
    side: 'மணமகன் குடும்பம்',
    members: [
      { name: 'திரு. அருள்',         role: 'தந்தை' },
      { name: 'திருமதி. சந்திரா',    role: 'தாய்' },
      { name: 'ஸ்ரீ ராஜேஷ் வர்மா',   role: 'மணமகன்' },
      { name: 'தினேஷ் வர்மா(B.Sc, MBA)',       role: 'சகோதரர்' },
    ],
  },
  {
    side: 'மணப்பெண் குடும்பம்',
    members: [
      { name: 'திரு. லோகநாதன்',      role: 'தந்தை' },
      { name: 'திருமதி. கோமதி',      role: 'தாய்' },
      { name: 'ஸ்ரீமதி. சந்தியா',    role: 'மணப்பெண்' },
      { name: 'தமிழ்செல்வன் (B.E)',        role: 'சகோதரர்' },
      { name: 'ஜெகதீஸ்வரி (B.Tech)',       role: 'சகோதரி' },
    ],
  },
]

export default function BlessingsSection() {
  return (
    <section id="blessings" className="section-pad relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <p className="font-tamilSans text-sm tracking-widest mb-2" style={{ color: '#C8860A' }}>
              ✦ குடும்ப ஆசீர்வாதம் ✦
            </p>
            <h2 className="font-tamil font-bold text-3xl md:text-4xl" style={{ color: '#6B2E1A' }}>
              குடும்பத்தினர்
            </h2>
            <GoldDivider />
          </div>
        </ScrollReveal>

        {/* Animated lamp centre */}
        <ScrollReveal direction="scale" delay={0.1}>
          <div className="flex justify-center mb-10">
            <motion.div
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top center' }}
            >
              <KuthuVilakku className="w-16 h-28" />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Family cards */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {families.map((fam, fi) => (
            <ScrollReveal key={fi} direction={fi === 0 ? 'left' : 'right'} delay={fi * 0.15} className="flex-1">
              <div
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: 'rgba(255,248,231,0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(200,134,10,0.3)',
                  boxShadow: '0 8px 32px rgba(138,78,6,0.1)',
                }}
              >
                <FloralCorner corner="tl" />
                <FloralCorner corner="br" />

                <h3
                  className="font-tamil font-bold text-lg text-center mb-4"
                  style={{ color: '#C8860A' }}
                >
                  {fam.side}
                </h3>
                <GoldDivider />
                <div className="mt-3 space-y-3">
                  {fam.members.map((m, mi) => (
                    <div
                      key={mi}
                      className="flex justify-between items-center py-2 px-3 rounded-lg"
                      style={{ background: 'rgba(200,134,10,0.06)', border: '1px solid rgba(200,134,10,0.15)' }}
                    >
                      <span className="font-tamil text-sm font-semibold" style={{ color: '#6B2E1A' }}>{m.name}</span>
                      <span
                        className="font-tamilSans text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(200,134,10,0.15)', color: '#7A4E06' }}
                      >
                        {m.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing blessing */}
        <ScrollReveal direction="up" delay={0.3}>
          <div
            className="relative rounded-2xl p-8 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg,rgba(200,134,10,0.12),rgba(200,134,10,0.06))',
              border: '1.5px solid rgba(200,134,10,0.4)',
              boxShadow: '0 8px 32px rgba(138,78,6,0.12)',
            }}
          >
            <FloralCorner corner="tl" />
            <FloralCorner corner="tr" />
            <FloralCorner corner="bl" />
            <FloralCorner corner="br" />

            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-4xl mb-4"
            >
              🙏
            </motion.div>

            <p className="font-tamil font-bold text-xl mb-3" style={{ color: '#6B2E1A' }}>
              தங்களின் வருகை எங்களுக்கு பெருமை
            </p>
            <GoldDivider />
            <p className="font-tamil text-sm leading-relaxed mt-3" style={{ color: '#7A4E06' }}>
              தங்களின் ஆசியும் அன்பும் எங்கள் வாழ்வில்<br />
              என்றும் வெளிச்சமாக ஒளிரும்.<br />
              முருகன் அருளால் இந்த மங்கல நிகழ்வு<br />
              சிறப்பாக நடைபெறட்டும்.
            </p>
            
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
