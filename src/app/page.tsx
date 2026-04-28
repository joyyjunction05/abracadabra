"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, PartyPopper, Clock, Users, Coffee, Gift, Pizza, Sparkles, MessageCircle, PhoneCall, Eye, ShieldCheck, Rocket, Compass, Heart, Mail, MapPin, Send } from 'lucide-react';
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
    desc: "Arts and craft corner unleashes creativity.",
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
    rotate: "rotate-1",
  },
];

const EXPLORE_ITEMS = [
  { label: "Slide", image: "/gallery/gallery_play_structure_1775568255348.png", bg: "from-slide-orange to-deep-violet", rotate: "-rotate-2" },
  { label: "Interactive Screen", image: "/interactive_screen.png", bg: "from-sky-cyan to-magic-purple", rotate: "rotate-2" },
  { label: "Toddler Busy Board", image: "/gallery/gallery_busy_board_1775568236187.png", bg: "from-hot-pink to-ride-red", rotate: "-rotate-3" },
  { label: "Lite-Brite", image: "/lite_brite.png", bg: "from-star-gold to-slide-orange", rotate: "rotate-1" },
  { label: "Kids Soft Play Area", image: "/gallery/gallery_ball_pit_1775568277347.png", bg: "from-ball-green to-sky-cyan", rotate: "-rotate-2" },
  { label: "Trampoline", image: "/gallery/gallery_trampoline_normal.png", bg: "from-deep-violet to-hot-pink", rotate: "rotate-3" },
];

const PLAY_ACTIVITIES = [
  "Slide",
  "Interactive Screen",
  "Toddler Busy Board",
  "Lite-Brite",
  "Kids Soft Play Area",
  "Trampoline"
];

const TRUST_ITEMS = [
  { icon: <Eye size={28} strokeWidth={2.5} className="text-magic-purple" />, label: "Bright & Visible Play" },
  { icon: <Sparkles size={28} strokeWidth={2.5} className="text-hot-pink" />, label: "Clean & Maintained" },
  { icon: <ShieldCheck size={28} strokeWidth={2.5} className="text-sky-cyan" />, label: "Safe & Engaging" },
  { icon: <Users size={28} strokeWidth={2.5} className="text-star-gold" />, label: "Friendly Staffing" },
  { icon: <Coffee size={28} strokeWidth={2.5} className="text-deep-violet" />, label: "Comfortable Cafe" },
  { icon: <Coffee size={28} strokeWidth={2.5} className="text-ball-green" />, label: "Air-conditioned & Comfortable Seating" },
];

const GALLERY_IMAGES = [
  { src: "/gallery/gallery_busy_board_1775568236187.png", label: "Busy Board Fun", altText: "Toddlers developing fine motor skills at the wooden busy board within Aabracadabrrahh indoor play zone", rotate: "-rotate-6", bg: "bg-magic-purple", delay: 0 },
  { src: "/gallery/gallery_play_structure_1775568255348.png", label: "Massive Play Structure", altText: "Huge multi-level indoor kids play structure with wave slides and colorful soft play obstacles", rotate: "rotate-3", bg: "bg-hot-pink", delay: 100 },
  { src: "/gallery/gallery_ball_pit_1775568277347.png", label: "Colorful Ball Pit", altText: "Premium colorful toddler ball pit filled with cyan and pink balls in a modern Bengaluru playplace", rotate: "-rotate-2", bg: "bg-slide-orange", delay: 200 },
  { src: "/gallery/gallery_birthday_party_1775568311467.png", label: "Premium Birthdays", altText: "Beautifully decorated kids birthday party banquet table inside a fun indoor amusement center", rotate: "rotate-6", bg: "bg-star-gold", delay: 300 },
  { src: "/gallery/gallery_trampoline_normal.png", label: "Trampolines", altText: "Kids jumping safely on an indoor trampoline park", rotate: "-rotate-4", bg: "bg-sky-cyan", delay: 400 },
  { src: "/gallery/gallery_parent_lounge_1775568363278.png", label: "Parent Lounge", altText: "Comfortable air-conditioned parent seating lounge with snacks, overlooking the children's play area", rotate: "rotate-2", bg: "bg-ball-green", delay: 500 },
];

