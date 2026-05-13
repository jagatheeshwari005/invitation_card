import { motion } from 'framer-motion'
import { MuruganWatermark, GoldDivider, PhotoPlaceholder } from './Decorations'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FDF4D0 0%, #F9E4B7 50%, #F5D898 100%)' }}
    >
      {/* Murugan watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-72 h-80 relative opacity-100">
          <MuruganWatermark />
        </div>
      </div>

      
      {/* Radial glow behind couple */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,220,100,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center px-4 pt-10 pb-16 w-full max-w-2xl mx-auto">

        {/* Om heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-2"
        >
          <div
            className="font-tamil text-3xl md:text-4xl font-bold text-center"
            style={{ color: '#C8860A', textShadow: '0 2px 12px rgba(200,134,10,0.3)' }}
          >
            ஸ்ரீ முருகாய நம:
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-tamilSans text-sm md:text-base text-center mb-6"
          style={{ color: '#7A4E06', letterSpacing: '0.15em' }}
        >
          ✦ திருமண அழைப்பிதழ் ✦
        </motion.div>

        {/* Divine Blessings Above Photos */}
        <div className="flex items-center justify-between w-full mb-4 px-4">
          {/* Left side divine names */}
          <div className="flex flex-col items-start space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-tamil text-sm md:text-base"
              style={{ color: '#C8860A', opacity: 0.8 }}
            >
              ஸ்ரீ சிக்கண்ண கருப்பு துணை
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-tamil text-sm md:text-base"
              style={{ color: '#C8860A', opacity: 0.8 }}
            >
              ஸ்ரீ வேடன் வேடச்சி அம்மன் துணை
            </motion.div>
          </div>

          {/* Right side divine names */}
          <div className="flex flex-col items-end space-y-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-tamil text-sm md:text-base"
              style={{ color: '#C8860A', opacity: 0.8 }}
            >
              ஸ்ரீ பாப்பாத்தி துணை
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-tamil text-sm md:text-base"
              style={{ color: '#C8860A', opacity: 0.8 }}
            >
              ஸ்ரீ தலைமலை சஞ்சீவி பெருமாள் துணை
            </motion.div>
          </div>
        </div>

        {/* Couple photos */}
        <div className="flex items-center justify-center gap-2 md:gap-10 w-full mb-6 md:mb-8 px-2">
          {/* Groom */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <motion.div
                className="w-24 h-24 sm:w-28 md:w-36 sm:h-28 md:h-36 rounded-full overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                style={{
                  border: '3px solid #C8860A',
                  boxShadow: '0 0 0 6px rgba(200,134,10,0.15), 0 0 0 12px rgba(200,134,10,0.07), 0 12px 35px rgba(138,78,6,0.3)',
                }}
              >
                <img
                  src="/groom.jpg"
                  alt="மணமகன்"
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                />
                <div style={{ display: 'none' }} className="w-full h-full">
                  <PhotoPlaceholder label="மணமகன்" color="#7A4E06" />
                </div>
              </motion.div>
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-2 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{
                  border: '1.5px dashed rgba(200,134,10,0.4)',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
            <div className="text-center">
              <p className="font-tamil font-bold text-sm md:text-base lg:text-lg" style={{ color: '#6B2E1A' }}>ராஜேஷ் வர்மா</p>
              <p className="font-tamilSans text-xs" style={{ color: '#9A6030' }}>மணமகன்</p>
            </div>
          </motion.div>

          {/* Centre Om & ampersand */}
          <motion.div
            className="flex flex-col items-center gap-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-tamil text-lg md:text-xl lg:text-2xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #E8C040, #C8860A)',
                color: '#FFF8E7',
                boxShadow: '0 0 20px rgba(200,134,10,0.4)',
              }}
            >
              &
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="relative"
            >
              <motion.div
                className="w-24 h-24 sm:w-28 md:w-36 sm:h-28 md:h-36 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                style={{
                  border: '3px solid #C8860A',
                  boxShadow: '0 0 0 6px rgba(200,134,10,0.15), 0 0 0 12px rgba(200,134,10,0.07), 0 12px 35px rgba(138,78,6,0.3)',
                }}
              >
                <img
                  src="/bride.jpg"
                  alt="மணப்பெண்"
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                />
                <div style={{ display: 'none' }} className="w-full h-full">
                  <PhotoPlaceholder label="மணப்பெண்" color="#A0300A" />
                </div>
              </motion.div>
              <motion.div
                className="absolute -inset-2 rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{
                  border: '1.5px dashed rgba(200,134,10,0.4)',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
            <div className="text-center">
              <p className="font-tamil font-bold text-sm md:text-base lg:text-lg" style={{ color: '#6B2E1A' }}>சந்தியா</p>
              <p className="font-tamilSans text-xs" style={{ color: '#9A6030' }}>மணப்பெண்</p>
            </div>
          </motion.div>
        </div>

        {/* Glowing divider */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
        >
          <GoldDivider />
        </motion.div>

        {/* Invitation text */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <p className="font-tamil text-sm md:text-base lg:text-lg leading-relaxed" style={{ color: '#6B2E1A' }}>
            இறைவன் திருவருளால், பெற்றோர் ஆசியால்,<br />
            உற்றார் உறவினர் நண்பர்கள் அனைவரையும்<br />
            எங்கள் திருமண நிகழ்வில் கலந்துகொள்ள<br />
            <span className="font-bold text-xl" style={{ color: '#C8860A' }}>அன்புடன் அழைக்கிறோம்</span>
          </p>
        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          className="mt-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10 L15 22 L25 10" stroke="#C8860A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
