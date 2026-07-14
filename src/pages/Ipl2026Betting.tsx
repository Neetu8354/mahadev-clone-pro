import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { CTABanner } from "@/components/CTABanner";
import { SEO } from "@/components/SEO";
import { WHATSAPP_LINK } from "@/lib/links";

const FAQS = [
  { q: "When does IPL 2026 start?", a: "IPL 2026 is scheduled to kick off in late March 2026 with 10 franchises and 74 matches across 2 months. Your ID needs to be ready before opening night." },
  { q: "How do I get an IPL 2026 betting ID?", a: "Click any 'Get IPL ID' button — it opens WhatsApp with our verified agent. ID is activated in under 2 minutes, no documents required." },
  { q: "What IPL markets can I bet on?", a: "Match winner, top batsman, top bowler, total runs, total sixes, fall of next wicket, method of dismissal, powerplay runs, and 100+ in-play markets." },
  { q: "Is live in-play IPL betting available?", a: "Yes — odds update ball-by-ball. Bet on the next over, next wicket, next boundary with instant settlement on your INR wallet." },
  { q: "What is the minimum IPL bet amount?", a: "Minimum bet is just ₹50 on most markets. Start small and scale as you read the game." },
  { q: "How fast are IPL betting payouts?", a: "Withdrawals settle via UPI in 5–15 minutes, 24×7 — including match days and finals night." },
  { q: "Do you offer IPL betting tips?", a: "Yes — our Telegram & WhatsApp channels share free pre-match analysis, pitch reports and toss predictions for every IPL game." },
  { q: "Can I bet on every IPL match?", a: "Yes, all 74 matches plus playoffs and final. Plus pre-tournament markets like Orange Cap, Purple Cap and Tournament Winner." },
  { q: "Is IPL betting legal in India?", a: "Online gaming is regulated state-by-state. Mahadev Book operates as a skill-based platform for 18+ users in permitted states. Check your local rules." },
  { q: "Do you offer an IPL welcome bonus?", a: "Yes — 100% bonus on your first deposit, credited instantly. Special IPL reload bonuses run all season." },
];

const CTA = ({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) => (
  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
    className={variant === "primary"
      ? "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-base shadow-gold hover:scale-105 transition-transform"
      : "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all"}>
    {children}
  </a>
);

const Ipl2026Betting = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "SportsEvent", name: "Indian Premier League 2026", sport: "Cricket", startDate: "2026-03-22", endDate: "2026-05-24", location: { "@type": "Country", name: "India" }, organizer: { "@type": "Organization", name: "BCCI" } },
    { "@context": "https://schema.org", "@type": "Service", name: "IPL 2026 Online Betting ID", provider: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadev24x7.live/" }, areaServed: { "@type": "Country", name: "India" }, description: "Verified IPL 2026 betting ID with best odds, live in-play markets and 5-minute UPI payout. All 74 matches, no documents required.", offers: { "@type": "Offer", price: "100", priceCurrency: "INR", availability: "https://schema.org/InStock", url: WHATSAPP_LINK }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "12480" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mahadev24x7.live/" }, { "@type": "ListItem", position: 2, name: "IPL 2026 Betting", item: "https://mahadev24x7.live/ipl-2026-betting" }] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="IPL 2026 Betting ID — Best Odds, Live In-Play | Mahadev"
        description="Get your IPL 2026 betting ID in 2 minutes. Best odds on all 74 matches, live in-play markets, 5-min UPI payout, 100% welcome bonus."
        canonical="/ipl-2026-betting"
        keywords="ipl 2026 betting, ipl 2026 betting id, ipl 2026 odds, ipl 2026 live betting, ipl in-play betting, ipl match winner odds, ipl 2026 tips, ipl 2026 betting online, cricket betting id ipl 2026, mahadev book ipl"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main>
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-5">
              🏏 IPL 2026 — March 22 to May 24
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              <span className="text-gradient-gold">IPL 2026 Betting</span> ID — Best Odds, Live In-Play
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              74 matches. 10 franchises. Ball-by-ball in-play action. Get your verified IPL 2026 ID before opening night — instant UPI deposit, 5-minute payout, 100% welcome bonus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <CTA>Get My IPL 2026 ID →</CTA>
              <CTA variant="secondary">See Live Odds Sample</CTA>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {[{ k: "74", v: "Matches" }, { k: "100+", v: "In-Play Markets" }, { k: "5 min", v: "UPI Payout" }].map(s => (
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
              Bet on Every <span className="text-gradient-gold">IPL Market</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {[
                { t: "Match Winner", d: "Pre-match and live odds on every IPL 2026 fixture." },
                { t: "Top Batsman / Bowler", d: "Best player markets benchmarked daily vs top global books." },
                { t: "Total Runs & Sixes", d: "Over/under markets, innings totals, team totals." },
                { t: "Powerplay Specials", d: "Powerplay runs, wickets in first 6 overs, boundary count." },
                { t: "Fall of Next Wicket", d: "Live in-play — bet ball-by-ball as the game unfolds." },
                { t: "Tournament Outrights", d: "Winner, finalists, Orange Cap, Purple Cap, Fair Play." },
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
              IPL 2026 Betting <span className="text-gradient-gold">FAQs</span>
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
              Read More on <span className="text-gradient-gold">IPL Betting</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
              {[
                { t: "IPL 2026 Betting Tips & Strategy", h: "/blog/ipl-2026-betting-tips-strategy" },
                { t: "Live In-Play Cricket Betting Guide", h: "/blog/live-in-play-cricket-betting-guide" },
                { t: "Create Cricket ID Online", h: "/create-cricket-id" },
                { t: "Fancy vs Bookmaker vs Match Odds", h: "/blog/fancy-vs-bookmaker-vs-match-odds-explained" },
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

export default Ipl2026Betting;
