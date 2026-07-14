import { Zap, Wallet, Clock, ShieldCheck, Banknote, Headphones, RefreshCw, Lock } from "lucide-react";

const FEATURES = [
  { icon: Zap, title: "Sub-7-Minute Payouts", desc: "Average UPI settlement lands in 5–15 minutes via PhonePe, GPay & Paytm — engineered for speed, not excuses." },
  { icon: Banknote, title: "Truly Zero Fees", desc: "No processing charges, no surprise TDS, no manual review queue. Every rupee you win reaches your bank." },
  { icon: Clock, title: "Always-On Cashier", desc: "Diwali, midnight, IPL final — withdrawals run every hour of every day, 365 nights a year." },
  { icon: Wallet, title: "₹100 Minimum, No Maximum", desc: "Cash out the second you win. Verified IDs face no daily ceiling, no hidden withdrawal cap." },
  { icon: ShieldCheck, title: "Bank-Grade Security", desc: "Segregated wallets, end-to-end encrypted UPI rails, full KYC verification — your balance is institutionally protected." },
  { icon: Headphones, title: "Real-Human WhatsApp Desk", desc: "Live status updates from a real concierge — in Hindi or English — for every single withdrawal request." },
  { icon: RefreshCw, title: "Smart Auto-Retry", desc: "If your bank declines a UPI handle, our system instantly re-routes to a backup rail. No tickets, no waiting." },
  { icon: Lock, title: "No Limits, Verified Tier", desc: "Once KYC is complete, withdraw any amount any number of times — daily, hourly, your call." },
];

export const Features = () => (
  <section className="container py-20 md:py-28">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="text-gold text-xs font-semibold tracking-[0.22em] uppercase mb-4">The Mahadev Book Advantage</div>
      <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
        Built for the players India's <span className="text-gradient-gold italic">trusted books</span> forgot.
      </h2>
      <p className="text-muted-foreground mt-5 leading-relaxed">
        Eight uncompromising guarantees, engineered around one obsession: getting your winnings into your bank, fast.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {FEATURES.map((f, i) => (
        <div
          key={i}
          className="group relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-gold/15 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1.5 shadow-card hover:shadow-gold overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-gold-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
