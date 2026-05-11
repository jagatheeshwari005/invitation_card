import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { GoldDivider, FloralCorner, PhotoPlaceholder } from './Decorations'

function PersonCard({ name, parents, role, photo, delay = 0, dir = 'left' }) {
  return (
    <ScrollReveal direction={dir} delay={delay} className="flex-1 min-w-0">
      <div
        className="relative rounded-2xl p-6 text-center overflow-hidden"
        style={{
          background: 'rgba(255,248,231,0.9)',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(200,134,10,0.4)',
          boxShadow: '0 12px 40px rgba(138,78,6,0.15), 0 4px 20px rgba(138,78,6,0.08)',
        }}
      >
        <FloralCorner corner="tl" />
        <FloralCorner corner="tr" />

        {/* Photo */}
        <motion.div
          className="w-20 h-20 sm:w-24 md:w-28 rounded-full mx-auto mb-3 md:mb-4 overflow-hidden relative"
          whileHover={{ scale: 1.08, y: -3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            border: '3px solid #C8860A',
            boxShadow: '0 0 0 5px rgba(200,134,10,0.15), 0 8px 25px rgba(138,78,6,0.2)',
          }}
        >
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
          />
          <div style={{ display: 'none' }} className="w-full h-full">
            <PhotoPlaceholder label={name} color="#C8860A" />
          </div>
        </motion.div>

        {/* Role badge */}
        <div
          className="inline-block px-4 py-1 rounded-full text-xs font-tamilSans mb-3"
          style={{ background: 'rgba(200,134,10,0.12)', color: '#7A4E06', border: '1px solid rgba(200,134,10,0.3)' }}
        >
          {role}
        </div>

        <h3 className="font-tamil font-bold text-lg md:text-xl mb-2 md:mb-3" style={{ color: '#6B2E1A' }}>{name}</h3>
        <GoldDivider />
        <p className="font-tamil text-xs md:text-sm leading-relaxed mt-1 md:mt-2" style={{ color: '#7A4E06' }}>
          {parents}
        </p>
      </div>
    </ScrollReveal>
  )
}

export default function CoupleSection() {
  return (
    <section id="couple" className="section-pad relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <p className="font-tamilSans text-sm tracking-widest mb-2" style={{ color: '#C8860A' }}>
              ✦ திரு & திருமதி ✦
            </p>
            <h2 className="font-tamil font-bold text-3xl md:text-4xl mb-2" style={{ color: '#6B2E1A' }}>
              தம்பதியர் அறிமுகம்
            </h2>
            <GoldDivider />
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <PersonCard
            name="ராஜேஷ் வர்மா"
            parents="திரு. அருள் – திருமதி. சந்திரா அவர்களின் அன்பு மகன்"
            role="மணமகன்"
            photo="/groom.jpg"
            delay={0}
            dir="left"
          />

          {/* Center connector */}
          <ScrollReveal direction="scale" delay={0.2} className="hidden md:flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg,#E8C040,#C8860A)',
                  color: '#FFF8E7',
                  boxShadow: '0 0 20px rgba(200,134,10,0.4)',
                }}
              >
                &
              </div>
              <div className="h-20 w-px" style={{ background: 'linear-gradient(to bottom, #C8860A, transparent)' }} />
            </div>
          </ScrollReveal>

          <PersonCard
            name="சந்தியா"
            parents="திரு. லோகநாதன் – திருமதி. கோமதி அவர்களின் அன்பு மகள்"
            role="மணப்பெண்"
            photo="/bride.jpg"
            delay={0.1}
            dir="right"
          />
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div
            className="mt-8 p-5 rounded-xl text-center"
            style={{
              background: 'rgba(200,134,10,0.08)',
              border: '1px solid rgba(200,134,10,0.3)',
              boxShadow: '0 4px 20px rgba(138,78,6,0.1)',
            }}
          >
            <p className="font-tamil text-sm md:text-base italic leading-relaxed" style={{ color: '#6B2E1A' }}>
              "இரு உள்ளங்கள் ஒன்றாகி, இரு குடும்பங்கள் ஒன்றிணைந்து,<br />
              புதிய வாழ்வின் பயணம் தொடங்குகிறது"
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
