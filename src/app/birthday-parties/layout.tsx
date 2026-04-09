import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Birthday Parties",
  description: "Book the ultimate stress-free kids birthday party in Bengaluru. We offer complete packages including venue, decor, food, and dedicated hosts.",
  keywords: ["kids birthday party venue bengaluru", "stress free birthday packages", "indoor birthday celebration", "childrens event venue electronic city"],
  openGraph: {
    title: "Kids Birthday Parties | Aabracadabrrahh",
    description: "Everything you need for a magical birthday. Choose from Silver, Gold, or Magic VIP packages.",
    url: "https://aabracadabrrahh.com/birthday-parties",
  }
};

export default function BirthdayPartiesLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kids Birthday Party Hosting",
    "provider": {
      "@type": "EntertainmentBusiness",
      "name": "Aabracadabrrahh"
    },
    "description": "Premium birthday party hosting for kids inside a luxury indoor play zone, offering themed decorations, catering, and exclusive access.",
    "areaServed": "Bengaluru",
    "offers": [
      {
        "@type": "Offer",
        "name": "Silver Package",
        "description": "Basic party package for up to 15 kids. Includes play access and kid's meal.",
        "priceSpecification": { "@type": "PriceSpecification", "price": "15000", "priceCurrency": "INR" }
      },
      {
        "@type": "Offer",
        "name": "Gold Package",
        "description": "Standard party package for up to 25 kids. Includes magic show, return gifts, and themed decor.",
        "priceSpecification": { "@type": "PriceSpecification", "price": "25000", "priceCurrency": "INR" }
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
