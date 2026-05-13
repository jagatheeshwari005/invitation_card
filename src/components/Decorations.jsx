// ─── Kolam background texture ──────────────────────────────────────────────
export function KolamBg() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.055 }}
    >
      <defs>
        <pattern id="kolam" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Central dot */}
          <circle cx="50" cy="50" r="3" fill="#C8860A" />
          {/* Inner ring */}
          <circle cx="50" cy="50" r="18" fill="none" stroke="#C8860A" strokeWidth="1" />
          {/* Outer ring dashed */}
          <circle cx="50" cy="50" r="36" fill="none" stroke="#C8860A" strokeWidth="0.6" strokeDasharray="4 3" />
          {/* Cross lines */}
          <line x1="50" y1="10" x2="50" y2="90" stroke="#C8860A" strokeWidth="0.5" strokeDasharray="2 5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#C8860A" strokeWidth="0.5" strokeDasharray="2 5" />
          {/* Diagonals */}
          <line x1="22" y1="22" x2="78" y2="78" stroke="#C8860A" strokeWidth="0.4" strokeDasharray="2 6" />
          <line x1="78" y1="22" x2="22" y2="78" stroke="#C8860A" strokeWidth="0.4" strokeDasharray="2 6" />
          {/* Petal dots at cardinal points */}
          <circle cx="50" cy="14" r="2.5" fill="#C8860A" opacity="0.6" />
          <circle cx="50" cy="86" r="2.5" fill="#C8860A" opacity="0.6" />
          <circle cx="14" cy="50" r="2.5" fill="#C8860A" opacity="0.6" />
          <circle cx="86" cy="50" r="2.5" fill="#C8860A" opacity="0.6" />
          {/* Corner diamonds */}
          <polygon points="50,4 53,9 50,7 47,9" fill="#C8860A" opacity="0.45" />
          <polygon points="50,96 53,91 50,93 47,91" fill="#C8860A" opacity="0.45" />
          <polygon points="4,50 9,53 7,50 9,47" fill="#C8860A" opacity="0.45" />
          <polygon points="96,50 91,53 93,50 91,47" fill="#C8860A" opacity="0.45" />
          {/* Small inner petals */}
          <ellipse cx="50" cy="35" rx="4" ry="8" fill="#C8860A" opacity="0.2" />
          <ellipse cx="50" cy="65" rx="4" ry="8" fill="#C8860A" opacity="0.2" />
          <ellipse cx="35" cy="50" rx="8" ry="4" fill="#C8860A" opacity="0.2" />
          <ellipse cx="65" cy="50" rx="8" ry="4" fill="#C8860A" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kolam)" />
    </svg>
  )
}

