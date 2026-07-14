import { WHATSAPP_LINK } from "@/lib/links";
import { Wallet, Send, CheckCircle2, Banknote } from "lucide-react";

const STEPS = [
  { icon: Wallet, title: "Open Your Wallet", desc: "Sign into your Mahadev Book ID and tap Withdraw. Clean, one-screen flow — no maze." },
  { icon: Send, title: "Enter UPI & Amount", desc: "Drop any PhonePe, GPay or Paytm handle. Minimum just ₹100 — name the figure, hit send." },
  { icon: CheckCircle2, title: "Verified in 10 Seconds", desc: "Our system instantly validates the handle, the balance, and the limits — zero manual review." },
  { icon: Banknote, title: "₹ INR in Your Bank", desc: "Funds land in your bank in 5 to 15 minutes, around the clock. Take a screenshot. Done." },
];

export const HowItWorks = () => (
  <section className="relative py-20 md:py-28 bg-gradient-dark border-y border-gold/15 overflow-hidden">
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial-gold opacity-40 blur-3xl pointer-events-none" />
    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-gold text-xs font-semibold tracking-[0.22em] uppercase mb-4">Four Steps. Total Clarity.</div>
        <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
          From win to bank, in <span className="text-gradient-gold italic">under a chai break.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6 relative">
        {STEPS.map((s, i) => (
          <div key={i} className="relative group">
            <div className="relative z-10 p-6 pt-9 rounded-2xl bg-card/70 backdrop-blur-sm border border-gold/20 text-center transition-all duration-500 group-hover:border-gold/60 group-hover:-translate-y-1.5 group-hover:shadow-gold h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground font-display font-bold flex items-center justify-center text-sm shadow-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-emerald border border-gold/30 flex items-center justify-center mx-auto mb-5 shadow-emerald">
                <s.icon className="w-7 h-7 text-gold-light" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold shadow-gold-lg hover:scale-[1.03] transition-transform">
          <Banknote className="w-5 h-5" /> Open My Instant-Payout ID
        </a>
      </div>
    </div>
  </section>
);
