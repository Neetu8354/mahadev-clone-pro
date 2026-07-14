import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { CTABanner } from "@/components/CTABanner";
import { SEO } from "@/components/SEO";
import { WHATSAPP_LINK } from "@/lib/links";

const FAQS = [
  { q: "How do I create a cricket ID online in India?", a: "Click any 'Get ID' button on this page — it opens WhatsApp with our verified agent. Share your name and preferred username, and we'll create your ID in under 2 minutes. No documents required." },
  { q: "Is creating an online cricket ID legal in India?", a: "Online cricket gaming is regulated state-by-state in India. Mahadev Book operates as a skill-based gaming platform for users 18+ in permitted states. Please check your local state regulations." },
  { q: "What is the minimum deposit for a Mahadev Book cricket ID?", a: "Just ₹100 via UPI. Start small, learn the platform, and scale at your own pace." },
  { q: "How fast are withdrawals?", a: "Most UPI withdrawals settle in 5 to 15 minutes, 24x7 — including weekends and holidays." },
  { q: "Do I need Aadhaar or PAN to create a cricket ID?", a: "No documents are required for ID creation. KYC may be requested only for high-value withdrawals (₹2,00,000+) as per Indian compliance." },
  { q: "Can I bet on IPL 2026 with my Cricket ID?", a: "Yes — your ID is IPL 2026 ready with the best odds on every match, plus live in-play betting from ball 1." },
  { q: "What payment methods are supported?", a: "UPI (PhonePe, Google Pay, Paytm), IMPS, NEFT, and direct bank transfer — all in INR." },
  { q: "Is my money safe with Mahadev Book?", a: "Yes. Funds are held in segregated accounts, transactions are encrypted, and our platform has processed ₹500+ crore in withdrawals without dispute." },
  { q: "What if my deposit doesn't reflect instantly?", a: "Message us on WhatsApp with your UPI transaction ID — our team resolves 99% of cases within 5 minutes." },
  { q: "Can I use one cricket ID for both betting and live casino?", a: "Yes. One Mahadev Book ID gives you access to cricket, casino, slots, and live dealer games with a single INR wallet." },
  { q: "Is there a welcome bonus for new cricket IDs?", a: "Yes — 100% bonus on your first deposit, credited instantly. Ask our WhatsApp team for current offers." },
  { q: "How do I avoid account bans?", a: "Play within Mahadev Book — we don't ban winners. Account issues on random Telegram IDs usually happen because those operators have no real backend." },
];

const STEPS = [
  { n: 1, t: "Click 'Get ID' on WhatsApp", d: "Opens directly with our verified agent — no app downloads, no forms." },
  { n: 2, t: "Share name + preferred username", d: "No Aadhaar, no PAN, no selfie. Just a name and a username you'll remember." },
  { n: 3, t: "Receive ID + password in 2 min", d: "Our team activates your verified Cricket ID on the spot." },
  { n: 4, t: "Deposit ₹100+ via UPI", d: "PhonePe, Google Pay, Paytm — funds reflect in 30 seconds." },
  { n: 5, t: "Start playing IPL, casino & more", d: "1000+ games, one wallet, instant INR withdrawals." },
];

