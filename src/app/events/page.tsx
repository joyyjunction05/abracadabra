"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Data ──────────────────────────────────────── */

const CATEGORIES = ["All", "Art & Craft", "STEM", "Storytelling", "Holiday Camps"];

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Summer Magic Carnival 🎡",
    date: "April 5, 2026",
    time: "4:00 PM – 8:00 PM",
    category: "Holiday Camps",
    age: "4–12 yrs",
    price: "₹1,200",
    desc: "A giant carnival inside Aabracadabrrahh! Featuring a live magic show, face painting, carnival games, and unlimited access to all play zones.",
    image: "bg-gradient-to-br from-slide-orange to-hot-pink",
    slotsLeft: 12,
  },
  {
    id: 2,
    title: "STEM Discovery: Slime Potions 🧪",
    date: "April 12, 2026",
    time: "11:00 AM – 1:00 PM",
    category: "STEM",
    age: "6–12 yrs",
    price: "₹800",
    desc: "Hands-on science! Kids will learn the chemistry of polymers by making their own glowing, magnetic, and crunchy slime to take home.",
    image: "bg-gradient-to-br from-ball-green to-sky-cyan",
    slotsLeft: 5,
  },
  {
    id: 3,
    title: "Puppet Storytelling: The Lost Rabbit 🐇",
    date: "April 18, 2026",
    time: "5:00 PM – 6:00 PM",
    category: "Storytelling",
    age: "2–6 yrs",
    price: "₹500",
    desc: "An immersive shadow puppet show followed by an interactive storytelling session. Includes a complimentary snack box.",
    image: "bg-gradient-to-br from-magic-purple to-deep-violet",
    slotsLeft: 20,
  },
  {
    id: 4,
    title: "Mother's Day Canvas Painting 🎨",
    date: "May 10, 2026",
    time: "3:00 PM – 5:00 PM",
    category: "Art & Craft",
    age: "5+ yrs (with Mom)",
    price: "₹1,500 (Pair)",
    desc: "Bond over colors! A guided canvas painting workshop for mother and child. All materials and Hi-Tea provided.",
    image: "bg-gradient-to-br from-hot-pink to-magic-purple",
    slotsLeft: 8,
  },
];

const PAST_EVENTS_IMAGES = [
  { emoji: "🧑‍🎨", label: "Finger Painting Workshop" },
  { emoji: "🤖", label: "Robotics for Kids" },
  { emoji: "🧙‍♂️", label: "Grand Magic Show" },
  { emoji: "🎃", label: "Spooky Halloween Party" },
  { emoji: "🎪", label: "Circus Acrobatics Day" },
  { emoji: "🕵️", label: "Treasure Hunt" },
];

