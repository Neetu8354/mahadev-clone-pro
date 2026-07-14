import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "How fast is UPI withdrawal on Mahadev Book?", a: "The average settlement clears in 5–15 minutes, around the clock. Whether it's 3 AM, Diwali night, or the IPL final — our payout rails never close." },
  { q: "What is the minimum withdrawal amount?", a: "Just ₹100. No artificial ₹500 or ₹1,000 floors — cash out the very moment a hand goes your way." },
  { q: "Are there any withdrawal fees or TDS deductions?", a: "Zero processing fees, zero hidden cuts. Standard Indian taxation applies only on high-value withdrawals; everyday wins land in full." },
  { q: "Which UPI apps are supported?", a: "Every major UPI app — PhonePe, Google Pay, Paytm, BHIM, Amazon Pay — plus any bank-issued UPI handle." },
  { q: "What if my UPI withdrawal fails?", a: "Our system instantly re-routes to a backup rail and pings you on WhatsApp. Roughly 99% of failed attempts resolve themselves within five minutes — zero ticketing required." },
  { q: "Is there a daily withdrawal limit?", a: "Verified IDs face no daily cap. Withdraw any amount, any number of times — daily, hourly, your call." },
  { q: "Do I need to submit KYC to withdraw?", a: "Smaller cashouts go through with no documentation. KYC is requested only for very large withdrawals (₹2,00,000+), in line with Indian compliance." },
  { q: "Can I withdraw on Sundays and bank holidays?", a: "Yes. UPI runs 24×7×365, and so do we. Sunday afternoons, festival nights, midnight — the speed stays identical." },
  { q: "Why are other sites' withdrawals slow?", a: "Most informal Telegram books lack direct UPI integration and process payouts manually. Mahadev Book runs on automated bank rails — that's the entire difference." },
  { q: "How do I track my withdrawal?", a: "Every request triggers a live WhatsApp thread with a real concierge, in Hindi or English. Full transparency at every step." },
];

export const FAQ = () => (
  <section id="about" className="container py-20 md:py-28">
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-gold text-xs font-semibold tracking-[0.22em] uppercase mb-4">Common Questions</div>
      <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
        Everything you wanted to ask, <span className="text-gradient-gold italic">answered honestly.</span>
      </h2>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-gold/15 bg-card/60 backdrop-blur-sm px-6 hover:border-gold/40 transition-colors">
            <AccordionTrigger className="text-left font-display font-semibold text-base hover:text-gold hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
