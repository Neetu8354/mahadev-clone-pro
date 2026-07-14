import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { CTABanner } from "@/components/CTABanner";
import { SEO } from "@/components/SEO";
import { WHATSAPP_LINK } from "@/lib/links";

const FAQS = [
  { q: "Is Aviator a real game or fake?", a: "Aviator is a provably-fair crash game by Spribe — each round's outcome is generated using a verifiable cryptographic seed published before the round starts. Not RNG-rigged, not fake." },
  { q: "What's the best Aviator strategy?", a: "There is no guaranteed-win strategy. Most experienced players use the 1.5x–2x auto-cashout method or a split-bet (one cashout at 1.5x for safety, one trailing for the big multiplier)." },
  { q: "What is the auto-cashout feature?", a: "You set a target multiplier (e.g. 1.8x) and the game automatically cashes you out the moment the plane reaches it — removing emotion from the decision." },
  { q: "Is there an Aviator hack or predictor app?", a: "No. Every 'Aviator predictor app' on the internet is a scam — Spribe's game uses cryptographic seeds that cannot be predicted. Don't pay for these apps." },
  { q: "What is the maximum Aviator multiplier?", a: "Aviator can reach up to 100x per round. Multipliers above 50x are rare (roughly 1 in every 200 rounds)." },
  { q: "How is the round outcome generated?", a: "Provably-fair — server seed + client seeds from 3 random players, hashed together. You can verify each round in the game history." },
  { q: "Can I play Aviator on mobile?", a: "Yes — Aviator runs perfectly on Android, iPhone and mobile browsers. No app download needed." },
  { q: "What is the minimum bet on Aviator?", a: "Just ₹10 per round. Two parallel bets allowed per round for split strategies." },
  { q: "How fast are Aviator winnings paid?", a: "Cashouts hit your wallet instantly in-game. Withdrawals to UPI settle in 5–15 minutes, 24×7." },
  { q: "What's the safest Aviator strategy?", a: "The 1.5x auto-cashout strategy: hits ~65% of rounds with a small profit margin. Boring but mathematically the most sustainable." },
];

const STRATEGIES = [
  { n: 1, t: "The 1.5x Auto-Cashout (Safest)", d: "Set auto-cashout to 1.5x. Hits roughly 65% of rounds. Slow grind, but consistent — best for new players." },
  { n: 2, t: "The 2x Steady (Balanced)", d: "Auto-cashout at 2x. Hits about 49% of rounds — doubles your bet when you win. Classic 50/50 mindset." },
  { n: 3, t: "The Split-Bet Strategy", d: "Place two bets per round. Cash out one at 1.5x for safety, let the second trail for 5x–10x. Combines safety with upside." },
  { n: 4, t: "Martingale (Risky — read carefully)", d: "Double your bet after every loss. Mathematically recovers losses but only if your bankroll is huge. One bad streak can wipe you out — most pros avoid it." },
  { n: 5, t: "Pattern-Watching (Myth)", d: "Looking for 'streaks' or 'patterns' in past rounds doesn't work — Aviator is provably-fair and each round is independent. Don't fall for it." },
];

const CTA = ({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) => (
  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
    className={variant === "primary"
      ? "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-base shadow-gold hover:scale-105 transition-transform"
      : "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all"}>
    {children}
  </a>
);

const AviatorTricks = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Game", name: "Aviator", description: "Provably-fair crash game by Spribe. Cash out before the plane flies away. ₹10 minimum bet, up to 100x multiplier.", gamePlatform: ["Web", "Android", "iOS"] },
    { "@context": "https://schema.org", "@type": "HowTo", name: "How to play Aviator with the safest strategy", step: STRATEGIES.map(s => ({ "@type": "HowToStep", position: s.n, name: s.t, text: s.d })) },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mahadev24x7.live/" }, { "@type": "ListItem", position: 2, name: "Aviator Game Tricks", item: "https://mahadev24x7.live/aviator-tricks" }] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Aviator Game Tricks & Strategy — Real Patterns That Work"
        description="Honest Aviator strategies that actually work: 1.5x auto-cashout, split-bet, Martingale risks. Skip the fake predictor apps. ₹10 min bet."
        canonical="/aviator-tricks"
        keywords="aviator game tricks, aviator strategy, aviator hack, aviator predictor app, aviator auto cashout, aviator 1.5x strategy, aviator split bet, aviator game india, spribe aviator, mahadev book aviator"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main>
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-5">
              ✈️ Provably Fair · Up to 100x
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              <span className="text-gradient-gold">Aviator Game Tricks</span> That Actually Work
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              No fake predictor apps. No "hacks". Just the real strategies experienced players use — 1.5x auto-cashout, split bets, and why pattern-watching is a trap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <CTA>Play Aviator Now →</CTA>
              <CTA variant="secondary">Get Welcome Bonus</CTA>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {[{ k: "₹10", v: "Min Bet" }, { k: "100x", v: "Max Multiplier" }, { k: "5 min", v: "UPI Payout" }].map(s => (
                <div key={s.v} className="rounded-2xl border border-gold/20 bg-card p-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold flex items-center gap-3">
                <span className="text-destructive">⚠️</span> Don't Fall for "Aviator Predictor Apps"
              </h2>
              <p className="text-muted-foreground mt-3">
                Every Aviator predictor app, hack APK, or Telegram "signal" channel charging ₹500/month is a <strong>scam</strong>. Aviator uses cryptographic provably-fair seeds — the result of each round is mathematically impossible to predict before it happens. Spend that ₹500 on actual gameplay instead.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              5 Real <span className="text-gradient-gold">Aviator Strategies</span>
            </h2>
            <ol className="mt-10 space-y-4">
              {STRATEGIES.map(s => (
                <li key={s.n} className="rounded-2xl border border-gold/20 bg-card p-5 flex gap-4 items-start hover:border-gold/60 transition-all">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-gold text-primary-foreground font-display font-bold text-xl flex items-center justify-center shadow-gold">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">{s.t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Aviator <span className="text-gradient-gold">FAQs</span>
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
              More <span className="text-gradient-gold">Casino Guides</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
              {[
                { t: "Teen Patti Real Money Online", h: "/teen-patti-real-money" },
                { t: "Best Live Casino Games India", h: "/blog/live-casino-india-best-games-2026" },
                { t: "Create Your Casino ID", h: "/create-cricket-id" },
                { t: "IPL 2026 Betting Hub", h: "/ipl-2026-betting" },
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

export default AviatorTricks;
