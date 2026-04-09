import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events & Magic Shows",
  description: "Join exciting events at Aabracadabrrahh! From STEM workshops and canvas painting to grand magic shows and holiday camps.",
  keywords: ["weekend events kids bengaluru", "magic show for kids electronic city", "holiday camps bangalore", "STEM kids activities bangalore"],
  openGraph: {
    title: "Upcoming Events | Aabracadabrrahh",
    description: "Discover spectacular holiday camps, storytelling sessions, and arts & crafts modules for children.",
    url: "https://aabracadabrrahh.com/events",
  }
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "Aabracadabrrahh Weekly Kids Events",
    "description": "A rolling series of interactive, physical, and cognitive development events and parties hosted inside Bengaluru's top indoor play zone.",
    "organizer": {
      "@type": "Organization",
      "name": "Aabracadabrrahh",
      "url": "https://aabracadabrrahh.com"
    },
    "location": {
      "@type": "Place",
      "name": "Aabracadabrrahh Fun Zone",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Electronic City, Bengaluru",
        "addressCountry": "IN"
      }
    }
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
