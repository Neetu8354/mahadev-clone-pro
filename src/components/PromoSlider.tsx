import { useEffect, useState } from "react";
import promoCricket from "@/assets/promo-cricket.jpg";
import promoCasino from "@/assets/promo-casino.jpg";
import promoPayout from "@/assets/promo-payout.jpg";
import { WHATSAPP_LINK } from "@/lib/links";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    img: promoCricket,
    alt: "IPL 2026 cricket betting on Mahadev Book India — premium golden trophy stadium",
    eyebrow: "IPL 2026 — Opening Soon",
    title: "The Season Belongs to You",
    subtitle: "Live odds on every ball, premium fancy markets, and same-day cashouts up to ₹1,00,000.",
    cta: "Claim My Match Bonus",
  },
  {
    img: promoCasino,
    alt: "Royale live casino India — Teen Patti Andar Bahar Roulette on Mahadev Book",
    eyebrow: "Imperial Live Casino",
    title: "Real Dealers. Real Rupees.",
    subtitle: "Teen Patti, Andar Bahar, Roulette and Blackjack streamed in HD from world-class studios, 24×7.",
    cta: "Enter the Live Floor",
  },
  {
    img: promoPayout,
    alt: "Instant UPI withdrawal in INR rupees — Mahadev Book betting India",
    eyebrow: "The 7-Minute Promise",
    title: "Your Winnings, In Your Bank.",
    subtitle: "UPI, IMPS, NEFT and Paytm — engineered for the fastest INR settlement in the country.",
    cta: "Open My Premium ID",
  },
];

export const PromoSlider = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="container py-8 sm:py-12">
      <div className="relative rounded-3xl overflow-hidden border border-gold/25 shadow-card aspect-[4/5] sm:aspect-[21/9] md:aspect-[21/8]">
        {SLIDES.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <img src={s.img} alt={s.alt} className="w-full h-full object-cover" loading="lazy" width={1920} height={720} />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-background via-background/85 sm:via-background/75 to-transparent" />
            <div className="absolute inset-0 flex items-end sm:items-center">
              <div className="container py-7 sm:py-0">
                <div className="max-w-lg space-y-3 sm:space-y-5">
                  <div className="text-gold text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.22em] uppercase">{s.eyebrow}</div>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-gradient-gold leading-tight italic">{s.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed">{s.subtitle}</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                    className="inline-flex px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm sm:text-base shadow-gold-lg hover:scale-[1.03] transition-transform">
                    {s.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prev} aria-label="Previous"
          className="absolute left-2 sm:left-5 top-1/3 sm:top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full bg-background/60 backdrop-blur-md border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button onClick={next} aria-label="Next"
          className="absolute right-2 sm:right-5 top-1/3 sm:top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full bg-background/60 backdrop-blur-md border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gold" : "w-2.5 bg-gold/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
