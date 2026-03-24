"use client";


import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="bg-off-white min-h-screen pb-20 overflow-x-hidden">
      
      {/* ========= HERO HEADER ========= */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-slide-orange to-hot-pink text-center relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-10 left-1/4 text-5xl animate-float opacity-30">📞</span>
          <span className="absolute bottom-10 right-1/4 text-6xl animate-float opacity-30" style={{ animationDelay: "1s" }}>✉️</span>
        </div>

        <div className="mx-auto max-w-3xl relative z-10 text-white">
          <span className="text-6xl mb-4 block animate-bounce border-none border-0" style={{ animationDuration: "2s" }}>👋</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Let&apos;s Talk <span className="text-star-gold">Magic!</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Have a question, feedback, or want to book a venue? We&apos;re all ears and always happy to help.
          </p>
        </div>
      </section>

      {/* ========= CONTACT CARDS ========= */}
      <section className="py-12 px-6 relative z-20 -mt-8">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-6">
          <ScrollReveal delay={100}>
            <div className="card-hover bg-white rounded-3xl p-8 text-center shadow-lg border border-magic-purple/10 flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-full bg-ball-green/20 flex items-center justify-center text-3xl mb-4">💬</div>
              <h3 className="text-xl text-magic-purple font-bold mb-2">WhatsApp Us</h3>
              <p className="text-sm text-foreground/70 mb-4 flex-1">
                Fastest way to reach us! We usually reply within 2 hours.
              </p>
              <a 
                href="https://wa.me/919876543210?text=Hi!%20I%20have%20a%20query" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold !bg-ball-green/20 !text-ball-green w-full justify-center !font-bold"
              >
                +91 98765 43210
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="card-hover bg-white rounded-3xl p-8 text-center shadow-lg border border-magic-purple/10 flex flex-col items-center h-full mt-4 md:mt-0">
              <div className="w-16 h-16 rounded-full bg-slide-orange/20 flex items-center justify-center text-3xl mb-4">📞</div>
              <h3 className="text-xl text-magic-purple font-bold mb-2">Call Us</h3>
              <p className="text-sm text-foreground/70 mb-4 flex-1">
                Prefer hearing a human voice? Give our helpdesk a ring.
              </p>
              <a href="tel:+919876543210" className="btn-gold !bg-slide-orange/20 !text-slide-orange w-full justify-center !font-bold">
                +91 98765 43210
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="card-hover bg-white rounded-3xl p-8 text-center shadow-lg border border-magic-purple/10 flex flex-col items-center h-full mt-4 md:mt-0">
              <div className="w-16 h-16 rounded-full bg-sky-cyan/20 flex items-center justify-center text-3xl mb-4">✉️</div>
              <h3 className="text-xl text-magic-purple font-bold mb-2">Email Us</h3>
              <p className="text-sm text-foreground/70 mb-4 flex-1">
                For corporate bookings, tie-ups, or detailed feedback.
              </p>
              <a href="mailto:hello@aabracadabrrahh.com" className="btn-gold !bg-sky-cyan/20 !text-sky-cyan w-full justify-center !font-bold whitespace-nowrap px-2">
                hello@aabracadabrrahh.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========= CONTACT FORM & MAP ========= */}
      <section className="py-16 px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-magic-purple/10">
            
            {/* Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl text-magic-purple mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Drop a Message 📝
              </h2>
              <p className="text-foreground/70 mb-8 max-w-md text-sm">
                If you have a specific question about an upcoming visit or party, fill this out and we&apos;ll get right back to you.
              </p>

              <form 
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent! Our magic owls are delivering it right now. 🦉✨");
                }}
              >
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Your Name</label>
                    <input required type="text" className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors" placeholder="Kabir Arora" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Phone Number</label>
                    <input required type="tel" className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Email Address</label>
                    <input required type="email" className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors" placeholder="kabir@example.com" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Query Type</label>
                    <select className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors appearance-none cursor-pointer">
                      <option value="general">General Enquiry</option>
                      <option value="party">Birthday Party Booking</option>
                      <option value="event">Event Registration</option>
                      <option value="feedback">Feedback/Suggestion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-deep-violet mb-1 uppercase tracking-wide">Your Message</label>
                  <textarea required rows={5} className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-magic-purple transition-colors resize-none" placeholder="How can we help make your day magical?"></textarea>
                </div>

                <button type="submit" className="w-full btn-pink justify-center py-4 text-lg mt-2 shadow-lg hover:shadow-xl transition-all">
                  Send Message 🚀
                </button>
              </form>
            </div>

            {/* Map & Address */}
            <div className="relative h-64 lg:h-auto min-h-[400px]">
              <iframe
                title="Aabracadabrrahh Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.551185566115!2d77.659616!3d12.843105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a77f0a8ed%3A0x6b7280e2f5f1ea30!2sElectronic%20City%20Phase%20I%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Address Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white">
                <h3 className="text-xl font-bold text-deep-violet mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  Aabracadabrrahh Fun Zone
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  Opposite Tech Park Gate 2,<br />
                  Electronic City Phase 1,<br />
                  Bengaluru, Karnataka 560100
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-sky-cyan/20 text-sky-cyan text-xs font-bold px-3 py-1 rounded-md">Open Daily</span>
                  <span className="bg-ball-green/20 text-ball-green text-xs font-bold px-3 py-1 rounded-md">Free Parking</span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
