import { Quote, Star } from "lucide-react";

const REVIEWS = [
  { name: "Rahul S.", city: "Mumbai", role: "IPL Regular", text: "Got my ID issued in two minutes on WhatsApp. Withdrew ₹45,000 of IPL winnings the same evening — straight to PhonePe, no questions asked." },
  { name: "Aman K.", city: "Delhi", role: "Live Casino Player", text: "Eight months in and not a single delay. Andar Bahar and Teen Patti tables are flawless, dealers are genuinely sharp, and the cashier is rock-solid." },
  { name: "Priya M.", city: "Bangalore", role: "Casual Bettor", text: "Support replies in under a minute, deposits land in seconds, and the bonus structure actually rewards real play. Easily the most polished book I've used." },
  { name: "Vikram R.", city: "Pune", role: "T20 Specialist", text: "Best T20 World Cup odds I tracked across four sites. Booked ₹1.2 lakh and the entire amount was in my HDFC account within ten minutes of cash-out." },
];

export const Testimonials = () => (
  <section className="container py-20 md:py-28">
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-gold text-xs font-semibold tracking-[0.22em] uppercase mb-4">Verified Player Stories</div>
      <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
        Loved by <span className="text-gradient-gold italic">10 lakh+</span> Indian players.
      </h2>
      <p className="text-muted-foreground mt-5">Real cashouts. Real screenshots. Real WhatsApp threads.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {REVIEWS.map((r, i) => (
        <figure
          key={i}
          className="relative p-7 rounded-2xl bg-card/70 backdrop-blur-sm border border-gold/15 shadow-card hover:border-gold/40 hover:shadow-gold transition-all duration-500"
        >
          <Quote className="absolute top-5 right-5 w-8 h-8 text-gold/20" />
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
          </div>
          <blockquote className="text-sm text-foreground/90 mb-5 leading-relaxed">"{r.text}"</blockquote>
          <figcaption className="flex items-center gap-3 pt-4 border-t border-gold/10">
            <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold shadow-gold">
              {r.name[0]}
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role} · {r.city}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);
