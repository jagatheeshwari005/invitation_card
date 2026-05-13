import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const weddingDate = new Date('June 18, 2026 09:00:00').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-pad relative z-10">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-tamil font-bold text-2xl md:text-3xl mb-4" style={{ color: '#6B2E1A' }}>
            திருமணத்திற்கு எஞ்சிய நாட்கள்
          </h2>
          
          <div className="flex justify-center gap-4 md:gap-8 mb-6">
            {[
              { value: timeLeft.days, label: 'நாட்கள்' },
              { value: timeLeft.hours, label: 'மணிநேரங்கள்' },
              { value: timeLeft.minutes, label: 'நிமிடங்கள்' },
              { value: timeLeft.seconds, label: 'விநாடிகள்' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center p-4 md:p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,248,231,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '2px solid rgba(200,134,10,0.6)',
                  boxShadow: '0 8px 32px rgba(138,78,6,0.15), 0 4px 20px rgba(138,78,6,0.08)',
                  minWidth: '100px'
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="font-tamil font-bold text-3xl md:text-4xl"
                  style={{ color: '#C8860A' }}
                >
                  {String(item.value).padStart(2, '0')}
                </motion.span>
                <span className="font-tamilSans text-xs md:text-sm mt-2" style={{ color: '#7A4E06' }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="font-tamil text-sm md:text-base italic"
            style={{ color: '#6B2E1A' }}
          >
            "நேரம் ஓடிக்கொண்டு இருக்கிறது, இன்பும் வளர்ந்து வருகிறது"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
