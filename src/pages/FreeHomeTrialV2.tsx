import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Package, Sofa, HelpCircle, Sparkles, Eye, Truck, HandCoins } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import homeTrialBg from "@/assets/home-trial-bg.jpg";
import stepChoose from "@/assets/trial-step-choose.jpg";
import stepDeliver from "@/assets/trial-step-deliver.jpg";
import stepDecide from "@/assets/trial-step-decide.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const shopifyLink = "https://gejjh1-jk.myshopify.com/collections/all";
const whatsappLink = "https://wa.me/971501234567?text=Hi!%20I'd%20like%20to%20book%20a%20free%20home%20trial%20for%20carpets.";

const processSteps = [
  {
    image: stepChoose,
    icon: Eye,
    title: "Browse & Pick",
    desc: "Explore our curated collection online and select up to 4 handcrafted carpets you'd love to see in your space.",
    tag: "Step 01",
  },
  {
    image: stepDeliver,
    icon: Truck,
    title: "We Bring Them Home",
    desc: "Our team delivers your chosen carpets straight to your door — completely free, no strings attached.",
    tag: "Step 02",
  },
  {
    image: stepDecide,
    icon: HandCoins,
    title: "Decide at Ease",
    desc: "Decide at ease in the comfort of your home. Love it? Pay on the spot by cash or card.",
    tag: "Step 03",
  },
];

const highlights = [
  { label: "Up to 4 Carpets", sub: "per trial visit" },
  { label: "Zero Charges", sub: "if you don't buy" },
  { label: "Same-Day Booking", sub: "via WhatsApp" },
  { label: "Dubai & Sharjah", sub: "service areas" },
];

const eligibleItems = [
  {
    icon: Sofa,
    title: "Carpets & Rugs",
    desc: "Try any 4 rugs from our collection in your actual space",
  },
  {
    icon: Package,
    title: "Fabric Catalogues",
    desc: "Try fabric samples (Linen, Chenille, Leather) before ordering sofas or beds",
  },
];

const expectations = [
  "Our trial team will demonstrate the chosen items at your home",
  "Once you choose, pay by cash or credit card on the spot",
  "If you don't purchase any item, our team will pack up — no charges at all",
  "Returns or exchanges are not possible for home trial items",
];

const faqs = [
  { q: "Is the home trial really free?", a: "Yes! There are absolutely no charges for the home trial service. You only pay if you decide to keep a carpet." },
  { q: "Which areas do you serve?", a: "Our free home trial is currently available in Dubai and Sharjah. Contact us if you're in a nearby emirate." },
  { q: "How many carpets can I try?", a: "You can select up to 4 carpets from our collection for your home trial." },
  { q: "How do I book a trial?", a: "Simply browse and select your carpets, then contact us via WhatsApp or phone. Our team will schedule the trial within 24 hours." },
  { q: "What payment methods do you accept?", a: "You can pay by cash or credit card at the time of the trial if you decide to purchase." },
  { q: "Can I return or exchange after the trial?", a: "No, returns or exchanges are not possible for home trial purchases. You decide on the spot during the trial visit." },
];

const FreeHomeTrialV2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO — SPLIT LAYOUT ─── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img src={homeTrialBg} alt="Luxury carpet collection" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_10%_5%/0.92)] via-[hsl(30_10%_5%/0.75)] to-[hsl(30_10%_5%/0.4)]" />
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/25 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary font-sans text-xs font-semibold tracking-wider uppercase">
                  Complimentary Service
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.06] mb-6">
                Try Before <br />
                You <span className="text-primary italic">Buy</span>
              </h1>
              <p className="text-primary-foreground/55 text-lg md:text-xl font-sans font-light max-w-lg mb-10 leading-relaxed">
                Experience our handcrafted carpets in your own space. No cost, no pressure — decide at ease in the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={shopifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-warm"
                >
                  Browse Carpets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border border-primary-foreground/15 text-primary-foreground font-sans font-medium text-sm tracking-wide hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" /> Book via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHT STATS BAR ─── */}
      <section className="relative z-20 -mt-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 bg-background rounded-2xl shadow-elevated border border-border overflow-hidden"
          >
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`p-6 md:p-8 text-center ${i < highlights.length - 1 ? "border-r border-border" : ""}`}
              >
                <p className="font-serif text-xl md:text-2xl text-primary font-semibold">{h.label}</p>
                <p className="text-muted-foreground text-xs md:text-sm font-sans mt-1 uppercase tracking-wider">{h.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS — ALTERNATING LAYOUT ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Three Simple <span className="text-primary italic">Steps</span>
            </h2>
          </motion.div>

          <div className="space-y-20 md:space-y-28">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-warm aspect-[4/3]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
                    {step.tag}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground font-sans text-base md:text-lg font-light leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE SERVICE — FULL-WIDTH BAND ─── */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
              Why <span className="text-primary italic">Home Trial?</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg font-light max-w-2xl mx-auto">
              We understand that choosing the right design, colour and especially the right size of carpet can be confusing, so we offer this{" "}
              <span className="text-primary font-semibold">complimentary service</span>.
              Available in Dubai and Sharjah.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8 border border-border shadow-soft"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">If You Buy</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Pay by cash or credit card for what you like. No additional charges for the home trial.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border shadow-soft"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">If You Don't Buy</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Pay nothing. Our team will simply pack the items and leave. Zero charges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ELIGIBLE ITEMS — ICON-FORWARD CARDS ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground">
              What's <span className="text-primary italic">Eligible?</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {eligibleItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-secondary/30 rounded-2xl p-8 border border-border hover:shadow-warm hover:border-primary/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center mb-5 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT — TIMELINE ─── */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground">
              What to <span className="text-primary italic">Expect</span>
            </h2>
          </motion.div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-6">
              {expectations.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-5 md:pl-2"
                >
                  <span className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-background border-2 border-primary text-primary font-serif font-bold text-sm flex items-center justify-center shadow-soft">
                    {i + 1}
                  </span>
                  <div className="bg-background rounded-xl p-5 border border-border flex-1 shadow-soft">
                    <p className="text-foreground font-sans text-sm md:text-base">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ — CLEAN ACCORDION ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase">
                FAQ
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-12 text-center">
              Frequently Asked <span className="text-primary italic">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-secondary/20 border border-border rounded-2xl px-7 overflow-hidden data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="font-sans font-medium text-foreground text-sm md:text-base hover:text-primary transition-colors py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans text-sm pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={homeTrialBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(30_10%_5%/0.9)]" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/25 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-sans text-xs font-semibold tracking-wider uppercase">
                Book Now
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-5">
              Ready to <span className="text-primary italic">Experience</span> at Home?
            </h2>
            <p className="text-primary-foreground/50 text-lg font-sans font-light max-w-xl mx-auto mb-12">
              Book your free home trial today. Choose your carpets and we'll bring them to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={shopifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-warm"
              >
                Browse Carpets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border border-primary-foreground/15 text-primary-foreground font-sans font-medium text-sm tracking-wide hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" /> Book via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeHomeTrialV2;
