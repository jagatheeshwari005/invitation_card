# 🪔 Tamil Wedding Invitation — ராஜேஷ் & சந்தியா

A premium animated Tamil wedding invitation website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Setup (3 steps)

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Add your photos (optional)
Place your images inside the `public/` folder with these exact names:
- `public/groom.jpg` — Groom photo
- `public/bride.jpg` — Bride photo
- `public/engagement.jpg` — Engagement photo
- `public/wedding.jpg` — Wedding/ritual photo

> If photos are missing, beautiful illustrated placeholders are shown automatically.

### Step 3 — Run the dev server
```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 📁 Project Structure

```
tamil-wedding/
├── public/
│   ├── groom.jpg         ← Add your groom photo here
│   ├── bride.jpg         ← Add your bride photo here
│   ├── engagement.jpg    ← Add engagement photo here
│   └── wedding.jpg       ← Add wedding photo here
├── src/
│   ├── components/
│   │   ├── Decorations.jsx     (SVG kolam, thoranam, banana trees, lamps)
│   │   ├── FloatingPetals.jsx  (Animated flower petals)
│   │   ├── ScrollReveal.jsx    (Framer Motion scroll wrapper)
│   │   ├── Navbar.jsx          (Sticky nav with mobile menu)
│   │   ├── HeroSection.jsx     (Full-screen hero with couple photos)
│   │   ├── CoupleSection.jsx   (Couple introduction cards)
│   │   ├── EventCard.jsx       (Reusable event section card)
│   │   ├── BlessingsSection.jsx(Family blessings + lamp)
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## ✏️ Customisation

Edit `src/App.jsx` to change event dates, times, and venue details.
Edit couple names and parent names in `CoupleSection.jsx` and `App.jsx`.

## 🛠 Build for production
```bash
npm run build
```
