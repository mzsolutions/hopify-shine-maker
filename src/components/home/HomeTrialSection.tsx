import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Sofa, Package, ArrowRight, MessageCircle, Star, CheckCircle2, Sparkles } from "lucide-react";
import homeTrialBg from "@/assets/home-trial-bg.jpg";

const steps = [
  { num: "01", icon: Package, title: "Pick Your Carpets", desc: "Choose up to 4 from our collection" },
  { num: "02", icon: Truck, title: "Free Delivery", desc: "We bring them straight to your door" },
  { num: "03", icon: Sofa, title: "Try at Home", desc: "See how they look in your space" },
  { num: "04", icon: ShieldCheck, title: "Decide on the Spot", desc: "Love it? It's yours — decide right there" },
];

const shopifyLink = "https://gejjh1-jk.myshopify.com/collections/all";
const whatsappLink = "https://wa.me/971501234567?text=Hi!%20I'd%20like%20to%20book%20a%20free%20home%20trial%20for%20carpets.";

/* ─── SHARED CTA BUTTONS ─── */
const DarkCTAs = () => (
  <div className="flex flex-col sm:flex-row gap-3">
    <a href={shopifyLink} target="_blank" rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-warm">
      Browse Carpets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border border-primary-foreground/15 text-primary-foreground font-sans font-medium text-sm tracking-wide hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300">
      <MessageCircle className="w-4 h-4" /> Book via WhatsApp
    </a>
  </div>
);

const LightCTAs = () => (
  <div className="flex flex-col sm:flex-row gap-3">
    <a href={shopifyLink} target="_blank" rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-warm">
      Browse Carpets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border border-foreground/15 text-foreground font-sans font-medium text-sm tracking-wide hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300">
      <MessageCircle className="w-4 h-4" /> Book via WhatsApp
    </a>
  </div>
);

/* ─── DARK OVERLAY BACKGROUND ─── */
const DarkBg = () => (
  <div className="absolute inset-0">
    <motion.img src={homeTrialBg} alt="Luxury carpet" className="w-full h-full object-cover"
      initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeOut" }} />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_10%_5%/0.94)] via-[hsl(30_10%_6%/0.82)] to-[hsl(30_10%_5%/0.55)]" />
    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_10%_4%/0.6)] via-transparent to-[hsl(30_10%_4%/0.35)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_30%,hsl(30_10%_4%/0.4)_100%)]" />
  </div>
);

const Tagline = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="h-px w-14 bg-primary" />
    <span className={`text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase`}>
      Complimentary Home Trial
    </span>
  </div>
);

/* ═══════════════════════════════════════════════════════
   DARK A — Full-width overlay + vertical timeline (current)
   ═══════════════════════════════════════════════════════ */
const DarkA = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center">
    <DarkBg />
    <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-36">
      <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
        <div>
          <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <Tagline />
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.06] mb-7">
              Experience Luxury<br className="hidden sm:block" />
              <span className="text-primary italic">In Your Space</span>
            </h2>
            <p className="text-primary-foreground/55 text-lg md:text-xl font-sans font-light leading-relaxed max-w-lg mb-14">
              Select up to 4 handcrafted carpets and we'll deliver them to your doorstep — completely free. See them in your space and decide on the spot.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }}>
            <DarkCTAs />
          </motion.div>
        </div>
        {/* Vertical timeline */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="relative hidden lg:block">
          <div className="absolute left-[18px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="space-y-2">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 + i * 0.12, duration: 0.5 }} className="flex items-start gap-5 py-5 group cursor-default">
                <div className="relative z-10 w-[37px] h-[37px] rounded-full border-2 border-primary/30 bg-[hsl(30_10%_8%/0.8)] backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:border-primary group-hover:shadow-[0_0_20px_-4px_hsl(24_70%_50%/0.4)] transition-all duration-500">
                  <s.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="pt-1 min-w-[200px]">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-sans text-[11px] font-bold tracking-widest text-primary/40 group-hover:text-primary/70 transition-colors">{s.num}</span>
                    <h3 className="font-serif text-primary-foreground text-[17px] group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  </div>
                  <p className="text-primary-foreground/35 text-sm font-sans font-light group-hover:text-primary-foreground/50 transition-colors duration-300">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   DARK B — Centered headline + glassmorphic icon cards
   ═══════════════════════════════════════════════════════ */
const DarkB = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center">
    <DarkBg />
    <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-14 bg-primary" />
          <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase">Home Trial</span>
          <div className="h-px w-14 bg-primary" />
        </div>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] text-primary-foreground leading-[1.06] mb-6 max-w-4xl mx-auto">
          Try Before <span className="text-primary italic">You Buy</span>
        </h2>
        <p className="text-primary-foreground/50 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-12">
          We deliver up to 4 handcrafted carpets to your home — free of charge, zero obligation.
        </p>
      </motion.div>
      {/* Glassmorphic cards */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}
            className="backdrop-blur-md bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 text-center group hover:bg-primary-foreground/10 hover:border-primary/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-primary-foreground text-base mb-1">{s.title}</h3>
            <p className="text-primary-foreground/40 text-xs font-sans">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }}
        className="flex justify-center">
        <DarkCTAs />
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   DARK C — Split layout: image left + numbered cards right
   ═══════════════════════════════════════════════════════ */
