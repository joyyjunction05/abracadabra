import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Aabracadabrrahh',
  description: 'Terms and conditions for visiting and using Aabracadabrrahh Play Zone facilities.',
};

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden bg-off-white pt-32 pb-20 px-4 min-h-screen relative z-10">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl border-4 border-magic-purple/20 shadow-[8px_8px_0_var(--star-gold)] p-8 md:p-12 relative z-20">
        <h1 className="text-3xl md:text-5xl font-black text-magic-purple uppercase font-display mb-8 drop-shadow-sm">Terms & Conditions</h1>
        
        <div className="prose prose-p:text-foreground/80 prose-headings:text-deep-violet prose-a:text-hot-pink max-w-none font-medium">
          <p className="text-sm uppercase tracking-widest text-magic-purple/50 font-black mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">1. General Rules</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Socks are mandatory for all kids and adults entering the play area.</li>
            <li>No outside food or drinks are permitted inside the premises.</li>
            <li>Children must be supervised by an accompanying adult at all times unless enrolled in a specific drop-off program.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">2. Liability</h2>
          <p className="mb-4">
            While Aabracadabrrahh maintains the highest safety standards, parents/guardians acknowledge that play involves inherent risks. Management is not liable for any minor injuries sustained during standard play.
          </p>

          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">3. Right of Admission</h2>
          <p className="mb-4">
            Management reserves the right of admission. We may request anyone displaying disruptive behavior, illness, or non-compliance with our rules to leave the premises to ensure the safety of other guests.
          </p>

          <div className="mt-12 p-4 bg-magic-purple/5 rounded-xl border border-magic-purple/10 text-sm text-magic-purple italic">
            <strong>Note:</strong> This is a standard placeholder terms of service. The full legal terms provided by the administration will apply to all bookings and visits.
          </div>
        </div>
      </div>
    </main>
  );
}
