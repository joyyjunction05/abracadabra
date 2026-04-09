import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Visit & Pricing",
  description: "Check the timings, walk-in pricing, café details, and safety guidelines for Aabracadabrrahh Indoor Play Zone in Bengaluru.",
  keywords: ["aabracadabrrahh ticket price", "indoor play zone timings electronic city", "kids play area admission bangalore", "safe indoor play park rules"],
  openGraph: {
    title: "Plan Your Visit | Aabracadabrrahh",
    description: "Find opening hours, walk-in admission tickets, and parent lounge details.",
    url: "https://aabracadabrrahh.com/visit",
  }
};

export default function VisitLayout({ children }: { children: React.ReactNode }) {
  // Utilizing an OfferCatalog schema for the ticket pricing mapping
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Aabracadabrrahh Walk-In Tickets",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Weekday 60 Mins",
        "price": "450",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "name": "Weekend 60 Mins",
        "price": "600",
        "priceCurrency": "INR"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