const DarkC = () => (
  <section className="relative overflow-hidden bg-[hsl(30_10%_6%)]">
    <div className="grid lg:grid-cols-2 min-h-[85vh]">
      {/* Image half */}
      <div className="relative overflow-hidden">
        <motion.img src={homeTrialBg} alt="Luxury carpet" className="w-full h-full object-cover min-h-[400px]"
          initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(30_10%_6%/0.7)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_10%_6%)] via-transparent to-transparent lg:hidden" />
      </div>
      {/* Content half */}
      <div className="flex items-center px-8 lg:px-16 py-16 lg:py-24">
        <div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Tagline />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-6">
              Your Home,<br /><span className="text-primary italic">Your Showroom</span>
            </h2>
            <p className="text-primary-foreground/50 text-base font-sans font-light max-w-md mb-10">
              Experience our carpets in your own space before committing — delivered free, returned free.
            </p>
          </motion.div>
          {/* Numbered steps */}
          <div className="space-y-4 mb-10">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-5 group">
                <span className="font-serif text-4xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors min-w-[50px]">{s.num}</span>
                <div className="border-l border-primary/15 pl-5 py-2">
                  <h3 className="font-serif text-primary-foreground text-base group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-primary-foreground/35 text-sm font-sans">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
            <DarkCTAs />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   LIGHT A — Clean white + side image + vertical timeline
   ═══════════════════════════════════════════════════════ */
