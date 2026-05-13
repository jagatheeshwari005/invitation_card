import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CoupleSection from './components/CoupleSection'
import EventCard from './components/EventCard'
import BlessingsSection from './components/BlessingsSection'
import Footer from './components/Footer'
import CountdownTimer from './components/CountdownTimer'
import VideoBackground from './components/VideoBackground'
import CinematicIntro from './components/CinematicIntro'
import { KolamBg, Thoranam, BananaTree, KuthuVilakku, TempleSilhouette, BananaLeafSide } from './components/Decorations'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleEnterMainSite = () => {
    setShowIntro(false)
  }

  if (showIntro) {
    return <CinematicIntro onEnter={handleEnterMainSite} />
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#F9E4B7' }}>

      {/* ── Layer 0: Video Background ── */}
      <VideoBackground />

      {/* ── Layer 1: Kolam texture bg ── */}
      <KolamBg />

      {/* ── Layer 1: Fixed Navbar ── */}
      <Navbar />

      {/* ── Layer 2: Top thoranam (below navbar) ── */}
      <div className="relative z-10 mt-12">
        <Thoranam />
      </div>

      {/* ── Layer 3: Banana trees (fixed sides, behind content) ── */}
      <div className="fixed left-0 top-0 h-full z-10 pointer-events-none hidden lg:block"
        style={{ width: 110 }}>
        <div className="sticky top-0 h-screen flex items-start pt-16">
          <BananaTree side="left" className="w-full" style={{ maxHeight: '90vh' }} />
        </div>
      </div>
      <div className="fixed right-0 top-0 h-full z-10 pointer-events-none hidden lg:block"
        style={{ width: 110 }}>
        <div className="sticky top-0 h-screen flex items-start pt-16">
          <BananaTree side="right" className="w-full" style={{ maxHeight: '90vh' }} />
        </div>
      </div>

      {/* ── Layer 4: Temple silhouette at bottom ── */}
      <div className="fixed bottom-0 left-0 w-full z-5 pointer-events-none">
        <TempleSilhouette />
      </div>


      {/* ── Layer 6: Banana leaf side decorations ── */}
      <BananaLeafSide side="left" />
      <BananaLeafSide side="right" />

      {/* ── Layer 7: Bottom corner lamps ── */}
      <div className="fixed bottom-4 left-4 z-20 pointer-events-none hidden md:block">
        <KuthuVilakku className="w-10 h-20 animate-diya" />
      </div>
      <div className="fixed bottom-4 right-4 z-20 pointer-events-none hidden md:block">
        <KuthuVilakku className="w-10 h-20 animate-diya" />
      </div>

      {/* ── Main content (z-30 so always above decorations) ── */}
      <main className="relative z-30 lg:px-28">

        {/* 1. Hero */}
        <HeroSection />

        {/* Section separator */}
        <div className="h-2" style={{ background: 'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)' }} />

        {/* 2. Couple */}
        <CoupleSection />

        <div className="h-2" style={{ background: 'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)' }} />

        {/* 3. Engagement */}
        <EventCard
          id="engagement"
          badge="நிச்சயதார்த்த விழா"
          title="நிச்சயதார்த்தம்"
          quote="இணையும் இதயங்களின் முதல் படி"
          date="மார்ச் 22, 2026 — ஞாயிறு"
          time="மதியம் 1.00 மணி – மாலை 4.00 மணி"
          venue="லோகநாதன் இல்லம், தேவனூர் புதூர்"
          photo="/engagement.jpg"
          placeholderLabel="நிச்சயம்"
          glowBorder={false}
        />

        <div className="h-2" style={{ background: 'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)' }} />

        {/* 4. Pen Alaippu */}
        <EventCard
          id="penalaippu"
          badge="பெண் அழைப்பு"
          title="பெண் அழைப்பு"
          quote="இரு குடும்பங்களை இணைக்கும் இனிய தருணம்"
          date="ஜூன் 17, 2026 — புதன்"
          time="மாலை 5.30 மணிக்கு மேல்"
          venue="அம்மன் மினி ஹாள், தாத்தையங்கார்பேட்டை, துறையூர் ரோடு"
          photo="/bride.jpg"
          placeholderLabel="மணப்பெண்"
          glowBorder={true}
          mapLink="https://maps.app.goo.gl/t4w6y9WCjNv7HaVx6/?q=தேஹியங்கார்பேட்,+திருச்சிராப்பள்ளி"
        />

        <div className="h-2" style={{ background: 'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)' }} />

        {/* 5. Marriage */}
        <EventCard
          id="marriage"
          badge="திருமண முகூர்த்தம்"
          title="திருமணம்"
          subtitle="முகூர்த்தம்"
          quote="அக்னி சாட்சியாக இணையும் புனித உறவு"
          date="ஜூன் 18, 2026 — புதன்"
          time="அதிகாலை 4.30 மணி – 6.00 மணி"
          venue="கொப்பம்பட்டி"
          photo="/wedding.jpg"
          placeholderLabel="திருமணம்"
          glowBorder={true}
          divaGlow={true}
          mapLink="https://maps.app.goo.gl/yNh5SCoWhBpHYYvE7/?q=கொப்பம்பட்டி"
        >
          {/* Reception Details Inside Marriage Card */}
          <div className="mt-6 pt-6 border-t border-amber-200">
            <div className="text-center">
              <h4 className="font-tamil font-bold text-lg mb-2" style={{ color: '#C8860A' }}>
                வரவேற்பு
              </h4>
              <p className="font-tamilSans text-sm mb-4" style={{ color: '#7A4E06' }}>
                V.S.V திருமண மண்டபம், கொப்பம்பட்டி
              </p>
              
              {/* Google Maps Button for Reception */}
              <motion.a
                href="https://maps.app.goo.gl/q4w2vAai2G33a9EX9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-tamilSans text-sm font-semibold transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #E8C040, #C8860A)',
                  color: '#FFF8E7',
                  boxShadow: '0 4px 20px rgba(200,134,10,0.3)',
                }}
              >
                📍 Google Maps-ல் காண்க
              </motion.a>
            </div>
          </div>
        </EventCard>

        <div className="h-2" style={{ background: 'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)' }} />

        
        {/* 5.6. Countdown Timer */}
        <CountdownTimer />

        <div className="h-2" style={{ background: 'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)' }} />

        {/* 6. Blessings */}
        <BlessingsSection />

        {/* 7. Footer */}
        <Footer />
      </main>
    </div>
  )
}
