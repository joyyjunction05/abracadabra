"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Data ──────────────────────────────────────── */

const WHATS_ON = [
  {
    title: "Happiness Party 🎉",
    desc: "Families & friends together every weekend!",
    pill: "Every Weekend",
    bg: "bg-hot-pink",
    emoji: "🥳",
    rotate: "-rotate-2",
  },
  {
    title: "Art & Craft 🎨",
    desc: "Creative sessions for kids aged 3–10.",
    pill: "Saturdays",
    bg: "bg-star-gold",
    emoji: "🎨",
    rotate: "rotate-3",
  },
  {
    title: "Toddler Mornings 🧸",
    desc: "Exclusive safe play for tiny tots.",
    pill: "Weekdays",
    bg: "bg-sky-cyan",
    emoji: "🧸",
    rotate: "-rotate-1",
  },
];

const EXPLORE_ITEMS = [
  { label: "Magic Play Zone", image: "/play_zone.png", bg: "from-magic-purple to-deep-violet", rotate: "-rotate-3" },
  { label: "Ninja Wall", image: "/ninja_wall.png", bg: "from-hot-pink to-ride-red", rotate: "rotate-2" },
  { label: "Jumping Trams", image: "/trampoline.png", bg: "from-slide-orange to-star-gold", rotate: "-rotate-1" },
  { label: "Art Corner", image: "/art_corner.png", bg: "from-sky-cyan to-ball-green", rotate: "rotate-3" },
];

const TRUST_ITEMS = [
  { icon: "👀", label: "Supervised Play" },
  { icon: "🧼", label: "Sanitised Daily" },
  { icon: "🛡️", label: "Age-Safe Zones" },
  { icon: "👨‍🏫", label: "Trained Staff" },
  { icon: "🩹", label: "First Aid Ready" },
  { icon: "📹", label: "CCTV Monitored" },
];

const TESTIMONIALS = [
  { name: "Priya M.", text: "Kids absolutely LOVE this place! Spotless and staff is caring.", stars: 5 },
  { name: "Rahul K.", text: "Best birthday ever! They took care of decor, food, everything.", stars: 5 },
  { name: "Anita S.", text: "Safe & fun. Toddler zone is perfect for my 3yo. Highly recommend!", stars: 5 },
];

const UPCOMING_EVENTS = [
  { title: "Summer Magic Carnival 🎡", date: "April 5, 2026", desc: "Magic shows & unlimited fun!", tagColor: "bg-ride-red" },
  { title: "STEM Workshop 🔬", date: "April 12, 2026", desc: "Science fun for ages 5–12.", tagColor: "bg-ball-green" },
];

const GALLERY_IMAGES = [
  { bg: "bg-magic-purple", emoji: "📸", rotate: "-rotate-6" },
  { bg: "bg-hot-pink", emoji: "🤸", rotate: "rotate-3" },
  { bg: "bg-slide-orange", emoji: "🏰", rotate: "-rotate-2" },
  { bg: "bg-star-gold", emoji: "🎂", rotate: "rotate-6" },
  { bg: "bg-sky-cyan", emoji: "🎳", rotate: "-rotate-4" },
  { bg: "bg-ball-green", emoji: "🎨", rotate: "rotate-2" },
];

/* ── Ninduga Decorators (Extreme abundance of floating elements) ── */
function ChaosFloaters() {
  const items = [
    { e: "🎠", top: "8%", left: "5%", size: "4.5rem", delay: 0, rot: -15 },
    { e: "🎈", top: "15%", left: "85%", size: "6rem", delay: 0.5, rot: 10 },
    { e: "🎟️", top: "75%", left: "8%", size: "5rem", delay: 1, rot: 25 },
    { e: "🍿", top: "65%", left: "82%", size: "5.5rem", delay: 0.2, rot: -20 },
    { e: "🎊", top: "85%", left: "25%", size: "4.5rem", delay: 0.3, rot: -5 },
    { e: "🍭", top: "18%", left: "30%", size: "4rem", delay: 1.2, rot: 15 },
    { e: "🤸", top: "50%", left: "15%", size: "6rem", delay: 0.7, rot: -30 },
    { e: "🎂", top: "40%", left: "88%", size: "5.5rem", delay: 0.9, rot: 15 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden md:block">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute opacity-90 drop-shadow-2xl"
          style={{ top: item.top, left: item.left, fontSize: item.size }}
          animate={{ y: [0, -25, 0], rotate: [item.rot, item.rot + 15, item.rot] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        >
          {item.e}
        </motion.div>
      ))}
    </div>
  );
}

