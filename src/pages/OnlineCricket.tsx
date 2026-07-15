import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { CTABanner } from "@/components/CTABanner";
import { SEO } from "@/components/SEO";
import { WHATSAPP_LINK } from "@/lib/links";

const FAQS = [
  { q: "What is Mahadev24x7 Cricket?", a: "Mahadev24x7 Cricket is a dedicated platform where users can follow live cricket matches, major tournaments, and access cricket-related services with quick account support." },
  { q: "How do I get a Cricket ID on Mahadev24x7?", a: "Simply contact the Mahadev24x7 support team through the available contact options and complete the quick verification process to receive your Cricket ID." },
  { q: "Which cricket tournaments are available?", a: "You can follow the IPL, ICC Cricket World Cup, ICC T20 World Cup, Asia Cup, Champions Trophy, ODI series, Test matches, and other international cricket tournaments." },
  { q: "Can I follow live IPL matches on Mahadev24x7?", a: "Yes. Mahadev24x7 provides updates and coverage for every IPL match throughout the season." },
  { q: "Is Mahadev24x7 mobile-friendly?", a: "Yes. The platform is fully optimized for Android, iPhone, tablets, and desktop devices." },
  { q: "Can I access Mahadev24x7 from anywhere in India?", a: "Yes. Users from Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Pune, Jaipur, Lucknow, Patna, and other Indian cities can access the platform." },
  { q: "How quickly can I get my Cricket ID?", a: "The support team aims to provide Cricket IDs as quickly as possible after completing the required verification." },
  { q: "Which payment methods are supported?", a: "Mahadev24x7 supports popular payment methods such as UPI, IMPS, NEFT, and other secure payment options." },
  { q: "Is customer support available 24/7?", a: "Yes. Customer support is available around the clock to assist users." },
  { q: "Can beginners use Mahadev24x7?", a: "Yes. The platform is designed with a simple interface that is easy for both beginners and experienced users." },
  { q: "Which cricket formats are covered?", a: "Mahadev24x7 covers T20, ODI, Test cricket, domestic tournaments, and international competitions." },
  { q: "Can I view live cricket scores?", a: "Yes. Users can stay updated with live scores, fixtures, and cricket-related information." },
  { q: "Does Mahadev24x7 provide cricket news?", a: "Yes. The platform includes cricket news, match previews, schedules, and tournament updates." },
  { q: "Which IPL teams can I follow?", a: "You can follow teams including Mumbai Indians, Chennai Super Kings, Royal Challengers Bengaluru, Kolkata Knight Riders, Rajasthan Royals, Delhi Capitals, Gujarat Titans, Lucknow Super Giants, Punjab Kings, and Sunrisers Hyderabad." },
  { q: "Is registration simple?", a: "Yes. The registration process is quick and designed for easy access." },
  { q: "Can I access Mahadev24x7 on desktop?", a: "Yes. The website works smoothly on desktop, laptop, tablet, and mobile devices." },
  { q: "Why choose Mahadev24x7 Cricket?", a: "Mahadev24x7 offers a user-friendly experience, fast account support, secure payment options, and coverage of major cricket tournaments." },
  { q: "Does Mahadev24x7 cover international cricket?", a: "Yes. The platform covers international cricket series, ICC events, and major domestic leagues." },
  { q: "Is my information secure on Mahadev24x7?", a: "Mahadev24x7 uses security measures to help protect user information and provide a secure platform experience." },
  { q: "How can I contact Mahadev24x7 support?", a: "You can contact the Mahadev24x7 support team through the contact options available on the website for assistance with your account or general queries." },
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

const OnlineCricket = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Online Cricket India — Live IPL & Cricket ID",
      serviceType: "Cricket information and account services",
      provider: { "@type": "Organization", name: "Mahadev24x7", url: "https://www.mahadev24x7.live/" },
      areaServed: { "@type": "Country", name: "India" },
      description: "Follow live cricket in India with Mahadev24x7. Get a Cricket ID, enjoy IPL, T20, ODI & Test cricket updates, secure UPI support, and 24/7 assistance.",
      offers: { "@type": "Offer", price: "100", priceCurrency: "INR", availability: "https://schema.org/InStock", url: WHATSAPP_LINK },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", worstRating: "1", ratingCount: "12480", reviewCount: "8743" },
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
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mahadev24x7.live/" },
        { "@type": "ListItem", position: 2, name: "Online Cricket", item: "https://www.mahadev24x7.live/online-cricket" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Online Cricket India | Live IPL & Cricket ID | Mahadev24x7"
        description="Follow live cricket in India with Mahadev24x7. Get a Cricket ID, enjoy IPL, T20, ODI & Test cricket updates, secure UPI support, and 24/7 assistance."
        canonical="/online-cricket"
        keywords="online cricket india, live cricket ipl, cricket id, ipl live cricket, t20 cricket india, odi cricket, test cricket, cricket scores, cricket news, mahadev24x7 cricket"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />

      <main>
        {/* HERO */}
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-5">
              🏏 Live Cricket Updates
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Online Cricket in India – Live IPL, T20 & International Cricket | Mahadev24x7
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Cricket is the most popular sport in India, bringing together millions of fans for every IPL season, ICC tournament, and international series. From thrilling T20 matches to One Day Internationals (ODIs) and Test cricket, fans enjoy following every run, wicket, and over in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <CTA>Get Your Cricket ID →</CTA>
              <CTA variant="secondary" href="/create-cricket-id">How It Works →</CTA>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Your <span className="text-gradient-gold">Cricket Hub</span> in India
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Mahadev24x7 provides a dedicated cricket hub where users can stay updated with live cricket action, match schedules, team information, player statistics, and major tournaments. Whether you're following the Indian Premier League (IPL), ICC Cricket World Cup, ICC Champions Trophy, Asia Cup, or international bilateral series, our platform helps you stay connected to the latest cricket events.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Our cricket section covers popular tournaments featuring teams like Mumbai Indians, Chennai Super Kings, Royal Challengers Bengaluru, Kolkata Knight Riders, Rajasthan Royals, Delhi Capitals, Gujarat Titans, Lucknow Super Giants, Punjab Kings, and Sunrisers Hyderabad. Fans can also follow Team India, Australia, England, South Africa, New Zealand, Pakistan, Sri Lanka, Bangladesh, and many other international teams.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Mahadev24x7 is designed with a fast, mobile-friendly interface that works smoothly across Android, iPhone, tablets, and desktop devices. With secure account support, quick assistance, and regular cricket updates, users across Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Pune, Jaipur, Lucknow, Patna, and other Indian cities can enjoy a seamless cricket experience.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Why Choose <span className="text-gradient-gold">Mahadev24x7 Cricket?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {[
                { t: "Live Cricket Coverage", d: "Stay updated with live cricket scores, match schedules, team news, and player statistics throughout every tournament." },
                { t: "Major Cricket Tournaments", d: "Follow IPL, ICC Cricket World Cup, ICC T20 World Cup, Asia Cup, Champions Trophy, WPL, BBL, PSL, CPL, and international series." },
                { t: "Fast Cricket ID Support", d: "Receive quick account assistance from our support team whenever required." },
                { t: "Mobile Friendly Platform", d: "Enjoy smooth performance on Android, iOS, tablets, and desktop devices." },
                { t: "Secure Transactions", d: "Support for UPI, IMPS, NEFT, and other secure payment options." },
                { t: "24×7 Customer Support", d: "Our support team is available around the clock to assist users." },
              ].map((f, i) => (
                <div key={i} className="rounded-2xl border border-gold/20 bg-card p-6 hover:border-gold/60 hover:shadow-gold transition-all">
                  <h3 className="font-display font-bold text-lg text-gold">{f.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POPULAR TOURNAMENTS */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Popular <span className="text-gradient-gold">Cricket Tournaments</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
              {[
                "Indian Premier League (IPL)",
                "ICC Cricket World Cup",
                "ICC T20 World Cup",
                "ICC Champions Trophy",
                "Asia Cup",
                "Ranji Trophy",
                "Women's Premier League (WPL)",
                "Big Bash League (BBL)",
                "Pakistan Super League (PSL)",
                "Caribbean Premier League (CPL)",
              ].map((t, i) => (
                <div key={i} className="rounded-xl border border-gold/20 bg-card px-5 py-4 hover:border-gold/60 transition-all">
                  <span className="font-medium text-sm text-gold">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Features of <span className="text-gradient-gold">Mahadev24x7 Cricket</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
              {[
                "Live cricket updates",
                "Match schedules",
                "Team rankings",
                "Player statistics",
                "Mobile-friendly interface",
                "Fast registration assistance",
                "Secure payment methods",
                "Instant customer support",
                "Multiple cricket tournaments",
                "Easy navigation",
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-gold/20 bg-card px-5 py-4 hover:border-gold/60 transition-all">
                  <span className="text-gold text-xl">✓</span>
                  <span className="font-medium text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO GET STARTED */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              How to <span className="text-gradient-gold">Get Started</span>
            </h2>
            <ol className="mt-10 space-y-4">
              {[
                { n: 1, t: "Contact Mahadev24x7 support and request your cricket account.", d: "Reach out through our available contact options." },
                { n: 2, t: "Complete the simple verification process.", d: "Quick and straightforward verification." },
                { n: 3, t: "Log in to your account.", d: "Access your dashboard immediately." },
                { n: 4, t: "Explore live cricket matches, tournaments, and player statistics.", d: "Browse all available cricket content." },
                { n: 5, t: "Enjoy a smooth cricket experience from anywhere in India.", d: "Access on any device, anytime." },
              ].map((s, i) => (
                <li key={i} className="rounded-2xl border border-gold/20 bg-card p-5 flex gap-4 items-start hover:border-gold/60 transition-all">
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
              <CTA>Get Started Now →</CTA>
            </div>
          </div>
        </section>

        {/* CRICKET CATEGORIES */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Cricket <span className="text-gradient-gold">Categories Available</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
              {[
                "IPL Cricket",
                "International Cricket",
                "ODI Cricket",
                "T20 Cricket",
                "Test Cricket",
                "Women's Cricket",
                "Domestic Cricket",
                "Live Cricket Scores",
                "Cricket News",
                "Cricket Statistics",
              ].map((c, i) => (
                <div key={i} className="rounded-xl border border-gold/20 bg-card px-5 py-4 hover:border-gold/60 transition-all">
                  <span className="font-medium text-sm text-gold">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY FANS PREFER */}
        <section className="container py-12 md:py-20 border-t border-gold/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
              Why Cricket Fans <span className="text-gradient-gold">Prefer Mahadev24x7</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-center max-w-2xl mx-auto leading-relaxed">
              Thousands of cricket enthusiasts across India choose Mahadev24x7 because of its reliable platform, quick support, secure payment methods, and mobile-friendly experience. Whether you're following the IPL, ICC tournaments, or domestic cricket competitions, Mahadev24x7 keeps you connected with the latest cricket action.
            </p>
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

export default OnlineCricket;