/* ── Events Page ───────────────────────────────── */

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [stars, setStars] = useState<{
    left: string;
    top: string;
    fontSize: string;
    animationDelay: string;
  }[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(
      Array.from({ length: 15 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${10 + Math.random() * 14}px`,
        animationDelay: `${Math.random() * 3}s`,
      }))
    );
  }, []);

  const filteredEvents =
    activeCategory === "All"
      ? UPCOMING_EVENTS
      : UPCOMING_EVENTS.filter((e) => e.category === activeCategory);

  return (
    <div className="bg-off-white min-h-screen pb-20 overflow-x-hidden">
      {/* ========= HERO HEADER ========= */}
      <section className="pt-24 pb-16 px-6 bg-deep-violet text-center relative overflow-hidden">
        {/* Animated stars */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star, i) => (
            <span
              key={i}
              className="absolute animate-twinkle text-star-gold"
              style={star}
            >
              ✦
            </span>
          ))}
        </div>

        <div className="mx-auto max-w-3xl relative z-10 text-white">
          <span className="text-6xl mb-4 block animate-bounce" style={{ animationDuration: "2s" }}>🎭</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Events & Workshops
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-8">
            Learn, play, and create! Join our magical community events designed to spark joy and curiosity.
          </p>
          <a href="#calendar" className="btn-gold text-lg border-2 border-transparent">
            View Schedule 📅
          </a>
        </div>
      </section>

      {/* ========= CATEGORY FILTERS ========= */}
      <section id="calendar" className="pt-12 pb-6 px-6 sticky top-[72px] bg-off-white/90 backdrop-blur-md z-30 border-b border-gray-200">
        <div className="mx-auto max-w-7xl flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`snap-center flex-shrink-0 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "bg-magic-purple text-white border-magic-purple shadow-md"
                  : "bg-white text-foreground/70 border-gray-200 hover:border-magic-purple/30 hover:text-magic-purple"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ========= EVENTS GRID ========= */}
      <section className="py-12 px-6 min-h-[500px]">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="card-hover bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col sm:flex-row h-full"
                  >
                    {/* Event Graphic */}
                    <div className={`w-full sm:w-2/5 md:w-1/3 min-h-[160px] ${event.image} flex items-center justify-center relative p-6 sm:p-0`}>
                      <div className="text-center bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/30 shadow-lg">
                        <div className="text-sm font-bold text-white uppercase tracking-wider">{event.date.split(" ")[0]}</div>
                        <div className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>{event.date.split(" ")[1].replace(",", "")}</div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <h2 className="text-2xl text-magic-purple leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                          {event.title}
                        </h2>
                        {event.slotsLeft <= 10 && (
                          <span className="flex-shrink-0 bg-ride-red/10 text-ride-red font-bold text-xs px-2.5 py-1 rounded-md whitespace-nowrap">
                            Only {event.slotsLeft} left!
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs font-semibold mb-4">
                        <span className="bg-sky-cyan/10 text-sky-cyan px-2 py-1 rounded-full">{event.category}</span>
                        <span className="bg-gray-100 text-foreground/60 px-2 py-1 rounded-full">Ages {event.age}</span>
                        <span className="bg-ball-green/10 text-ball-green px-2 py-1 rounded-full">{event.price}</span>
                      </div>

                      <p className="text-foreground/70 text-sm mb-6 flex-1 leading-relaxed">
                        {event.desc}
                      </p>

                      <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                        <div className="text-sm text-foreground/60 font-medium">🕒 {event.time}</div>
                        <button className="btn-gold !py-2 !px-5 shadow-md text-sm" onClick={() => alert(`Booking flow for ${event.title} would open here!`)}>
                          Register
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🕵️</div>
                <h3 className="text-2xl text-magic-purple font-bold mb-2">No magical events found</h3>
                <p className="text-foreground/60">We&apos;re brewing new workshops for &quot;{activeCategory}&quot;. Check back soon!</p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="mt-6 text-star-gold font-bold hover:underline bg-transparent border-none cursor-pointer text-base"
                >
                  View All Events
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ========= PAST EVENTS RECAP ========= */}
      <section className="py-16 px-6 bg-magic-purple overflow-hidden">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              The Magic We&apos;ve Made ✨
            </h2>
            <p className="text-white/80">A glimpse into our past filled with joy and creativity.</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PAST_EVENTS_IMAGES.map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 p-4 hover:bg-white/20 transition-colors border border-white/5">
                  <span className="text-5xl">{img.emoji}</span>
                  <span className="text-xs text-center text-white font-medium leading-tight">{img.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========= NEWSLETTER OPT-IN ========= */}
      <section className="py-20 px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl bg-white rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-magic-purple/10">
            <span className="text-5xl block mb-4">💌</span>
            <h2 className="text-3xl md:text-4xl text-magic-purple mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Never Miss the Magic
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg mx-auto">
              Drop your email to get early access tickets to our most popular workshops and holiday camps!
            </p>

            <form 
              onSubmit={(e) => { e.preventDefault(); alert("Yay! You're on the early-access list."); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input 
                type="email" 
                required 
                placeholder="parents@email.com" 
                className="flex-1 rounded-full bg-off-white border border-gray-200 px-6 py-4 outline-none focus:border-star-gold transition-colors text-base"
              />
              <button type="submit" className="btn-pink justify-center py-4 px-8 text-base shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
