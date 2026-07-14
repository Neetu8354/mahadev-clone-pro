import { WHATSAPP_LINK } from "@/lib/links";
import { Sparkles, Trophy } from "lucide-react";

export const CTABanner = () => (
  <section id="contact" className="container py-20 md:py-28">
    <div className="relative rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-br from-emerald-deep via-background to-card p-8 sm:p-12 md:p-20 text-center">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-radial-gold blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial-gold blur-3xl opacity-70" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-[0.18em] uppercase mb-7">
          <Sparkles className="w-3.5 h-3.5" /> The 7-Minute Payout Promise
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
          Stop waiting. <br className="hidden sm:block"/>
          <span className="text-gradient-gold italic">Start withdrawing.</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-9 leading-relaxed max-w-xl mx-auto">
          Activate a Mahadev Book ID and experience India's quickest UPI settlement — ₹100 minimum, zero fees, and 24×7 cash-out, including weekends and festivals.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-base shadow-gold-lg hover:scale-[1.03] transition-transform">
          <Trophy className="w-5 h-5" /> Claim My Instant-Payout ID
        </a>
        <p className="text-xs text-muted-foreground mt-5">Average activation under 90 seconds · Verified by 10 lakh+ players</p>
      </div>
    </div>
  </section>
);
