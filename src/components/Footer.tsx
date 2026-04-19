import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiFacebook } from "react-icons/fi";

const SOCIALS = [
  {
    href: "https://instagram.com/aabracadabrrahh",
    label: "Instagram",
    icon: <FiInstagram size={22} strokeWidth={2} />,
    handle: "@aabracadabrrahh",
  },
  {
    href: "https://www.facebook.com/share/18EMBbkZ8V/",
    label: "Facebook",
    icon: <FiFacebook size={22} strokeWidth={2} />,
    handle: "Aabracadabrrahh Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 border-t border-white/10 relative z-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 items-start">
          
          {/* Left Column: Head Office & Contact */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-hot-pink font-bold text-[15px] mb-5 tracking-widest uppercase">Head Office</h4>
            <div className="text-white/80 text-[13px] leading-relaxed mb-10">
              <p className="mb-1">- M/s. Infinite Learning & Entertainment</p>
              <p className="leading-snug">
                Electronic City Phase 1,{" "}<br className="hidden sm:block md:hidden" />Bengaluru – 560100
              </p>
            </div>

            <h4 className="text-hot-pink font-bold text-[15px] mb-5 tracking-widest uppercase">Contact Us</h4>
            <div className="flex flex-col items-center gap-3 text-white/90 text-[14px]">
              <div className="flex items-center gap-3">
                <span className="text-hot-pink opacity-80">📱</span>
                <a href="tel:+917996693125" className="hover:text-star-gold transition-colors no-underline text-white">+91 79966-93125</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-hot-pink opacity-80">✉️</span>
                <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="hover:text-star-gold transition-colors no-underline text-white">enquiry@aabra-ca-dabrrahh.com</a>
              </div>
            </div>
          </div>

          {/* Center Column: Logo & Follow Us */}
          <div className="flex flex-col items-center justify-center text-center mt-[-10px]">
            <Image
              src="/logo.png"
              alt="Aabracadabrrahh Logo"
              width={220}
              height={100}
              className="w-auto h-24 object-contain mb-8 group-hover:scale-105 transition-transform opacity-90"
              priority
            />
            <h4 className="text-white font-bold text-[15px] mb-5 tracking-widest uppercase">Follow Us</h4>
            <div className="flex justify-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="bg-hot-pink/90 text-white flex items-center justify-center w-10 h-10 rounded-full hover:-translate-y-1 hover:bg-hot-pink transition-all no-underline"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Branches & Timings */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-hot-pink font-bold text-[15px] mb-5 tracking-widest uppercase">Branches</h4>
            <div className="text-white/80 text-[13px] leading-relaxed mb-10">
              <p className="mb-1">- Aabracadabrrahh Indoor Play Zone</p>
              <p className="leading-snug">
                <a href="https://maps.app.goo.gl/XFj1o1yGNKX8xo1c9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors no-underline text-white/80">Electronic City Phase 1, Bengaluru – 560100</a>
              </p>
            </div>

            <h4 className="text-hot-pink font-bold text-[15px] mb-5 tracking-widest uppercase">We Are Open:</h4>
            <div className="w-full max-w-xs flex flex-col gap-3 text-[13px] text-white/80">
              <div className="flex justify-between border-b border-dashed border-white/10 pb-2">
                <span>Monday To Friday</span>
                <span className="font-semibold text-white">11 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-white/10 pb-2">
                <span>Saturday To Sunday</span>
                <span className="font-semibold text-white">11 AM – 9 PM</span>
              </div>
              <div className="pt-1 pb-1">
                Socks are mandatory for Kids & Parents
              </div>
              <div className="">
                No outside food allowed
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Policies & Copyright */}
        <div className="mt-12 pt-8 flex flex-col items-center gap-6 border-t border-white/10">
          <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-16 w-full text-[13px]">
            <a href="/Privacy Policy.docx" target="_blank" rel="noopener noreferrer" className="text-hot-pink font-semibold hover:text-white transition-colors no-underline">
              Privacy Policy
            </a>
            <a href="/T&C.docx" target="_blank" rel="noopener noreferrer" className="text-hot-pink font-semibold hover:text-white transition-colors no-underline">
              Terms & Conditions
            </a>
            <a href="/Refund Policy.docx" target="_blank" rel="noopener noreferrer" className="text-hot-pink font-semibold hover:text-white transition-colors no-underline">
              Refund Policy
            </a>
          </div>
          
          <div className="text-center text-white/50 text-[12px] tracking-wide mt-2">
            Copyright © {new Date().getFullYear()} Abracadabra. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
