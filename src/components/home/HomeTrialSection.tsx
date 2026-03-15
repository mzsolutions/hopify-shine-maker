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

const HomeTrialSection = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center">
    {/* Full-width cinematic background */}
    <div className="absolute inset-0">
      <motion.img
        src={homeTrialBg}
        alt="Luxury carpet in a beautifully styled room"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      {/* Multi-layer overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_10%_5%/0.94)] via-[hsl(30_10%_6%/0.82)] to-[hsl(30_10%_5%/0.55)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_10%_4%/0.6)] via-transparent to-[hsl(30_10%_4%/0.35)]" />
      {/* Subtle warm vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_30%,hsl(30_10%_4%/0.4)_100%)]" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-36">
      <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
        {/* Left — Headline + CTA */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-14 bg-primary" />
              <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase">
                Complimentary Home Trial
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] text-primary-foreground leading-[1.06] mb-7">
              Experience Luxury
              <br className="hidden sm:block" />
              <span className="text-primary italic">In Your Space</span>
            </h2>

            <p className="text-primary-foreground/55 text-lg md:text-xl font-sans font-light leading-relaxed max-w-lg mb-14">
              Select up to 4 handcrafted carpets and we'll deliver them to your doorstep — completely free, zero obligation.
            </p>
          </motion.div>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={shopifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-warm"
            >
              Browse Carpets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border border-primary-foreground/15 text-primary-foreground font-sans font-medium text-sm tracking-wide hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right — Vertical Timeline Steps */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Glowing vertical line */}
          <div className="absolute left-[18px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-2">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.12, duration: 0.5 }}
                className="flex items-start gap-5 py-5 group cursor-default"
              >
                {/* Timeline node */}
                <div className="relative z-10 w-[37px] h-[37px] rounded-full border-2 border-primary/30 bg-[hsl(30_10%_8%/0.8)] backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:border-primary group-hover:shadow-[0_0_20px_-4px_hsl(24_70%_50%/0.4)] transition-all duration-500">
                  <s.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="pt-1 min-w-[200px]">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-sans text-[11px] font-bold tracking-widest text-primary/40 group-hover:text-primary/70 transition-colors">
                      {s.num}
                    </span>
                    <h3 className="font-serif text-primary-foreground text-[17px] group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/35 text-sm font-sans font-light group-hover:text-primary-foreground/50 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile timeline (below CTA on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:hidden"
        >
          <div className="relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent" />
            <div className="space-y-1">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 py-4"
                >
                  <div className="relative z-10 w-[31px] h-[31px] rounded-full border-2 border-primary/25 bg-[hsl(30_10%_8%/0.8)] flex items-center justify-center shrink-0">
                    <s.icon className="w-3.5 h-3.5 text-primary/50" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-serif text-primary-foreground text-[15px] mb-0.5">{s.title}</h3>
                    <p className="text-primary-foreground/35 text-xs font-sans">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HomeTrialSection;