const LightA = () => (
  <section className="bg-background py-20 md:py-28 lg:py-32 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        {/* Left — Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <Tagline light />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            Try Carpets <span className="text-primary italic">At Home</span>
          </h2>
          <p className="text-muted-foreground text-lg font-sans font-light max-w-md mb-10">
            Pick up to 4 carpets. We deliver free, you decide at home. No pressure, no cost.
          </p>
          {/* Timeline */}
          <div className="relative mb-12">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent" />
            <div className="space-y-1">
              {steps.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 py-4 group">
                  <div className="relative z-10 w-[31px] h-[31px] rounded-full border-2 border-primary/25 bg-background flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                    <s.icon className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-serif text-foreground text-[15px] mb-0.5 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground text-xs font-sans">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <LightCTAs />
        </motion.div>
        {/* Right — Image */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-[500px] lg:h-[600px] object-cover" />
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-foreground/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   LIGHT B — Minimal white + icon row
   ═══════════════════════════════════════════════════════ */
const LightB = () => (
  <section className="bg-background py-20 md:py-28 lg:py-32">
    <div className="container mx-auto px-4 text-center max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase mb-6 block">Home Trial</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
          Experience Before <span className="text-primary italic">You Commit</span>
        </h2>
        <p className="text-muted-foreground text-lg font-sans font-light max-w-xl mx-auto mb-16">
          Select up to 4 carpets. Free delivery. Free returns. Zero risk.
        </p>
      </motion.div>
      {/* Horizontal icon cards */}
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 + i * 0.1 }}
            className="bg-secondary/50 rounded-xl p-6 hover:shadow-warm transition-all duration-300 group">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-foreground text-sm mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-xs font-sans">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
        className="flex justify-center">
        <LightCTAs />
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   LIGHT C — Card-based with large image header
   ═══════════════════════════════════════════════════════ */
const LightC = () => (
  <section className="bg-secondary/30 py-20 md:py-28 lg:py-32">
    <div className="container mx-auto px-4 max-w-5xl">
      {/* Hero image banner */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden mb-12 shadow-elevated">
        <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-[300px] md:h-[380px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_10%_5%/0.8)] via-[hsl(30_10%_5%/0.3)] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-8 md:p-12">
          <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase mb-3 block">Free Home Trial</span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground leading-[1.1]">
            Your Space, <span className="text-primary italic">Your Rules</span>
          </h2>
        </div>
      </motion.div>
      {/* Step cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 group border border-border/50">
            <span className="font-serif text-3xl font-bold text-primary/15 group-hover:text-primary/30 transition-colors">{s.num}</span>
            <h3 className="font-serif text-foreground text-base mt-3 mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-sans">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <LightCTAs />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   LIGHT D — Parallax image band + floating step grid
   ═══════════════════════════════════════════════════════ */
const LightD = () => (
  <section className="bg-background overflow-hidden">
    {/* Parallax image band */}
    <div className="relative h-[50vh] overflow-hidden">
      <motion.img src={homeTrialBg} alt="Luxury carpet" className="w-full h-[120%] object-cover absolute -top-[10%]"
        initial={{ y: 0 }} whileInView={{ y: -30 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.06] drop-shadow-lg">
            Free Home <span className="text-primary italic">Trial</span>
          </h2>
        </motion.div>
      </div>
    </div>
    {/* Floating grid */}
    <div className="container mx-auto px-4 -mt-16 relative z-10 pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-elevated text-center group hover:scale-[1.02] transition-all duration-300 border border-border/30">
            <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif text-foreground text-base mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-xs font-sans">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
        className="text-center">
        <p className="text-muted-foreground text-lg font-sans font-light max-w-xl mx-auto mb-8">
          Choose up to 4 handcrafted carpets. We deliver free, you decide at home.
        </p>
        <div className="flex justify-center"><LightCTAs /></div>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   LIGHT E — Magazine editorial hero
   ═══════════════════════════════════════════════════════ */
const LightE = () => (
  <section className="relative overflow-hidden min-h-[85vh] flex items-center">
    <img src={homeTrialBg} alt="Luxury carpet" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
    <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <Tagline light />
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.06] mb-6">
            Luxury Delivered<br /><span className="text-primary italic">To Your Door</span>
          </h2>
          <p className="text-muted-foreground text-lg font-sans font-light max-w-lg mb-10">
            Select up to 4 carpets and experience them in your home. Free delivery, free returns, zero obligation.
          </p>
        </motion.div>
        {/* Inline horizontal steps */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-6 mb-10">
          {steps.map((s, i) => (
            <div key={s.title} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-foreground text-sm font-sans font-medium">{s.title}</span>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <LightCTAs />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   LIGHT F — Grand statement centered
   ═══════════════════════════════════════════════════════ */
const LightF = () => (
  <section className="bg-background overflow-hidden">
    {/* Centered typography */}
    <div className="container mx-auto px-4 py-20 md:py-28 text-center">
      <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
        <Sparkles className="w-6 h-6 text-primary mx-auto mb-6" />
        <h2 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] text-foreground leading-[1.06] mb-6 max-w-4xl mx-auto">
          Try It <span className="text-primary italic">Free</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-12">
          Up to 4 carpets delivered to your home at no cost. Keep what you love, return the rest.
        </p>
      </motion.div>
    </div>
    {/* Wide image with step overlay */}
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
      className="relative max-w-7xl mx-auto px-4 mb-16">
      <div className="relative rounded-2xl overflow-hidden shadow-elevated">
        <img src={homeTrialBg} alt="Luxury carpet" className="w-full h-[350px] md:h-[450px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_10%_5%/0.85)] via-[hsl(30_10%_5%/0.3)] to-transparent" />
        {/* Step strip overlay */}
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.title} className="text-left">
                <span className="text-primary font-sans text-[10px] font-bold tracking-widest">{s.num}</span>
                <h3 className="font-serif text-primary-foreground text-sm mt-1">{s.title}</h3>
                <p className="text-primary-foreground/40 text-xs font-sans mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    <div className="flex justify-center pb-20">
      <LightCTAs />
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT WITH SWITCHER
   ═══════════════════════════════════════════════════════ */
const variations = [
  { key: "darkA", label: "Dark A – Overlay + Timeline", component: DarkA },
  { key: "darkB", label: "Dark B – Centered + Glass Cards", component: DarkB },
  { key: "darkC", label: "Dark C – Split + Numbered", component: DarkC },
  { key: "lightA", label: "Light A – Side Image + Timeline", component: LightA },
  { key: "lightB", label: "Light B – Minimal + Icon Row", component: LightB },
  { key: "lightC", label: "Light C – Banner + Step Cards", component: LightC },
  { key: "lightD", label: "Light D – Parallax + Float Grid", component: LightD },
  { key: "lightE", label: "Light E – Magazine Editorial", component: LightE },
  { key: "lightF", label: "Light F – Grand Statement", component: LightF },
];

const HomeTrialSection = () => {
  const [active, setActive] = useState(0);
  const ActiveComp = variations[active].component;

  return (
    <div>
      {/* Switcher bar */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border py-3 px-4 overflow-x-auto">
        <div className="flex gap-2 max-w-6xl mx-auto">
          {variations.map((v, i) => (
            <button key={v.key} onClick={() => setActive(i)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-200 shrink-0 ${
                i === active
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}>
              {v.label}
            </button>
          ))}
        </div>
      </div>
      <ActiveComp />
    </div>
  );
};

export default HomeTrialSection;
