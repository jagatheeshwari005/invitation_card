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

import {
  KolamBg,
  Thoranam,
  BananaTree,
  KuthuVilakku,
  TempleSilhouette,
} from './components/Decorations'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleEnterMainSite = () => {
    setShowIntro(false)
  }

  // GOOGLE MAPS LIVE DIRECTION FUNCTION
  const handleMapClick = (
    destinationLat,
    destinationLng,
    fallbackUrl,
    e
  ) => {
    e.preventDefault()

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude
          const userLng = position.coords.longitude

          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`

          window.open(directionsUrl, '_blank')
        },
        () => {
          window.open(fallbackUrl, '_blank')
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
        }
      )
    } else {
      window.open(fallbackUrl, '_blank')
    }
  }

  if (showIntro) {
    return <CinematicIntro onEnter={handleEnterMainSite} />
  }

  return (
    <div
      className="relative min-h-screen overflow-x-hidden w-full"
      style={{ background: '#F9E4B7' }}
    >
      {/* VIDEO BACKGROUND */}
      <VideoBackground />

      {/* KOLAM BG */}
      <KolamBg />

      {/* NAVBAR */}
      <Navbar />

      {/* THORANAM */}
      <div className="relative z-10 mt-12">
        <Thoranam />
      </div>

      {/* LEFT BANANA TREE */}
      <div
        className="fixed left-0 top-0 h-full z-10 pointer-events-none hidden lg:block"
        style={{ width: 110 }}
      >
        <div className="sticky top-0 h-screen flex items-start pt-16">
          <BananaTree
            side="left"
            className="w-full"
            style={{ maxHeight: '90vh' }}
          />
        </div>
      </div>

      {/* RIGHT BANANA TREE */}
      <div
        className="fixed right-0 top-0 h-full z-10 pointer-events-none hidden lg:block"
        style={{ width: 110 }}
      >
        <div className="sticky top-0 h-screen flex items-start pt-16">
          <BananaTree
            side="right"
            className="w-full"
            style={{ maxHeight: '90vh' }}
          />
        </div>
      </div>

      {/* TEMPLE SILHOUETTE */}
      <div className="fixed bottom-0 left-0 w-full z-5 pointer-events-none">
        <TempleSilhouette />
      </div>

      {/* DIYA LEFT */}
      <div className="fixed bottom-4 left-4 z-20 pointer-events-none hidden md:block">
        <KuthuVilakku className="w-10 h-20 animate-diya" />
      </div>

      {/* DIYA RIGHT */}
      <div className="fixed bottom-4 right-4 z-20 pointer-events-none hidden md:block">
        <KuthuVilakku className="w-10 h-20 animate-diya" />
      </div>

      {/* MAIN CONTENT */}
      <main className="relative z-30 lg:px-28">

        {/* HERO */}
        <HeroSection />

        <div
          className="h-2"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)',
          }}
        />

        {/* COUPLE */}
        <CoupleSection />

        <div
          className="h-2"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)',
          }}
        />

        {/* PEN ALAIPPU */}
        <EventCard
          id="penalaippu"
          badge="பெண் அழைப்பு"
          title="பெண் அழைப்பு"
          quote="இரு குடும்பங்களை இணைக்கும் இனிய தருணம்"
          date="ஜூன் 17, 2026 — புதன்"
          time="மாலை 5.30 மணிக்கு மேல்"
          venue="அம்மன் மினி ஹால், தாத்தையங்கார்பேட்டை, துறையூர் ரோடு"
          photo="/bride.jpg"
          placeholderLabel="மணப்பெண்"
          glowBorder={true}
        >
          <div className="mt-6 text-center">
            <motion.a
              href="https://maps.app.goo.gl/Z9EYpAye1f7hphTz6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                handleMapClick(
                  11.1419,
                  78.5985,
                  'https://maps.app.goo.gl/Z9EYpAye1f7hphTz6',
                  e
                )
              }
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  'linear-gradient(135deg, #E8C040, #C8860A)',
                color: '#FFF8E7',
                boxShadow:
                  '0 4px 20px rgba(200,134,10,0.3)',
              }}
            >
              📍 Google Maps-ல் காண்க
            </motion.a>
          </div>
        </EventCard>

        <div
          className="h-2"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)',
          }}
        />

        {/* MARRIAGE */}
        <EventCard
          id="marriage"
          badge="திருமண முகூர்த்தம்"
          title="திருமணம்"
          subtitle="முகூர்த்தம்"
          quote="அக்னி சாட்சியாக இணையும் புனித உறவு"
          date="ஜூன் 18, 2026 — வியாழக்கிழமை"
          time="அதிகாலை 4.30 மணி – 6.00 மணி"
          venue="கொப்பம்பட்டி"
          photo="/wedding.jpg"
          placeholderLabel="திருமணம்"
          glowBorder={true}
          divaGlow={true}
        >
          {/* MARRIAGE MAP */}
          <div className="mt-6 text-center">
            <motion.a
              href="https://maps.app.goo.gl/ePSfGk4N3HZcznHC8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                handleMapClick(
                  11.1946,
                  78.4567,
                  'https://maps.app.goo.gl/ePSfGk4N3HZcznHC8',
                  e
                )
              }
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  'linear-gradient(135deg, #E8C040, #C8860A)',
                color: '#FFF8E7',
                boxShadow:
                  '0 4px 20px rgba(200,134,10,0.3)',
              }}
            >
              📍 திருமண இடம் காண்க
            </motion.a>
          </div>

          {/* RECEPTION */}
          <div className="mt-8 pt-6 border-t border-amber-200">
            <div className="text-center">
              <h4
                className="font-tamil font-bold text-xl mb-3"
                style={{ color: '#C8860A' }}
              >
                வரவேற்பு
              </h4>

              <p
                className="font-tamilSans text-sm mb-5"
                style={{ color: '#7A4E06' }}
              >
                V.S.V திருமண மண்டபம், கொப்பம்பட்டி
              </p>

              <motion.a
                href="https://maps.app.goo.gl/GPHELeYZZPw3DQFo7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  handleMapClick(
                    11.2055,
                    78.4722,
                    'https://maps.app.goo.gl/GPHELeYZZPw3DQFo7',
                    e
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background:
                    'linear-gradient(135deg, #E8C040, #C8860A)',
                  color: '#FFF8E7',
                  boxShadow:
                    '0 4px 20px rgba(200,134,10,0.3)',
                }}
              >
                📍 வரவேற்பு இடம் காண்க
              </motion.a>
            </div>
          </div>
        </EventCard>

        <div
          className="h-2"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)',
          }}
        />

        {/* COUNTDOWN */}
        <CountdownTimer />

        <div
          className="h-2"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)',
          }}
        />

        {/* BLESSINGS */}
        <BlessingsSection />

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  )
}