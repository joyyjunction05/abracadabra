"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Data ──────────────────────────────────────── */

const PACKAGES = [
  {
    name: "Silver Package",
    capacity: "Up to 15 Kids",
    duration: "2 Hours",
    price: "₹15,000",
    color: "bg-slide-orange",
    features: [
      "Access to all play zones",
      "Dedicated party host",
      "Basic balloon decoration",
      "Kid's meal (Pizza/Pasta + Juice)",
      "E-invitations",
    ],
  },
  {
    name: "Gold Package",
    capacity: "Up to 25 Kids",
    duration: "3 Hours",
    price: "₹25,000",
    color: "bg-star-gold",
    isPopular: true,
    features: [
      "Everything in Silver, plus:",
      "Themed decoration of choice",
      "Magic show / Tattoo artist (30 mins)",
      "Cake cutting ceremony with mascot",
      "Return gifts (Standard)",
      "Tea/Coffee for 10 adults",
    ],
  },
  {
    name: "Magic VIP",
    capacity: "Up to 40 Kids (Private Hall)",
    duration: "4 Hours",
    price: "₹45,000",
    color: "bg-magic-purple",
    features: [
      "Everything in Gold, plus:",
      "Exclusive private party hall",
      "Premium themed return gifts",
      "Photography & videography",
      "Custom 3kg fondant cake",
      "Buffet for 20 adults",
    ],
  },
];

const COMPARISON_FEATURES = [
  "Play Zone Access",
  "Dedicated Party Host",
  "E-invitations",
  "Basic Decorations",
  "Kid's Meals included",
  "Themed Decorations",
  "Mascot Appearance",
  "Entertainment (Magic/Tattoos)",
  "Return Gifts",
  "Adult Refreshments",
  "Private Party Hall",
  "Photography",
];

const COMPARISON_MATRIX = [
  { name: "Silver", ticks: [true, true, true, true, true, false, false, false, false, false, false, false] },
  { name: "Gold", ticks: [true, true, true, true, true, true, true, true, true, true, false, false] },
  { name: "Magic VIP", ticks: [true, true, true, true, true, true, true, true, true, true, true, true] },
];

const FAQS = [
  {
    q: "Is there a minimum number of guests required?",
    a: "Our Silver package covers up to 15 kids. You can invite fewer, but the package price remains the same. Additional children will be charged per head.",
  },
  {
    q: "Can we bring our own outside food or cake?",
    a: "You are welcome to bring your own birthday cake! However, outside food and beverages are not permitted due to hygiene policies.",
  },
  {
    q: "Do you provide return gifts?",
    a: "Yes! Return gifts are included in our Gold and VIP packages. For Silver packages, they can be added as an extra add-on.",
  },
  {
    q: "What is your cancellation/refund policy?",
    a: "A 50% non-refundable advance is required to block a date. Dates can be rescheduled free of charge up to 7 days prior to the event, subject to availability.",
  },
];

const GALLERY_IMAGES = [
  { src: "🎈", label: "Decoration Setup" },
  { src: "🍕", label: "Kids Buffet" },
  { src: "🎭", label: "Mascot Fun" },
  { src: "🎁", label: "Return Gifts" },
  { src: "🪄", label: "Magic Shows" },
  { src: "🎂", label: "Cake Cutting" },
];

