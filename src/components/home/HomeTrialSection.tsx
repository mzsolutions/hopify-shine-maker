import { motion } from "framer-motion";
import { Truck, ShieldCheck, Sofa, Package, ArrowRight } from "lucide-react";
import homeTrialBg from "@/assets/home-trial-bg.jpg";

const steps = [
  { num: "01", icon: Package, title: "Pick Your Carpets", desc: "Choose up to 4 from our collection" },
  { num: "02", icon: Truck, title: "Free Delivery", desc: "We bring them straight to your door" },
  { num: "03", icon: Sofa, title: "Try at Home", desc: "See how they look in your space" },
  { num: "04", icon: ShieldCheck, title: "Keep or Return", desc: "Love it? Keep it. If not, we collect free" },
];

/** Option A — Full-width stats banner (current) */
export const HomeTrialOptionA = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={homeTrialBg} alt="Luxury carpet in a modern UAE living room" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50" />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-3xl">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-primary font-medium text-sm tracking-[0.25em] uppercase mb-4 font-sans">
          Try Before You Buy
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight">
          Free Home Trial
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-primary-foreground/80 text-lg md:text-xl font-sans font-light max-w-xl leading-relaxed mb-10">
          Try up to 4 carpets for free in your space. Love it? Keep it. Don't? We'll handle the rest — no questions asked.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10">
              <s.icon className="w-5 h-5 text-primary mb-2" />
              <span className="block font-serif text-2xl md:text-3xl text-primary-foreground">{s.num}</span>
              <span className="block text-primary-foreground/90 text-sm font-medium font-sans">{s.title}</span>
              <span className="block text-primary-foreground/60 text-xs font-sans mt-0.5">{s.desc}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4">
          <a href="https://gejjh1-jk.myshopify.com/collections/all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-warm hover:shadow-elevated transition-all font-sans">Browse Carpets</a>
          <a href="https://wa.me/971501234567?text=Hi!%20I'd%20like%20to%20book%20a%20free%20home%20trial%20for%20carpets." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-medium text-base hover:bg-primary-foreground/10 transition-all font-sans">Book via WhatsApp</a>
        </motion.div>
      </div>
    </div>
  </section>
);

/** Option B — Clean card-based horizontal flow on light background */
export const HomeTrialOptionB = () => (
  <section className="bg-secondary/30 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-primary font-medium text-sm tracking-[0.25em] uppercase mb-3 font-sans">
          Try Before You Buy
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          Free Home Trial
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-muted-foreground text-lg max-w-xl mx-auto font-sans font-light">
          Try up to 4 carpets for free in your space. Love it? Keep it. Don't? We'll handle the rest.
        </motion.p>
      </div>

      {/* Steps as connected cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-14 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-warm transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="block text-xs text-primary font-bold tracking-widest mb-1 font-sans">STEP {s.num}</span>
            <h3 className="font-serif text-lg text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-sans">{s.desc}</p>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 z-10" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://gejjh1-jk.myshopify.com/collections/all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-warm hover:shadow-elevated transition-all font-sans">Browse Carpets</a>
        <a href="https://wa.me/971501234567?text=Hi!%20I'd%20like%20to%20book%20a%20free%20home%20trial%20for%20carpets." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-medium text-base hover:bg-primary/5 transition-all font-sans">Book via WhatsApp</a>
      </motion.div>
    </div>
  </section>
);

/** Option C — Split layout: image left, content right */
export const HomeTrialOptionC = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[550px]"
        >
          <img src={homeTrialBg} alt="Luxury carpet in a modern UAE living room" className="w-full h-full object-cover" />
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-md rounded-xl px-5 py-3 border border-border shadow-warm">
            <span className="block font-serif text-3xl text-primary">4</span>
            <span className="text-foreground text-sm font-sans font-medium">Carpets, Free</span>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <span className="inline-block text-primary font-medium text-sm tracking-[0.25em] uppercase mb-4 font-sans">Try Before You Buy</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-5 leading-tight">
            Free Home Trial
          </h2>
          <p className="text-muted-foreground text-lg font-sans font-light leading-relaxed mb-8">
            Try up to 4 carpets for free in your space. Love it? Keep it. Don't? We'll handle the rest — no questions asked.
          </p>

          {/* Vertical steps list */}
          <div className="space-y-5 mb-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm font-sans">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://gejjh1-jk.myshopify.com/collections/all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm shadow-warm hover:shadow-elevated transition-all font-sans">Browse Carpets</a>
            <a href="https://wa.me/971501234567?text=Hi!%20I'd%20like%20to%20book%20a%20free%20home%20trial%20for%20carpets." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-all font-sans">Book via WhatsApp</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
