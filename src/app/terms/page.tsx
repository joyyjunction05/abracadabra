import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Aabracadabrrahh',
  description: 'Terms and conditions for visiting and using Aabracadabrrahh Play Zone facilities.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden bg-off-white pt-32 pb-20 px-4 min-h-screen relative z-10">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl border-4 border-magic-purple/20 shadow-[8px_8px_0_var(--star-gold)] p-8 md:p-12 relative z-20">
        <h1 className="text-3xl md:text-5xl font-black text-magic-purple uppercase font-display mb-4 drop-shadow-sm">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm uppercase tracking-widest text-magic-purple/50 font-black mb-10">
          Rules and policies for a safe and magical experience
        </p>

        <div className="prose prose-p:text-foreground/80 prose-headings:text-deep-violet prose-a:text-hot-pink max-w-none font-medium space-y-8">
          
          <div className="p-5 bg-magic-purple/5 rounded-2xl border border-magic-purple/15 text-sm text-magic-purple/80 italic mb-8">
            By using our website, booking services, or visiting the play area you agree to these Terms; bookings are subject to availability, safety rules, and our Refund Policy; disputes are governed by the laws of India and courts in Bengaluru.
          </div>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-0 mb-3 text-magic-purple">1. Overview</h2>
            <p className="mb-0">These Terms &amp; Conditions govern your access to and use of services provided by Aabra‑ca‑dabrrahh (operated by Joyy Junction where applicable). By visiting our site, making a booking, purchasing tickets, or using our facilities you accept and agree to be bound by these Terms and any policies referenced herein. Continued use after updates constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">2. Eligibility and Acceptance</h2>
            <p className="mb-0">You represent that you are of legal age in your jurisdiction or are the parent/guardian authorizing a minor&apos;s use of our services. You must not use our services for unlawful purposes or transmit harmful code. Breach may result in immediate termination of services.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">3. Bookings, Payments and Pricing</h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Bookings are confirmed only after payment and receipt of a booking confirmation.</li>
              <li>Prices and availability are subject to change without notice.</li>
              <li>We reserve the right to refuse or cancel any order or booking at our discretion.</li>
              <li>Payment processing is handled by third‑party gateways; card data is not stored on our servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">4. Refunds and Rescheduling</h2>
            <p className="mb-0">Our Refund Policy applies to all bookings and purchases. Where possible we will first offer rescheduling within 3 months of the original booking; refunds are considered only under the conditions set out in that policy.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">5. Conduct, Safety and Facility Rules</h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Parents/guardians are responsible for supervising children at all times.</li>
              <li>Follow posted safety rules, staff instructions, and age/height restrictions.</li>
              <li>We may refuse entry or remove any person whose behavior endangers others or violates rules.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">6. Child Protection and Reporting</h2>
            <p className="mb-0">We are committed to child safety and will comply with applicable Indian child‑protection laws and reporting obligations. If you suspect abuse or an incident at our facility, report it immediately to staff; we will cooperate with authorities as required.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">7. User Content and Submissions</h2>
            <p className="mb-0">Any feedback, photos, or submissions you provide may be used by us for promotional or operational purposes; you grant us a non‑exclusive, royalty‑free license to use such content. Do not submit content that violates third‑party rights or is unlawful.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">8. Third‑Party Services and Links</h2>
            <p className="mb-0">We may use third‑party tools and link to external sites. Those services have separate terms and privacy practices; we are not responsible for their content or actions. Use of third‑party tools is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">9. Disclaimers, Limitation of Liability and Indemnity</h2>
            <p className="mb-0">Services and products are provided as is. To the fullest extent permitted by law, we disclaim warranties and limit liability for direct or indirect damages. You agree to indemnify and hold us harmless from claims arising from your breach of these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">10. Termination, Severability and Changes</h2>
            <p className="mb-0">We may suspend or terminate access for violations. If any provision is unenforceable, it will be severed and the remainder will remain effective. We may update these Terms; please check periodically. Continued use after changes is acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">11. Governing Law and Contact</h2>
            <p className="mb-4">These Terms are governed by the laws of India, with jurisdiction in Bengaluru, Karnataka. For questions or notices contact:</p>
            <div className="p-4 bg-off-white rounded-xl border border-magic-purple/10 text-sm text-foreground/70 not-italic">
              📧 <strong className="text-magic-purple">Email:</strong> <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="text-hot-pink no-underline hover:underline">enquiry@aabra-ca-dabrrahh.com</a>
            </div>
          </section>

          <div className="mt-4 p-5 bg-magic-purple/5 rounded-2xl border border-magic-purple/15 text-sm text-magic-purple/80 italic">
            By using Aabra‑ca‑dabrrahh services you acknowledge that you have read, understood, and agree to these Terms.
          </div>

          <div className="pt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-hot-pink font-bold no-underline hover:text-magic-purple transition-colors text-sm uppercase tracking-widest">
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