/* ── Sparkle Stars ────────────────────────────── */
function SparkleStars({ count = 25 }: { count?: number }) {
  const [stars, setStars] = useState<{ left: string; top: string; delay: string; id: number; color: string }[]>([]);
  useEffect(() => {
    const colors = ["#FFD700", "#FF1493", "#00D4FF", "#39D353", "#FFF"];
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    );
  }, [count]);
  if (stars.length === 0) return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="sparkle sparkle-lg animate-twinkle"
          style={{ left: star.left, top: star.top, animationDelay: star.delay, color: star.color }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

/* ── Sticky Action Bar ─── */
function StickyActionBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed left-0 right-0 z-40 shadow-2xl border-b-4 border-deep-violet"
          style={{ top: "80px", backgroundColor: "var(--star-gold)" }}
        >
          <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-magic-purple text-lg hidden sm:block uppercase">The Fun Never Stops!</span>
              <a href="tel:+917996693125" className="btn-pink !text-sm !py-1.5 !px-5 no-underline border-2 border-white shadow-lg">📞 Call</a>
              <Link href="#birthday-parties" className="btn-gold !bg-white !text-magic-purple !text-sm !py-1.5 !px-5 no-underline border-2 border-magic-purple shadow-lg">🎟️ Book</Link>
            </div>
            <Link href="#visit" className="text-sm font-black text-magic-purple no-underline hover:text-hot-pink transition-colors hidden md:block uppercase bg-white/50 px-3 py-1 rounded-full border border-magic-purple">
              📍 Electronic City, Bangalore
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Home Page ─────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-off-white">
      <StickyActionBar />

      {/* ========= ZERO: HERO (MAXIMALIST) ========= */}
      <section
        id="home"
        className="relative flex items-center justify-center overflow-hidden bg-magic-purple pt-16"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        {/* Ninduga Background layers */}
        <div className="absolute inset-0 bg-pattern-stripes opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-violet/50 to-magic-purple pointer-events-none" />
        
        <SparkleStars count={40} />
        <ChaosFloaters />

        {/* Huge centered text block */}
        <div className="relative z-20 mx-auto max-w-6xl px-4 text-center py-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="inline-block bg-star-gold text-magic-purple px-6 py-2 rounded-full font-black text-sm md:text-xl uppercase tracking-widest mb-6 shadow-[0_10px_0_var(--hot-pink)] -rotate-2 border-4 border-magic-purple"
          >
            🎡 The Ultimate Kids Destination!
          </motion.div>
          
          <motion.h1
            className="text-[12vw] md:text-[8vw] lg:text-[7.5rem] text-white leading-[0.9] font-black uppercase tracking-tighter mb-6 whitespace-nowrap"
            style={{
              fontFamily: "var(--font-display)",
              textShadow: "4px 4px 0px var(--slide-orange), 8px 8px 0px var(--hot-pink), 14px 14px 0px var(--deep-violet)",
              WebkitTextStroke: "2px var(--deep-violet)",
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Aabracadabrrahh!
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl max-w-2xl mx-auto leading-snug font-black text-white bg-black/40 backdrop-blur px-6 py-4 rounded-3xl border-4 border-star-gold/50 shadow-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Bengaluru&apos;s favourite <span className="text-star-gold">Play Zone & Party Hall</span> for kids aged 2–12.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="#play-zones" className="btn-gold !text-2xl !px-10 !py-4 shadow-[0_8px_0_var(--magic-purple),0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_0_var(--magic-purple),0_20px_40px_rgba(0,0,0,0.5)] -rotate-2">
              🗺️ EXPLORE ZONES
            </Link>
            <Link href="#birthday-parties" className="btn-pink !text-2xl !px-10 !py-4 shadow-[0_8px_0_var(--deep-violet),0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_0_var(--deep-violet),0_20px_40px_rgba(0,0,0,0.5)] rotate-2">
              🎂 BOOK A PARTY
            </Link>
          </motion.div>
        </div>
        
        {/* Massive overlapping bottom shape */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-sky-cyan" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-star-gold" style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)", zIndex: 1 }} />
      </section>

      {/* ========= ONE: PLAY ZONES (Overlapping Cards) ========= */}
      <section id="play-zones" className="py-16 px-4 bg-pattern-dots bg-off-white relative z-10">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16 relative">
              <span className="absolute -top-10 left-1/2 -ml-20 text-7xl opacity-20 mix-blend-multiply">🎢</span>
              <h2 className="text-6xl md:text-7xl font-black text-magic-purple uppercase tracking-tight font-display drop-shadow-[4px_4px_0_var(--slide-orange)] mb-4">
                Play Zones
              </h2>
              <p className="text-deep-violet text-xl max-w-2xl mx-auto font-black italic">
                Unleash the energy in our massive indoor arena!
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {EXPLORE_ITEMS.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className={`w-64 h-80 rounded-[30px] p-6 shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer border-8 border-white ${item.rotate} hover:rotate-0 hover:z-20 transition-all duration-300 relative bg-gradient-to-br ${item.bg} group`}>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-star-gold rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-white animate-wiggle z-20">
                    ⭐
                  </div>
                  <div className="w-36 h-36 rounded-full border-[6px] border-white shadow-xl overflow-hidden mb-6 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image src={item.image} alt={item.label} fill sizes="144px" className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase font-display leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {item.label}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========= TWO: BIRTHDAYS (Abundant & Loud) ========= */}
      <section id="birthday-parties" className="bg-hot-pink bg-pattern-stripes text-white py-16 px-4 relative shadow-[0_0_50px_rgba(255,20,147,0.5)] z-20" style={{ clipPath: "polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%)", marginTop: "-4vw", marginBottom: "-4vw" }}>
        <SparkleStars count={30} />
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <ScrollReveal>
                <div className="inline-block bg-star-gold text-magic-purple px-5 py-2 rounded-xl text-lg font-black uppercase tracking-widest mb-6 -rotate-3 border-4 border-magic-purple shadow-[4px_4px_0_var(--magic-purple)]">
                  Stress-Free & Epic! 🎉
                </div>
                <h2 className="text-6xl md:text-8xl text-white font-black mb-6 uppercase leading-[0.9] font-display" style={{ textShadow: "5px 5px 0 var(--magic-purple)" }}>
                  Ultimate<br/><span className="text-star-gold" style={{ textShadow: "5px 5px 0 var(--magic-purple)" }}>Birthdays!</span>
                </h2>
                <p className="text-white font-black text-xl md:text-2xl mb-8 leading-snug bg-magic-purple/20 p-4 rounded-2xl border-2 border-white/30 backdrop-blur">
                  Custom themes, decorations, games, food, and endless play time. Give your child a party they'll never forget!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+917996693125" className="btn-gold !text-xl shadow-[0_6px_0_var(--magic-purple)] hover:shadow-[0_8px_0_var(--magic-purple)]">📞 Plan With Us</a>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 w-full max-w-md relative">
              <ScrollReveal delay={200}>
                {/* Layered overlapping tickets */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl rotate-3 border-8 border-star-gold relative z-10">
                  <span className="absolute -top-8 -left-8 text-7xl animate-bounce">🎂</span>
                  <h3 className="text-4xl text-magic-purple font-black uppercase font-display mb-4">Party Packages</h3>
                  <div className="bg-sky-cyan rounded-xl p-4 mb-4 border-4 border-deep-violet -rotate-1 shadow-inner">
                     <p className="text-deep-violet font-black text-lg">Starting from ₹12,000</p>
                     <p className="text-deep-violet/90 font-bold text-sm">For 15 kids. Includes play time + decor + meal box!</p>
                  </div>
                  <button className="w-full btn-pink justify-center !text-xl">Download Brochure 📄</button>
                </div>
                <div className="absolute top-10 -right-10 bg-deep-violet w-full h-full rounded-3xl -rotate-6 z-0 border-8 border-white opacity-50" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========= 2.5: PRICING TICKETS ========= */}
      <section id="pricing" className="py-24 px-4 bg-ball-green bg-pattern-dots relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <SparkleStars count={20} />
        <div className="mx-auto max-w-6xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20 relative">
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight font-display drop-shadow-[5px_5px_0_var(--magic-purple)] mb-4">
                Admission <span className="text-star-gold" style={{ textShadow: "5px 5px 0 var(--magic-purple)" }}>Tickets</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-20 items-center">
            
            {/* KIDS TICKET */}
            <ScrollReveal delay={100} className="w-full max-w-md">
              <div className="bg-white rounded-3xl p-8 shadow-[15px_15px_0_var(--slide-orange)] border-8 border-dashed border-magic-purple relative rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-hot-pink rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-white animate-wiggle z-20">
                  🎈
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-ball-green rounded-full border-r-8 border-dashed border-magic-purple"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-ball-green rounded-full border-l-8 border-dashed border-magic-purple"></div>
                
                <div className="bg-magic-purple text-white text-center py-4 px-6 rounded-2xl mb-6 shadow-md border-4 border-white -mt-14 mx-4 rotate-1">
                  <h3 className="text-3xl lg:text-4xl font-black uppercase font-display tracking-wider drop-shadow-md">Kids Pass</h3>
                </div>
                
                <div className="text-center mb-8 mt-6">
                  <span className="text-6xl font-black text-slide-orange font-display drop-shadow-[2px_2px_0_var(--magic-purple)]">₹700-800</span>
                  <p className="text-deep-violet font-bold uppercase tracking-widest text-sm mt-3 bg-off-white inline-block px-4 py-1 rounded-full border-2 border-magic-purple">Per Head / 3 Hours</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <span className="text-3xl mt-[-4px]">🏃</span>
                    <span className="text-magic-purple font-black text-lg leading-tight uppercase">3 Hours of Unlimited Play</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-3xl mt-[-4px]">🍕</span>
                    <span className="text-magic-purple font-black text-lg leading-tight uppercase">Delicious Buffet Food</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-3xl mt-[-4px]">🎉</span>
                    <span className="text-magic-purple font-black text-lg leading-tight uppercase">Party Hall Booking Available <br/><span className="text-hot-pink text-sm tracking-wide">(₹4000 - ₹5000 extra)</span></span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* ADULT TICKET */}
            <ScrollReveal delay={200} className="w-full max-w-md">
              <div className="bg-white rounded-3xl p-8 shadow-[15px_15px_0_var(--sky-cyan)] border-8 border-dashed border-magic-purple relative -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-star-gold rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-white animate-wiggle z-20">
                  👨‍👩‍👧‍👦
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-ball-green rounded-full border-r-8 border-dashed border-magic-purple"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-ball-green rounded-full border-l-8 border-dashed border-magic-purple"></div>
                
                <div className="bg-deep-violet text-white text-center py-4 px-6 rounded-2xl mb-6 shadow-md border-4 border-white -mt-14 mx-4 -rotate-1">
                  <h3 className="text-3xl lg:text-4xl font-black uppercase font-display tracking-wider drop-shadow-md">Adult Pass</h3>
                </div>
                
                <div className="text-center mb-8 mt-6">
                  <span className="text-6xl font-black text-sky-cyan font-display drop-shadow-[2px_2px_0_var(--magic-purple)]">₹500</span>
                  <p className="text-deep-violet font-bold uppercase tracking-widest text-sm mt-3 bg-off-white inline-block px-4 py-1 rounded-full border-2 border-magic-purple">Per Head / Flat Rate</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <span className="text-3xl mt-[-4px]">🍕</span>
                    <span className="text-magic-purple font-black text-lg leading-tight uppercase">Delicious Buffet Food Included</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-3xl mt-[-4px]">🤸</span>
                    <span className="text-magic-purple font-black text-lg leading-tight uppercase">Free to join and play with kids in all zones!</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ========= THREE: WHAT'S ON (Sticky Notes) ========= */}
      <section id="events" className="py-16 px-4 bg-slide-orange bg-pattern-dots relative z-10 pt-24 pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16 relative">
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase font-display drop-shadow-[5px_5px_0_var(--magic-purple)] mb-4">
                What&apos;s On 🎪
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-10">
            {WHATS_ON.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className={`${item.bg} w-72 md:w-80 p-8 rounded-none shadow-[10px_10px_0_rgba(0,0,0,0.2)] ${item.rotate} hover:scale-105 transition-transform border-[12px] border-white relative`}>
                  {/* Pin logic */}
                  <div className="absolute -top-4 left-1/2 -ml-3 w-6 h-6 rounded-full bg-ride-red shadow-md border-2 border-white" />
                  
                  <span className="inline-block px-4 py-1 bg-white text-magic-purple text-sm font-black uppercase rounded-full border-2 border-magic-purple mb-4 shadow-[2px_2px_0_var(--magic-purple)]">
                    {item.pill}
                  </span>
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-3xl font-black text-magic-purple mb-2 uppercase font-display leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-magic-purple font-bold text-lg leading-snug">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========= FOUR: WALL OF MAGIC (Polaroid Scatter) ========= */}
      <section id="gallery" className="bg-magic-purple py-20 px-4 shadow-inner relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
           <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-black text-star-gold uppercase font-display drop-shadow-[6px_6px_0_var(--hot-pink)] mb-4">
                Wall of Magic 📸
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 perspective-1000">
            {GALLERY_IMAGES.map((img, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className={`w-40 h-48 md:w-56 md:h-64 bg-white p-3 md:p-4 rounded-md shadow-[5px_5px_15px_rgba(0,0,0,0.5)] ${img.rotate} hover:rotate-0 hover:scale-110 hover:z-30 transition-all duration-300 relative`}>
                  <div className={`${img.bg} w-full h-[80%] rounded-sm flex items-center justify-center text-6xl shadow-inner`}>
                    {img.emoji}
                  </div>
                  <div className="h-[20%] w-full flex items-center justify-center font-display text-magic-purple/40 text-sm md:text-xl uppercase tracking-widest mt-2 border-t border-gray-200 pt-2">
                    Aabracadabrrahh
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========= FIVE: VISIT / TRUST STRIP ========= */}
      <section id="visit" className="bg-sky-cyan text-white py-16 px-4 bg-pattern-stripes relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <div className="mx-auto max-w-6xl">
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[15px_15px_0_var(--deep-violet)] border-8 border-star-gold text-magic-purple relative">
             <div className="absolute -top-10 -right-6 text-7xl animate-wiggle drop-shadow-lg">✨</div>
             <ScrollReveal>
               <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase font-display leading-tight drop-shadow-[3px_3px_0_var(--star-gold)]">
                 A Magical Place Built For Your Kids 🎩
               </h2>
               <p className="text-deep-violet font-bold text-xl md:text-2xl mb-8 leading-snug max-w-3xl">
                  Aabracadabrrahh is Electronic City's premium destination for indoor play and elite party hosting. Highly sanitized, physically active, and mentally stimulating!
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                 {TRUST_ITEMS.map((item) => (
                   <div key={item.label} className="flex gap-3 items-center bg-off-white p-3 rounded-2xl border-4 border-magic-purple shadow-[4px_4px_0_var(--magic-purple)]">
                     <span className="text-3xl">{item.icon}</span>
                     <span className="text-sm font-black uppercase leading-tight">
                       {item.label}
                     </span>
                   </div>
                 ))}
               </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========= SIX: CONTACT (Explosive Banner) ========= */}
      <section id="contact" className="py-20 px-4 bg-deep-violet relative overflow-hidden">
        <SparkleStars count={20} />
        <ScrollReveal>
          <div className="mx-auto max-w-5xl bg-hot-pink rounded-full p-12 text-center shadow-[0_0_80px_var(--hot-pink)] border-[16px] border-white relative overflow-visible transform rotate-2 hover:rotate-0 transition-transform cursor-pointer">
            <span className="absolute top-0 left-10 text-8xl -rotate-12">💬</span>
            <span className="absolute bottom-4 right-10 text-8xl rotate-12">📱</span>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase font-display" style={{ textShadow: "6px 6px 0 var(--magic-purple)"}}>
                Never Miss the Magic!
              </h2>
              <a
                href="https://wa.me/917996693125?text=Hi!%20I%20want%20to%20know%20more%20about%20Aabracadabrrahh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-star-gold px-12 py-6 font-black text-magic-purple text-2xl md:text-3xl shadow-[0_10px_0_var(--slide-orange)] hover:scale-105 no-underline uppercase tracking-widest border-4 border-magic-purple"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
