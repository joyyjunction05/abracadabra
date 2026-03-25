"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

/* ── Data ──────────────────────────────────────── */

const ZONES = [
  {
    id: "ball-pit",
    name: "Big Bounce Ball Pit",
    emoji: "🔴",
    age: "2–8",
    color: "bg-ride-red",
    desc: "Dive into a vast sea of over 20,000 sanitised balls. Includes mini-slides and soft play obstacles. Perfect for developing motor skills and pure, unstructured fun.",
    safety: "Socks mandatory. Soft-padded walls.",
  },
  {
    id: "climbing-wall",
    name: "Adventure Climbing Wall",
    emoji: "🧗",
    age: "5–12",
    color: "bg-slide-orange",
    desc: "A beginner-friendly bouldering wall designed specifically for kids. Colorful handholds and interactive light-up targets make climbing a thrilling game.",
    safety: "Harnesses & helmets provided. Thick crash mats below.",
  },
  {
    id: "trampoline",
    name: "Zero-G Trampoline Park",
    emoji: "🤸",
    age: "4–12",
    color: "bg-deep-violet",
    desc: "Bounce, flip, and soar! Features interconnected trampolines, a dodgeball arena, and a foam pit for practicing those epic jumps.",
    safety: "Strict 1-jumper-per-trampoline rule. Grip socks required.",
  },
  {
    id: "toddler",
    name: "Tiny Tots Corner",
    emoji: "🧸",
    age: "0–3",
    color: "bg-hot-pink",
    desc: "A gated, ultra-safe haven for our youngest guests. Features busy boards, soft building blocks, sensory mats, and a mini carousel.",
    safety: "Fenced area. Strict age limit (no big kids allowed).",
  },
  {
    id: "role-play",
    name: "Mini City Role Play",
    emoji: "👮",
    age: "3–8",
    color: "bg-sky-cyan",
    desc: "Imaginations run wild here! Kids can pretend to be doctors at the clinic, chefs at the pizzeria, or cashiers at the mini-supermarket.",
    safety: "All props are oversized and choke-hazard free.",
  },
  {
    id: "art",
    name: "Messy Masterpieces",
    emoji: "🎨",
    age: "All Ages",
    color: "bg-ball-green",
    desc: "The only place where making a mess is encouraged! Finger painting, clay modeling, and daily guided craft sessions.",
    safety: "Non-toxic, washable paints only. Aprons provided.",
  },
];

/* ── Interactive SVG Map Component ─────────────── */

function ZoneMap({ activeZone, setActiveZone }: { activeZone: string | null; setActiveZone: (id: string | null) => void }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] bg-white rounded-3xl shadow-xl border border-magic-purple/10 overflow-hidden shrink-0 mt-8 mb-16 p-4 md:p-8">
      <h3 className="absolute top-6 left-8 text-2xl text-deep-violet z-10" style={{ fontFamily: "var(--font-display)" }}>
        Explore the Floor
      </h3>
      <p className="absolute top-14 left-8 text-sm text-foreground/60 z-10">Hover over a zone to see details.</p>

      {/* Abstract Floor Plan SVG */}
      <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-md">
        <defs>
          <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Floor base */}
        <rect x="50" y="50" width="700" height="500" rx="30" fill="#FFF9F0" />
        <rect x="60" y="60" width="680" height="480" rx="20" fill="none" stroke="#5C0FC8" strokeWidth="2" strokeDasharray="10 10" opacity="0.2" />

        {/* Zones */}
        <g 
          onMouseEnter={() => setActiveZone("toddler")} 
          onMouseLeave={() => setActiveZone(null)}
          className="cursor-pointer transition-transform origin-center hover:scale-[1.02]"
        >
          <rect x="80" y="80" width="200" height="200" rx="20" fill={activeZone === "toddler" || !activeZone ? "#FF1493" : "#f3f4f6"} filter="url(#shadow)" className="transition-colors duration-300" />
          <text x="180" y="180" fontSize="40" textAnchor="middle" fill="white">🧸</text>
          <text x="180" y="220" fontSize="16" fontWeight="bold" textAnchor="middle" fill="white">Toddler Corner</text>
        </g>

        <g 
          onMouseEnter={() => setActiveZone("role-play")} 
          onMouseLeave={() => setActiveZone(null)}
          className="cursor-pointer transition-transform origin-center hover:scale-[1.02]"
        >
          <rect x="300" y="80" width="240" height="140" rx="20" fill={activeZone === "role-play" || !activeZone ? "#00D4FF" : "#f3f4f6"} filter="url(#shadow)" className="transition-colors duration-300" />
          <text x="420" y="150" fontSize="30" textAnchor="middle" fill="white">👮 Mini City</text>
        </g>

        <g 
          onMouseEnter={() => setActiveZone("art")} 
          onMouseLeave={() => setActiveZone(null)}
          className="cursor-pointer transition-transform origin-center hover:scale-[1.02]"
        >
          <rect x="560" y="80" width="160" height="140" rx="20" fill={activeZone === "art" || !activeZone ? "#39D353" : "#f3f4f6"} filter="url(#shadow)" className="transition-colors duration-300" />
          <text x="640" y="150" fontSize="30" textAnchor="middle" fill="white">🎨 Art</text>
        </g>

        <g 
          onMouseEnter={() => setActiveZone("trampoline")} 
          onMouseLeave={() => setActiveZone(null)}
          className="cursor-pointer transition-transform origin-center hover:scale-[1.02]"
        >
          <rect x="80" y="300" width="300" height="220" rx="20" fill={activeZone === "trampoline" || !activeZone ? "#5C0FC8" : "#f3f4f6"} filter="url(#shadow)" className="transition-colors duration-300" />
          <text x="230" y="415" fontSize="45" textAnchor="middle" fill="white">🤸</text>
          <text x="230" y="455" fontSize="20" fontWeight="bold" textAnchor="middle" fill="white">Trampoline Park</text>
        </g>

        <g 
          onMouseEnter={() => setActiveZone("ball-pit")} 
          onMouseLeave={() => setActiveZone(null)}
          className="cursor-pointer transition-transform origin-center hover:scale-[1.02]"
        >
          <circle cx="530" cy="380" r="110" fill={activeZone === "ball-pit" || !activeZone ? "#FF3B30" : "#f3f4f6"} filter="url(#shadow)" className="transition-colors duration-300" />
          <text x="530" y="380" fontSize="45" textAnchor="middle" fill="white">🔴</text>
          <text x="530" y="420" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">Ball Pit</text>
        </g>

        <g 
          onMouseEnter={() => setActiveZone("climbing-wall")} 
          onMouseLeave={() => setActiveZone(null)}
          className="cursor-pointer transition-transform origin-center hover:scale-[1.02]"
        >
          <polygon points="680,520 740,520 740,250 680,250 650,380" fill={activeZone === "climbing-wall" || !activeZone ? "#FF6B35" : "#f3f4f6"} filter="url(#shadow)" className="transition-colors duration-300" />
          <text x="700" y="390" fontSize="30" textAnchor="middle" fill="white" transform="rotate(-90 700 390)">🧗 Climb</text>
        </g>

        {/* Path/Entrance indicators */}
        <text x="400" y="550" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#5C0FC8">⬆ Main Entrance & Café</text>
      </svg>
    </div>
  );
}

