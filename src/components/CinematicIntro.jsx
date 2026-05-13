import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '../hooks/useAudio'

export default function CinematicIntro({ onEnter }) {
  const [showIntro, setShowIntro] = useState(true)
  const [particles, setParticles] = useState([])
  const { play, isPlaying } = useAudio('/wedding-music.mp3')
  
  // Generate floating particles
  useEffect(() => {
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  const handleEnter = () => {
    // Start music
    play()
    
    // Fade out intro
    setShowIntro(false)
    
    // Enter main website after animation
    setTimeout(() => {
      onEnter()
    }, 1500)
  }

  if (!showIntro) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 overflow-hidden"
      >
        {/* Cinematic Background Layers */}
        <div className="absolute inset-0">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Murugan temple silhouette */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 400 600" className="w-full h-full max-w-2xl">
              <g fill="#C8860A" opacity="0.8">
                {/* Temple gopuram */}
                <polygon points="200,100 150,250 250,250 250,100" />
                <polygon points="150,250 250,250 200,200" />
                {/* Murugan vel */}
                <line x1="200" y1="50" x2="200" y2="300" strokeWidth="8" />
                <polygon points="200,40 180,180 200,160 220,180" />
                {/* Peacock feathers */}
                {[...Array(7)].map((_, i) => {
                  const angle = (i * 30) - 90
                  const x = 200 + Math.cos(angle * Math.PI / 180) * 80
                  const y = 300 + Math.sin(angle * Math.PI / 180) * 80
                  return (
                    <g key={i} transform={`rotate(${angle} 200 300)`}>
                      <line x1="200" y1="300" x2={x} y2={y} strokeWidth="2" />
                      <ellipse cx={x} cy={y} rx="8" ry="15" opacity="0.6" />
                    </g>
                  )
                })}
                {/* Om symbol */}
                <text x="200" y="150" textAnchor="middle" fontSize="40" fill="#C8860A" fontFamily="serif">ஓம்</text>
              </g>
            </svg>
          </div>

          {/* Golden particles */}
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-yellow-400/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut'
              }}
            />
          ))}

          
          {/* Temple lighting effect */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-gradient-to-b from-yellow-300/20 to-transparent" />
            <div className="absolute top-20 left-1/3 w-1/3 h-24 bg-gradient-to-b from-orange-300/15 to-transparent" />
          </div>
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-center px-4 max-w-2xl"
          >
            {/* Welcome Heading */}
            <motion.h1
              animate={{
                textShadow: [
                  '0 0 20px rgba(200,134,10,0.5)',
                  '0 0 40px rgba(200,134,10,0.8)',
                  '0 0 20px rgba(200,134,10,0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="font-tamil text-4xl md:text-6xl font-bold mb-6"
              style={{ color: '#FFF8E7' }}
            >
              ✨ Welcome to Our Wedding Story ✨
            </motion.h1>

            {/* Couple Names */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-4"
            >
              <h2 className="font-tamil text-2xl md:text-4xl font-semibold" style={{ color: '#F9E4B7' }}>
                Rajesh Varma ❤️ Santhiya
              </h2>
            </motion.div>

            {/* Tamil Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-tamil text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: '#E8C0A0' }}
            >
              அன்பும் ஆசீர்வாதமும் இணையும் இனிய பயணம்
            </motion.p>

            {/* Enter Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="px-8 py-4 rounded-full font-tamilSans text-lg font-semibold relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #E8C040, #C8860A)',
                color: '#FFF8E7',
                boxShadow: '0 8px 32px rgba(200,134,10,0.4), 0 4px 16px rgba(200,134,10,0.2)',
              }}
            >
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(232,192,64,0.4)',
                    '0 0 40px rgba(232,192,64,0.8)',
                    '0 0 20px rgba(232,192,64,0.4)',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              <span className="relative z-10">Tap to Enter</span>
            </motion.button>

            {/* Music indicator */}
            {isPlaying && (
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 flex items-center gap-2 text-sm"
                style={{ color: '#E8C0A0' }}
              >
                <span className="animate-pulse">🎵</span>
                <span className="font-tamilSans">Playing Traditional Music</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
