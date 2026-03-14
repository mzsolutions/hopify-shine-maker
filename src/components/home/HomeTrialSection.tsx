import { motion } from "framer-motion";
import { Truck, ShieldCheck, Sofa, Package, ArrowRight, MessageCircle } from "lucide-react";
import homeTrialBg from "@/assets/home-trial-bg.jpg";

const steps = [
  { num: "01", icon: Package, title: "Pick Your Carpets", desc: "Choose up to 4 from our collection" },
  { num: "02", icon: Truck, title: "Free Delivery", desc: "We bring them straight to your door" },
  { num: "03", icon: Sofa, title: "Try at Home", desc: "See how they look in your space" },
  { num: "04", icon: ShieldCheck, title: "Keep or Return", desc: "Love it? Keep it. If not, we collect free" },
];

const shopifyLink = "https://gejjh1-jk.myshopify.com/collections/all";
const whatsappLink = "https://wa.me/971501234567?text=Hi!%20I'd%20like%20to%20book%20a%20free%20home%20trial%20for%20carpets.";

/** Option A — Cinematic full-width with frosted glass cards */
export const HomeTrialOptionA = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={homeTrialBg} alt="Luxury carpet in a modern UAE living room" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_10%_10%/0.88)] via-[hsl(30_10%_12%/0.72)] to-[hsl(30_10%_10%/0.45)]" />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-36">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary font-sans text-xs font-semibold tracking-[0.35em] uppercase">
              Try Before You Buy
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-primary-foreground leading-[1.15] mb-5">
            Experience Our Carpets<br className="hidden md:block" /> In Your Own Space
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg font-sans font-light leading-relaxed max-w-lg mb-12">
            Select up to 4 carpets and we'll deliver them to your home — completely free. Take your time, decide at ease.
          </p>
        </motion.div>

        {/* Frosted glass stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
              className="flex-1 min-w-[140px] bg-[hsl(40_30%_98%/0.08)] backdrop-blur-md rounded-xl px-5 py-5 border border-[hsl(40_30%_98%/0.12)] group hover:bg-[hsl(40_30%_98%/0.14)] transition-colors"
            >
              <span className="text-primary/80 text-[10px] font-sans font-bold tracking-[0.3em] uppercase block mb-2">
                Step {s.num}
              </span>
              <h3 className="font-serif text-primary-foreground text-base mb-0.5">{s.title}</h3>
              <p className="text-primary-foreground/50 text-xs font-sans leading-snug">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={shopifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:bg-[hsl(var(--terracotta-dark))] transition-all duration-300"
          >
            Browse Carpets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg border border-primary-foreground/25 text-primary-foreground font-sans font-medium text-sm tracking-wide hover:border-primary-foreground/50 hover:bg-[hsl(40_30%_98%/0.06)] transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Book via WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

/** Option B — Elegant light section with refined step cards and accent line */
export const HomeTrialOptionB = () => (
  <section className="relative py-24 md:py-32 bg-background overflow-hidden">
    {/* Subtle warm gradient overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(38_45%_92%/0.4)_0%,transparent_50%,hsl(38_45%_92%/0.3)_100%)]" />

    <div className="relative z-10 container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-border" />
            <span className="text-primary font-sans text-xs font-semibold tracking-[0.35em] uppercase">
              Try Before You Buy
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Free Home Trial
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-sans font-light leading-relaxed">
            Select up to 4 carpets and try them in your space — completely free, zero commitment.
          </p>
        </motion.div>
      </div>

      {/* Steps with connecting line */}
      <div className="relative max-w-4xl mx-auto mb-16">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-px bg-border" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="text-center group"
            >
              <div className="relative mx-auto w-[104px] h-[104px] rounded-2xl bg-card border border-border flex flex-col items-center justify-center mb-5 shadow-[var(--shadow-soft)] group-hover:border-primary/30 group-hover:shadow-[var(--shadow-warm)] transition-all duration-300">
                <s.icon className="w-6 h-6 text-primary mb-1" />
                <span className="text-[10px] text-muted-foreground font-sans font-semibold tracking-[0.2em] uppercase">
                  Step {s.num}
                </span>
              </div>
              <h3 className="font-serif text-foreground text-base mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-sans font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <a
          href={shopifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:bg-[hsl(var(--terracotta-dark))] transition-all duration-300"
        >
          Browse Carpets
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg border border-border text-foreground font-sans font-medium text-sm tracking-wide hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          Book via WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

/** Option C — Premium split layout with editorial feel */
export const HomeTrialOptionC = () => (
  <section className="py-24 md:py-32 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
        {/* Image side with overlapping accent */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Accent block behind image */}
          <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-secondary rounded-2xl" />
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-elevated)]">
            <img src={homeTrialBg} alt="Luxury carpet in a modern UAE living room" className="w-full h-full object-cover" />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -bottom-5 -right-3 md:right-[-20px] bg-card rounded-xl px-6 py-4 border border-border shadow-[var(--shadow-warm)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="block font-serif text-2xl text-foreground leading-none">4</span>
                <span className="text-muted-foreground text-xs font-sans">Carpets, Free</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary font-sans text-xs font-semibold tracking-[0.35em] uppercase">
              Try Before You Buy
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-foreground mb-5 leading-tight">
            Experience Our Carpets In Your Own Space
          </h2>
          <p className="text-muted-foreground text-base font-sans font-light leading-relaxed mb-10">
            Select up to 4 carpets and we'll deliver them to your home — completely free. Take your time, decide at ease. Don't love it? We'll collect it back, no questions asked.
          </p>

          {/* Elegant step list */}
          <div className="space-y-0 mb-10 border-l border-border ml-1">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-4 pl-6 py-3 relative group"
              >
                {/* Dot on the line */}
                <div className="absolute left-[-5px] top-[22px] w-[9px] h-[9px] rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                <div>
                  <h3 className="font-serif text-foreground text-[15px] mb-0.5">{s.title}</h3>
                  <p className="text-muted-foreground text-sm font-sans font-light">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={shopifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:bg-[hsl(var(--terracotta-dark))] transition-all duration-300"
            >
              Browse Carpets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg border border-border text-foreground font-sans font-medium text-sm tracking-wide hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