/* ── Ninduga Decorators (Extreme abundance of floating elements) ── */
function ChaosFloaters() {
  const items = [
    { e: "🎠", top: "8%", left: "5%", size: "4.5rem", delay: 0, rot: -15 },
    { e: "🎈", top: "15%", right: "2%", size: "6rem", delay: 0.5, rot: 10 },
    { e: "🎪", top: "75%", left: "8%", size: "5.5rem", delay: 1, rot: 15 },
    { e: "🍿", top: "65%", right: "6%", size: "5.5rem", delay: 0.2, rot: -20 },
    { e: "🎊", top: "85%", left: "25%", size: "4.5rem", delay: 0.3, rot: -5 },
    { e: "🍭", top: "18%", left: "30%", size: "4rem", delay: 1.2, rot: 15 },
    { e: "🧸", top: "50%", left: "12%", size: "6rem", delay: 0.7, rot: -10 },
    { e: "🎂", top: "40%", right: "8%", size: "5.5rem", delay: 0.9, rot: 15 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 scale-[0.6] opacity-[0.15] sm:scale-[0.8] sm:opacity-50 md:scale-100 md:opacity-100 overflow-hidden">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute opacity-95"
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{ y: [0, -25, 0], rotate: [item.rot, item.rot + 15, item.rot] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        >
          <span 
            className="inline-block"
            style={{ 
              fontSize: item.size, 
              lineHeight: 1,
              filter: "drop-shadow(2px 5px 5px rgba(0,0,0,0.5)) drop-shadow(4px 10px 15px rgba(0,0,0,0.4)) saturate(1.5)" 
            }}
          >
            {item.e}
          </span>
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
           className="hidden md:block fixed left-0 right-0 z-40 shadow-2xl border-b-4 border-deep-violet"
           style={{ top: "96px", backgroundColor: "var(--star-gold)" }}
         >
          <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-magic-purple text-lg hidden sm:block uppercase">The Fun Never Stops!</span>
              <a href="tel:+917996693125" className="btn-pink !text-sm !py-1.5 !px-3 sm:!px-5 no-underline border-2 border-white shadow-lg">Call</a>
              <a href="https://wa.me/917996693125?text=Hi%20Aabracadabrrahh!%20I%20would%20love%20to%20learn%20more%20about%20your%20Play%20Zone%20and%20Birthday%20Party%20packages." target="_blank" rel="noopener noreferrer" className="btn-gold !bg-white !text-magic-purple !text-sm !py-1.5 !px-3 sm:!px-5 no-underline border-2 border-magic-purple shadow-lg">Book</a>
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

/* ── Contact Form ───────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi Aabracadabrrahh,\n\n` +
      `My name is ${form.name} and I am reaching out to you regarding ${form.subject}.\n\n` +
      `${form.message}\n\n` +
      `You can reply to me here on WhatsApp or at my email address: ${form.email}\n\n` +
      `Looking forward to hearing from you!`;
    window.open(`https://wa.me/917996693125?text=${encodeURIComponent(text)}`, "_blank");
    
    setTimeout(() => {
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  const inputBase =
    "w-full bg-white border-4 border-magic-purple/20 focus:border-hot-pink rounded-2xl px-4 py-2.5 text-magic-purple font-bold placeholder:text-magic-purple/30 placeholder:font-semibold outline-none transition-all duration-200 focus:shadow-[0_0_0_4px_rgba(255,20,147,0.15)] text-sm md:text-base";

  return (
    <div className="bg-white rounded-3xl border-4 border-white/30 shadow-[8px_8px_0_var(--star-gold)] p-5 md:p-6 lg:p-7">
      <h3 className="text-xl md:text-2xl font-black text-magic-purple uppercase font-display mb-1 drop-shadow-sm">Give Us a Shout! 📣</h3>
      <p className="text-magic-purple/50 font-semibold text-xs md:text-sm mb-4 uppercase tracking-widest">We reply fast, pinky promise 🤙</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black text-magic-purple uppercase tracking-widest">Your Name *</label>
            <input
              name="name"
              type="text"
              required
              placeholder="e.g. Priya Sharma"
              value={form.name}
              onChange={handleChange}
              className={inputBase}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black text-magic-purple uppercase tracking-widest">Email ID *</label>
            <input
              name="email"
              type="email"
              required
              placeholder="hello@example.com"
              value={form.email}
              onChange={handleChange}
              className={inputBase}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-black text-magic-purple uppercase tracking-widest">Subject *</label>
          <input
            name="subject"
            type="text"
            required
            placeholder="e.g. Birthday Party Booking"
            value={form.subject}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-black text-magic-purple uppercase tracking-widest">Your Message *</label>
          <textarea
            name="message"
            required
            rows={3}
            placeholder="Tell us what's on your mind..."
            value={form.message}
            onChange={handleChange}
            className={`${inputBase} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group w-full flex items-center justify-center gap-3 bg-hot-pink hover:bg-hot-pink/90 text-white font-black uppercase tracking-widest px-6 py-3 rounded-full text-base shadow-[0_5px_0_var(--magic-purple)] hover:shadow-[0_7px_0_var(--magic-purple)] border-4 border-magic-purple transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-none"
        >
          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
          Send Message via WhatsApp
        </button>

        <p className="text-center text-magic-purple/40 text-[11px] font-bold uppercase tracking-widest">
          * Opens WhatsApp with your message pre-filled
        </p>
      </form>
    </div>
  );
}

/* ── Gallery Carousel (mobile) ─────────────────── */
function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const total = GALLERY_IMAGES.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    setTouchStart(null);
  };

  const img = GALLERY_IMAGES[current];

  return (
    <div className="sm:hidden w-full">
      {/* Card */}
      <div
        className="relative select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className={`bg-white p-3 rounded-2xl shadow-[6px_6px_20px_rgba(0,0,0,0.55)] ${img.rotate} mx-auto w-[88%] max-w-sm`}
          >
            <div
              className={`${img.bg} w-full aspect-[4/3] rounded-lg overflow-hidden relative shadow-inner`}
            >
              <Image
                src={img.src}
                alt={img.altText}
                fill
                sizes="88vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="text-center font-display text-magic-purple text-sm font-black uppercase tracking-widest mt-3 pb-1">
              {img.label}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-hot-pink text-white w-10 h-10 rounded-full shadow-[3px_3px_0_var(--magic-purple)] border-2 border-white flex items-center justify-center text-xl font-black transition-transform hover:scale-110 active:scale-95 z-20"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-hot-pink text-white w-10 h-10 rounded-full shadow-[3px_3px_0_var(--magic-purple)] border-2 border-white flex items-center justify-center text-xl font-black transition-transform hover:scale-110 active:scale-95 z-20"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`rounded-full border-2 border-white transition-all duration-300 ${
              i === current
                ? "w-6 h-3 bg-star-gold shadow-[0_0_6px_var(--star-gold)]"
                : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
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
        className="relative flex items-center justify-center overflow-hidden bg-hero-carnival pt-2 md:pt-8 scroll-mt-20 md:scroll-mt-24 min-h-[90vh] md:min-h-screen"
      >
        {/* Ninduga Background layers */}
        <div className="absolute inset-0 bg-pattern-stripes opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-violet/50 to-magic-purple pointer-events-none" />
        
        <SparkleStars count={40} />
        <ChaosFloaters />

        {/* Huge centered text block */}
        <div className="relative z-20 mx-auto w-full max-w-6xl px-2 sm:px-4 text-center py-6 md:py-10 lg:py-20 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="inline-block bg-star-gold text-magic-purple px-4 md:px-6 py-1.5 md:py-2 rounded-full font-black text-[10px] sm:text-sn md:text-xl uppercase tracking-widest mb-4 md:mb-6 shadow-[0_4px_0_var(--hot-pink)] md:shadow-[0_10px_0_var(--hot-pink)] md:-rotate-2 border-2 md:border-4 border-magic-purple"
          >
            🎡 ECity&apos;s Favourite PLAYZONE — Ages 1 to 12!
          </motion.div>
          
          <div className="relative flex justify-center mt-4 md:mt-0 w-max max-w-[100vw]">
            <span className="absolute -top-4 -left-2 md:-top-6 md:-left-8 text-2xl md:text-5xl animate-wiggle drop-shadow-md">✨</span>
            <motion.h1
              className="text-[2.2rem] xxs:text-3xl xs:text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] text-white leading-tight md:leading-[0.9] font-black uppercase tracking-tighter mb-4 md:mb-6 relative z-10 w-max text-center"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0.05em 0.05em 0px var(--slide-orange), 0.1em 0.1em 0px var(--hot-pink), 0.15em 0.15em 0px var(--deep-violet)",
                WebkitTextStroke: "1px var(--deep-violet)",
              }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Aabracadabrrahh!
            </motion.h1>
            <span className="absolute -bottom-1 -right-2 md:-bottom-4 md:-right-8 text-2xl md:text-5xl animate-bounce-slow drop-shadow-md z-0">✨</span>
          </div>

          <motion.p
            className="text-sm xs:text-base sm:text-lg md:text-2xl max-w-2xl mx-auto leading-snug font-black text-white bg-black/40 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 rounded-3xl md:rounded-[2rem] border-2 md:border-4 border-white/20 shadow-xl md:shadow-2xl mb-8 md:mb-10 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.8)" }}
          >
            ECity&apos;s favourite{" "}
            <span className="text-star-gold" style={{ textShadow: "0 0 10px var(--star-gold)" }}>Play Zone</span>
            {" "}for ages <span className="text-star-gold" style={{ textShadow: "0 0 10px var(--star-gold)" }}>1–12</span>.
            <span className="block mt-2 text-xs sm:text-sm md:text-base font-bold text-white/80 tracking-wide">
              🧩 Fun Activities &nbsp;·&nbsp; 🤸 Active Play &nbsp;·&nbsp; ✨ Safe & Clean
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4 md:px-0 w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="#play-zones" className="w-[85%] sm:w-auto btn-gold !text-base md:!text-2xl !px-6 md:!px-10 !py-3 md:!py-4 shadow-[0_4px_0_var(--magic-purple)] md:shadow-[0_8px_0_var(--magic-purple),0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_0_var(--magic-purple)] md:hover:shadow-[0_10px_0_var(--magic-purple),0_20px_40px_rgba(0,0,0,0.5)] rotate-0 md:-rotate-2 transition-transform mx-auto">
              🗺️ EXPLORE ZONES
            </Link>
            <a href="https://wa.me/917996693125?text=Hi%20Aabracadabrrahh!%20I%27d%20love%20to%20learn%20more%20about%20your%20Play%20Zone%20and%20Birthday%20Party%20packages!" target="_blank" rel="noopener noreferrer" className="w-[85%] sm:w-auto btn-pink !text-base md:!text-2xl !px-6 md:!px-10 !py-3 md:!py-4 shadow-[0_4px_0_var(--deep-violet)] md:shadow-[0_8px_0_var(--deep-violet),0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_0_var(--deep-violet)] md:hover:shadow-[0_10px_0_var(--deep-violet),0_20px_40px_rgba(0,0,0,0.5)] rotate-0 md:rotate-2 transition-transform mx-auto no-underline">
              🎂 BOOK A PARTY
            </a>
          </motion.div>
        </div>
        
        {/* Massive overlapping bottom shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-sky-cyan" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-40 bg-star-gold" style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)", zIndex: 1 }} />
      </section>

      {/* ========= ONE: PLAY ZONES (Overlapping Cards) ========= */}
      <section
        id="play-zones"
        className="py-6 px-4 bg-pattern-dots bg-off-white relative z-10 scroll-mt-20 md:scroll-mt-40 lg:h-[calc(100vh-6rem)] lg:flex lg:flex-col lg:justify-center lg:overflow-hidden"
      >
        <div className="mx-auto max-w-7xl w-full">
          <ScrollReveal>
            <div className="text-center mb-5 lg:mb-4 relative">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-magic-purple uppercase tracking-tight font-display drop-shadow-[4px_4px_0_var(--slide-orange)] mb-2">
                Play Zones
              </h2>
              <p className="text-deep-violet text-base lg:text-lg max-w-2xl mx-auto font-black italic">
                Let them burn off that energy in our massive indoor arena!
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 min-[390px]:gap-4 sm:gap-5 lg:gap-2 justify-items-center">
            {EXPLORE_ITEMS.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100} className="w-full flex justify-center">
                <div className={`w-full max-w-[260px] aspect-[4/5] lg:aspect-auto lg:h-[27vh] rounded-2xl min-[390px]:rounded-[30px] p-2 min-[390px]:p-3 lg:p-5 shadow-xl flex flex-col items-center justify-center text-center cursor-pointer border-4 lg:border-[6px] border-white ${item.rotate} hover:rotate-0 hover:z-20 transition-all duration-300 relative bg-gradient-to-br ${item.bg} group`}>
                  <div className="absolute -top-3 -right-3 min-[390px]:-top-4 min-[390px]:-right-4 w-8 h-8 min-[390px]:w-10 min-[390px]:h-10 lg:w-12 lg:h-12 bg-star-gold rounded-full flex items-center justify-center text-base min-[390px]:text-xl lg:text-2xl shadow-lg border-2 lg:border-4 border-white animate-wiggle z-20">
                    ⭐
                  </div>
                  <div className="w-16 h-16 min-[390px]:w-20 min-[390px]:h-20 lg:w-24 lg:h-24 rounded-full border-4 lg:border-[6px] border-white shadow-xl overflow-hidden mb-1.5 lg:mb-3 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image src={item.image} alt={item.label} fill sizes="(max-width: 640px) 80px, 96px" className="object-cover" />
                  </div>
                  <h3 className="text-[13px] min-[390px]:text-[15px] lg:text-lg font-black text-white uppercase font-display leading-tight drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)] lg:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] pb-0.5">
                    {item.label}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Activity Marquee */}
          <div className="mt-5 lg:mt-4 w-full overflow-hidden flex bg-magic-purple py-3 lg:py-3 shadow-inner border-y-4 border-star-gold rounded-2xl relative">
            <div className="absolute top-0 bottom-0 left-0 w-8 lg:w-20 bg-gradient-to-r from-off-white to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 lg:w-20 bg-gradient-to-l from-off-white to-transparent z-10 pointer-events-none rounded-r-2xl"></div>
            <div className="flex w-[200%] animate-marquee">
              {[...PLAY_ACTIVITIES, ...PLAY_ACTIVITIES].map((activity, idx) => (
                <div key={idx} className="flex items-center flex-shrink-0">
                  <span className="text-sm lg:text-base font-black uppercase tracking-wider text-white px-4 lg:px-6 drop-shadow-md">
                    {activity}
                  </span>
                  <span className="text-star-gold opacity-50 px-2 lg:px-3 text-lg lg:text-2xl">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========= TWO: BIRTHDAYS (Abundant & Loud) ========= */}
      <section id="birthday-parties" className="bg-hot-pink bg-pattern-stripes text-white py-10 lg:py-16 px-4 relative shadow-[0_0_50px_rgba(255,20,147,0.5)] z-20 scroll-mt-20 md:scroll-mt-40" style={{ clipPath: "polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%)", marginTop: "-4vw", marginBottom: "-4vw" }}>
        <SparkleStars count={30} />
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <ScrollReveal>
                <div className="inline-block bg-star-gold text-magic-purple px-5 py-2 rounded-xl text-lg font-black uppercase tracking-widest mb-6 -rotate-3 border-4 border-magic-purple shadow-[4px_4px_0_var(--magic-purple)]">
                  Stress-Free & Epic! 🎉
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-black mb-6 uppercase leading-[0.9] font-display" style={{ textShadow: "5px 5px 0 var(--magic-purple)" }}>
                  Ultimate<br/><span className="text-star-gold" style={{ textShadow: "5px 5px 0 var(--magic-purple)" }}>Birthdays!</span>
                </h2>
                <p className="text-white font-black text-xl md:text-2xl mb-8 leading-snug bg-magic-purple/20 p-4 rounded-2xl border-2 border-white/30 backdrop-blur">
                  Custom themes, decorations, games, food, and Endless Memories. Give your child a party they&apos;ll never forget!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/917996693125?text=Hi%20Aabracadabrrahh!%20I%20would%20like%20to%20enquire%20about%20your%20Birthday%20Party%20packages." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-gold !text-xl shadow-[0_6px_0_var(--magic-purple)] hover:shadow-[0_8px_0_var(--magic-purple)] no-underline flex items-center justify-center gap-2"
                  >
                    Plan With Us
                  </a>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 w-full max-w-md relative">
              <ScrollReveal delay={200}>
                {/* Layered overlapping tickets */}
                <div className="bg-white p-5 md:p-8 rounded-3xl shadow-2xl md:rotate-3 border-8 border-star-gold relative z-10">
                  <motion.div 
                    className="absolute -top-16 md:-top-12 -left-2 md:-left-12 z-20"
                    animate={{ y: [0, -20, 0], rotate: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span 
                      className="text-6xl md:text-8xl inline-block"
                      style={{ filter: "drop-shadow(2px 5px 5px rgba(0,0,0,0.5)) drop-shadow(4px 10px 15px rgba(0,0,0,0.4)) saturate(1.5)" }}
                    >
                      🎂
                    </span>
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl text-magic-purple font-black md:text-left text-center mt-6 md:mt-0 uppercase font-display mb-4">Party Packages</h3>
                  <div className="bg-sky-cyan rounded-xl p-4 mb-4 border-4 border-deep-violet -rotate-1 shadow-inner">
                     <p className="text-deep-violet font-black text-lg">Starting from ₹ 800 for Kids</p>
                    <p className="text-deep-violet/90 font-bold text-sm">Create magical memories with complete packages including play time & premium food</p>
                  </div>
                  <a href="https://wa.me/917996693125?text=Hi%20Aabracadabrrahh!%20I%20would%20like%20to%20enquire%20about%20booking%20a%20Birthday%20Package%20for%20my%20child." target="_blank" rel="noopener noreferrer" className="mt-4 w-full flex items-center justify-center bg-hot-pink hover:bg-hot-pink/90 text-white font-black px-6 py-4 rounded-full text-lg shadow-[0_4px_0_var(--magic-purple)] border-4 border-magic-purple transition-transform hover:-translate-y-1 no-underline">
                    Secure Your Date via WhatsApp
                  </a>
                </div>
                <div className="absolute top-10 -right-10 bg-deep-violet w-full h-full rounded-3xl -rotate-6 z-0 border-8 border-white opacity-50" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========= 2.5: PRICING TICKETS ========= */}
      <section id="pricing" className="py-10 lg:py-14 px-4 bg-ball-green bg-pattern-dots relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] scroll-mt-20 md:scroll-mt-40">
        <SparkleStars count={20} />
        <div className="mx-auto max-w-6xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-8 lg:mb-10 relative">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-display drop-shadow-[5px_5px_0_var(--magic-purple)] mb-3">
                Admission <span className="text-star-gold" style={{ textShadow: "5px 5px 0 var(--magic-purple)" }}>Tickets</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-14 items-stretch">
            
            {/* KIDS TICKET */}
            <ScrollReveal delay={100} className="w-full max-w-md">
              <div className="bg-white rounded-3xl p-7 shadow-[15px_15px_0_var(--slide-orange)] border-8 border-dashed border-magic-purple relative rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-hot-pink rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-wiggle z-20">
                  <Ticket className="text-white w-8 h-8 drop-shadow-md" />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-ball-green rounded-full border-r-8 border-dashed border-magic-purple"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-ball-green rounded-full border-l-8 border-dashed border-magic-purple"></div>
                
                <div className="bg-magic-purple text-white text-center py-4 px-6 rounded-2xl mb-5 shadow-md border-4 border-white -mt-14 mx-4 rotate-1">
                  <h3 className="text-2xl lg:text-3xl font-black uppercase font-display tracking-wider drop-shadow-md">Walk-In Play</h3>
                </div>
                
                <div className="text-center mb-5 mt-4">
                  <div className="flex justify-center items-center gap-5 mb-3">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black text-magic-purple/50 uppercase tracking-widest mb-1 bg-magic-purple/5 px-2 py-0.5 rounded-full">Weekday</span>
                      <span className="text-4xl lg:text-5xl font-black text-slide-orange font-display drop-shadow-[2px_2px_0_var(--magic-purple)]">₹400</span>
                    </div>
                    <span className="text-3xl font-black text-magic-purple/20">|</span>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black text-magic-purple/50 uppercase tracking-widest mb-1 bg-magic-purple/5 px-2 py-0.5 rounded-full">Weekend</span>
                      <span className="text-4xl lg:text-5xl font-black text-hot-pink font-display drop-shadow-[2px_2px_0_var(--magic-purple)]">₹450</span>
                    </div>
                  </div>
                  <p className="text-deep-violet font-bold uppercase tracking-widest text-[10px] bg-off-white inline-block px-4 py-1.5 rounded-full border-2 border-magic-purple shadow-sm">Per Child (Per Hour)</p>
                </div>
                
                <ul className="space-y-3.5 mb-5">
                  <li className="flex items-center gap-4">
                    <Clock className="text-slide-orange w-7 h-7 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-magic-purple font-black text-base leading-tight uppercase">1 Hour of Active Play</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Users className="text-star-gold w-7 h-7 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-magic-purple font-black text-base leading-tight uppercase">Access to all age-safe zones</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Coffee className="text-hot-pink w-7 h-7 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-magic-purple font-black text-base leading-tight uppercase">Cafe access for parents</span>
                  </li>
                </ul>

                <div className="bg-magic-purple/5 border-2 border-magic-purple/10 rounded-2xl py-3 px-4 flex items-center justify-center gap-3">
                  <Ticket className="text-magic-purple" size={22} />
                  <span className="font-black text-magic-purple text-sm uppercase tracking-widest">Available at Counter</span>
                </div>
              </div>
            </ScrollReveal>

            {/* BIRTHDAY TICKET SUMMARY */}
            <ScrollReveal delay={200} className="w-full max-w-md">
              <div className="bg-white rounded-3xl p-7 shadow-[15px_15px_0_var(--star-gold)] border-8 border-dashed border-hot-pink relative rotate-[-2deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-magic-purple rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-pulse-slow z-20">
                  <Gift className="text-white w-8 h-8 drop-shadow-md" />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-ball-green rounded-full border-r-8 border-dashed border-hot-pink"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-ball-green rounded-full border-l-8 border-dashed border-hot-pink"></div>
                
                <div className="bg-hot-pink text-white text-center py-4 px-6 rounded-2xl mb-5 shadow-md border-4 border-white -mt-14 mx-4 rotate-1">
                  <h3 className="text-2xl lg:text-3xl font-black uppercase font-display tracking-wider drop-shadow-md">Birthdays</h3>
                </div>

                <div className="text-center mb-5 mt-4">
                  <p className="text-magic-purple font-black uppercase text-sm mb-1 tracking-widest">Packages Start From</p>
                  <div className="flex justify-center items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-black text-hot-pink font-display drop-shadow-[2px_2px_0_var(--magic-purple)]">₹700</span>
                  </div>
                  <p className="text-deep-violet font-bold uppercase tracking-widest text-[10px] mt-2 bg-hot-pink/10 inline-block px-4 py-1.5 rounded-full border border-hot-pink/20">Per Child (Min 5 Kids)</p>
                </div>
                
                <ul className="space-y-3.5 mb-5">
                  <li className="flex items-center gap-4">
                    <PartyPopper className="text-star-gold w-7 h-7 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-magic-purple font-black text-base leading-tight uppercase">Dedicated Party Venue</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Pizza className="text-sky-cyan w-7 h-7 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-magic-purple font-black text-base leading-tight uppercase">Premium Food &amp; Drink</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Sparkles className="text-hot-pink w-7 h-7 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-magic-purple font-black text-base leading-tight uppercase">Gorgeous Theme Decor</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>

          {/* DETAILED BIRTHDAY PACKAGES GRID (Full Width) */}
          <div className="mt-20 lg:mt-32 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-display drop-shadow-[3px_3px_0_var(--magic-purple)] mb-3">
                  Choose Your <span className="text-hot-pink" style={{ textShadow: "3px 3px 0 var(--magic-purple)" }}>Package</span>
                </h3>
                <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Every party tailored to perfection</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {[
                  {
                    name: "Silver", price: "₹700", icon: "🍰", desc: "Cozy Corner", capacity: "5–10 Kids",
                    color: "text-sky-cyan", border: "border-sky-cyan", shadow: "shadow-[6px_6px_0_var(--sky-cyan)]", bg: "bg-white", badgeBg: "bg-sky-cyan",
                    features: ["Cozy Corner (5–10 Kids)", "Box Meals Provided"],
                  },
                  {
                    name: "Gold", price: "₹800", icon: "👑", desc: "Party Hall", capacity: "Min 25 Kids",
                    color: "text-star-gold", border: "border-star-gold", shadow: "shadow-[6px_6px_0_var(--star-gold)]", bg: "bg-white", badgeBg: "bg-star-gold",
                    features: ["Welcome Drink x1", "Starters x3", "Mains x2", "Dessert x1"],
                  },
                  {
                    name: "Diamond", price: "₹950", icon: "💎", desc: "Party Hall", capacity: "Min 25 Kids",
                    color: "text-hot-pink", border: "border-hot-pink", shadow: "shadow-[6px_6px_0_var(--hot-pink)]", bg: "bg-white", badgeBg: "bg-hot-pink",
                    features: ["Welcome Drink x1", "Starters x3", "Veg Gravy x1", "Paneer Gravy x1", "Dal x1", "Rice x1", "Freshly Baked Tandoor Naan|In-House", "Dessert x2", "Accompaniments: Raita, Papad, Pickle, Salad"],
                  },
                ].map((tier) => (
                  <div key={tier.name} className={`${tier.bg} rounded-3xl border-4 ${tier.border} ${tier.shadow} flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform overflow-hidden`}>
                    {/* Header */}
                    <div className={`${tier.badgeBg} w-full py-5 px-4 flex flex-col items-center border-b-4 border-deep-violet/10`}>
                      <span className="text-5xl mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform inline-block drop-shadow-md">{tier.icon}</span>
                      <span className={`font-black text-2xl lg:text-3xl font-display uppercase tracking-wider drop-shadow-sm text-white`}>{tier.name}</span>
                      <span className="text-white/90 text-xs font-bold uppercase tracking-widest mt-1">{tier.desc}</span>
                    </div>
                    {/* Price */}
                    <div className="py-5 px-4 bg-magic-purple/5 w-full border-b border-magic-purple/10">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-4xl lg:text-5xl font-black font-display ${tier.color} drop-shadow-[2px_2px_0_var(--magic-purple)]`}>{tier.price}</span>
                        <span className="text-magic-purple/50 text-sm font-bold">/person</span>
                      </div>
                      <span className="text-[11px] font-black uppercase text-magic-purple tracking-widest bg-white px-4 py-1.5 rounded-full border border-magic-purple/20 shadow-sm mt-3 inline-block">{tier.capacity}</span>
                    </div>
                    {/* Features */}
                    <ul className="px-6 py-6 space-y-3 w-full text-left flex-1 bg-white">
                      {tier.features.map((feat, fi) => {
                        const parts = feat.split('|');
                        const hasBadge = parts.length > 1;
                        return (
                          <li key={fi} className="flex items-start gap-3 text-[13px] font-bold text-magic-purple/80 tracking-wide uppercase leading-tight">
                            <span className={`${tier.color} text-lg leading-none mt-[-2px] drop-shadow-sm flex-shrink-0`}>✦</span>
                            {hasBadge ? (
                              <span className="flex items-center gap-2 flex-wrap">
                                <span className="font-black text-magic-purple">{parts[0]}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest bg-star-gold text-magic-purple px-2 py-0.5 rounded-full border-2 border-magic-purple/30 shadow-[1px_1px_0_var(--magic-purple)]">
                                  {parts[1]}
                                </span>
                              </span>
                            ) : feat}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Shared Party Inclusions Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border-4 border-white shadow-[10px_10px_0_var(--magic-purple)] mt-8 mx-auto max-w-4xl relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-cyan via-star-gold to-hot-pink"></div>
                <h4 className="text-magic-purple font-black uppercase text-xl mb-6 flex items-center justify-center gap-3 tracking-widest text-center font-display">
                  <Sparkles size={24} className="text-star-gold" /> EVERY BIRTHDAY PACKAGE INCLUDES <Sparkles size={24} className="text-star-gold" />
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { label: "3H Play Time", icon: <Clock size={28} className="text-slide-orange" /> },
                    { label: "Premium Food", icon: <Pizza size={28} className="text-sky-cyan" /> },
                    { label: "Theme Decor", icon: <Gift size={28} className="text-hot-pink" /> },
                    { label: "Guided Games", icon: <PartyPopper size={28} className="text-ball-green" /> }
                  ].map((feat) => (
                    <div key={feat.label} className="flex flex-col items-center gap-3 bg-off-white p-4 rounded-2xl shadow-sm border-2 border-transparent hover:border-magic-purple/10 transition-colors text-center group">
                      <div className="bg-white p-3 rounded-xl shadow-sm group-hover:-translate-y-1 transition-transform">{feat.icon}</div>
                      <span className="font-black text-[12px] text-magic-purple uppercase leading-tight">{feat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center flex flex-col items-center">
                <a 
                  href="https://wa.me/917996693125?text=Hi%20Aabracadabrrahh!%20I%20would%20like%20to%20enquire%20about%20your%20Birthday%20Party%20packages." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-star-gold hover:bg-star-gold/90 text-magic-purple font-black px-10 py-5 rounded-full text-xl md:text-2xl shadow-[0_6px_0_var(--magic-purple)] hover:shadow-[0_8px_0_var(--magic-purple)] border-4 border-magic-purple transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-none no-underline group uppercase tracking-widest mb-4"
                >
                  PLAN IT VIA WHATSAPP <MessageCircle className="ml-3 group-hover:rotate-12 transition-transform shadow-sm rounded-full bg-white text-magic-purple p-1 hidden sm:block" size={32} />
                </a>
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest bg-black/10 py-2 px-6 rounded-full inline-block border border-white/20">
                    *18% GST Applicable
                  </p>
                  <p className="text-magic-purple text-xs font-black uppercase tracking-widest bg-star-gold py-2 px-5 rounded-full inline-flex items-center gap-2 border-2 border-magic-purple shadow-[0_3px_0_var(--magic-purple)]">
                    <span className="text-hot-pink text-base leading-none">✦</span>
                    Freshly Baked Tandoor Naan &amp; Bread &mdash; Made In-House, Never Frozen!
                    <span className="text-hot-pink text-base leading-none">✦</span>
                  </p>
                </div>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ========= THREE: WHAT'S ON (Sticky Notes) ========= */}
      <section id="events" className="py-10 lg:py-12 px-4 bg-slide-orange bg-pattern-dots relative z-10 scroll-mt-20 md:scroll-mt-40 lg:h-[calc(100vh-6rem)] lg:min-h-[700px] flex flex-col justify-center">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-8 lg:mb-10 relative">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase font-display drop-shadow-[5px_5px_0_var(--magic-purple)] mb-2">
                What&apos;s On 🎪
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
            {WHATS_ON.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className={`${item.bg} w-full max-w-[320px] p-5 sm:p-6 rounded-none shadow-[8px_8px_0_rgba(0,0,0,0.2)] ${item.rotate} hover:scale-105 transition-transform border-8 border-white relative`}>
                  {/* Pin logic */}
                  <div className="absolute -top-4 left-1/2 -ml-3 w-6 h-6 rounded-full bg-ride-red shadow-md border-2 border-white" />
                  
                  <span className="inline-block px-3 py-1 bg-white text-magic-purple text-xs font-black uppercase rounded-full border-2 border-magic-purple mb-3 shadow-[2px_2px_0_var(--magic-purple)]">
                    {item.pill}
                  </span>
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <h3 className="text-2xl font-black text-magic-purple mb-2 uppercase font-display leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-magic-purple font-bold text-base leading-snug">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========= FOUR: WALL OF MAGIC (Polaroid Scatter) ========= */}
      <section id="gallery" className="bg-magic-purple py-8 lg:py-10 px-4 shadow-inner relative scroll-mt-20 md:scroll-mt-40">
        <div className="mx-auto max-w-7xl relative z-10">
           <ScrollReveal>
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-star-gold uppercase font-display drop-shadow-[6px_6px_0_var(--hot-pink)] mb-2">
                Wall of Magic 📸
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Mobile: swipeable carousel */}
          <GalleryCarousel />

          {/* sm+: original polaroid scatter grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {GALLERY_IMAGES.map((img, i) => (
              <ScrollReveal key={i} delay={img.delay} className="flex justify-center w-full">
                <div className={`w-full aspect-[4/3] lg:aspect-[16/9] bg-white p-2.5 md:p-3 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.5)] ${img.rotate} hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 relative group`}>
                  <div className={`${img.bg} w-full h-[85%] rounded-md flex items-center justify-center overflow-hidden shadow-inner relative`}>
                    <Image src={img.src} alt={img.altText} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="h-[15%] w-full flex items-center justify-center font-display text-magic-purple text-xs md:text-sm uppercase tracking-widest mt-2 border-t border-gray-200/50 pt-2 font-bold">
                    {img.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========= TIMINGS STRIP ========= */}
      <section className="py-10 lg:py-14 px-4 bg-deep-violet relative z-10 overflow-hidden">
        {/* Background sparkle pattern */}
        <div className="absolute inset-0 bg-pattern-stripes opacity-10 pointer-events-none" />

        <div className="mx-auto max-w-4xl relative z-10">
          <ScrollReveal>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-hot-pink text-white px-8 py-3 rounded-full font-black text-2xl md:text-3xl uppercase font-display shadow-[5px_5px_0_var(--star-gold)] border-4 border-white tracking-widest">
                We Are Open!
              </div>
            </div>

            {/* Timings card */}
            <div className="bg-white/5 border-4 border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
              {/* Weekday row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-8 py-5 border-b-2 border-dashed border-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📅</span>
                  <span className="text-white font-black text-lg md:text-xl uppercase tracking-wider font-display">Monday to Friday</span>
                </div>
                <span className="bg-star-gold text-magic-purple font-black text-lg md:text-xl px-6 py-2 rounded-full shadow-[3px_3px_0_var(--magic-purple)] border-2 border-white uppercase tracking-wider font-display">
                  11 AM – 8:30 PM
                </span>
              </div>

              {/* Weekend row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-8 py-5 border-b-2 border-dashed border-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎉</span>
                  <span className="text-white font-black text-lg md:text-xl uppercase tracking-wider font-display">Saturday to Sunday</span>
                </div>
                <span className="bg-hot-pink text-white font-black text-lg md:text-xl px-6 py-2 rounded-full shadow-[3px_3px_0_var(--magic-purple)] border-2 border-white uppercase tracking-wider font-display">
                  11 AM – 9 PM
                </span>
              </div>

              {/* Rules strip */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-8 py-5 bg-white/5">
                <div className="flex items-center gap-2 text-white/80 font-black uppercase text-sm tracking-widest">
                  <span className="text-sky-cyan text-lg">✦</span>
                  Socks are mandatory for Kids &amp; Parents
                </div>
                <div className="hidden sm:block w-px h-6 bg-white/20" />
                <div className="flex items-center gap-2 text-white/80 font-black uppercase text-sm tracking-widest">
                  <span className="text-star-gold text-lg">✦</span>
                  No outside food allowed
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========= FIVE: VISIT / TRUST STRIP ========= */}
      <section id="visit" className="bg-sky-cyan text-white py-12 md:py-24 px-4 bg-pattern-stripes relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] scroll-mt-20 md:scroll-mt-40">
        <div className="mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-14 shadow-2xl relative border border-white/40">
             <ScrollReveal>
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase font-display leading-tight text-magic-purple">
                 Built Only For Young Families
               </h2>
               <p className="text-foreground/70 font-semibold text-lg md:text-xl mb-10 leading-relaxed max-w-4xl">
                  We built a massive, bright, and incredibly safe space designed strictly for kids under 12. And because we know the chaos of parenting, we built an air-conditioned, comfortable café right next to the play area — relax, grab a snack, and enjoy their playtime.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
                 {TRUST_ITEMS.map((item) => (
                   <div key={item.label} className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow">
                     <div className="p-3 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100">
                       {item.icon}
                     </div>
                     <span className="text-sm md:text-base font-bold text-deep-violet uppercase tracking-wide leading-tight">
                       {item.label}
                     </span>
                   </div>
                 ))}
               </div>

               {/* Mission, Vision, Values Block */}
               <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center sm:text-left border-t border-gray-200 pt-12 relative z-20">
                 <div className="flex flex-col gap-4">
                   <div className="bg-magic-purple/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto sm:mx-0 shadow-inner border border-magic-purple/20">
                     <Rocket size={28} className="text-magic-purple" strokeWidth={2.5} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-black font-display uppercase text-magic-purple">Our Mission</h3>
                   <p className="font-semibold text-foreground/70 leading-relaxed text-sm md:text-base">
                     To provide a safe, engaging, and physically active environment tailored exclusively for families with young children.
                   </p>
                 </div>
                 <div className="flex flex-col gap-4">
                   <div className="bg-star-gold/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto sm:mx-0 shadow-inner border border-star-gold/20">
                     <Compass size={28} className="text-star-gold" strokeWidth={2.5} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-black font-display uppercase text-star-gold">Our Vision</h3>
                   <p className="font-semibold text-foreground/70 leading-relaxed text-sm md:text-base">
                     To pioneer a destination where extraordinary facility design seamlessly meets a relaxing, air-conditioned and comfortable space for parents to unwind.
                   </p>
                 </div>
                 <div className="flex flex-col gap-4">
                   <div className="bg-hot-pink/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto sm:mx-0 shadow-inner border border-hot-pink/20">
                     <Heart size={28} className="text-hot-pink" strokeWidth={2.5} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-black font-display uppercase text-hot-pink">Our Values</h3>
                   <p className="font-semibold text-foreground/70 leading-relaxed text-sm md:text-base">
                     Uncompromising cleanliness, incredibly friendly staffing, bright visibility, and premium parent comfort.
                   </p>
                 </div>
               </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========= 5.5: PARENT GUARANTEE (Visual Break) ========= */}
      <section className="py-16 md:py-24 px-4 bg-off-white text-center border-y-8 border-dashed border-sky-cyan/30 relative z-10">
         <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-6xl mb-6 drop-shadow-md">🛋️</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-magic-purple uppercase mb-6 drop-shadow-sm">The Parent Guarantee</h2>
            <p className="text-lg md:text-2xl text-foreground/80 font-semibold leading-relaxed">
              We know that an amazing playplace for kids means absolutely nothing if it&apos;s stressful for parents. That&apos;s why we&apos;ve designed our entire facility around your comfort. From high-visibility angles to pristine hygiene and air-conditioned, comfortable seating for parents to enjoy snacks—<span className="text-magic-purple font-black">you can finally sit back, relax, and actually enjoy their playtime.</span>
            </p>
         </div>
      </section>

      {/* ========= SIX: CONTACT US ========= */}
      <section id="contact" className="py-8 lg:py-10 px-4 bg-deep-violet bg-pattern-stripes relative overflow-hidden scroll-mt-20 md:scroll-mt-40 lg:h-[calc(100vh-6rem)] lg:min-h-[700px] flex flex-col justify-center">
        <SparkleStars count={30} />

        {/* Floating decorators */}
        <motion.span
          className="absolute top-10 left-6 text-5xl pointer-events-none hidden md:block"
          animate={{ y: [0, -20, 0], rotate: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >🎈</motion.span>
        <motion.span
          className="absolute bottom-12 right-8 text-5xl pointer-events-none hidden md:block"
          animate={{ y: [0, 20, 0], rotate: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >🎉</motion.span>
        <motion.span
          className="absolute top-1/2 right-16 text-4xl pointer-events-none hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >🎂</motion.span>

        <div className="mx-auto max-w-6xl relative z-10 w-full" style={{ zoom: 0.9 }}>
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-6 pt-6 md:pt-10">
              <div className="inline-block bg-hot-pink text-white px-6 py-2 rounded-full font-black text-xl md:text-2xl uppercase font-display shadow-[4px_4px_0_var(--star-gold)] border-4 border-white -rotate-1 mb-2">
                Contact Us 🎀
              </div>
              <p className="text-white/70 font-bold text-sm mt-1">Got a question? We&apos;d love to hear from you!</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            {/* LEFT — Info Panel */}
            <ScrollReveal delay={100}>
              <div className="bg-white/10 backdrop-blur-sm border-4 border-white/20 rounded-3xl p-5 md:p-6 lg:p-7 h-full flex flex-col gap-4 lg:gap-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-star-gold uppercase font-display mb-4 drop-shadow-sm">Find Us Here! 📍</h3>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-hot-pink p-3 rounded-2xl shadow-[3px_3px_0_var(--magic-purple)] border-2 border-white flex-shrink-0">
                        <MapPin size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-white font-black uppercase text-sm tracking-widest mb-1">Address</p>
                        <a href="https://maps.app.goo.gl/XFj1o1yGNKX8xo1c9" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white font-semibold leading-relaxed text-sm transition-colors no-underline">Electronic City Phase 1, Bengaluru</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-star-gold p-3 rounded-2xl shadow-[3px_3px_0_var(--magic-purple)] border-2 border-white flex-shrink-0">
                        <PhoneCall size={22} className="text-magic-purple" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-white font-black uppercase text-sm tracking-widest mb-1">Call Us</p>
                        <a href="tel:+917996693125" className="text-star-gold font-black text-lg hover:text-white transition-colors no-underline">+91 79966 93125</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-sky-cyan p-3 rounded-2xl shadow-[3px_3px_0_var(--magic-purple)] border-2 border-white flex-shrink-0">
                        <Mail size={22} className="text-magic-purple" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-white font-black uppercase text-sm tracking-widest mb-1">Email Us</p>
                        <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="text-sky-cyan font-black hover:text-white transition-colors no-underline text-sm break-all">enquiry@aabra-ca-dabrrahh.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp direct shortcut */}
                <div className="mt-auto">
                  <p className="text-white/50 font-bold uppercase text-xs tracking-widest mb-3">Prefer to chat directly?</p>
                  <a
                    href="https://wa.me/917996693125?text=Hi%20Aabracadabrrahh!%20I%27d%20love%20to%20learn%20more%20about%20your%20Play%20Zone%20and%20Birthday%20Party%20packages!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 bg-ball-green text-white font-black px-6 py-3 rounded-full shadow-[4px_4px_0_var(--magic-purple)] border-4 border-white hover:-translate-y-1 transition-transform no-underline uppercase tracking-widest text-sm"
                  >
                    <MessageCircle size={20} strokeWidth={2.5} /> WhatsApp Us Directly
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT — Contact Form */}
            <ScrollReveal delay={200}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========= SEVEN: LOCATION MAP ========= */}
      <section className="w-full h-[50vh] min-h-[400px] border-t-8 border-dashed border-sky-cyan/40 relative z-10">
        <iframe 
          src="https://maps.google.com/maps?cid=10043499588260165066&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          className="w-full h-full filter contrast-125"
        />
      </section>
    </main>
  );
}
