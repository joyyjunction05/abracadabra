import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo & Video Gallery",
  description: "Take a peek inside Aabracadabrrahh! From toddlers having a blast in ball pits to ultra-premium bespoke birthday party setups.",
  keywords: ["indoor play zone photos bengaluru", "kids birthday party setup pics", "carnival theme play zone images"],
  openGraph: {
    title: "Aabracadabrrahh Gallery | See The Magic",
    description: "Browse high-fidelity snapshots of the best carnival-themed kids play area in Electronic City.",
    url: "https://aabracadabrrahh.com/gallery",
  }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Aabracadabrrahh Photo Gallery",
    "creator": {
      "@type": "Organization",
      "name": "Aabracadabrrahh"
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
