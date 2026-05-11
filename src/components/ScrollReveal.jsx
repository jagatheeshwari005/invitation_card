import { motion } from 'framer-motion'

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',    // 'up' | 'down' | 'left' | 'right' | 'scale'
  className = '',
  once = true,
}) {
  const offsets = {
    up:    { y: 50, x: 0,   scale: 1 },
    down:  { y: -50, x: 0,  scale: 1 },
    left:  { y: 0,  x: 60,  scale: 1 },
    right: { y: 0,  x: -60, scale: 1 },
    scale: { y: 0,  x: 0,   scale: 0.85 },
  }
  const off = offsets[direction] || offsets.up

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: off.y, x: off.x, scale: off.scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
