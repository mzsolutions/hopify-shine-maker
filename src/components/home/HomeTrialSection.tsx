import { motion } from "framer-motion";
import { Truck, ShieldCheck, Sofa, Package, ArrowRight, MessageCircle, Star, Sparkles } from "lucide-react";
import homeTrialBg from "@/assets/home-trial-bg.jpg";

const steps = [
  { num: "01", icon: Package, title: "Pick Your Carpets", desc: "Choose up to 4 from our collection" },
  { num: "02", icon: Truck, title: "Free Delivery", desc: "We bring them straight to your door" },
  { num: "03", icon: Sofa, title: "Try at Home", desc: "See how they look in your space" },
  { num: "04", icon: ShieldCheck, title: "Keep or Return", desc: "Love it? Keep it. If not, we collect free" },
];

const shopifyLink = "https://gejjh1-jk.myshopify.com/collections/all";
const whatsappLink = "https://wa.me/971501234567?text=Hi!%20I'd%20like%20to%20book%20a%20free%20home%20trial%20for%20carpets.";

const CTA = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex flex-col sm:flex-row gap-3">
    <a
      href={shopifyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:bg-terracotta-dark transition-all duration-300 shadow-warm"
    >
      Browse Carpets
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-sans font-medium text-sm tracking-wide transition-all duration-300 ${
        dark
          ? "border border-primary-foreground/20 text-primary-foreground hover:border-primary-foreground/50 hover:bg-primary-foreground/5"
          : "border border-border text-foreground hover:border-primary/40 hover:bg-secondary/60"
      }`}
    >
      <MessageCircle className="w-4 h-4" />
      Book via WhatsApp
    </a>
  </div>
);

/* ─── DARK OPTION A: Cinematic Full-Bleed ─── */
export const DarkOptionA = () => (
  <section className="relative overflow-hidden min-h-[85vh] flex items-center">
    <div className="absolute inset-0">
      <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_10%_6%/0.92)] via-[hsl(30_10%_8%/0.78)] to-[hsl(30_10%_6%/0.50)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_10%_6%/0.5)] via-transparent to-[hsl(30_10%_6%/0.3)]" />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.4em] uppercase">Complimentary Home Trial</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.08] mb-6">
            Experience Luxury<br className="hidden md:block" />
            <span className="text-primary italic">In Your Space</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg md:text-xl font-sans font-light leading-relaxed max-w-xl mb-14">
            Select up to 4 handcrafted carpets and we'll deliver them to your doorstep — completely free, zero obligation.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="flex flex-wrap gap-3 mb-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="flex-1 min-w-[150px] bg-primary-foreground/[0.06] backdrop-blur-xl rounded-2xl px-5 py-6 border border-primary-foreground/[0.08] hover:border-primary/30 hover:bg-primary-foreground/[0.1] transition-all duration-500"
            >
              <s.icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-serif text-primary-foreground text-[15px] mb-1">{s.title}</h3>
              <p className="text-primary-foreground/40 text-xs font-sans">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <CTA dark />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── DARK OPTION B: Centered Dramatic ─── */
export const DarkOptionB = () => (
  <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center text-center">
    <div className="absolute inset-0">
      <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[hsl(30_10%_5%/0.82)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(30_10%_5%/0.6)_100%)]" />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-28 md:py-36">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Star className="w-4 h-4 text-primary" />
          <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase">The Home Trial Experience</span>
          <Star className="w-4 h-4 text-primary" />
        </div>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-primary-foreground leading-[1.08] mb-6">
          Try Before<br />You <span className="italic text-primary">Commit</span>
        </h2>
        <p className="text-primary-foreground/55 text-lg font-sans font-light leading-relaxed max-w-lg mx-auto mb-16">
          4 carpets. 7 days. Your home. Completely free, no strings attached.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.08 }}
            className="relative bg-primary-foreground/[0.04] backdrop-blur-lg rounded-2xl p-6 border border-primary-foreground/[0.06] group hover:border-primary/25 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-primary-foreground text-sm mb-1">{s.title}</h3>
            <p className="text-primary-foreground/35 text-xs font-sans">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.55 }} className="flex justify-center">
        <CTA dark />
      </motion.div>
    </div>
  </section>
);

/* ─── DARK OPTION C: Bold Asymmetric Split ─── */
export const DarkOptionC = () => (
  <section className="relative overflow-hidden bg-[hsl(30_12%_8%)]">
    <div className="container mx-auto px-4 py-24 md:py-0">
      <div className="grid md:grid-cols-2 min-h-[85vh]">
        {/* Content */}
        <div className="flex flex-col justify-center py-16 md:py-24 md:pr-16 lg:pr-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.3em] uppercase">Free Home Trial</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-6">
              Your Home Is the<br />
              <span className="text-primary">Best Showroom</span>
            </h2>
            <p className="text-primary-foreground/50 text-base md:text-lg font-sans font-light leading-relaxed max-w-md mb-12">
              Choose up to 4 carpets from our curated collection. We deliver them to your door — free, with zero commitment.
            </p>
          </motion.div>

          {/* Numbered steps */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4 mb-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-5 group"
              >
                <span className="font-serif text-3xl text-primary/30 group-hover:text-primary/60 transition-colors w-10 shrink-0">{s.num}</span>
                <div className="border-l border-primary-foreground/10 pl-5 py-1">
                  <h3 className="font-serif text-primary-foreground text-[15px]">{s.title}</h3>
                  <p className="text-primary-foreground/35 text-xs font-sans">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <CTA dark />
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 rounded-l-[3rem] overflow-hidden">
            <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_12%_8%)] via-transparent to-transparent w-1/3" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── LIGHT OPTION A: Refined Editorial ─── */
export const LightOptionA = () => (
  <section className="relative py-28 md:py-36 bg-background overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(38_45%_92%/0.5)_0%,transparent_40%,transparent_60%,hsl(38_45%_92%/0.4)_100%)]" />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,hsl(24_70%_50%/0.04)_0%,transparent_60%)]" />

    <div className="relative z-10 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center max-w-6xl mx-auto">
        {/* Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.4em] uppercase">Complimentary Trial</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] mb-5">
            Experience Our Carpets <span className="text-primary italic">In Your Space</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-sans font-light leading-relaxed mb-12">
            Select up to 4 carpets and we'll deliver them to your home — completely free. Take your time, decide at ease.
          </p>

          {/* Timeline steps */}
          <div className="space-y-0 mb-12 relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border" />
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-5 py-4 relative group"
              >
                <div className="relative z-10 w-[31px] h-[31px] rounded-full border-2 border-border bg-background flex items-center justify-center group-hover:border-primary transition-colors shrink-0">
                  <s.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="font-serif text-foreground text-base mb-0.5">{s.title}</h3>
                  <p className="text-muted-foreground text-sm font-sans font-light">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <CTA />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -top-6 -right-6 w-3/4 h-3/4 rounded-3xl bg-secondary" />
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-elevated">
            <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-full object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-4 md:-left-8 bg-card rounded-2xl px-7 py-5 border border-border shadow-elevated"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="block font-serif text-3xl text-foreground leading-none">4</span>
                <span className="text-muted-foreground text-xs font-sans">Carpets, Free</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── LIGHT OPTION B: Centered Minimal ─── */
export const LightOptionB = () => (
  <section className="relative py-28 md:py-36 bg-background overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(24_70%_50%/0.03)_0%,transparent_70%)]" />

    <div className="relative z-10 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-primary/40" />
            <Star className="w-4 h-4 text-primary" />
            <div className="h-px w-16 bg-primary/40" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
            Free Home Trial
          </h2>
          <p className="text-muted-foreground text-lg font-sans font-light leading-relaxed max-w-md mx-auto">
            4 carpets. 7 days. Your home. Completely free, zero commitment.
          </p>
        </motion.div>
      </div>

      {/* Steps as large feature cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto mb-20">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative bg-card rounded-2xl p-7 border border-border hover:border-primary/20 hover:shadow-warm transition-all duration-500 text-center"
          >
            <div className="absolute top-4 right-4 font-serif text-4xl text-border group-hover:text-primary/15 transition-colors">{s.num}</div>
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-foreground text-base mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-sans font-light">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Image banner with overlay CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden aspect-[21/9]"
      >
        <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_10%_6%/0.7)] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
          <p className="text-primary-foreground font-serif text-xl md:text-2xl">Ready to find the perfect carpet?</p>
          <CTA dark />
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── LIGHT OPTION C: Horizontal Scroll Reveal ─── */
export const LightOptionC = () => (
  <section className="relative py-28 md:py-36 bg-background overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="relative z-10 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start max-w-6xl mx-auto">
        {/* Left — sticky header */}
        <div className="lg:sticky lg:top-32 lg:w-[40%] shrink-0">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
              <Package className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground font-sans text-[11px] font-semibold tracking-[0.3em] uppercase">Home Trial</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-5">
              Try Carpets at Home.<br />
              <span className="text-primary italic">Risk Free.</span>
            </h2>
            <p className="text-muted-foreground text-base font-sans font-light leading-relaxed mb-10">
              Select up to 4 handcrafted carpets, try them in your space for 7 days. No cost, no commitment.
            </p>
            <CTA />
          </motion.div>
        </div>

        {/* Right — steps + image */}
        <div className="lg:w-[60%] space-y-6">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden aspect-video shadow-elevated"
          >
            <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-full object-cover" />
          </motion.div>

          {/* Step cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border group hover:border-primary/20 hover:shadow-warm transition-all duration-400"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <s.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground font-sans text-[10px] font-bold tracking-[0.25em] uppercase">Step {s.num}</span>
                </div>
                <h3 className="font-serif text-foreground text-[15px] mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs font-sans font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
