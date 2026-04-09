"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#play-zones", label: "Play Zones" },
  { href: "/#birthday-parties", label: "Birthdays" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#events", label: "Events" },
  { href: "/#visit", label: "Visit" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 border-b-4 border-star-gold ${
        scrolled
          ? "bg-white shadow-xl shadow-black/10"
          : "bg-white shadow-md shadow-black/8"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 no-underline hover:scale-105 transition-transform mr-8 lg:mr-16 shrink-0">
            <Image
              src="/logo.png"
              alt="Aabracadabrrahh Logo"
              width={180}
              height={180}
              className="w-auto h-12 md:h-14 object-contain scale-110 sm:scale-125 md:scale-150 origin-left ml-2 md:ml-6"
              priority
            />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:gap-2 xl:gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[11px] lg:text-[13px] xl:text-base font-black text-magic-purple/80 hover:text-magic-purple transition-all duration-200 no-underline tracking-normal lg:tracking-wide xl:tracking-wider px-2 lg:px-2.5 xl:px-4 py-1.5 rounded-full hover:bg-star-gold hover:shadow-[0_3px_0_var(--hot-pink)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#birthday-parties" className="btn-gold !text-xs lg:!text-sm xl:!text-base !py-1.5 lg:!py-2 !px-3 lg:!px-4 xl:!px-6 shadow-[0_4px_0_var(--deep-violet)] hover:shadow-[0_6px_0_var(--deep-violet)] whitespace-nowrap lg:ml-2 shrink-0">
            🎂 Book
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          className="flex flex-col gap-1.5 md:hidden bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-magic-purple transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-magic-purple transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-magic-purple transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white border-t-2 border-star-gold md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-3 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative block w-full text-center text-lg font-black text-magic-purple/90 bg-magic-purple/5 border-2 border-transparent hover:border-magic-purple hover:text-magic-purple transition-all duration-200 no-underline py-3 px-4 rounded-full hover:bg-star-gold active:bg-star-gold shadow-[0_3px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_0_var(--hot-pink)] hover:-translate-y-1 active:translate-y-0 active:shadow-none mb-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#birthday-parties"
                className="btn-gold text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                🎂 Book a Party
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
