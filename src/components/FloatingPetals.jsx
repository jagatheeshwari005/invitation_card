import { motion } from 'framer-motion'

const PETALS = [
  { left: '8%',  delay: 0,    dur: 10, size: 14, color: '#E8820A' },
  { left: '18%', delay: 1.5,  dur: 13, size: 10, color: '#F5C030' },
  { left: '28%', delay: 3,    dur: 9,  size: 16, color: '#D4600A' },
  { left: '40%', delay: 4.5,  dur: 12, size: 11, color: '#E8820A' },
  { left: '52%', delay: 0.7,  dur: 11, size: 13, color: '#F5D060' },
  { left: '62%', delay: 2.2,  dur: 10, size: 9,  color: '#C8600A' },
  { left: '73%', delay: 5.5,  dur: 14, size: 15, color: '#E8820A' },
  { left: '83%', delay: 1.1,  dur: 8,  size: 12, color: '#F5C030' },
  { left: '91%', delay: 6,    dur: 11, size: 10, color: '#D4600A' },
  { left: '35%', delay: 3.8,  dur: 13, size: 14, color: '#E8820A' },
  { left: '12%', delay: 7,    dur: 9,  size: 11, color: '#F5C030' },
  { left: '57%', delay: 0.3,  dur: 12, size: 13, color: '#C8600A' },
]

export default function FloatingPetals() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {PETALS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left: p.left }}
          animate={{
            y: ['0vh', '108vh'],
            x: [0, 60, -30, 80, 0],
            rotate: [0, 180, 360, 540, 720],
            opacity: [0, 0.85, 0.75, 0.6, 0],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Flower petal SVG */}
          <svg width={p.size} height={p.size * 1.5} viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="7" cy="10" rx="6" ry="9" fill={p.color} opacity="0.85"/>
            <ellipse cx="7" cy="10" rx="3.5" ry="6" fill={p.color} opacity="0.5"/>
            <line x1="7" y1="2" x2="7" y2="18" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6"/>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
