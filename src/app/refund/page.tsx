import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Aabracadabrrahh',
  description: 'Refund and cancellation policy for Aabracadabrrahh Play Zone.',
};

export default function RefundPage() {
  return (
    <main className="overflow-x-hidden bg-off-white pt-32 pb-20 px-4 min-h-screen relative z-10">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl border-4 border-magic-purple/20 shadow-[8px_8px_0_var(--star-gold)] p-8 md:p-12 relative z-20">
        <h1 className="text-3xl md:text-5xl font-black text-magic-purple uppercase font-display mb-8 drop-shadow-sm">Refund Policy</h1>
        
        <div className="prose prose-p:text-foreground/80 prose-headings:text-deep-violet prose-a:text-hot-pink max-w-none font-medium">
          <p className="text-sm uppercase tracking-widest text-magic-purple/50 font-black mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">1. General Play Sessions</h2>
          <p className="mb-4">
            Tickets purchased for daily play sessions are generally non-refundable once the play session has commenced. If you have purchased a ticket in advance and cannot make it, please contact us at least 24 hours prior to reschedule.
          </p>
          
          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">2. Birthday Parties & Events</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>A non-refundable deposit is required to secure your party booking date and time.</li>
            <li>Cancellations made 7 days or more prior to the event will not be charged the remaining balance.</li>
            <li>Cancellations made within 7 days of the event will be charged 50% of the remaining balance.</li>
            <li>In the event of an emergency, we will do our best to help you reschedule the party to another date within 30 days, subject to availability.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">3. Processing Refunds</h2>
          <p className="mb-4">
            Approved refunds will be processed to the original method of payment within 5-7 business days. Please note that your bank or credit card company may take additional time to post the refund to your account.
          </p>

          <div className="mt-12 p-4 bg-magic-purple/5 rounded-xl border border-magic-purple/10 text-sm text-magic-purple italic">
            <strong>Note:</strong> This is a standard placeholder policy. The full legal refund policy provided by the administration will apply to all bookings and visits.
          </div>
        </div>
      </div>
    </main>
  );
}