// ─── Thoranam (top garland) ─────────────────────────────────────────────────
export function Thoranam() {
  const xs = [0,30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510,540,570,600,630,660,690,720,750,780,810,840,870,900,930,960,990,1020,1050,1080,1110,1140,1170,1200]
  return (
    <svg
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ display: 'block', marginTop: 0 }}
      preserveAspectRatio="none"
    >
      {/* Rope */}
      <path
        d="M0,45 Q150,20 300,42 Q450,64 600,40 Q750,16 900,42 Q1050,66 1200,42"
        fill="none" stroke="#7A5010" strokeWidth="4" strokeLinecap="round"
      />
      {/* Hanging rope drops */}
      {[100,250,400,550,700,850,1000,1100].map((x,i) => {
        const ropey = 42 + 12*Math.sin((i*Math.PI)/4)
        return (
          <line key={i} x1={x} y1={ropey} x2={x} y2={ropey+28} stroke="#7A5010" strokeWidth="1.5" opacity="0.6" />
        )
      })}
      {/* Mango leaves */}
      {xs.map((x, i) => {
        const cy = 42 + 10*Math.sin((i*Math.PI)/8)
        const angle = -15 + (i%3)*15
        return (
          <g key={i} transform={`translate(${x},${cy}) rotate(${angle})`}>
            <ellipse cx="0" cy="16" rx="8" ry="18" fill="#2D7A1F" opacity="0.85" />
            <ellipse cx="0" cy="16" rx="5.5" ry="14" fill="#3DAF28" opacity="0.7" />
            <line x1="0" y1="2" x2="0" y2="28" stroke="#1A5C10" strokeWidth="0.9" />
          </g>
        )
      })}
      {/* Marigold flowers at intervals */}
      {[0,120,240,360,480,600,720,840,960,1080,1200].map((x,i) => {
        const cy = 42 + 10*Math.sin((i*Math.PI)/5)
        return (
          <g key={i} transform={`translate(${x},${cy+35})`}>
            {[0,45,90,135,180,225,270,315].map((a,j) => (
              <ellipse key={j} cx="0" cy="-9" rx="5" ry="9"
                fill={j%2===0 ? "#E8820A" : "#F5C030"}
                opacity="0.9"
                transform={`rotate(${a})`} />
            ))}
            <circle cx="0" cy="0" r="6" fill="#F5D020" />
            <circle cx="0" cy="0" r="3" fill="#D4900A" />
          </g>
        )
      })}
      {/* Centre Om pendant */}
      <g transform="translate(600,95)">
        <circle cx="0" cy="0" r="18" fill="#C8860A" />
        <circle cx="0" cy="0" r="14" fill="#F5D060" />
        <text x="0" y="6" textAnchor="middle" fontSize="16" fill="#7A4A06" fontWeight="bold">ஓம்</text>
      </g>
      {/* Small gold bells */}
      {[200,400,800,1000].map((x,i)=>(
        <g key={i} transform={`translate(${x},78)`}>
          <path d="M-6,0 Q-7,12 0,14 Q7,12 6,0 Z" fill="#C8860A" opacity="0.8"/>
          <circle cx="0" cy="15" r="2" fill="#A06808"/>
          <line x1="0" y1="-4" x2="0" y2="0" stroke="#7A5010" strokeWidth="1.2"/>
        </g>
      ))}
    </svg>
  )
}

// ─── Banana Tree ────────────────────────────────────────────────────────────
export function BananaTree({ side = 'left', className = '' }) {
  const flip = side === 'right' ? 'scale(-1,1)' : ''
  return (
    <svg
      viewBox="0 0 130 520"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      <g transform={flip} style={{ transformOrigin: '65px 260px' }}>
        {/* Trunk segments */}
        <rect x="52" y="160" width="26" height="360" rx="8" fill="#6B8E35" />
        <rect x="57" y="160" width="7"  height="360" fill="#8AB040" opacity="0.45" />
        <rect x="66" y="160" width="4"  height="360" fill="#4A6A20" opacity="0.3" />
        {/* Trunk rings */}
        {[200,240,280,320,360,400,440,480].map((y,i)=>(
          <ellipse key={i} cx="65" cy={y} rx="13" ry="3" fill="none" stroke="#4A6A20" strokeWidth="1.2" opacity="0.4"/>
        ))}
        {/* Leaves */}
        {[
          { cx:65, cy:100, rx:60, ry:22, rot:-25 },
          { cx:65, cy:90,  rx:65, ry:20, rot:20  },
          { cx:65, cy:120, rx:55, ry:18, rot:-40 },
          { cx:65, cy:110, rx:58, ry:20, rot:35  },
          { cx:65, cy:135, rx:50, ry:16, rot:-15 },
          { cx:65, cy:145, rx:52, ry:17, rot:50  },
        ].map((l,i)=>(
          <g key={i} transform={`rotate(${l.rot},${l.cx},${l.cy})`}>
            <ellipse cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry} fill="#3A8F1A" opacity="0.9"/>
            <ellipse cx={l.cx} cy={l.cy} rx={l.rx*0.85} ry={l.ry*0.75} fill="#4EAF25" opacity="0.6"/>
            <line x1={l.cx} y1={l.cy-l.ry+2} x2={l.cx} y2={l.cy+l.ry-2} stroke="#256010" strokeWidth="1.4"/>
            {/* Leaf veins */}
            {[-1,1].map((sign,j)=>(
              <line key={j} x1={l.cx} y1={l.cy} x2={l.cx+sign*l.rx*0.55} y2={l.cy+5}
                stroke="#256010" strokeWidth="0.6" opacity="0.5"/>
            ))}
          </g>
        ))}
        {/* Banana bunch */}
        <g transform="translate(65,210) rotate(15)">
          <ellipse cx="0"   cy="0"  rx="11" ry="26" fill="#D4B830" />
          <ellipse cx="-10" cy="5"  rx="10" ry="22" fill="#C4A820" />
          <ellipse cx="10"  cy="5"  rx="10" ry="22" fill="#D4B830" />
          <ellipse cx="-5"  cy="-8" rx="9"  ry="20" fill="#E0C840" opacity="0.8"/>
        </g>
        {/* Banana flower */}
        <g transform="translate(65,260)">
          <ellipse cx="0" cy="0" rx="13" ry="22" fill="#8B1A3A"/>
          <ellipse cx="0" cy="-4" rx="10" ry="16" fill="#B02050"/>
          <ellipse cx="0" cy="-6" rx="7"  ry="10" fill="#D03060"/>
        </g>
        {/* Coconuts near top */}
        {[-12,0,12].map((dx,i)=>(
          <circle key={i} cx={65+dx} cy={165} r="8" fill="#6B4A20" opacity="0.7"/>
        ))}
      </g>
    </svg>
  )
}

