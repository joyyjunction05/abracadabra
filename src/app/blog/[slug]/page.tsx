import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getPost } from '@/lib/blog-data';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Aabracadabrrahh`,
    description: post.description,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ['Aabracadabrrahh'],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="overflow-x-hidden bg-white pt-24 pb-16">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": { "@type": "Organization", "name": "Aabracadabrrahh" },
            "publisher": { "@type": "Organization", "name": "Aabracadabrrahh", "logo": "https://aabracadabrrahh.com/logo.png" },
            "image": post.image ? `https://aabracadabrrahh.com${post.image}` : `https://aabracadabrrahh.com/blog/${post.slug}/opengraph-image`,
            "url": `https://aabracadabrrahh.com/blog/${post.slug}`
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aabracadabrrahh.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aabracadabrrahh.com/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://aabracadabrrahh.com/blog/${post.slug}` }
            ]
          })
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "FAQPage",
               "mainEntity": post.faqs.map((faq) => ({
                 "@type": "Question",
                 "name": faq.question,
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": faq.answer
                 }
               }))
             })
          }}
        />
      )}

      <article className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm font-bold text-foreground/50 uppercase tracking-widest flex items-center gap-2">
          <Link href="/" className="hover:text-magic-purple transition-colors no-underline text-inherit">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-magic-purple transition-colors no-underline text-inherit">Blog</Link>
          <span>/</span>
          <span className="text-magic-purple line-clamp-1">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mb-6 flex justify-center items-center gap-2">
            <span 
              className="inline-block px-4 py-1.5 text-xs md:text-sm font-black uppercase rounded-full text-white shadow-sm" 
              style={{ backgroundColor: post.color }}
            >
              {post.category}
            </span>
            <span className="text-3xl" aria-hidden="true">{post.emoji}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-magic-purple uppercase font-display leading-[1.1] mb-6">
            {post.title}
          </h1>
          
          <div className="flex justify-center items-center gap-4 text-sm font-bold uppercase tracking-wider text-foreground/60">
             <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
             <span className="w-1.5 h-1.5 rounded-full bg-star-gold"></span>
             <span>⏱️ {post.readingTime}</span>
          </div>
        </header>

        {/* Dynamic Image or decorative div */}
        {post.image ? (
          <div className="w-full aspect-[2/1] rounded-3xl mb-12 shadow-2xl relative overflow-hidden group border-4" style={{ borderColor: post.color }}>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 text-5xl md:text-6xl drop-shadow-lg scale-90 group-hover:scale-110 transition-transform duration-500 z-10 bg-white/20 backdrop-blur-md rounded-full p-2">{post.emoji}</div>
          </div>
        ) : (
          <div 
            className="w-full aspect-[2/1] rounded-3xl mb-12 shadow-2xl relative flex flex-col items-center justify-center p-8 text-center bg-pattern-dots"
            style={{ backgroundImage: `linear-gradient(135deg, ${post.color} 0%, var(--magic-purple) 100%)` }}
          >
            <div className="absolute inset-0 bg-pattern-stripes opacity-20 hover:opacity-40 transition-opacity rounded-3xl"></div>
            <span className="text-7xl md:text-[8rem] drop-shadow-xl z-10 mb-4">{post.emoji}</span>
          </div>
        )}

        {/* Content */}
        <div 
          className="blog-content prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:text-magic-purple prose-p:text-foreground/80 prose-p:font-semibold prose-p:leading-relaxed prose-a:text-hot-pink prose-strong:text-deep-violet mx-auto w-full [&>h2]:text-3xl [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-2xl [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Share / Tags */}
        <div className="mt-16 pt-8 border-t-4 border-dashed border-gray-200">
           <h4 className="text-sm font-black uppercase tracking-widest text-deep-violet mb-4">Keywords</h4>
           <div className="flex flex-wrap gap-2">
             {post.keywords.map((kw) => (
                <span key={kw} className="bg-gray-100 text-foreground/60 text-xs font-bold uppercase px-3 py-1 rounded-full">{kw}</span>
             ))}
           </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-off-white py-16 mt-20 border-t-8 border-star-gold">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-magic-purple uppercase font-display mb-10">Read More Magic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {relatedPosts.map((rp, i) => (
                <Link 
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className={`block w-full bg-white p-5 rounded-2xl border-4 border-magic-purple ${i % 2 === 0 ? '-rotate-1' : 'rotate-2'} hover:rotate-0 hover:-translate-y-2 transition-all duration-300 relative group no-underline text-left`}
                  style={{ boxShadow: `8px 8px 0 ${rp.color}` }}
                >
                  <div className="absolute -top-4 -right-4 text-4xl bg-white rounded-full p-2 shadow-md border-2 border-magic-purple group-hover:scale-110 transition-transform">
                    {rp.emoji}
                  </div>
                  <span 
                    className="inline-block px-3 py-1 text-[10px] font-black uppercase rounded-full text-white mb-3 shadow-sm" 
                    style={{ backgroundColor: rp.color }}
                  >
                    {rp.category}
                  </span>
                  <h3 className="text-xl font-black text-magic-purple uppercase font-display leading-tight mb-2 group-hover:text-hot-pink transition-colors">
                    {rp.title}
                  </h3>
                  <p className="text-foreground/70 font-semibold text-xs line-clamp-2">
                    {rp.description}
                  </p>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hot-pink text-white py-12 md:py-16 px-4 text-center bg-pattern-stripes shadow-inner relative z-10">
         <h2 className="text-3xl md:text-5xl font-black uppercase font-display mb-6 drop-shadow-md text-white">Inspired to Play?</h2>
         <Link href="/#birthday-parties" className="btn-gold inline-block !text-xl !px-10 !py-4 shadow-[0_6px_0_var(--magic-purple)]">
           Book Your Visit Now 🎟️
         </Link>
      </section>
    </main>
  );
}
