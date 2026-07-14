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
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-6 sm:px-7 py-4 rounded-full border border-gold/30 bg-background/40 backdrop-blur-sm text-foreground font-semibold text-sm sm:text-base hover:bg-gold/10 hover:border-gold/60 transition-all">
              <svg className="w-5 h-5 text-whatsapp" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Talk to Us on WhatsApp
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
