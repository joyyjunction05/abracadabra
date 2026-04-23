import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy | Aabracadabrrahh',
  description: 'Refund and cancellation policy for Aabracadabrrahh Play Zone. Understand when refunds are available for bookings, tickets, events, and merchandise.',
  alternates: { canonical: '/refund' },
};

export default function RefundPage() {
  return (
    <main className="overflow-x-hidden bg-off-white pt-32 pb-20 px-4 min-h-screen relative z-10">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl border-4 border-magic-purple/20 shadow-[8px_8px_0_var(--star-gold)] p-8 md:p-12 relative z-20">
        <h1 className="text-3xl md:text-5xl font-black text-magic-purple uppercase font-display mb-4 drop-shadow-sm">
          Refund Policy
        </h1>
        <p className="text-sm uppercase tracking-widest text-magic-purple/50 font-black mb-10">
          Effective for all bookings and purchases at Aabra‑ca‑dabrrahh
        </p>

        <div className="prose prose-p:text-foreground/80 prose-headings:text-deep-violet prose-a:text-hot-pink max-w-none font-medium space-y-8">

          {/* Scope */}
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-0 mb-3 text-magic-purple">
              Scope and Overview
            </h2>
            <p className="mb-0">
              This Refund Policy explains when refunds are available for bookings, tickets, events, and merchandise purchased from Aabra‑ca‑dabrrahh. Refunds are considered only for genuine, unavoidable, or unforeseen circumstances and are granted at the sole discretion of management. Where possible, we will first offer the option to reschedule the booking before issuing a refund.
            </p>
          </section>

          {/* Rescheduling */}
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">
              Rescheduling Option
            </h2>
            <p className="mb-3">
              If you cannot attend, you must first consider rescheduling the booking to a new date <strong>within 3 months</strong> of the original booking/event date.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Rescheduling is subject to availability and any applicable price differences.</li>
              <li>Only if rescheduling is not possible or practical will the refund rules below be applied.</li>
            </ul>
          </section>

          {/* Eligibility Matrix */}
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">
              Refund Eligibility Matrix
            </h2>
            <p className="mb-4">
              Refunds are considered only when valid proof of purchase is provided and the request is made in genuine circumstances that prevent attendance or use of the service.
            </p>

            <div className="overflow-x-auto rounded-2xl border-2 border-magic-purple/20 mb-4">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-magic-purple text-white">
                    <th className="px-6 py-4 font-black uppercase tracking-wide">Timing of Request</th>
                    <th className="px-6 py-4 font-black uppercase tracking-wide">Refund Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-magic-purple/5 border-b border-magic-purple/10">
                    <td className="px-6 py-4 font-semibold text-foreground/80">More than 7 days before booking / event date</td>
                    <td className="px-6 py-4 font-black text-magic-purple">30% refund <span className="text-foreground/50 font-medium">(less GST)</span></td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-semibold text-foreground/80">Within 7 days of booking / event date</td>
                    <td className="px-6 py-4 font-black text-hot-pink">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-magic-purple/5 rounded-xl border border-magic-purple/10 text-sm text-magic-purple/80 italic">
              All refunds are calculated on the booking or purchase amount; GST or other applicable taxes are deducted where required by law. Management reserves the right to deny refunds if the request is not genuine or if Terms of Service are violated.
            </div>
          </section>

          {/* How to Request */}
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">
              How to Request a Refund
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide proof of purchase such as invoice, booking confirmation, ticket, or receipt.</li>
              <li>
                Submit your refund request by email to{' '}
                <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="text-hot-pink no-underline hover:underline">
                  enquiry@aabra-ca-dabrrahh.com
                </a>{' '}
                or by post to the address below.
              </li>
              <li>Include your booking reference, date of booking, reason for refund, and contact details.</li>
              <li>We will acknowledge receipt of your request and advise if additional information is required.</li>
            </ul>
            <div className="p-4 bg-off-white rounded-xl border border-magic-purple/10 text-sm text-foreground/70 not-italic">
              <strong className="text-magic-purple">Mailing address:</strong>{' '}
              #30/19, GNR Building, 1st Floor, Hulimangala Main Road, Near G M Infinity,
              Neo Town Thirupalya, Anekal Taluk, Bangalore‑560100.
            </div>
          </section>

          {/* Processing */}
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">
              Refund Processing
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Once your refund request is received and approved, we will notify you by email.</li>
              <li>Approved refunds will be processed to the original method of payment. Processing times vary by bank or card issuer; please allow a reasonable number of business days for the credit to appear.</li>
              <li>If your refund is rejected, we will explain the reason in our response.</li>
            </ul>
          </section>

          {/* Late or Missing */}
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">
              Late or Missing Refunds
            </h2>
            <p className="mb-3">If you have not received an approved refund:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check your bank account again.</li>
              <li>Contact your card issuer — it may take time for the refund to be posted.</li>
              <li>Contact your bank for processing timelines.</li>
            </ul>
            <p className="mb-0">
              If you still have not received the refund after these steps, email{' '}
              <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="text-hot-pink no-underline hover:underline">
                enquiry@aabra-ca-dabrrahh.com
              </a>{' '}
              with your booking reference and refund approval details.
            </p>
          </section>

          {/* Exceptions */}
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">
              Exceptions and Special Circumstances
            </h2>
            <p className="mb-3">
              Refunds will <strong>not</strong> be issued for no‑shows, late arrivals beyond the booked slot without prior notice, or cancellations made within 7 days of the booking — except in exceptional, verifiable circumstances.
            </p>
            <p className="mb-0">
              Management may, at its discretion, offer partial refunds, credits, or goodwill gestures in extraordinary cases (medical emergencies, government restrictions, etc.) upon receipt of supporting documentation.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl md:text-2xl font-black uppercase font-display mb-3 text-magic-purple">
              Contact for Refund Queries
            </h2>
            <div className="flex flex-col gap-2 text-foreground/80">
              <p className="mb-0">
                📧 <strong>Email:</strong>{' '}
                <a href="mailto:enquiry@aabra-ca-dabrrahh.com" className="text-hot-pink no-underline hover:underline">
                  enquiry@aabra-ca-dabrrahh.com
                </a>
              </p>
              <p className="mb-0">
                📍 <strong>Address:</strong> #30/19, GNR Building, 1st Floor, Hulimangala Main Road,
                Near G M Infinity, Neo Town Thirupalya, Anekal Taluk, Bangalore‑560100.
              </p>
            </div>
          </section>

          {/* Acknowledgement */}
          <div className="mt-4 p-5 bg-magic-purple/5 rounded-2xl border border-magic-purple/15 text-sm text-magic-purple/80 italic">
            By making a booking or purchase with Aabra‑ca‑dabrrahh you acknowledge and accept this Refund Policy.
          </div>

          {/* Back link */}
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
