import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog-data';
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: 'Play Zone Blog | Tips, Guides & Fun Ideas | Aabracadabrrahh',
  description: "Expert tips on child development, birthday party planning, and family activities in Bengaluru's #1 indoor play zone.",
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="overflow-x-hidden bg-off-white pt-16" style={{ zoom: 0.9 }}>
      {/* JSON-LD for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://aabracadabrrahh.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://aabracadabrrahh.com/blog"
              }
            ]
          })
        }}
      />

      {/* HERO SECTION — compact, viewport-aware */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-hero-carnival py-10 sm:py-12 md:py-14 px-4">
        <div className="absolute inset-0 bg-pattern-stripes opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-violet/30 to-magic-purple/10 pointer-events-none" />

        <div className="relative z-20 mx-auto w-full max-w-4xl text-center">
          <div className="inline-block bg-star-gold text-magic-purple px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl text-base sm:text-lg font-black uppercase tracking-widest mb-3 sm:mb-4 -rotate-2 border-4 border-magic-purple shadow-[4px_4px_0_var(--magic-purple)]">
            Tips, Guides &amp; Ideas ✨
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black uppercase font-display leading-tight drop-shadow-[4px_4px_0_var(--magic-purple)] mb-3 sm:mb-4 text-center flex justify-center items-center gap-2 sm:gap-3 md:gap-4"
            style={{ WebkitTextStroke: "1px var(--deep-violet)" }}
          >
            <span>The Magic Blog</span>
            <span className="text-[1.1em] drop-shadow-md">📖</span>
          </h1>
          <p className="text-white font-bold text-sm sm:text-base md:text-lg max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-2.5 sm:p-3 rounded-2xl border-2 border-white/20 shadow-lg">
            Expert insights on child development, epic party planning, and family weekend adventures in Bengaluru.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-8 sm:py-10 md:py-14 px-3 sm:px-4 relative z-10 bg-pattern-dots">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-stretch">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100} className="w-full flex justify-center overflow-visible">
                <Link
                  href={`/blog/${post.slug}`}
                  className={`block w-full h-full flex flex-col bg-white p-5 lg:p-6 rounded-2xl border-4 border-magic-purple ${i % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-2'} hover:rotate-0 hover:-translate-y-2 transition-all duration-300 relative group no-underline`}
                  style={{ boxShadow: `8px 8px 0 ${post.color}` }}
                >
                  <div className="absolute -top-4 -right-4 text-3xl bg-white rounded-full p-2 shadow-md border-2 border-magic-purple group-hover:scale-110 transition-transform z-10">
                    {post.emoji}
                  </div>

                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 text-xs font-black uppercase rounded-full text-white shadow-sm"
                      style={{ backgroundColor: post.color }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-magic-purple uppercase font-display leading-tight mb-3 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-foreground/70 font-semibold text-sm mb-5 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between border-t-2 border-dashed border-gray-200 pt-4 mt-auto">
                    <span className="text-xs font-bold text-magic-purple/60 uppercase">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {post.readingTime}
                    </span>
                    <span className="btn-gold !px-4 !py-1.5 !text-xs shadow-[0_2px_0_var(--magic-purple)]">Read More ➔</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA STRIP */}
      <section className="bg-magic-purple text-white py-8 sm:py-10 md:py-14 px-4 text-center border-t-8 border-star-gold bg-pattern-stripes overflow-hidden">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase font-display mb-4 sm:mb-6 drop-shadow-md text-white">
            Ready to make memories?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 font-bold text-white/80 max-w-xl mx-auto">
            Book a play session or plan the ultimate birthday party at Aabracadabrrahh today.
          </p>
          <Link href="/#birthday-parties" className="btn-pink inline-block !text-lg sm:!text-xl !px-8 sm:!px-10 !py-3 sm:!py-4 shadow-[0_6px_0_var(--deep-violet)]">
            Come Play With Us! 🎉
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
