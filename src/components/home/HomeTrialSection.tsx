import { motion } from "framer-motion";
import { Truck, ShieldCheck, Sofa, Package } from "lucide-react";
import homeTrialBg from "@/assets/home-trial-bg.jpg";

const stats = [
  { icon: Package, value: "4", label: "Carpets to Try", desc: "Pick your favourites" },
  { icon: Truck, value: "Free", label: "Home Delivery", desc: "We bring them to you" },
  { icon: Sofa, value: "7", label: "Days to Decide", desc: "Try in your own space" },
  { icon: ShieldCheck, value: "Zero", label: "Risk", desc: "Don't like it? We collect it" },
];

const HomeTrialSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={homeTrialBg}
          alt="Luxury carpet in a modern UAE living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-medium text-sm tracking-[0.25em] uppercase mb-4 font-sans"
          >
            Try Before You Buy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight"
          >
            Free Home Trial
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl font-sans font-light max-w-xl leading-relaxed mb-10"
          >
            Try up to 4 carpets for free in your space. Love it? Keep it. Don't? We'll handle the rest — no questions asked.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10"
              >
                <stat.icon className="w-5 h-5 text-primary mb-2" />
                <span className="block font-serif text-2xl md:text-3xl text-primary-foreground">
                  {stat.value}
                </span>
                <span className="block text-primary-foreground/90 text-sm font-medium font-sans">
                  {stat.label}
                </span>
                <span className="block text-primary-foreground/60 text-xs font-sans mt-0.5">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://gejjh1-jk.myshopify.com/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-warm hover:shadow-elevated transition-all font-sans"
            >
              Browse Carpets
            </a>
            <a
              href="https://wa.me/971501234567?text=Hi!%20I'd%20like%20to%20book%20a%20free%20home%20trial%20for%20carpets."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-medium text-base hover:bg-primary-foreground/10 transition-all font-sans"
            >
              Book via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeTrialSection;
