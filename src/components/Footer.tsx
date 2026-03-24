import Link from "next/link";
import Image from "next/image";

const FOOTER_COLUMNS = [
  {
    heading: "Play Zones",
    links: [
      { href: "#play-zones", label: "Ball Pit" },
      { href: "#play-zones", label: "Trampoline Zone" },
      { href: "#play-zones", label: "Climbing Wall" },
      { href: "#play-zones", label: "Toddler Corner" },
      { href: "#play-zones", label: "Art & Craft Room" },
      { href: "#play-zones", label: "All Play Zones" },
    ],
  },
  {
    heading: "Parties & Events",
    links: [
      { href: "#birthday-parties", label: "Birthday Packages" },
      { href: "#events", label: "Upcoming Events" },
      { href: "#events", label: "Workshops" },
      { href: "#events", label: "Summer Camp" },
      { href: "#events", label: "School Field Trips" },
      { href: "#events", label: "Full Venue Hire" },
    ],
  },
  {
    heading: "Visit Us",
    links: [
      { href: "#visit", label: "Plan Your Visit" },
      { href: "#visit", label: "Opening Hours" },
      { href: "#pricing", label: "Ticket Prices" },
      { href: "#visit", label: "Safety & Rules" },
      { href: "#contact", label: "Contact Us" },
      { href: "#gallery", label: "Gallery" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { href: "#home", label: "Home" },
      { href: "#play-zones", label: "Play Zones" },
      { href: "#birthday-parties", label: "Birthday Parties" },
      { href: "#pricing", label: "Pricing" },
      { href: "#events", label: "Events & Workshops" },
      { href: "#gallery", label: "Gallery" },
    ],
  },
];

const SOCIALS = [
  {
    href: "https://instagram.com/aabracadabrrahh",
    label: "Instagram",
    icon: "📸",
    handle: "@aabracadabrrahh",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: "📘",
    handle: "Facebook",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: "🎬",
    handle: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d0d", color: "rgba(255,255,255,0.75)" }}>
      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Aabracadabrrahh Logo"
                width={160}
                height={160}
                className="w-auto h-14 object-contain brightness-0 invert"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Bengaluru&apos;s favourite Play Zone &amp; Party Hall for kids aged 2–12.
              Making magic happen every day in Electronic City.
            </p>
            {/* Contact info */}
            <address className="not-italic text-sm space-y-2 mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p>📍 Electronic City Phase 1, Bengaluru — 560100</p>
              <p>
                📞{" "}
                <a
                  href="tel:+917996693125"
                  className="hover:text-star-gold transition-colors no-underline"
                  style={{ color: "inherit" }}
                >
                  +91 79966 93125
                </a>
              </p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:hello@aabracadabrrahh.com"
                  className="hover:text-star-gold transition-colors no-underline"
                  style={{ color: "inherit" }}
                >
                  hello@aabracadabrrahh.com
                </a>
              </p>
            </address>
            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-icon flex items-center justify-center w-10 h-10 rounded-full text-lg transition-all hover:scale-110 no-underline"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4
                className="text-sm font-black uppercase tracking-widest mb-5"
                style={{ color: "var(--star-gold)", fontFamily: "var(--font-display)" }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors no-underline hover:text-white"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social handle strip */}
      <div
        className="border-t py-4"
        style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}
      >
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs font-black uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Follow us{" "}
            <a
              href="https://instagram.com/aabracadabrrahh"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-white"
              style={{ color: "var(--star-gold)" }}
            >
              @AABRACADABRRAHH
            </a>
          </p>
          <div className="flex gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold no-underline transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.icon} {s.handle}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="border-t py-4"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          <p>© {new Date().getFullYear()} Aabracadabrrahh. All rights reserved.</p>
          <p>Made with ✨ magic and lots of love · Electronic City, Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
