import { WHATSAPP_LINK } from "@/lib/links";

const ITEMS = [
  "⚡ UPI Settlement in Under 7 Minutes — Around the Clock",
  "💎 Zero Withdrawal Fees · Transparent INR Payouts",
  "🏆 IPL 2026 Live — Best Odds, Same-Day Cash-Out",
  "📲 PhonePe · GPay · Paytm — Lightning-Fast Payouts",
  "🎁 ₹100 Minimum Withdrawal · No Daily Cap",
  "🛡️ ₹500 Cr+ Settled · Zero Disputes · 100% Verified",
];

export const TickerBar = () => (
  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
    className="block bg-gradient-gold text-primary-foreground py-2.5 overflow-hidden border-b border-gold-dark">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="mx-4 sm:mx-8 text-xs sm:text-sm font-bold tracking-wide">{item}</span>
      ))}
    </div>
  </a>
);