// ─── Kuthu Vilakku (Oil Lamp) ───────────────────────────────────────────────
export function KuthuVilakku({ className = '' }) {
  return (
    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Flame */}
      <g className="animate-diya">
        <ellipse cx="40" cy="18" rx="6" ry="12" fill="#FF9500" opacity="0.9"/>
        <ellipse cx="40" cy="22" rx="4" ry="8"  fill="#FFD000" opacity="0.95"/>
        <ellipse cx="40" cy="24" rx="2" ry="5"  fill="#FFFDE0"/>
        {/* Inner flame glow */}
        <ellipse cx="40" cy="20" rx="9" ry="15" fill="#FF8C00" opacity="0.18"/>
      </g>
      {/* Wick */}
      <line x1="40" y1="28" x2="40" y2="38" stroke="#5A3A1A" strokeWidth="1.5"/>
      {/* Oil dish */}
      <ellipse cx="40" cy="40" rx="18" ry="6" fill="#C8860A"/>
      <path d="M22,40 Q22,52 40,54 Q58,52 58,40" fill="#B07008"/>
      {/* Stem */}
      <rect x="37" y="54" width="6" height="50" rx="3" fill="#C8860A"/>
      {/* Middle disc */}
      <ellipse cx="40" cy="80" rx="14" ry="5" fill="#C8860A"/>
      <ellipse cx="40" cy="80" rx="14" ry="5" fill="#D4A020" opacity="0.5"/>
      {/* Wide base */}
      <path d="M20,104 Q18,130 40,134 Q62,130 60,104 Z" fill="#C8860A"/>
      <path d="M22,106 Q20,128 40,132 Q60,128 58,106 Z" fill="#D4A030" opacity="0.5"/>
      {/* Base disc */}
      <ellipse cx="40" cy="134" rx="22" ry="6" fill="#A06808"/>
      <ellipse cx="40" cy="134" rx="22" ry="6" fill="#C8860A" opacity="0.5"/>
      {/* Decorative rings */}
      <ellipse cx="40" cy="90"  rx="12" ry="3" fill="none" stroke="#E8C040" strokeWidth="1" opacity="0.7"/>
      <ellipse cx="40" cy="70"  rx="10" ry="3" fill="none" stroke="#E8C040" strokeWidth="1" opacity="0.7"/>
    </svg>
  )
}

