import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { GamesSection } from "@/components/GamesSection";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS, altFor } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Mahadev Book",
      alternateName: ["Mahadev Book ID", "Mahadevvbooks"],
      url: "https://mahadev24x7.live/",
      logo: "https://mahadev24x7.live/favicon.png",
      image: "https://mahadev24x7.live/og-image.jpg",
      description: "India's fastest instant UPI withdrawal betting ID. 5–15 minute INR payouts via PhonePe, Google Pay & Paytm — 24x7, zero fees.",
      sameAs: ["https://wa.link/reddyanna_"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: ["English", "Hindi"],
        url: "https://wa.link/reddyanna_",
      },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Mahadev Book",
      url: "https://mahadev24x7.live/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://mahadev24x7.live/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Instant UPI Withdrawal Betting ID",
      serviceType: "Online betting ID with instant UPI payout",
      provider: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadev24x7.live/" },
      areaServed: { "@type": "Country", name: "India" },
      description: "Verified betting ID with 5–15 minute UPI withdrawals via PhonePe, Google Pay and Paytm. Cricket, live casino and slots — 24x7 INR payouts, zero fees.",
      offers: {
        "@type": "Offer",
        price: "100",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://wa.link/reddyanna_",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "12480",
        reviewCount: "8743",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How fast is UPI withdrawal on Mahadev Book?", acceptedAnswer: { "@type": "Answer", text: "Average UPI withdrawals settle in 5–15 minutes, 24×7 — including weekends and festivals." } },
        { "@type": "Question", name: "What is the minimum withdrawal amount?", acceptedAnswer: { "@type": "Answer", text: "Just ₹100. Cash out the moment you win, no ₹500 or ₹1,000 minimums." } },
        { "@type": "Question", name: "Are there any withdrawal fees?", acceptedAnswer: { "@type": "Answer", text: "Zero processing fees. What you win is what lands in your bank account." } },
        { "@type": "Question", name: "Which UPI apps work for withdrawal?", acceptedAnswer: { "@type": "Answer", text: "PhonePe, Google Pay, Paytm, BHIM, Amazon Pay, and any bank UPI handle." } },
        { "@type": "Question", name: "Can I withdraw on Sundays and holidays?", acceptedAnswer: { "@type": "Answer", text: "Yes — UPI runs 24×7×365 and so do our payouts. Sundays, Diwali, midnight — same speed." } },
        { "@type": "Question", name: "Is there a daily withdrawal limit?", acceptedAnswer: { "@type": "Answer", text: "Verified IDs have no daily limit. Withdraw any amount, any number of times." } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mahadev24x7.live/" }],
    },
  ];

  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Instant UPI Withdrawal Betting ID — Mahadev Book"
        description="India's fastest UPI withdrawal betting ID. Cash out in 5–15 minutes via PhonePe, GPay, Paytm — 24×7, zero fees, ₹100 minimum. IPL 2026, casino, slots."
        canonical="/"
        keywords="instant upi withdrawal betting, fastest withdrawal betting id india, upi withdrawal cricket id, 5 minute withdrawal betting site, phonepe withdrawal betting, gpay betting withdrawal, paytm instant payout betting, no fee withdrawal betting india, 24x7 upi payout betting, ₹100 minimum withdrawal betting, mahadev book withdrawal time, instant inr payout betting, same day withdrawal cricket id, betting site fast withdrawal india, ipl 2026 betting id, online cricket betting id, live casino india, teen patti online, andar bahar real money"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main>
        <Hero />
        <PromoSlider />
        <GamesSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTABanner />

        {/* Featured Blog Section — drives internal SEO juice */}
        <section className="container py-20 md:py-28" id="blog-preview">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-gold text-xs font-semibold tracking-[0.22em] uppercase mb-4">From the Journal</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Expert <span className="text-gradient-gold italic">betting playbooks</span> & strategy.
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              IPL 2026 deep-dives, Teen Patti strategy, UPI payment guides — written by India's most respected betting analysts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border border-gold/20 bg-card hover:border-gold/60 hover:shadow-gold transition-all">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={post.cover} alt={altFor(post.cover)} loading="lazy" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-gold">{post.category}</span>
                  <h3 className="font-display font-bold text-lg mt-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
              Read all articles →
            </Link>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Index;
