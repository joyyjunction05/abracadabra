"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Data ──────────────────────────────────────── */

const PRICING = [
  {
    age: "Toddlers (2–5 yrs)",
    weekdays: "₹499",
    weekends: "₹599",
    duration: "1 Hour Session",
    color: "bg-hot-pink",
  },
  {
    age: "Kids (6–12 yrs)",
    weekdays: "₹599",
    weekends: "₹699",
    duration: "1 Hour Session",
    color: "bg-deep-violet",
  },
  {
    age: "Family Combo (2 Kids + 2 Adults)",
    weekdays: "₹1999",
    weekends: "₹2399",
    duration: "2 Hour Session",
    color: "bg-slide-orange",
  },
];

const HOURS = [
  { day: "Monday – Thursday", time: "11:00 AM – 8:00 PM" },
  { day: "Friday", time: "11:00 AM – 9:00 PM" },
  { day: "Saturday – Sunday", time: "10:00 AM – 10:00 PM" },
  { day: "Public Holidays", time: "10:00 AM – 10:00 PM" },
];

const AMENITIES = [
  { icon: "🍕", label: "Café & Food Counter" },
  { icon: "🛋️", label: "Parent Seating Area" },
  { icon: "🍼", label: "Nursing & Baby Care Room" },
  { icon: "🔐", label: "Secure Lockers" },
  { icon: "🛜", label: "Free High-Speed WiFi" },
  { icon: "🚼", label: "Stroller Accessible" },
];

const HYGIENE_FAQS = [
  {
    q: "How often are the play zones sanitised?",
    a: "We conduct deep cleaning every morning and evening, with touch-points sanitised every 2 hours throughout the day using child-safe, non-toxic products.",
  },
  {
    q: "Are the staff trained in First Aid?",
    a: "Yes! 100% of our on-floor staff are certified in pediatric first aid and CPR. We also maintain a fully stocked medical kit on-site.",
  },
  {
    q: "What is the staff-to-child supervision ratio?",
    a: "We maintain an industry-leading ratio of 1 staff member for every 6 children in active play zones to ensure maximum safety.",
  },
  {
    q: "Do adults need to wear socks too?",
    a: "Yes, for hygiene reasons, grip socks are mandatory for everyone inside the play zones — both kids and adults. You can bring your own or buy a pair at the counter for ₹100.",
  },
];

