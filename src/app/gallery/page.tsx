"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Data ──────────────────────────────────────── */

const CATEGORIES = ["All", "Play Zones", "Birthday Parties", "Events", "Workshops"];

// Simulated media items (using abstract colored divs/emojis since we don't have real images)
const GALLERY_ITEMS = [
  { id: 1, type: "image", cat: "Play Zones", emoji: "🤹", bg: "bg-hot-pink", aspect: "aspect-square" },
  { id: 2, type: "image", cat: "Birthday Parties", emoji: "🎂", bg: "bg-star-gold", aspect: "aspect-[3/4]" },
  { id: 3, type: "video", cat: "Events", emoji: "🪄", bg: "bg-deep-violet", aspect: "aspect-video" },
  { id: 4, type: "image", cat: "Workshops", emoji: "🎨", bg: "bg-sky-cyan", aspect: "aspect-[4/3]" },
  { id: 5, type: "image", cat: "Play Zones", emoji: "🧗", bg: "bg-slide-orange", aspect: "aspect-[3/4]" },
  { id: 6, type: "video", cat: "Birthday Parties", emoji: "🎁", bg: "bg-ride-red", aspect: "aspect-square" },
  { id: 7, type: "image", cat: "Play Zones", emoji: "🔴", bg: "bg-ball-green", aspect: "aspect-[4/3]" },
  { id: 8, type: "image", cat: "Workshops", emoji: "🧪", bg: "bg-magic-purple", aspect: "aspect-video" },
  { id: 9, type: "image", cat: "Events", emoji: "🎡", bg: "bg-hot-pink", aspect: "aspect-square" },
  { id: 10, type: "image", cat: "Birthday Parties", emoji: "🎈", bg: "bg-slide-orange", aspect: "aspect-[3/4]" },
  { id: 11, type: "video", cat: "Play Zones", emoji: "🤸", bg: "bg-deep-violet", aspect: "aspect-square" },
  { id: 12, type: "image", cat: "Workshops", emoji: "🧸", bg: "bg-sky-cyan", aspect: "aspect-video" },
];

/* ── Gallery Page ──────────────────────────────── */

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeTab === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.cat === activeTab);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-off-white min-h-screen pb-20 overflow-x-hidden">
      
      {/* ========= HERO HEADER ========= */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-r from-deep-violet to-hot-pink text-center relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <span className="absolute top-10 left-10 text-6xl animate-twinkle">📸</span>
          <span className="absolute bottom-10 right-20 text-5xl animate-float">🎞️</span>
        </div>

        <div className="mx-auto max-w-3xl relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Aabracadabrrahh <span className="text-star-gold">Magic</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Smiles, laughter, and unforgettable moments captured in time.
          </p>
        </div>
      </section>

      {/* ========= FILTER TABS ========= */}
      <section className="py-8 px-6 sticky top-[72px] bg-off-white/95 backdrop-blur-md z-30 border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-5xl flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x justify-start md:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`snap-center flex-shrink-0 px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                activeTab === cat
                  ? "bg-magic-purple text-white border-magic-purple shadow-md"
                  : "bg-white text-foreground/70 border-gray-200 hover:border-magic-purple/30 hover:text-magic-purple"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ========= MASONRY GRID ========= */}
      <section className="py-12 px-6 min-h-[500px]">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            layout 
            className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className={`relative w-full rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-gray-100 break-inside-avoid ${item.aspect} ${item.bg}`}
                  onClick={() => setLightboxIndex(index)}
                >
                  {/* Abstract content instead of real image */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl transition-transform duration-500 group-hover:scale-110">
                    {item.emoji}
                  </div>

                  {/* Video Play Icon Overlay */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg">
                        <span className="text-magic-purple text-xl">▶</span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.cat}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ========= LIGHTBOX ========= */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors border-none cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
            >
              ✕
            </button>

            {/* Prev/Next Buttons (visual only for abstract gallery) */}
            <button className="absolute left-4 md:left-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors border-none cursor-pointer z-10 hidden sm:flex" onClick={(e) => { e.stopPropagation(); setLightboxIndex(Math.max(0, lightboxIndex - 1)); }}>‹</button>
            <button className="absolute right-4 md:right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors border-none cursor-pointer z-10 hidden sm:flex" onClick={(e) => { e.stopPropagation(); setLightboxIndex(Math.min(filteredItems.length - 1, lightboxIndex + 1)); }}>›</button>

            {/* Lightbox Content */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`w-full max-w-4xl relative ${filteredItems[lightboxIndex].aspect} ${filteredItems[lightboxIndex].bg} rounded-3xl overflow-hidden shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center text-[150px] md:text-[250px] pointer-events-none select-none">
                {filteredItems[lightboxIndex].emoji}
              </div>

              {filteredItems[lightboxIndex].type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-2 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-magic-purple text-4xl">▶</span>
                  </div>
                </div>
              )}

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white font-bold text-lg bg-magic-purple/80 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 inline-block mb-2">
                  {filteredItems[lightboxIndex].cat}
                </span>
                <p className="text-white/80 text-sm">Tap escape or outside image to close.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========= SHARE YOUR MAGIC CTA ========= */}
      <section className="py-20 px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-5xl bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-magic-purple/10 flex flex-col md:flex-row items-center gap-10">
            
            <div className="md:w-1/2 text-center md:text-left">
              <span className="text-5xl block mb-4">🤳</span>
              <h2 className="text-3xl md:text-4xl text-magic-purple mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Share Your Magic Moments!
              </h2>
              <p className="text-foreground/70 mb-6">
                Did you capture a priceless smile at Aabracadabrrahh? Upload your photos here for a chance to be featured in our monthly gallery and win two free passes!
              </p>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#upload" className="btn-gold">
                  Upload Photo 📤
                </a>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-gradient-to-br from-slide-orange via-hot-pink to-magic-purple p-1 rounded-3xl shadow-xl">
                <div className="bg-white rounded-[22px] p-6 text-center h-full">
                  <h3 className="text-xl font-bold text-deep-violet mb-2">Join our Instagram Fam</h3>
                  <p className="text-sm text-foreground/60 mb-6">Tag us @Aabracadabrrahh.blr</p>
                  
                  {/* Fake Instagram Embed */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="aspect-square bg-sky-cyan rounded-lg flex items-center justify-center text-2xl">🧸</div>
                    <div className="aspect-square bg-star-gold rounded-lg flex items-center justify-center text-2xl">🎂</div>
                    <div className="aspect-square bg-ball-green rounded-lg flex items-center justify-center text-2xl">🎨</div>
                  </div>

                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-pink w-full justify-center"
                  >
                    Follow Us 💕
                  </a>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