/* ── Play Zones Page ───────────────────────────── */

export default function PlayZonesPage() {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  return (
    <div className="bg-off-white min-h-screen pb-20">
      {/* ========= HERO HEADER ========= */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-magic-purple to-deep-violet text-center relative overflow-hidden">
        {/* Floating background emojis */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <span className="absolute top-10 left-10 text-5xl animate-float">🎡</span>
          <span className="absolute top-20 right-20 text-4xl animate-float" style={{ animationDelay: "1s" }}>🚀</span>
          <span className="absolute bottom-10 left-1/4 text-6xl animate-float" style={{ animationDelay: "0.5s" }}>🎪</span>
        </div>

        <div className="mx-auto max-w-3xl relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Discover Our <span className="text-sky-cyan">Magical</span> Zones
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            From zero-gravity trampolines to seas of colorful balls, there’s an adventure waiting for every age and energy level!
          </p>
        </div>
      </section>

      {/* ========= SVG MAP ========= */}
      <section className="px-6 relative z-20 -mt-10">
        <ScrollReveal>
          <ZoneMap activeZone={activeZone} setActiveZone={setActiveZone} />
        </ScrollReveal>
      </section>

      {/* ========= ZONE CARDS ========= */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ZONES.map((zone, i) => (
              <ScrollReveal key={zone.id} delay={i * 100}>
                <div
                  className={`card-hover bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full transition-transform duration-300 ${
                    activeZone === zone.id ? "scale-105 shadow-2xl ring-4 ring-offset-2 ring-magic-purple/20" : ""
                  }`}
                  onMouseEnter={() => setActiveZone(zone.id)}
                  onMouseLeave={() => setActiveZone(null)}
                >
                  <div className={`h-48 ${zone.color} flex items-center justify-center relative overflow-hidden group`}>
                    <motion.div
                      className="text-8xl relative z-10"
                      animate={activeZone === zone.id ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {zone.emoji}
                    </motion.div>
                    {/* Abstract background blobs */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <h2 className="text-2xl text-magic-purple leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                        {zone.name}
                      </h2>
                      <span className="flex-shrink-0 bg-gray-100 text-deep-violet font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        Ages {zone.age}
                      </span>
                    </div>

                    <p className="text-foreground/70 text-sm mb-6 flex-1 leading-relaxed">
                      {zone.desc}
                    </p>

                    <div className="bg-sky-cyan/10 p-4 rounded-xl flex gap-3 items-start mt-auto">
                      <span className="text-xl shrink-0">🛡️</span>
                      <div>
                        <strong className="block text-sm text-magic-purple mb-0.5">Safety First:</strong>
                        <span className="text-xs text-foreground/80">{zone.safety}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========= BOTTOM CTA ========= */}
      <section className="py-20 px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl bg-star-gold rounded-3xl p-6 md:p-10 text-center shadow-xl relative overflow-hidden">
            <SparkleStars />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl text-magic-purple mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Ready to Join the Fun?
              </h2>
              <p className="text-magic-purple/80 text-lg mb-8 max-w-xl mx-auto font-medium">
                Walk-ins are always welcome! Check our timings and entry rates before you head over.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/visit" className="btn-pink text-lg shadow-lg">
                  📍 Plan Your Visit
                </Link>
                <Link href="/birthday-parties" className="bg-white text-magic-purple font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-lg no-underline">
                  🎂 Book a Party
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

// Minimal Sparkle Component for CTA
function SparkleStars() {
  const [stars, setStars] = useState<{ left: string; top: string; delay: string }[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(
      Array.from({ length: 8 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
      }))
    );
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute animate-twinkle text-white/50 text-xl"
          style={{ left: star.left, top: star.top, animationDelay: star.delay }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
