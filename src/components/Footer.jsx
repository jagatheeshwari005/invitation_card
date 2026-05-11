import { motion } from 'framer-motion'
import { GoldDivider } from './Decorations'

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-12 px-4 text-center"
      style={{ background: 'linear-gradient(to top, rgba(200,134,10,0.15), transparent)' }}
    >
      <GoldDivider />

      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="text-4xl my-4"
      >
        🌺
      </motion.div>

      <h3 className="font-tamil font-bold text-2xl mb-1" style={{ color: '#6B2E1A' }}>
        ராஜேஷ் வர்மா & சந்தியா
      </h3>
      <p className="font-tamilSans text-sm mb-6" style={{ color: '#9A5020' }}>
        ஜூன் 14, 2025 | திருச்சிராப்பள்ளி
      </p>

      <GoldDivider />

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {[
          { icon: '📞', label: '+91 98765 43210' },
          { icon: '📧', label: 'wedding@rajeshsandhya.in' },
        ].map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-tamilSans"
            style={{
              background: 'rgba(200,134,10,0.1)',
              border: '1px solid rgba(200,134,10,0.3)',
              color: '#7A4E06',
            }}
          >
            {c.icon} {c.label}
          </div>
        ))}
      </div>

      <p
        className="font-tamil text-xs mt-8 opacity-60"
        style={{ color: '#C8860A' }}
      >
        ஓம் சரவணபவ ✦ ஸ்கந்த சஷ்டி வேல் முருகன் துணை
      </p>
    </footer>
  )
}