/* ── Accordion Component ───────────────────────── */

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 max-w-2xl mx-auto cursor-pointer">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-magic-purple/10 rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <button
            className="w-full flex items-center justify-between p-5 bg-white border-none cursor-pointer outline-none"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span
              className="text-left text-magic-purple font-semibold text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.q}
            </span>
            <span
              className={`text-xl text-slide-orange transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-off-white"
              >
                <div className="p-5 pt-0 text-foreground/80 leading-relaxed border-t border-magic-purple/5 mt-2">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ── Visit Page ─────────────────────────────────── */

export default function VisitPage() {
  return (
    <div className="bg-off-white min-h-screen pb-20 overflow-x-hidden">
      {/* ========= HERO HEADER ========= */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-r from-sky-cyan via-slide-orange to-hot-pink relative overflow-hidden">
        {/* Decorative clouds */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">☁️</div>
        <div
          className="absolute top-20 right-20 text-6xl opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          ☁️
        </div>

        <div className="mx-auto max-w-3xl text-center relative z-10 text-white">
          <span className="text-6xl mb-4 block animate-bounce">📍</span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Plan Your Visit
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Everything you need to know before stepping into the magic.
          </p>
        </div>
      </section>

      {/* ========= TIMINGS & COMBOS ========= */}
      <section className="py-16 px-6 -mt-10 relative z-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          {/* Hours Card */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-magic-purple/10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🕒</span>
                <h2
                  className="text-2xl md:text-3xl text-magic-purple"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Opening Hours
                </h2>
              </div>
              <ul className="space-y-4 list-none p-0 m-0">
                {HOURS.map((h, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-semibold text-foreground/80">{h.day}</span>
                    <span className="text-deep-violet font-bold bg-deep-violet/10 px-3 py-1 rounded-md">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-star-gold/20 p-4 rounded-xl text-sm text-magic-purple font-medium flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <p>
                  During long weekends and public holidays, we recommend calling ahead to
                  check capacity!
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Pricing Outline */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-magic-purple/10 h-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🎟️</span>
                  <h2
                    className="text-2xl md:text-3xl text-magic-purple"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Entry Passes
                  </h2>
                </div>
                <Link href="/play-zones" className="text-star-gold font-bold hover:underline no-underline text-sm">
                  View Full Rates →
                </Link>
              </div>

              <div className="space-y-4">
                {PRICING.map((p, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center gap-4 bg-off-white rounded-xl p-4 border border-gray-100"
                  >
                    <div className={`w-16 h-16 rounded-full ${p.color} flex-shrink-0 flex items-center justify-center text-white text-xl font-bold`}>
                      {p.duration.split(" ")[0]}H
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-bold text-lg text-magic-purple mb-1">{p.age}</h3>
                      <p className="text-sm text-foreground/60">{p.duration} per person</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-end w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-200">
                      <div className="flex sm:flex-col gap-4 sm:gap-1 text-sm w-full justify-between sm:justify-start">
                        <span className="text-foreground/70">Wkdy: <b className="text-magic-purple">{p.weekdays}</b></span>
                        <span className="text-foreground/70">Wknd: <b className="text-magic-purple">{p.weekends}</b></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-foreground/50 mt-4 text-center">
                *Adult entry is ₹200/head. Grip socks mandatory (₹100/pair if not carrying).
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========= MAP & DIRECTIONS ========= */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2
                className="text-3xl md:text-4xl text-magic-purple mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Getting Here 🚗
              </h2>
              <p className="max-w-xl mx-auto text-foreground/70">
                We are conveniently located in the heart of Electronic City Phase 1,
                with ample parking space for our magical guests.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg border border-magic-purple/5">
            {/* Map Embed - 3 cols */}
            <ScrollReveal className="lg:col-span-3 h-[400px] lg:h-auto w-full relative">
              <iframe
                title="Aabracadabrrahh Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.551185566115!2d77.659616!3d12.843105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a77f0a8ed%3A0x6b7280e2f5f1ea30!2sElectronic%20City%20Phase%20I%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ScrollReveal>

            {/* Directions - 2 cols */}
            <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-deep-violet mb-2">📍 Address</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Aabracadabrrahh Fun Zone,<br />
                  Opposite Tech Park Gate 2,<br />
                  Electronic City Phase 1,<br />
                  Bengaluru, Karnataka 560100
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sky-cyan/10 p-4 rounded-xl">
                  <span className="text-2xl block mb-2">🚇</span>
                  <p className="font-bold text-sm text-magic-purple">Nearest Metro</p>
                  <p className="text-xs text-foreground/70">Electronic City Station (1.5 km)</p>
                </div>
                <div className="bg-ball-green/10 p-4 rounded-xl">
                  <span className="text-2xl block mb-2">🅿️</span>
                  <p className="font-bold text-sm text-magic-purple">Parking</p>
                  <p className="text-xs text-foreground/70">Valet & basement slots available</p>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold justify-center mt-2 text-center"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========= AMENITIES & PREPARATION ========= */}
      <section className="py-16 px-6 bg-magic-purple text-white relative overflow-hidden">
        <SparkleStars />
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 relative z-10">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl text-star-gold mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Facilities On-Site
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {AMENITIES.map((a, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                    {a.icon}
                  </div>
                  <div className="pt-2 text-sm font-semibold">{a.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2
                className="text-2xl md:text-3xl text-hot-pink mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Packing Checklist 🎒
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-ball-green text-xl">✅</span>
                  <div>
                    <strong className="block text-white">Grip Socks</strong>
                    <span className="text-sm text-white/70">Mandatory for all kids and adults entering play zones.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-ball-green text-xl">✅</span>
                  <div>
                    <strong className="block text-white">Water Bottle</strong>
                    <span className="text-sm text-white/70">Refill stations available inside.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-ride-red text-xl">❌</span>
                  <div>
                    <strong className="block text-white">Outside Food</strong>
                    <span className="text-sm text-white/70">Except for baby food/formula, all food must be bought at the café.</span>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========= HYGIENE & SAFETY FAQ ========= */}
      <section className="py-20 px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-ball-green/20 text-ball-green font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              🛡️ Uncompromised Safety
            </span>
            <h2
              className="text-3xl md:text-4xl text-magic-purple mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hygiene & Supervision Rules
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Your child&apos;s safety is our highest priority at Aabracadabrrahh.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <Accordion items={HYGIENE_FAQS} />
        </ScrollReveal>
      </section>
    </div>
  );
}

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