// ─── Murugan Watermark (abstract vel + peacock) ─────────────────────────────
export function MuruganWatermark() {
  return (
    <svg
      viewBox="0 0 280 340"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.065 }}
    >
      {/* Vel (spear) */}
      <line x1="140" y1="20"  x2="140" y2="320" stroke="#C8860A" strokeWidth="10" strokeLinecap="round"/>
      <polygon points="140,10 125,55 140,45 155,55" fill="#C8860A"/>
      <line x1="140" y1="45"  x2="100" y2="70"  stroke="#C8860A" strokeWidth="4" strokeLinecap="round"/>
      <line x1="140" y1="45"  x2="180" y2="70"  stroke="#C8860A" strokeWidth="4" strokeLinecap="round"/>
      {/* Peacock body */}
      <ellipse cx="140" cy="200" rx="30" ry="50" fill="#C8860A"/>
      {/* Tail feathers – fan */}
      {[-60,-40,-20,0,20,40,60].map((a,i)=>(
        <g key={i} transform={`translate(140,200) rotate(${a})`}>
          <line x1="0" y1="0" x2="0" y2="-90" stroke="#C8860A" strokeWidth="2"/>
          <ellipse cx="0" cy="-90" rx="10" ry="18" fill="#C8860A" opacity="0.6"/>
          <circle  cx="0" cy="-90" r="6"           fill="#C8860A" opacity="0.9"/>
        </g>
      ))}
      {/* Peacock head */}
      <circle cx="140" cy="145" r="14" fill="#C8860A"/>
      {/* Crest */}
      {[-1,0,1].map((dx,i)=>(
        <line key={i} x1={140+dx*8} y1="135" x2={140+dx*5} y2="118" stroke="#C8860A" strokeWidth="2"/>
      ))}
      {/* Om above */}
      <text x="140" y="80" textAnchor="middle" fontSize="34" fill="#C8860A" fontFamily="serif" fontWeight="bold">ஓம்</text>
    </svg>
  )
}

// ─── Temple Silhouette ───────────────────────────────────────────────────────
export function TempleSilhouette() {
  return (
    <svg
      viewBox="0 0 1200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 w-full pointer-events-none z-5"
      style={{ opacity: 0.08 }}
    >
      {/* Main temple structure */}
      <g>
        {/* Central gopuram */}
        <polygon points="500,200 550,120 560,60 580,20 600,60 610,120 700,200" fill="#6B2E1A" opacity="0.4"/>
        <polygon points="550,120 560,60 580,20 600,60 610,120" fill="#8A3E1A" opacity="0.5"/>
        {/* Temple tiers */}
        <rect x="520" y="140" width="160" height="15" fill="#7A3E1A" opacity="0.6"/>
        <rect x="530" y="160" width="140" height="12" fill="#7A3E1A" opacity="0.6"/>
        <rect x="540" y="175" width="120" height="10" fill="#7A3E1A" opacity="0.6"/>
        
        {/* Left smaller gopuram */}
        <polygon points="200,200 230,140 240,90 250,50 260,90 270,140 320,200" fill="#6B2E1A" opacity="0.3"/>
        <rect x="210" y="150" width="80" height="10" fill="#7A3E1A" opacity="0.5"/>
        <rect x="220" y="165" width="60" height="8" fill="#7A3E1A" opacity="0.5"/>
        
        {/* Right smaller gopuram */}
        <polygon points="880,200 910,140 920,90 930,50 940,90 950,140 1000,200" fill="#6B2E1A" opacity="0.3"/>
        <rect x="890" y="150" width="80" height="10" fill="#7A3E1A" opacity="0.5"/>
        <rect x="900" y="165" width="60" height="8" fill="#7A3E1A" opacity="0.5"/>
        
        {/* Temple entrance arches */}
        <path d="M480,200 Q500,180 520,200" fill="none" stroke="#6B2E1A" strokeWidth="2" opacity="0.4"/>
        <path d="M680,200 Q700,180 720,200" fill="none" stroke="#6B2E1A" strokeWidth="2" opacity="0.4"/>
      </g>
    </svg>
  )
}

