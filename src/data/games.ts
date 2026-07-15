import sportCricket from "@/assets/sport-cricket.jpg";
import gameTeenpatti from "@/assets/game-teenpatti.jpg";
import gameAndar from "@/assets/game-andarbahar.jpg";
import gameRoulette from "@/assets/game-roulette.jpg";
import gameDragon from "@/assets/game-dragontiger.jpg";

export interface GameDef {
  slug: string;
  shortName: string;
  category: string;
  title: string;
  h1: string;
  description: string;
  keywords: string;
  intro: string;
  image: string;
  alt: string;
  features: { title: string; text: string }[];
  sections: { h2: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const GAMES: GameDef[] = [
  {
    slug: "cricket",
    shortName: "Cricket Betting",
    category: "Sports",
    title: "Online Cricket India | Live IPL & Cricket ID | Mahadev24x7",
    h1: "Online Cricket in India – Live IPL, T20 & International Cricket | Mahadev24x7",
    description: "Follow live cricket in India with Mahadev24x7. Get a Cricket ID, enjoy IPL, T20, ODI & Test cricket updates, secure UPI support, and 24/7 assistance.",
    keywords: "online cricket india, live cricket ipl, cricket id, t20 cricket, odi cricket, test cricket, ipl betting, cricket updates, mahadev24x7 cricket",
    intro: "Cricket is the most popular sport in India, bringing together millions of fans for every IPL season, ICC tournament, and international series. From thrilling T20 matches to One Day Internationals (ODIs) and Test cricket, fans enjoy following every run, wicket, and over in real time. Mahadev24x7 provides a dedicated cricket hub where users can stay updated with live cricket action, match schedules, team information, player statistics, and major tournaments.",
    image: sportCricket,
    alt: "Online cricket in India with live IPL, T20 and international cricket on Mahadev24x7",
    features: [
      { title: "Live Cricket Coverage", text: "Stay updated with live cricket scores, match schedules, team news, and player statistics throughout every tournament." },
      { title: "Major Cricket Tournaments", text: "Follow IPL, ICC Cricket World Cup, ICC T20 World Cup, Asia Cup, Champions Trophy, WPL, BBL, PSL, CPL, and international series." },
      { title: "Fast Cricket ID Support", text: "Receive quick account assistance from our support team whenever required." },
      { title: "Mobile Friendly Platform", text: "Enjoy smooth performance on Android, iOS, tablets, and desktop devices." },
      { title: "Secure Transactions", text: "Support for UPI, IMPS, NEFT, and other secure payment options." },
      { title: "24×7 Customer Support", text: "Our support team is available around the clock to assist users." },
    ],
    sections: [
      { h2: "Why Choose Mahadev24x7 Cricket?", body: "Mahadev24x7 is designed with a fast, mobile-friendly interface that works smoothly across Android, iPhone, tablets, and desktop devices. With secure account support, quick assistance, and regular cricket updates, users across Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Pune, Jaipur, Lucknow, Patna, and other Indian cities can enjoy a seamless cricket experience." },
      { h2: "Popular Cricket Tournaments", body: "Indian Premier League (IPL), ICC Cricket World Cup, ICC T20 World Cup, ICC Champions Trophy, Asia Cup, Ranji Trophy, Women's Premier League (WPL), Big Bash League (BBL), Pakistan Super League (PSL), Caribbean Premier League (CPL)." },
      { h2: "Features of Mahadev24x7 Cricket", body: "Live cricket updates, match schedules, team rankings, player statistics, mobile-friendly interface, fast registration assistance, secure payment methods, instant customer support, multiple cricket tournaments, easy navigation." },
      { h2: "How to Get Started", body: "Step 1: Contact Mahadev24x7 support and request your cricket account. Step 2: Complete the simple verification process. Step 3: Log in to your account. Step 4: Explore live cricket matches, tournaments, and player statistics. Step 5: Enjoy a smooth cricket experience from anywhere in India." },
      { h2: "Cricket Categories Available", body: "IPL Cricket, International Cricket, ODI Cricket, T20 Cricket, Test Cricket, Women's Cricket, Domestic Cricket, Live Cricket Scores, Cricket News, Cricket Statistics." },
      { h2: "Why Cricket Fans Prefer Mahadev24x7", body: "Thousands of cricket enthusiasts across India choose Mahadev24x7 because of its reliable platform, quick support, secure payment methods, and mobile-friendly experience. Whether you're following the IPL, ICC tournaments, or domestic cricket competitions, Mahadev24x7 keeps you connected with the latest cricket action." },
    ],
    faq: [
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
    ],
  },
  {
    slug: "teen-patti",
    shortName: "Teen Patti",
    category: "Live Casino",
    title: "Teen Patti Real Money India — Live 24x7 | Mahadev Book",
    h1: "Play Teen Patti Online Real Money — Live Indian Card Game",
    description: "Play Teen Patti online real money India on Mahadev Book — live dealers 24x7, AA Bonus, side bets, ₹100 min. UPI deposit & instant INR withdrawal.",
    keywords: "teen patti online real money, play teen patti india, live teen patti, 3 patti online india, teen patti india website",
    intro: "Teen Patti is India's favourite 3-card game. Play live, against real dealers, 24x7 on Mahadev Book — with AA Bonus, side bets and big jackpots, all in INR.",
    image: gameTeenpatti,
    alt: "Play Teen Patti online real money India on Mahadev Book live casino",
    features: [
      { title: "Live Indian Dealers", text: "Real dealers, real-time hands, full HD streaming 24x7." },
      { title: "Multiple Variants", text: "Classic Teen Patti, 20-20, Joker, Muflis, AK47 and more." },
      { title: "Side Bets & Jackpots", text: "AA Bonus, Pair Plus and progressive jackpots up to ₹1 Cr." },
    ],
    sections: [
      { h2: "How to Play Teen Patti Online with Mahadev Book", body: "Get your Mahadev Book ID via WhatsApp, deposit ₹100 minimum via UPI, and join any live Teen Patti table. Bet from ₹10 per hand. Win in real INR, withdraw to any Indian bank." },
      { h2: "Teen Patti Strategy & Tips", body: "Bankroll discipline beats card luck. Set table limits, fold weak hands, and use AA Bonus for value plays. See our full Teen Patti strategy guide on the blog." },
    ],
    faq: [
      { q: "Can I play Teen Patti for real money in India?", a: "Yes — get a Mahadev Book ID via WhatsApp and play live Teen Patti with INR deposits. 18+ only." },
      { q: "What is the minimum Teen Patti bet?", a: "₹10 per hand on most live tables." },
      { q: "How fast is Teen Patti payout?", a: "Winnings credit to your wallet instantly. UPI withdrawal in 5–15 minutes." },
    ],
  },
  {
    slug: "andar-bahar",
    shortName: "Andar Bahar",
    category: "Live Casino",
    title: "Andar Bahar Real Money India — Live | Mahadev Book",
    h1: "Play Andar Bahar Online — Live Indian Card Game Real Money",
    description: "Play Andar Bahar online real money India on Mahadev Book — live dealers, side bets, ₹100 min deposit. Instant UPI withdrawal in INR. Classic Indian casino.",
    keywords: "andar bahar online, play andar bahar real money, live andar bahar india, andar bahar app, andar bahar website india",
    intro: "Andar Bahar is the simplest, fastest, most loved Indian casino game. Play live on Mahadev Book — real dealers, real INR, 24x7.",
    image: gameAndar,
    alt: "Play live Andar Bahar online India real money on Mahadev Book",
    features: [
      { title: "Live Dealers 24x7", text: "Indian dealers, real-time rounds, HD live stream." },
      { title: "Side Bets & Multipliers", text: "First Card, Andar/Bahar streak bonus, lucky multipliers." },
      { title: "₹10 to ₹10 Lakh", text: "Play any stake — micro to high-roller, all on the same table." },
    ],
    sections: [
      { h2: "How to Play Andar Bahar Online", body: "Pick Andar (inside) or Bahar (outside). Dealer reveals cards alternately until your side matches. Get your Mahadev Book ID, deposit ₹100 via UPI, and join any live table." },
      { h2: "Andar Bahar Strategy", body: "Statistically Bahar wins ~51% — but each round is independent. Use flat-stake strategy and side bets for value. Read our full Andar Bahar guide on the blog." },
    ],
    faq: [
      { q: "Is Andar Bahar online safe?", a: "Yes — Mahadev Book uses certified live tables with real dealers and encrypted transactions." },
      { q: "Andar Bahar payout speed?", a: "Wins credit instantly. UPI withdrawal: 5–15 minutes." },
      { q: "Minimum Andar Bahar bet?", a: "₹10 per round." },
    ],
  },
  {
    slug: "roulette",
    shortName: "Roulette",
    category: "Live Casino",
    title: "Roulette India Real Money — European | Mahadev Book",
    h1: "Online Roulette India — Live European, Lightning & Auto Roulette",
    description: "Play online Roulette India real money on Mahadev Book — European, Lightning & Auto Roulette tables 24x7. ₹100 min deposit, INR withdrawal via UPI. Live HD.",
    keywords: "online roulette india, live roulette real money, european roulette online, lightning roulette india, mahadev book roulette",
    intro: "Spin live European, Lightning and Auto Roulette tables on Mahadev Book — real dealers, real INR, 24x7.",
    image: gameRoulette,
    alt: "Play live online Roulette India real money on Mahadev Book casino",
    features: [
      { title: "European, Lightning, Auto", text: "Lowest house edge European wheel + 500x Lightning multipliers." },
      { title: "₹50 to ₹5 Lakh", text: "Any stake — micro spins to VIP high-roller tables." },
      { title: "Real Live Dealers", text: "HD streaming, real wheels, real-time results 24x7." },
    ],
    sections: [
      { h2: "How to Play Online Roulette in India", body: "Get your Mahadev Book ID via WhatsApp, deposit ₹100 via UPI, choose any Roulette table, place chips on numbers/colours/columns and spin. Wins credit instantly to your INR balance." },
      { h2: "Best Roulette Strategy", body: "European Roulette has the lowest house edge (2.7%). Outside bets like Red/Black give ~50% win chance. Read our Roulette strategy guide for Martingale, D'Alembert and Fibonacci systems." },
    ],
    faq: [
      { q: "Is online Roulette legal in India?", a: "Online casino laws vary by state. 18+ only and play responsibly." },
      { q: "Roulette payout speed?", a: "Wins credit instantly. UPI withdrawal in 5–15 minutes." },
      { q: "Minimum Roulette bet?", a: "₹50 per spin on most live tables." },
    ],
  },
  {
    slug: "dragon-tiger",
    shortName: "Dragon Tiger",
    category: "Live Casino",
    title: "Dragon Tiger India Real Money — Live | Mahadev Book",
    h1: "Dragon Tiger Online India — Fast Live Card Game",
    description: "Play Dragon Tiger online India on Mahadev Book — fastest live card game, ₹100 min deposit, instant INR withdrawal via UPI. 30-second rounds, real dealers 24x7.",
    keywords: "dragon tiger online, play dragon tiger india, live dragon tiger real money, dragon tiger casino india",
    intro: "Dragon Tiger is the fastest live casino game — 30-second rounds, single card per side, easy 50/50 bets. Play on Mahadev Book in INR 24x7.",
    image: gameDragon,
    alt: "Dragon Tiger live casino card game online India on Mahadev Book",
    features: [
      { title: "30-Second Rounds", text: "Fastest live game — 100+ rounds per hour." },
      { title: "Simple Bets", text: "Dragon, Tiger, Tie or Suited Tie — that's it." },
      { title: "Live HD Dealers", text: "Real dealers, real cards, real-time HD streaming." },
    ],
    sections: [
      { h2: "How to Play Dragon Tiger Online", body: "Pick Dragon or Tiger (or Tie). Dealer draws one card on each side — highest card wins. Get your Mahadev Book ID via WhatsApp and play in INR with ₹100 min deposit." },
      { h2: "Dragon Tiger Strategy", body: "Avoid Tie bets (8:1 payout but high house edge). Use card-counting on shoe-based variants for small edges. Always set a session budget." },
    ],
    faq: [
      { q: "Dragon Tiger payout speed?", a: "Instant credit, UPI withdrawal in 5–15 minutes." },
      { q: "Minimum Dragon Tiger bet?", a: "₹10 per round." },
      { q: "Is Dragon Tiger online safe on Mahadev Book?", a: "Yes — certified live tables, real dealers, encrypted transactions." },
    ],
  },
];
