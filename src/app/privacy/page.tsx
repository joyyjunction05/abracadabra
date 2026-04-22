import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aabracadabrrahh',
  description: 'Privacy policy and data handling practices for Aabracadabrrahh Play Zone.',
};

export default function PrivacyPage() {
  return (
    <main className="overflow-x-hidden bg-off-white pt-32 pb-20 px-4 min-h-screen relative z-10">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl border-4 border-magic-purple/20 shadow-[8px_8px_0_var(--star-gold)] p-8 md:p-12 relative z-20">
        <h1 className="text-3xl md:text-5xl font-black text-magic-purple uppercase font-display mb-8 drop-shadow-sm">Privacy Policy</h1>
        
        <div className="prose prose-p:text-foreground/80 prose-headings:text-deep-violet prose-a:text-hot-pink max-w-none font-medium">
          <p className="text-sm uppercase tracking-widest text-magic-purple/50 font-black mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Aabracadabrrahh Play Zone. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or facility.
          </p>
          
          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">2. The Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
            <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-black uppercase font-display mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a birthday party).</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <div className="mt-12 p-4 bg-magic-purple/5 rounded-xl border border-magic-purple/10 text-sm text-magic-purple italic">
            <strong>Note:</strong> This is a standard placeholder policy. The full legal privacy policy provided by the administration will apply to all bookings and visits.
          </div>
        </div>
      </div>
    </main>
  );
}
