import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aabracadabrrahh',
  description: 'Privacy policy explaining what information Aabracadabrrahh collects, how it is used, and your rights regarding your personal data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="overflow-x-hidden bg-off-white pt-32 pb-20 px-4 min-h-screen relative z-10">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl border-4 border-magic-purple/20 shadow-[8px_8px_0_var(--star-gold)] p-8 md:p-12 relative z-20">
        <h1 className="text-3xl md:text-5xl font-black text-magic-purple uppercase font-display mb-4 drop-shadow-sm">
          Privacy Policy
        </h1>
        <p className="text-sm uppercase tracking-widest text-magic-purple/50 font-black mb-10">
          Aabra‑ca‑dabrrahh — Protecting your family&apos;s information
        </p>

        <div className="prose prose-p:text-foreground/80 prose-headings:text-deep-violet prose-a:text-hot-pink max-w-none font-medium space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-0 mb-3 text-magic-purple">1. Overview</h2>
            <p className="mb-0">Aabra‑ca‑dabrrahh (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, when we disclose it, and the choices you have about your information when you visit our website, make purchases, or use our services at our play area.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">2. What Information We Collect</h2>
            <h3 className="text-base font-black uppercase tracking-wide text-deep-violet mb-2">Information You Give Us</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Contact &amp; purchase details:</strong> When you make a booking, purchase a ticket, sign up for an event, or buy merchandise, we collect personal information such as name, postal address, email address, phone number, and payment-related details required to complete the transaction.</li>
              <li><strong>Parent/guardian information:</strong> For minors, we collect the contact details of the parent or guardian responsible for the booking or visit.</li>
            </ul>
            <h3 className="text-base font-black uppercase tracking-wide text-deep-violet mb-2">Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li><strong>Device and browsing data:</strong> When you browse our website we automatically receive your device&apos;s IP address and information about your browser and operating system to help us operate and improve the site.</li>
              <li><strong>Cookies and similar technologies:</strong> We use cookies to maintain your session, remember preferences, and improve site functionality. Cookies do not personally identify you on other websites.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li><strong>To complete transactions:</strong> Process bookings, purchases, refunds, and deliveries.</li>
              <li><strong>To communicate with you:</strong> Send booking confirmations, receipts, updates about your visit, and respond to inquiries.</li>
              <li><strong>To improve our services:</strong> Analyze site usage and customer feedback to improve our play area, safety, and online experience.</li>
              <li><strong>Marketing (with consent):</strong> With your permission, we may send promotional emails about events, offers, new services, or news. You can opt out at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">4. Consent and Withdrawing Consent</h2>
            <h3 className="text-base font-black uppercase tracking-wide text-deep-violet mb-2">How We Obtain Consent</h3>
            <p className="mb-4">By providing personal information to complete a transaction (booking, payment, delivery), you consent to our collection and use of that information for that specific purpose. If we ask for personal information for a secondary purpose (for example, marketing), we will ask for your explicit consent or give you the opportunity to say no.</p>
            <h3 className="text-base font-black uppercase tracking-wide text-deep-violet mb-2">How to Withdraw Consent</h3>
            <p className="mb-3">If you change your mind after opting in, you may withdraw consent for us to contact you — or to continue collecting, using, or disclosing your information — at any time by emailing <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="text-hot-pink no-underline hover:underline">enquiry@aabra-ca-dabrrahh.com</a> or by writing to:</p>
            <div className="p-4 bg-off-white rounded-xl border border-magic-purple/10 text-sm text-foreground/70 not-italic">
              <strong className="text-magic-purple">Privacy Compliance Officer</strong><br />
              Aabra‑ca‑dabrrahh<br />
              #30/19, GNR Building, 1st Floor,<br />
              Hulimangala Main Road, Near G M Infinity,<br />
              Neo Town Thirupalya, Anekal Taluk,<br />
              Bangalore‑560100.
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">5. Disclosure of Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li><strong>Legal requirements:</strong> We may disclose personal information if required by law, regulation, or legal process, or to respond to lawful requests by public authorities.</li>
              <li><strong>Terms of Service violations:</strong> We may disclose information if you violate our Terms of Service or if disclosure is necessary to protect our rights, property, safety, or that of others.</li>
              <li><strong>Business transfers:</strong> If our business is sold, merged, or reorganized, personal information may be transferred to the new owner so that we may continue to provide services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">6. Payments and Payment Processors</h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>We use Worldline India (or other secure payment processors) to process online payments. Payment card data is not stored on our servers by us or by Worldline India.</li>
              <li>Payment information is encrypted and processed in accordance with the Payment Card Industry Data Security Standard (PCI‑DSS).</li>
              <li>We retain purchase transaction data only as long as necessary to complete the transaction and for record‑keeping required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">7. Third‑Party Services and Links</h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>We use third‑party service providers (payment processors, email providers, analytics) who may collect or use your information only to the extent necessary to perform services for us.</li>
              <li>Each third party has its own privacy practices; please review their policies when redirected to their sites.</li>
              <li>When you click links that take you away from our site, you are no longer governed by this Privacy Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">8. Security</h2>
            <p className="mb-0">We take reasonable technical and organizational measures to protect personal information from loss, misuse, unauthorized access, disclosure, alteration, and destruction. While we strive to protect your information, no method of transmission or storage is completely secure — absolute security cannot be guaranteed.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">9. Children and Age of Consent</h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Our play area is designed for children, and we take extra care with children&apos;s privacy.</li>
              <li>By using our website or services, you represent that you are at least the age of majority in your jurisdiction, or that you are the parent or legal guardian and have given consent for your minor dependent to use our services.</li>
              <li>If you believe we have collected personal information from a child without appropriate parental consent, please contact us so we can promptly investigate and remove the information if required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">10. Cookies</h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>We use cookies to maintain user sessions and improve site functionality.</li>
              <li>Cookies are not used to personally identify you on other websites.</li>
              <li>You can control cookie settings through your browser; disabling cookies may affect site functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">11. Your Rights and Choices</h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li><strong>Access and correction:</strong> You may request access to, correction of, or deletion of personal information we hold about you.</li>
              <li><strong>Marketing opt‑out:</strong> You can opt out of marketing communications at any time by following the unsubscribe link in our emails or by contacting us at <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="text-hot-pink no-underline hover:underline">enquiry@aabra-ca-dabrrahh.com</a>.</li>
              <li><strong>Data retention:</strong> We retain personal information only as long as necessary for the purposes described in this policy or as required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">12. Changes to this Privacy Policy</h2>
            <p className="mb-0">We may update this Privacy Policy from time to time. Changes take effect immediately upon posting to our website. If we make material changes, we will notify you on this page that the policy has been updated.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">13. Contact Us</h2>
            <p className="mb-4">If you would like to access, correct, amend, or delete any personal information we have about you, register a complaint, or simply want more information, contact our Privacy Compliance Officer:</p>
            <div className="p-4 bg-off-white rounded-xl border border-magic-purple/10 text-sm text-foreground/70 flex flex-col gap-1 not-italic">
              <p className="mb-0">📧 <strong className="text-magic-purple">Email:</strong> <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="text-hot-pink no-underline hover:underline">enquiry@aabra-ca-dabrrahh.com</a></p>
              <p className="mb-0">📍 <strong className="text-magic-purple">Address:</strong> Privacy Compliance Officer, Aabra‑ca‑dabrrahh, #30/19, GNR Building, 1st Floor, Hulimangala Main Road, Near G M Infinity, Neo Town Thirupalya, Anekal Taluk, Bangalore‑560100.</p>
            </div>
          </section>

          <div className="mt-4 p-5 bg-magic-purple/5 rounded-2xl border border-magic-purple/15 text-sm text-magic-purple/80 italic">
            Thank you for trusting Aabra‑ca‑dabrrahh. We are committed to keeping your family&apos;s information safe while we create joyful, memorable play experiences.
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
