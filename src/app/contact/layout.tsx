import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Aabracadabrrahh to book your tickets, host an amazing birthday party, or ask any questions about our play zones.",
  keywords: ["contact abracadabra play zone", "book indoor play zone bangalore", "customer support kids play area"],
  openGraph: {
    title: "Contact Aabracadabrrahh | Book Your Magic Today",
    description: "Reach out via WhatsApp, phone, or email to schedule your child's next amazing play adventure.",
    url: "https://aabracadabrrahh.com/contact",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Aabracadabrrahh Contact Form and Details",
    "url": "https://aabracadabrrahh.com/contact",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+919876543210",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "kn"]
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
