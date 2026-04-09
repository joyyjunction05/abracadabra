import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magical Play Zones",
  description: "Explore our massive indoor play zones at Aabracadabrrahh! From the colossal Mega Play Frame and Toddler Town to Ninja Courses and Trampolines.",
  keywords: ["indoor play zones bengaluru", "toddler soft play", "trampoline park kids", "ninja course kids", "indoor sliding bengaluru", "Aabracadabrrahh play zones"],
  openGraph: {
    title: "Magical Play Zones | Aabracadabrrahh",
    description: "Discover our dynamic, carnival-themed play areas designed for physical development and non-stop fun.",
    url: "https://aabracadabrrahh.com/play-zones",
  }
};

export default function PlayZonesLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Play Zones at Aabracadabrrahh",
    "description": "Various indoor play zones available for kids aged 1-12 at Aabracadabrrahh.",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "The Mega Play Frame" },
      { "@type": "ListItem", "position": 2, "name": "Toddler Town" },
      { "@type": "ListItem", "position": 3, "name": "Trampoline Universe" },
      { "@type": "ListItem", "position": 4, "name": "Role-Play City" }
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
