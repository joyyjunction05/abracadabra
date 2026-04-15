import Link from "next/link";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";

const FOOTER_COLUMNS = [
  {
    heading: "Explore",
    links: [
      { href: "/#home", label: "Home" },
      { href: "/#play-zones", label: "Play Zones" },
      { href: "/#birthday-parties", label: "Birthday Parties" },
      { href: "/#events", label: "What's On" },
      { href: "/#gallery", label: "Wall of Magic" },
      { href: "/blog", label: "Blog & Tips" },
    ],
  },
  {
    heading: "Plan Your Visit",
    links: [
      { href: "/#visit", label: "Opening Hours & Rules" },
      { href: "/#pricing", label: "Pricing & Passes" },
      { href: "/#contact", label: "Contact Us" },
      { href: "/#visit", label: "Location Map" },
    ],
  },
];

const SOCIALS = [
  {
    href: "https://instagram.com/aabracadabrrahh",
    label: "Instagram",
    icon: <FiInstagram size={22} />,
    handle: "@aabracadabrrahh",
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
                width={180}
                height={180}
                className="w-auto h-24 object-contain drop-shadow-lg"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              ECity&apos;s favourite Play Zone &amp; Party Hall for kids aged 1–12.
              Making magic happen every day in Electronic City.
            </p>
            {/* Contact info */}
            <address className="not-italic text-sm space-y-2 mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p>📍 Electronic City Phase 1, Bengaluru 560100</p>
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
                  href="mailto:enquiry@aabra-ca-dabrrahh.com"
                  className="hover:text-star-gold transition-colors no-underline"
                  style={{ color: "inherit" }}
                >
                  enquiry@aabra-ca-dabrrahh.com
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


      {/* Copyright bar */}
      <div
        className="border-t py-4"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-3 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          {/* Policy links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <a
              href="/Privacy Policy.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-star-gold no-underline"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Privacy Policy
            </a>
            <a
              href="/T&C.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-star-gold no-underline"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Terms &amp; Conditions
            </a>
            <a
              href="/Refund Policy.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-star-gold no-underline"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Refund Policy
            </a>
          </div>
          {/* Copyright line */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Joyy Junction. All rights reserved.</p>
            <p>Made with ✨ magic and lots of love · Electronic City, Bengaluru</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
