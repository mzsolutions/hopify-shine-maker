import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import homeTrialBg from "@/assets/home-trial-bg.jpg";

const shopifyLink = "https://gejjh1-jk.myshopify.com/collections/all";

const HomeBanner = () => (
  <section className="relative overflow-hidden min-h-[60vh] flex items-center">
    <div className="absolute inset-0">
      <motion.img
        src={homeTrialBg}
        alt="Luxury carpet"
        className="w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_10%_5%/0.92)] via-[hsl(30_10%_6%/0.78)] to-[hsl(30_10%_5%/0.5)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_10%_4%/0.5)] via-transparent to-[hsl(30_10%_4%/0.3)]" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-14 bg-primary" />
          <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase">
            Complimentary Home Trial
          </span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.08] mb-6">
          Experience Luxury<br className="hidden sm:block" />
          <span className="text-primary italic">In Your Space</span>
        </h2>

        <p className="text-primary-foreground/55 text-lg font-sans font-light leading-relaxed max-w-lg mb-10">
          Select up to 4 handcrafted carpets and we'll deliver them to your doorstep — completely free, zero obligation.
        </p>

        <a
          href={shopifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-warm"
        >
          Browse Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HomeBanner;