const CTA = ({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={
      variant === "primary"
        ? "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-base shadow-gold hover:scale-105 transition-transform"
        : "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all"
    }
  >
    {children}
  </a>
);

const CreateCricketId = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Online Cricket ID Creation",
      serviceType: "Cricket betting ID provider",
      provider: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadev24x7.live/" },
      areaServed: { "@type": "Country", name: "India" },
      description: "Create a verified online cricket ID in 2 minutes via WhatsApp. Instant UPI deposit & withdrawal in INR. IPL 2026 ready, 24x7 Hindi support.",
      offers: { "@type": "Offer", price: "100", priceCurrency: "INR", availability: "https://schema.org/InStock", url: WHATSAPP_LINK },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", worstRating: "1", ratingCount: "12480", reviewCount: "8743" },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Create a Cricket ID Online in India",
      totalTime: "PT2M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "100" },
      step: STEPS.map(s => ({ "@type": "HowToStep", position: s.n, name: s.t, text: s.d })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadev24x7.live/" },
        { "@type": "ListItem", position: 2, name: "Create Cricket ID", item: "https://mahadev24x7.live/create-cricket-id" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Create Cricket ID Online — Instant WhatsApp ID | Mahadev"
        description="Get your verified online cricket ID in 2 minutes via WhatsApp. Instant UPI deposit, 24x7 INR withdrawal, IPL 2026 ready. Trusted by 1L+ Indian players."
        canonical="/create-cricket-id"
        keywords="create cricket id online, online cricket betting id, instant cricket id whatsapp, cricket id provider india, best cricket id for ipl 2026, cricket id with upi deposit, cricket id without documents, ipl 2026 betting id, instant upi withdrawal betting, mahadev book cricket id"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />

      <main>
        {/* HERO */}
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-5">
              ⚡ Activated in 2 minutes
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Create Your <span className="text-gradient-gold">Cricket ID Online</span> in 2 Minutes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Tired of fake cricket IDs, slow withdrawals, and providers who ghost you after deposit? Get a verified Mahadev Book ID on WhatsApp — instant UPI, 24×7 Hindi support, IPL 2026 ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <CTA>Get My Cricket ID in 2 Minutes →</CTA>
              <CTA variant="secondary">Chat with Us on WhatsApp</CTA>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {[
                { k: "1L+", v: "Indian Players" },
                { k: "₹500Cr+", v: "Paid Out" },
                { k: "4.9★", v: "Player Rating" },
              ].map(s => (
                <div key={s.v} className="rounded-2xl border border-gold/20 bg-card p-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM / AGITATION / SOLUTION */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              The Problem Most <span className="text-gradient-gold">Indian Players</span> Face
            </h2>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Creating a cricket ID online <em>should</em> be simple. But here's what usually happens:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-10">
              {[
                "Sign up on a random Telegram channel → account blocked after first win",
                "Deposit ₹2,000 → withdrawal stuck for 5 days or 'pending forever'",
                "Support replies in broken English at 2 AM and ignores you by morning",
                "Asked for PAN, Aadhaar, selfie, address proof — then it gets leaked",
              ].map((p, i) => (
                <div key={i} className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 flex gap-3">
                  <span className="text-destructive text-xl shrink-0">✕</span>
                  <p className="text-sm">{p}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              That's why 70% of new players quit within 30 days — not because they lost a bet, but because the system failed them.
            </p>

            <div className="mt-12 rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                The Solution: A Cricket ID <span className="text-gradient-gold">Built for Indian Players</span>
              </h3>
              <p className="text-muted-foreground mt-3">A proper online cricket betting ID should do three things:</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Activate in minutes, not days",
                  "Pay you in INR, instantly, via the UPI app you already use",
                  "Treat you like a player — in your language",
                ].map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-gold text-xl shrink-0">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-5">
                No app downloads. No 14-page forms. No Aadhaar uploads. Just a WhatsApp message, a username, and you're in.
              </p>
            </div>
          </div>
        </section>

        {/* STEP BY STEP */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              How to Create a Cricket ID Online <span className="text-gradient-gold">(Step-by-Step)</span>
            </h2>
            <p className="text-center text-muted-foreground mt-4">
              Forget complicated signups. Here's the actual process:
            </p>
            <ol className="mt-10 space-y-4">
              {STEPS.map(s => (
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
            <div className="text-center mt-10">
              <CTA>Start Step 1 on WhatsApp →</CTA>
            </div>
          </div>
        </section>

        {/* TRUST + BENEFITS */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Why Indian Players Choose <span className="text-gradient-gold">Mahadev Book</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {[
                { t: "Verified in 2 Minutes", d: "Average activation under 120 seconds. Used by 1,00,000+ Indian players across Maharashtra, Delhi, UP, Gujarat & Karnataka." },
                { t: "₹100 Minimum Deposit", d: "No ₹500 minimums. Start with ₹100 via PhonePe, Google Pay, Paytm — funds reflect in 30 seconds." },
                { t: "Encrypted & KYC-Verified", d: "Segregated wallets, encrypted transactions, your winnings are yours — not 'subject to review'." },
                { t: "24×7 Hindi Support", d: "Real humans replying in 90 seconds — including festivals, weekends and 3 AM live-match emergencies." },
                { t: "IPL 2026 Best Odds", d: "Competitive lines benchmarked daily against the top 5 international books. Live in-play from ball 1." },
                { t: "Instant INR Withdrawal", d: "Most UPI withdrawals settle in 5–15 minutes, 24×7. No hidden fees, no TDS surprises." },
              ].map(f => (
                <div key={f.t} className="rounded-2xl border border-gold/20 bg-card p-6 hover:border-gold/60 hover:shadow-gold transition-all">
                  <h3 className="font-display font-bold text-lg text-gold">{f.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAYMENTS TABLE */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Deposit & Withdrawal — <span className="text-gradient-gold">Fast, Safe, INR Only</span>
            </h2>
            <div className="mt-8 rounded-2xl border border-gold/20 bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gold/10 text-gold">
                    <tr>
                      <th className="text-left p-4 font-bold">Method</th>
                      <th className="text-left p-4 font-bold">Deposit</th>
                      <th className="text-left p-4 font-bold">Withdrawal</th>
                      <th className="text-left p-4 font-bold">Min Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["UPI (PhonePe, GPay, Paytm)", "Instant", "5–15 minutes", "₹100"],
                      ["IMPS / NEFT", "2–5 minutes", "30 minutes", "₹500"],
                      ["Bank Transfer", "10 minutes", "1 hour", "₹500"],
                    ].map(r => (
                      <tr key={r[0]} className="border-t border-gold/10">
                        {r.map((c, i) => <td key={i} className="p-4">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-5">
              No hidden charges. No "processing fee." No surprise deductions.
            </p>
          </div>
        </section>

        {/* IPL + CASINO */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                IPL 2026 Is Coming — <span className="text-gradient-gold">Get Match-Ready Now</span>
              </h2>
              <p className="text-muted-foreground mt-3">
                IPL 19 kicks off March 2026. Last season alone, 60 crore Indians watched live. Get your Cricket ID ready <strong>before opening night</strong> — not during the powerplay.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-gold">✓</span> Best odds on every match</li>
                <li className="flex gap-2"><span className="text-gold">✓</span> Live in-play from ball 1</li>
                <li className="flex gap-2"><span className="text-gold">✓</span> Instant INR settlement</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                One ID → <span className="text-gradient-gold">1000+ Live Casino Games</span>
              </h2>
              <p className="text-muted-foreground mt-3">
                Your Mahadev Book ID isn't just for cricket. Same login unlocks:
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-gold">✓</span> Teen Patti, Andar Bahar (Hindi live dealer)</li>
                <li className="flex gap-2"><span className="text-gold">✓</span> Roulette, Blackjack, Baccarat</li>
                <li className="flex gap-2"><span className="text-gold">✓</span> Aviator, Mines, Dragon Tiger + slots</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Learn More Before You <span className="text-gradient-gold">Get Started</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
              {[
                { t: "IPL 2026 Betting Tips & Strategy", h: "/blog/ipl-2026-betting-tips-strategy" },
                { t: "Best UPI Deposit & Withdrawal Guide", h: "/blog/best-upi-deposit-withdrawal-betting-india" },
                { t: "Play Teen Patti Online for Real Money", h: "/games/teen-patti" },
                { t: "Andar Bahar Online Strategy Guide", h: "/blog/andar-bahar-online-strategy-guide" },
                { t: "How to Get a Betting ID in India 2026", h: "/blog/how-to-get-online-cricket-betting-id-india-2026" },
                { t: "Mahadev Book vs Other ID Providers", h: "/blog/mahadev-book-vs-other-betting-id-providers" },
              ].map(l => (
                <Link key={l.h} to={l.h}
                  className="rounded-xl border border-gold/20 bg-card px-5 py-4 hover:border-gold/60 hover:shadow-gold transition-all flex items-center justify-between gap-3">
                  <span className="font-medium text-sm">{l.t}</span>
                  <span className="text-gold">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
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

        <CTABanner />
      </main>

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default CreateCricketId;
