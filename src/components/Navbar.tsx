"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#play-zones", label: "Play Zones" },
  { href: "#birthday-parties", label: "Birthdays" },
  { href: "#events", label: "Events" },
  { href: "#visit", label: "Visit" },
  { href: "#gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Resolve href: prefix hash links with '/' when not on home page
  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 md:h-24 transition-all duration-300 border-b-4 border-star-gold ${
        scrolled
          ? "bg-white shadow-xl shadow-black/10"
          : "bg-white shadow-md shadow-black/8"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 py-1">
        <Link href="/" className="flex items-center h-full gap-2 no-underline hover:scale-105 transition-transform mr-4 lg:mr-8 shrink-0">
            <Image
              src="/logo.png"
              alt="Aabracadabrrahh Logo"
              width={400}
              height={150}
              className="w-auto h-full object-contain origin-left drop-shadow-sm scale-[1.15] md:scale-[1.25]"
              priority
            />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:gap-2 xl:gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link.href)}
              className="relative text-[11px] lg:text-[13px] xl:text-base font-black text-magic-purple/80 hover:text-magic-purple transition-all duration-200 no-underline tracking-normal lg:tracking-wide xl:tracking-wider px-2 lg:px-2.5 xl:px-4 py-1.5 rounded-full hover:bg-star-gold hover:shadow-[0_3px_0_var(--hot-pink)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/917996693125?text=Hi%20Aabracadabrrahh!%20I%20would%20like%20to%20learn%20more%20about%20your%20Play%20Zone%20and%20Birthday%20Party%20packages." target="_blank" rel="noopener noreferrer" className="btn-gold !text-xs lg:!text-sm xl:!text-base !py-1.5 lg:!py-2 !px-3 lg:!px-4 xl:!px-6 shadow-[0_4px_0_var(--deep-violet)] hover:shadow-[0_6px_0_var(--deep-violet)] whitespace-nowrap lg:ml-2 shrink-0">
            Book
          </a>
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
                  href={resolveHref(link.href)}
                  className="relative block w-full text-center text-lg font-black text-magic-purple/90 bg-magic-purple/5 border-2 border-transparent hover:border-magic-purple hover:text-magic-purple transition-all duration-200 no-underline py-3 px-4 rounded-full hover:bg-star-gold active:bg-star-gold shadow-[0_3px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_0_var(--hot-pink)] hover:-translate-y-1 active:translate-y-0 active:shadow-none mb-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/917996693125?text=Hi%20Aabracadabrrahh!%20I%20would%20like%20to%20learn%20more%20about%20your%20Play%20Zone%20and%20Birthday%20Party%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-center mt-2 no-underline"
                onClick={() => setMobileOpen(false)}
              >
                Book a Party
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
