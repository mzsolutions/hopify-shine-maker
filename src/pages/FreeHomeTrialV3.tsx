import { motion } from "framer-motion";
import { ShoppingBag, Truck, Heart, ArrowRight, Phone, MessageCircle, Star, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import heroDelivery from "@/assets/fht-hero-delivery.jpg";
import glimpse1 from "@/assets/fht-glimpse-1.jpg";
import glimpse2 from "@/assets/fht-glimpse-2.jpg";
import glimpse3 from "@/assets/fht-glimpse-3.jpg";
import lifestyle from "@/assets/fht-lifestyle.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const STEPS = [
  {
    icon: ShoppingBag,
    title: "Select up to 4 carpets",
    subtitle: "Online or in-store",
    description: "Browse our collection and pick your favourites. Choose up to 4 carpets or fabric catalogues to try at home.",
  },
  {
    icon: Truck,
    title: "We bring it to your home",
    subtitle: "Free delivery across UAE",
    description: "Our team delivers your selected carpets right to your doorstep — completely free of charge.",
  },
  {
    icon: Heart,
    title: "Buy only if you love them",
    subtitle: "No obligation whatsoever",
    description: "Decide at ease in the comfort of your home. Keep and pay for what you love — we take back the rest.",
  },
];

const GLIMPSES = [
  { image: glimpse1, title: "Happy customers choosing their perfect carpet", product: "Nordic Frost Carpet" },
  { image: glimpse2, title: "Professional home trial consultation", product: "Sahara Dune Weave" },
  { image: glimpse3, title: "Luxury carpet in a styled living room", product: "Heritage Blue Carpet" },
];

const FAQS = [
  {
    q: "What is a Free Home Trial?",
    a: "A Free Home Trial allows you to choose up to 4 carpets online or in our showroom. We deliver the selected carpets to your home, so you can decide, keep and pay for the chosen carpet(s), and we retrieve the rest.",
  },
  {
    q: "Is shipping free within the UAE?",
    a: "Yes! Shipping and delivery is completely free all over the UAE. Our team handles everything — from delivery to pickup of any carpets you don't wish to keep.",
  },
  {
    q: "What if I don't like any of the carpets?",
    a: "No problem at all! If none of the carpets suit your taste, our team will pick them all up at no charge. There is absolutely no obligation to purchase.",
  },
  {
    q: "How long can I keep the carpets for trial?",
    a: "Our delivery team will assist you in trying the carpets during the visit. You can decide on the spot which ones you'd like to keep — take your time to see how they fit your space.",
  },
  {
    q: "Can I try fabric catalogues too?",
    a: "Yes! Besides carpets, you can also request fabric catalogues for curtains and upholstery to view in your home environment.",
  },
  {
    q: "How do I book a Free Home Trial?",
    a: "Simply browse our collection, add up to 4 carpets to your trial list, and confirm your booking. You can also call or WhatsApp us to schedule directly.",
  },
];

const TRUST_STATS = [
  { value: "10,000+", label: "Home Trials Completed" },
  { value: "100%", label: "Risk Free" },
  { value: "4", label: "Carpets Per Trial" },
  { value: "Free", label: "Delivery & Pickup" },
];

const FreeHomeTrialV3 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ===== HERO: Split Layout ===== */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-center min-h-[600px]">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-full flex items-end justify-center pt-12 lg:pt-0"
            >
              <img
                src={heroDelivery}
                alt="Carpet delivery service"
                className="max-h-[550px] object-contain relative z-10"
              />
              {/* Decorative badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute top-16 left-8 lg:top-24 lg:left-12 z-20 bg-primary text-primary-foreground rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl"
              >
                <span className="text-xs font-medium">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Risk Free</span>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 lg:p-16 flex flex-col justify-center"
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                How Free Home Trial Works
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Choose 4 carpets — we'll bring them to your home.
                See how they fit. Buy only what you love.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 text-base font-semibold" asChild>
                  <a href="https://handpickedfurniture.com/collections/all" target="_blank" rel="noopener noreferrer">
                    Book Your Free Home Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base" asChild>
                  <a href="https://wa.me/971547017925" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 3-STEP PROCESS ===== */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="text-center group"
              >
                {/* Icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors duration-300">
                    <step.icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {i + 1}
                  </div>
                  {/* Connector line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-8 lg:-right-14 w-8 lg:w-14 border-t-2 border-dashed border-border" />
                  )}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA below steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="text-center mt-14"
          >
            <Button size="lg" className="rounded-full px-10 text-base font-semibold" asChild>
              <a href="https://handpickedfurniture.com/collections/all" target="_blank" rel="noopener noreferrer">
                Start Free Home Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== TRUST STATS BAR ===== */}
      <section className="bg-foreground py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TRUST_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOME TRIAL GLIMPSES ===== */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Home Trial Glimpses
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See how our customers experience the joy of choosing their perfect carpet at home
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {GLIMPSES.map((item, i) => (
              <motion.div
                key={item.product}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-heading font-semibold text-lg">{item.product}</h3>
                  <p className="text-white/80 text-sm">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIFESTYLE IMAGE + CTA ===== */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[400px] lg:h-auto">
            <img
              src={lifestyle}
              alt="Carpet in a beautiful bedroom"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-secondary/50 p-10 lg:p-20 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Can't decide on your favourite carpet?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Let us bring the showroom to you. Try your top picks in your actual space with real lighting 
                and furniture — it's the best way to find the one you love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8 font-semibold" asChild>
                  <a href="https://handpickedfurniture.com/collections/all" target="_blank" rel="noopener noreferrer">
                    Browse Carpets
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <a href="tel:+971547017925">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY TRUST US ===== */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Choose Our Home Trial?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Zero Risk", desc: "No obligation to buy. If you don't love them, we take them back for free." },
              { icon: Truck, title: "Free Delivery", desc: "We deliver and pick up across the UAE at absolutely no cost to you." },
              { icon: Star, title: "Curated Selection", desc: "Choose from our handpicked collection of premium carpets and rugs." },
              { icon: Clock, title: "Flexible Timing", desc: "We work around your schedule. Book a time that suits you best." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Try Before You Buy?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Select up to 4 carpets, and we'll deliver them to your home for free. 
            No commitment, no risk — just the perfect carpet for your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full px-10 text-base font-semibold" asChild>
              <a href="https://handpickedfurniture.com/collections/all" target="_blank" rel="noopener noreferrer">
                Book Your Free Home Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="https://wa.me/971547017925" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeHomeTrialV3;
