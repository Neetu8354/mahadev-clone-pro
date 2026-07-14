import heroImg from "@/assets/hero-cricket.jpg";
import { WHATSAPP_LINK } from "@/lib/links";
import { Trophy, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <Helmet>
        <link rel="preload" as="image" href={heroImg} {...({ fetchpriority: "high" } as any)} />
      </Helmet>

      {/* Background image + cinematic gradient stack */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mahadev Book — instant UPI withdrawal cricket & casino ID with golden trophy"
          className="w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative container py-20 sm:py-28 md:py-40 lg:py-48">
        <div className="max-w-3xl space-y-6 sm:space-y-7">
          {/* Eyebrow chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold/15 via-gold/5 to-emerald/15 border border-gold/30 text-gold text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            India's Fastest Verified Payout Network
          </div>

          {/* Premium serif headline */}
          <h1 className="font-display font-bold leading-[1.05] tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Your Winnings,
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-gold italic">
              Settled in Minutes.
            </span>
            <span className="block mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-medium text-foreground/80 not-italic">
              The premium UPI betting ID built for serious Indian players.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Done waiting days for a "pending review"? <span className="text-foreground/90 font-medium">Mahadev Book</span> settles every UPI withdrawal in
            <span className="text-gold font-semibold"> 5 to 15 minutes</span> — every night, every weekend, every festival.
            One verified ID unlocks cricket, live casino, and slots, with instant ₹ INR payouts through PhonePe, Google Pay, and Paytm.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="group inline-flex justify-center items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm sm:text-base shadow-gold-lg hover:scale-[1.03] transition-all duration-300">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
              Claim Your Instant-Payout ID
            </a>
            <a href="/about"
              className="inline-flex justify-center items-center gap-2 px-6 sm:px-7 py-4 rounded-full border border-gold/30 bg-background/40 backdrop-blur-sm text-foreground font-semibold text-sm sm:text-base hover:bg-gold/10 hover:border-gold/60 transition-all">
              Learn How It Works →
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-8 border-t border-gold/15 mt-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"><Zap className="w-4 h-4 text-gold" /> 5-Min UPI Settlement</div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"><ShieldCheck className="w-4 h-4 text-gold" /> Zero Hidden Fees</div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"><Trophy className="w-4 h-4 text-gold" /> ₹500 Cr+ Paid Out</div>
          </div>
        </div>
      </div>
    </section>
  );
};
