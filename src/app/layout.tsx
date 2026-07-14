import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://aabracadabrrahh.com"),
  title: {
    template: "%s | Aabracadabrrahh",
    default: "Aabracadabrrahh | Magical Indoor Play Zone & Birthday Parties in Bengaluru",
  },
  description: "ECity's premier Carnival-themed indoor play zone for kids (1-12 yrs). Walk-ins, hassle-free birthday parties, events, and workshops in Electronic City.",
  keywords: ["indoor play zone", "kids birthday party venue", "trampoline park bengaluru", "electronic city kids activities", "Aabracadabrrahh"],
  authors: [{ name: "Aabracadabrrahh Fun Zone" }],
  creator: "Aabracadabrrahh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aabracadabrrahh | Magical Indoor Play Zone",
    description: "ECity's premier Carnival-themed indoor play area. Book the ultimate stress-free birthday party for your child!",
    url: "https://aabracadabrrahh.com",
    siteName: "Aabracadabrrahh",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aabracadabrrahh Play Zone interior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aabracadabrrahh | Magical Indoor Play Zone",
    description: "ECity's premier Carnival-themed indoor play area. Book the ultimate stress-free birthday party for your child!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EntertainmentBusiness",
              name: "Aabracadabrrahh",
              alternateName: "Aabracadabrrahh Indoor Play Zone",
              url: "https://aabracadabrrahh.com",
              logo: "https://aabracadabrrahh.com/logo.png",
              image: "https://aabracadabrrahh.com/og-image.jpg",
              description: "ECity's premier Carnival-themed indoor play zone for kids (1-12 yrs). Best destination for safe play and stress-free birthday parties.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Electronic City",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560100",
                addressCountry: "IN"
              },
              telephone: "+917996693125",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday"
                  ],
                  opens: "11:00",
                  closes: "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Friday",
                    "Saturday"
                  ],
                  opens: "11:00",
                  closes: "22:30"
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden w-full" style={{ fontFamily: "var(--font-body)" }}>
        <Navbar />
        <main className="flex-1 animate-slide-in">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZRDN69QKP0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZRDN69QKP0');
          `}
        </Script>
      </body>
    </html>
  );
}