/* ── Accordion Component (Duplicated for simplicity) */

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 w-full cursor-pointer">
      {items.map((item, i) => (
        <div key={i} className="border border-magic-purple/10 rounded-xl overflow-hidden bg-white shadow-sm">
          <button
            className="w-full flex items-center justify-between p-5 bg-white border-none cursor-pointer outline-none"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-left text-magic-purple font-semibold">{item.q}</span>
            <span className={`text-xl transition-transform ${openIndex === i ? "rotate-180" : ""}`}>▼</span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
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

/* ── Birthday Parties Page ─────────────────────── */

export default function BirthdayPartiesPage() {
  const [mounted, setMounted] = useState(false);

  const [stars, setStars] = useState<{
    left: string;
    animationDelay: string;
    animationDuration: string;
    transform: string;
    backgroundColor: string;
    borderRadius: string;
  }[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setStars(
      Array.from({ length: 50 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
        backgroundColor: ["#FF1493", "#FFD700", "#00D4FF", "#39D353"][i % 4],
        borderRadius: i % 2 === 0 ? "50%" : "0",
      }))
    );
  }, []);

  return (
    <div className="bg-off-white min-h-screen pb-20 overflow-x-hidden">
      {/* ========= HERO HEADER ========= */}
      <section className="pt-24 pb-20 px-6 bg-magic-purple relative overflow-hidden text-center">
        {mounted && stars.length > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            {stars.map((star, i) => (
              <div
                key={i}
                className="absolute animate-confetti w-3 h-3 md:w-4 md:h-4"
                style={{
                  left: star.left,
                  top: `-20px`,
                  backgroundColor: star.backgroundColor,
                  animationDelay: star.animationDelay,
                  animationDuration: star.animationDuration,
                  borderRadius: star.borderRadius,
                  transform: star.transform,
                }}
              />
            ))}
          </div>
        )}

        <div className="mx-auto max-w-3xl relative z-10 text-white">
          <span className="text-6xl mb-4 block">🎂</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            The Birthday They&apos;ll <span className="text-star-gold">Never Stop</span> Talking About.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Zero stress for parents. 100% magic for kids. Choose a package, and we&apos;ll handle the rest!
          </p>
          <a href="#book-now" className="btn-gold text-lg lg:scale-110">
            Book Their Day ✨
          </a>
        </div>
      </section>

      {/* ========= PACKAGE CARDS ========= */}
      <section className="py-20 px-6 -mt-10 relative z-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {PACKAGES.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 150}>
                <div
                  className={`card-hover relative bg-white rounded-3xl p-8 shadow-xl border-t-8 flex flex-col h-full ${
                    pkg.isPopular ? "border-star-gold scale-100 md:scale-105 z-10" : `border-transparent ${pkg.color.replace("bg-", "border-")}`
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-star-gold text-magic-purple font-bold px-4 py-1 rounded-full text-sm shadow-md">
                      ★ Most Popular ★
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h2 className={`text-2xl mb-1 ${pkg.color.replace("bg-", "text-")}`} style={{ fontFamily: "var(--font-display)" }}>
                      {pkg.name}
                    </h2>
                    <div className="text-3xl font-bold text-foreground mb-2 mt-3">{pkg.price}</div>
                    <div className="flex justify-center gap-2 text-sm text-foreground/60 font-semibold">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">{pkg.capacity}</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">{pkg.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex gap-3 text-sm text-foreground/80 leading-snug">
                        <span className="text-ball-green flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#book-now" className={`w-full text-center py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90 no-underline ${pkg.color}`}>
                    Select Package
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========= COMPARISON TABLE ========= */}
      <section className="py-16 px-6 bg-white overflow-hidden">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-magic-purple text-center mb-10" style={{ fontFamily: "var(--font-display)" }}>
              Compare Packages
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="overflow-x-auto pb-6">
              <table className="w-full min-w-[600px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="p-4 text-left border-b border-gray-200 text-foreground/60 font-semibold w-1/3">Features</th>
                    {COMPARISON_MATRIX.map(c => (
                      <th key={c.name} className="p-4 text-center border-b border-gray-200 text-magic-purple font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_FEATURES.map((feat, i) => (
                    <tr key={feat} className="hover:bg-off-white/50 transition-colors">
                      <td className="p-4 border-b border-gray-100 text-foreground/80">{feat}</td>
                      {COMPARISON_MATRIX.map(c => (
                        <td key={c.name} className="p-4 text-center border-b border-gray-100">
                          {c.ticks[i] ? (
                            <span className="text-ball-green text-lg font-bold">✓</span>
                          ) : (
                            <span className="text-gray-300 text-sm">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========= BOOKING ENQUIRY & FAQ ========= */}
      <section id="book-now" className="py-20 px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-magic-purple/10">
              <h2 className="text-3xl text-magic-purple mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Start Planning! 🎉
              </h2>
              <p className="text-foreground/60 mb-8 text-sm">
                Drop your details below and our party planners will call you back within 24 hours.
              </p>

              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your party enquiry has been submitted. We'll be in touch soon! 🎩");
              }}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Parent&apos;s Name</label>
                    <input required type="text" className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors" placeholder="Rahul Sharma" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Phone Number</label>
                    <input required type="tel" className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Child&apos;s Name & Age</label>
                    <input required type="text" className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors" placeholder="Aanya (5)" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Expected Date</label>
                    <input required type="date" className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Package</label>
                    <select className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors appearance-none cursor-pointer">
                      <option value="silver">Silver Package</option>
                      <option value="gold">Gold Package</option>
                      <option value="vip">Magic VIP</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">No. of Kids (Approx)</label>
                    <input required type="number" min="1" max="100" className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors" placeholder="15" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Special Requests / Theme Idea</label>
                  <textarea rows={3} className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors resize-none" placeholder="We'd love a superhero theme!"></textarea>
                </div>

                <button type="submit" className="w-full btn-gold justify-center py-4 text-lg mt-2">
                  Request a Callback 📞
                </button>
              </form>
            </div>

            {/* Gallery + FAQ */}
            <div className="flex flex-col gap-10">
              {/* Photo Gallery Grid */}
              <div>
                <h3 className="text-2xl text-deep-violet mb-6 font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Real Party Magic
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {GALLERY_IMAGES.map((img, i) => (
                    <div key={i} className="aspect-square bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-star-gold/10 transition-colors">
                      <span className="text-4xl">{img.src}</span>
                      <span className="text-xs font-semibold text-magic-purple text-center px-1">{img.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl text-deep-violet mb-6 font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Frequently Asked Questions
                </h3>
                <Accordion items={FAQS} />
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
