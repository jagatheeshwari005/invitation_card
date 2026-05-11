import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { GoldDivider, FloralCorner, PhotoPlaceholder } from './Decorations'

export default function EventCard({
  id,
  badge,
  title,
  subtitle,
  quote,
  date,
  time,
  venue,
  photo,
  photoAlt = '',
  placeholderLabel = '',
  glowBorder = false,
  mapLink = null,
  divaGlow = false,
  children,
}) {
  return (
    <section id={id} className="section-pad relative z-10">
      <div className="max-w-2xl mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-8">
            {badge && (
              <p className="font-tamilSans text-sm tracking-widest mb-2" style={{ color: '#C8860A' }}>
                ✦ {badge} ✦
              </p>
            )}
            <h2 className="font-tamil font-bold text-2xl md:text-3xl lg:text-4xl" style={{ color: '#6B2E1A' }}>
              {title}
            </h2>
            {subtitle && (
              <p className="font-tamil text-base mt-1" style={{ color: '#9A5020' }}>{subtitle}</p>
            )}
            <GoldDivider />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="scale" delay={0.1}>
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: 'spring', stiffness: 150, damping: 25 }}
            style={{
              background: 'rgba(255,248,231,0.92)',
              backdropFilter: 'blur(15px)',
              border: glowBorder
                ? '2px solid rgba(200,134,10,0.7)'
                : '1.5px solid rgba(200,134,10,0.4)',
              boxShadow: glowBorder
                ? '0 0 25px rgba(200,134,10,0.4), 0 12px 40px rgba(138,78,6,0.18), 0 4px 20px rgba(138,78,6,0.12)'
                : '0 12px 40px rgba(138,78,6,0.15), 0 4px 20px rgba(138,78,6,0.08)',
            }}
          >
            {/* Animated glow border */}
            {glowBorder && (
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(200,134,10,0.3)',
                    '0 0 35px rgba(200,134,10,0.6)',
                    '0 0 15px rgba(200,134,10,0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}

            <FloralCorner corner="tl" />
            <FloralCorner corner="tr" />
            <FloralCorner corner="bl" />
            <FloralCorner corner="br" />

            <div className="p-4 md:p-6 lg:p-8">
              {/* Photo */}
              {(photo || placeholderLabel) && (
                <div
                  className="w-32 h-32 sm:w-36 md:w-40 sm:h-36 md:h-40 rounded-full mx-auto mb-4 md:mb-6 overflow-hidden"
                  style={{
                    border: '3px solid #C8860A',
                    boxShadow: '0 0 0 6px rgba(200,134,10,0.12)',
                  }}
                >
                  {photo && (
                    <>
                      <img
                        src={photo}
                        alt={photoAlt}
                        className="w-full h-full object-cover"
                        onError={e => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'block'
                        }}
                      />
                      <div style={{ display: 'none' }} className="w-full h-full">
                        <PhotoPlaceholder label={placeholderLabel} color="#C8860A" />
                      </div>
                    </>
                  )}
                  {!photo && placeholderLabel && (
                    <PhotoPlaceholder label={placeholderLabel} color="#C8860A" />
                  )}
                </div>
              )}

              {/* Quote */}
              {quote && (
                <div
                  className="text-center mb-6 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(200,134,10,0.07)', border: '1px solid rgba(200,134,10,0.2)' }}
                >
                  <p className="font-tamil text-sm md:text-base italic leading-relaxed" style={{ color: '#7A4E06' }}>
                    "{quote}"
                  </p>
                </div>
              )}

              <GoldDivider />

              {/* Event details */}
              <div className="mt-4 space-y-3">
                {date && (
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📅</span>
                    <div>
                      <p className="font-tamilSans text-xs" style={{ color: '#C8860A' }}>நாள்</p>
                  <p className="font-tamil text-sm md:text-base font-semibold" style={{ color: '#6B2E1A' }}>{date}</p>
                    </div>
                  </div>
                )}
                {time && (
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">⏰</span>
                    <div>
                      <p className="font-tamilSans text-xs" style={{ color: '#C8860A' }}>நேரம்</p>
                  <p className="font-tamil text-sm md:text-base font-semibold" style={{ color: '#6B2E1A' }}>{time}</p>
                    </div>
                  </div>
                )}
                {venue && (
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📍</span>
                    <div>
                      <p className="font-tamilSans text-xs" style={{ color: '#C8860A' }}>இடம்</p>
                  <p className="font-tamil text-sm md:text-base font-semibold" style={{ color: '#6B2E1A' }}>{venue}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Diya glow effect */}
              {divaGlow && (
                <div className="flex justify-center mt-6 gap-6">
                  {[0, 1].map(i => (
                    <motion.div
                      key={i}
                      animate={{
                        filter: [
                          'drop-shadow(0 0 6px rgba(255,150,0,0.5))',
                          'drop-shadow(0 0 20px rgba(255,200,0,0.9))',
                          'drop-shadow(0 0 6px rgba(255,150,0,0.5))',
                        ],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    >
                      <svg width="32" height="52" viewBox="0 0 32 52" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="16" cy="8"  rx="5"  ry="8"  fill="#FF9500" opacity="0.9"/>
                        <ellipse cx="16" cy="10" rx="3"  ry="5"  fill="#FFD000"/>
                        <ellipse cx="16" cy="11" rx="1.5" ry="3" fill="#FFFDE0"/>
                        <line x1="16" y1="15" x2="16" y2="24" stroke="#5A3A1A" strokeWidth="1.5"/>
                        <ellipse cx="16" cy="25" rx="10" ry="3.5" fill="#C8860A"/>
                        <path d="M6,25 Q6,34 16,36 Q26,34 26,25" fill="#A06808"/>
        </svg>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Map button */}
              {mapLink && (
                <div className="mt-6 text-center">
                  <motion.a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-tamilSans text-sm font-semibold"
                    style={{
                      background: 'linear-gradient(135deg,#E8C040,#C8860A)',
                      color: '#FFF8E7',
                      boxShadow: '0 4px 16px rgba(200,134,10,0.4), 0 2px 8px rgba(200,134,10,0.2)',
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    📍 Google Maps-ல் காண்க
                  </motion.a>
                </div>
              )}

              {children}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
