import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { CTABanner } from "@/components/CTABanner";
import { SEO } from "@/components/SEO";
import { WHATSAPP_LINK } from "@/lib/links";

const FAQS = [
  { q: "Is Teen Patti for real money legal in India?", a: "Teen Patti is widely played as a skill-based game in permitted Indian states for users 18+. Always check your local state regulations." },
  { q: "What is the minimum bet on Teen Patti?", a: "Tables start at just ₹10 boot — perfect for beginners. Higher-stakes tables go up to ₹50,000+ per hand." },
  { q: "Which Teen Patti variants are available?", a: "Classic, Joker, AK47, Muflis, 20-20, Hukam, Best of Four — plus live dealer Teen Patti in Hindi." },
  { q: "Are the games fair?", a: "All Teen Patti tables use certified RNGs and live dealer feeds streamed from licensed studios. No bot manipulation." },
  { q: "How fast are Teen Patti winnings paid out?", a: "Withdrawals via UPI settle in 5–15 minutes, 24×7. No 'pending review', no holds." },
  { q: "Can I play Teen Patti on mobile?", a: "Yes — fully mobile-optimized. Play on Android, iPhone, browser. No app download needed." },
  { q: "Is there a Teen Patti welcome bonus?", a: "Yes — 100% match bonus on your first deposit plus daily cashback on losses." },
  { q: "Do you offer live dealer Teen Patti in Hindi?", a: "Yes — live dealers stream in Hindi from professional studios, 24×7. Chat with dealers and other players in real time." },
  { q: "What's the difference between Classic and Joker?", a: "Classic plays with a standard 52-card deck. Joker mode adds wild cards (jokers) that count as any value — increases big hand frequency." },
  { q: "Can I play Teen Patti with friends?", a: "Yes — private tables let you invite friends. Set your own boot, table size and rules." },
];

const CTA = ({ children, variant = "primary", href }: { children: React.ReactNode; variant?: "primary" | "secondary"; href?: string }) => {
  const cls = variant === "primary"
    ? "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-base shadow-gold hover:scale-105 transition-transform"
    : "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all";
  if (variant === "secondary" && href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
};

const TeenPattiRealMoney = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Game", name: "Teen Patti Real Money", description: "Live dealer and RNG Teen Patti with INR wallet — Classic, Joker, AK47, 20-20 variants. Play from ₹10 boot.", gameItem: { "@type": "Thing", name: "Teen Patti chips" }, numberOfPlayers: "2-9" },
    { "@context": "https://schema.org", "@type": "Service", name: "Teen Patti Real Money — Online India", provider: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadev24x7.live/" }, areaServed: { "@type": "Country", name: "India" }, description: "Play real money Teen Patti online with INR wallet, live Hindi dealers and 5-minute UPI withdrawals.", offers: { "@type": "Offer", price: "100", priceCurrency: "INR", availability: "https://schema.org/InStock", url: WHATSAPP_LINK }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "12480" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mahadev24x7.live/" }, { "@type": "ListItem", position: 2, name: "Teen Patti Real Money", item: "https://mahadev24x7.live/teen-patti-real-money" }] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Teen Patti Real Money Online India — Live Hindi Dealers"
        description="Play real money Teen Patti online — Classic, Joker, AK47 variants with live Hindi dealers. ₹10 boot, instant UPI withdrawal, 100% bonus."
        canonical="/teen-patti-real-money"
        keywords="teen patti real money, teen patti online india, live teen patti, teen patti hindi dealer, teen patti for cash, real cash teen patti, teen patti joker, teen patti ak47, teen patti boot, mahadev book teen patti"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main>
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-5">
              🃏 Live Hindi Dealers · 24×7
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Play <span className="text-gradient-gold">Teen Patti Real Money</span> Online in India
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Classic, Joker, AK47, 20-20 — every variant with live Hindi dealers, ₹10 minimum boot and 5-minute UPI withdrawals. The Teen Patti you grew up playing, now for real cash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <CTA>Join a Live Table →</CTA>
              <CTA variant="secondary" href="/blog/teen-patti-online-real-money-guide-india">Teen Patti Guide →</CTA>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {[{ k: "₹10", v: "Min Boot" }, { k: "7+", v: "Variants" }, { k: "24×7", v: "Hindi Dealers" }].map(s => (
                <div key={s.v} className="rounded-2xl border border-gold/20 bg-card p-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Every <span className="text-gradient-gold">Teen Patti Variant</span>, One Wallet
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {[
                { t: "Classic Teen Patti", d: "The original — 3 cards, no jokers, pure strategy. Boot ₹10 to ₹50,000+." },
                { t: "Joker Mode", d: "Wild cards in play. More trails, more pure sequences, more action." },
                { t: "AK47", d: "All Aces, Kings, 4s and 7s are wild — big hands every other round." },
                { t: "Muflis", d: "Lowest hand wins. Read your opponents in reverse." },
                { t: "20-20", d: "Fast-paced 20-card variant. Quick rounds, quick wins." },
                { t: "Live Hindi Dealer", d: "Real dealers streamed from professional studios, chatting in Hindi." },
              ].map(m => (
                <div key={m.t} className="rounded-2xl border border-gold/20 bg-card p-6 hover:border-gold/60 hover:shadow-gold transition-all">
                  <h3 className="font-display font-bold text-lg text-gold">{m.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Teen Patti <span className="text-gradient-gold">FAQs</span>
            </h2>
            <div className="mt-10 space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group rounded-2xl border border-gold/20 bg-card p-5 hover:border-gold/50 transition-all">
                  <summary className="cursor-pointer font-display font-bold text-base flex justify-between items-center gap-3">
                    <span>{f.q}</span>
                    <span className="text-gold transition-transform group-open:rotate-45 shrink-0">+</span>
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Related <span className="text-gradient-gold">Guides</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
              {[
                { t: "Teen Patti Online Real Money Guide", h: "/blog/teen-patti-online-real-money-guide-india" },
                { t: "Andar Bahar Online Strategy", h: "/blog/andar-bahar-online-strategy-guide" },
                { t: "Best Live Casino Games India 2026", h: "/blog/live-casino-india-best-games-2026" },
                { t: "Create Your Cricket + Casino ID", h: "/create-cricket-id" },
              ].map(l => (
                <Link key={l.h} to={l.h} className="rounded-xl border border-gold/20 bg-card px-5 py-4 hover:border-gold/60 hover:shadow-gold transition-all flex items-center justify-between gap-3">
                  <span className="font-medium text-sm">{l.t}</span>
                  <span className="text-gold">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default TeenPattiRealMoney;
