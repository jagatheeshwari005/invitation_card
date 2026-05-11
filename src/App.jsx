import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CoupleSection from './components/CoupleSection'
import EventCard from './components/EventCard'
import BlessingsSection from './components/BlessingsSection'
import Footer from './components/Footer'
import { KolamBg, Thoranam, BananaTree, KuthuVilakku, TempleSilhouette, FloatingPetals, BananaLeafSide } from './components/Decorations'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#F9E4B7' }}>

      {/* ── Layer 0: Kolam texture bg ── */}
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

      {/* ── Layer 5: Floating petals ── */}
      <FloatingPetals />

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
          date="ஜூன் 12, 2025 — ஞாயிறு"
          time="காலை 9:00 மணி — மதியம் 1:00 மணி"
          venue="ஸ்ரீ சுப்பிரமணியஸ்வாமி திருமண மண்டபம், திருச்சிராப்பள்ளி"
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
          time="மாலை 5:00 மணி — இரவு 9:00 மணி"
          venue="அம்மன் மினி ஹாள், VRM மோட்டார்ஸ் அருகில், திருச்சிராப்பள்ளி"
          photo="/bride.jpg"
          placeholderLabel="மணப்பெண்"
          glowBorder={true}
          mapLink="https://maps.google.com/?q=அம்மன்+மினி+ஹாள்,+VRM+மோட்டார்ஸ்+அருகில்,+திருச்சிராப்பள்ளி"
        />

        <div className="h-2" style={{ background: 'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)' }} />

        {/* 5. Marriage */}
        <EventCard
          id="marriage"
          badge="திருமண முகூர்த்தம்"
          title="திருமணம்"
          subtitle="முகூர்த்தம்"
          quote="அக்னி சாட்சியாக இணையும் புனித உறவு"
          date="ஜூன் 18, 2026 — செவ்வாய்"
          time="காலை :4:00 மணி — 6:00 மணி (முகூர்த்தம்)"
          venue="ஸ்ரீ சுப்பிரமணியஸ்வாமி திருமண மண்டபம், திருச்சிராப்பள்ளி"
          photo="/wedding.jpg"
          placeholderLabel="திருமணம்"
          glowBorder={true}
          divaGlow={true}
          mapLink="https://maps.google.com/?q=ஸ்ரீ+சுப்பிரமணியஸ்வாமி+திருமண+மண்டபம்,+திருச்சிராப்பள்ளி"
        />

        <div className="h-2" style={{ background: 'linear-gradient(to right, transparent, rgba(200,134,10,0.2), transparent)' }} />

        {/* 6. Blessings */}
        <BlessingsSection />

        {/* 7. Footer */}
        <Footer />
      </main>
    </div>
  )
}
