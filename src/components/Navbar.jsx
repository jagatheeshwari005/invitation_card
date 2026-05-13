import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { href: '#hero',      label: 'முகப்பு' },
  { href: '#couple',    label: 'தம்பதியர்' },
  { href: '#engagement',label: 'நிச்சயம்' },
  { href: '#penalaippu',label: 'பெண் அழைப்பு' },
  { href: '#marriage',  label: 'முகூர்த்தம்' },
  { href: '#blessings', label: 'ஆசீர்வாதம்' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        background: scrolled
          ? 'rgba(249,228,183,0.97)'
          : 'rgba(249,228,183,0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1.5px solid rgba(200,134,10,0.28)',
        boxShadow: scrolled ? '0 4px 20px rgba(138,78,6,0.12)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="font-tamil font-bold text-base" style={{ color: '#C8860A' }}>
          ராஜேஷ் வர்மா& சந்தியா
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              className="font-tamilSans text-xs px-3 py-1.5 rounded-full transition-all"
              style={{ color: '#6B2E1A' }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(200,134,10,0.12)'
                e.target.style.color = '#C8860A'
              }}
              onMouseLeave={e => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#6B2E1A'
              }}
            >
              {n.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="menu"
          style={{ color: '#C8860A' }}
        >
          {[0,1,2].map(i => (
            <motion.span
              key={i}
              className="block h-0.5 w-6 rounded"
              style={{ background: '#C8860A' }}
              animate={open
                ? i === 0 ? { rotate: 45,  y: 8 }
                : i === 1 ? { opacity: 0 }
                :           { rotate: -45, y: -8 }
                : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: '1px solid rgba(200,134,10,0.2)' }}
          >
            {NAV.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                className="block px-6 py-3 font-tamilSans text-sm"
                style={{ color: '#6B2E1A', borderBottom: '1px solid rgba(200,134,10,0.1)' }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