// ─── Floating Flower Petals ───────────────────────────────────────────────────
export const FloatingPetals = () => {
  return null // Removed floating petals as requested
}

// ─── Banana Leaf Side Decorations ───────────────────────────────────────────────
export function BananaLeafSide({ side = 'left' }) {
  const position = side === 'left' ? 'left-0' : 'right-0'
  const transform = side === 'right' ? 'scaleX(-1)' : ''
  
  return (
    <svg
      viewBox="0 0 80 300"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-20 ${position} pointer-events-none z-5 hidden lg:block`}
      style={{ opacity: 0.15, transform }}
    >
      {/* Large banana leaf */}
      <g>
        <ellipse cx="40" cy="150" rx="35" ry="120" fill="#2D7A1F" opacity="0.7"/>
        <ellipse cx="40" cy="150" rx="30" ry="110" fill="#3DAF28" opacity="0.5"/>
        {/* Leaf veins */}
        <line x1="40" y1="30" x2="40" y2="270" stroke="#1A5C10" strokeWidth="1.5"/>
        {[60, 90, 120, 150, 180, 210, 240].map((y, i) => (
          <g key={i}>
            <line x1="40" y1={y} x2="20" y2={y - 10} stroke="#1A5C10" strokeWidth="0.8" opacity="0.6"/>
            <line x1="40" y1={y} x2="60" y2={y - 10} stroke="#1A5C10" strokeWidth="0.8" opacity="0.6"/>
          </g>
        ))}
      </g>
    </svg>
  )
}

// ─── Gold divider ────────────────────────────────────────────────────────────
export function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 my-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      <span className="text-yellow-600 text-xl">✦</span>
      <span className="text-yellow-700 text-sm">❋</span>
      <span className="text-yellow-600 text-xl">✦</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
    </div>
  )
}

// ─── Floral corner ───────────────────────────────────────────────────────────
export function FloralCorner({ corner = 'tl' }) {
  const pos = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0 scale-x-[-1]',
    bl: 'bottom-0 left-0 scale-y-[-1]',
    br: 'bottom-0 right-0 scale-[-1]',
  }
  return (
    <svg
      viewBox="0 0 90 90"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-16 h-16 pointer-events-none ${pos[corner]}`}
      style={{ opacity: 0.55 }}
    >
      <path d="M4,4 Q35,4 38,36 Q42,4 70,4" fill="none" stroke="#C8860A" strokeWidth="1.8"/>
      <path d="M4,4 Q4,35 36,38 Q4,42 4,70" fill="none" stroke="#C8860A" strokeWidth="1.8"/>
      <circle cx="22" cy="22" r="6"  fill="#C8860A" opacity="0.4"/>
      <circle cx="36" cy="8"  r="3.5" fill="#E8C040" opacity="0.6"/>
      <circle cx="8"  cy="36" r="3.5" fill="#E8C040" opacity="0.6"/>
      <path d="M14,14 Q22,6 30,14 Q22,22 14,14" fill="#C8860A" opacity="0.35"/>
      <circle cx="50" cy="10" r="2.5" fill="#C8860A" opacity="0.3"/>
      <circle cx="10" cy="50" r="2.5" fill="#C8860A" opacity="0.3"/>
    </svg>
  )
}

// ─── Photo placeholder (when no actual photo) ────────────────────────────────
export function PhotoPlaceholder({ label = '', color = '#C8860A' }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="100" cy="100" r="100" fill={color} opacity="0.15"/>
      <circle cx="100" cy="80"  r="35"  fill={color} opacity="0.4"/>
      <ellipse cx="100" cy="155" rx="55" ry="40" fill={color} opacity="0.3"/>
      <text x="100" y="108" textAnchor="middle" fontSize="13"
        fill={color} fontFamily="Noto Serif Tamil,serif" fontWeight="700">
        {label}
      </text>
    </svg>
  )
}
