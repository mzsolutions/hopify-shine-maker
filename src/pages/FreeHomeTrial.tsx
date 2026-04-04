import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, ChevronRight, Package, Truck, Sofa, ShieldCheck, CreditCard, HelpCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const homeTrialBg = "https://cdn.shopify.com/s/files/1/0671/2600/1717/files/Banner_8a12add1-28e5-4bc9-b7d9-4f451069a5aa.jpg?v=1771449985";
const stepChoose = "https://cdn.shopify.com/s/files/1/0671/2600/1717/files/lifestyle.jpg?v=1770293942";
const stepDeliver = "https://cdn.shopify.com/s/files/1/0671/2600/1717/files/carpets-stack.jpg?v=1770293942";
const stepDecide = "https://cdn.shopify.com/s/files/1/0671/2600/1717/files/craftsmanship.jpg?v=1770293942";
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
    title: "Choose up to 4 Carpets",
    desc: "Browse our collection online and pick up to 4 handcrafted carpets you'd love to see in your space.",
  },
  {
    image: stepDeliver,
    title: "We Deliver to Your Door",
    desc: "Our team brings your selected carpets straight to your home — completely free of charge.",
  },
  {
    image: stepDecide,
    title: "Decide at Ease",
    desc: "Decide at ease in the comfort of your home. Love it? Pay on the spot by cash or card.",
  },
];

const eligibleItems = [
  {
    icon: Sofa,
    title: "Carpets & Rugs",
    desc: "Try any 4 rugs from our collection in your space",
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
  {
    q: "Is the home trial really free?",
    a: "Yes! There are absolutely no charges for the home trial service. You only pay if you decide to keep a carpet.",
  },
  {
    q: "Which areas do you serve?",
    a: "Our free home trial is currently available in Dubai and Sharjah. Contact us if you're in a nearby emirate.",
  },
  {
    q: "How many carpets can I try?",
    a: "You can select up to 4 carpets from our collection for your home trial.",
  },
  {
    q: "How do I book a trial?",
    a: "Simply browse and select your carpets, then contact us via WhatsApp or phone. Our team will schedule the trial within 24 hours.",
  },
  {
    q: "What payment methods do you accept?",
    a: "You can pay by cash or credit card at the time of the trial if you decide to purchase.",
  },
  {
    q: "Can I return or exchange after the trial?",
    a: "No, returns or exchanges are not possible for home trial purchases. You decide on the spot during the trial visit.",
  },
];

const FreeHomeTrial = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={homeTrialBg} alt="Luxury carpet collection" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30_10%_5%/0.75)] via-[hsl(30_10%_5%/0.6)] to-[hsl(30_10%_5%/0.85)]" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4 py-32"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14 bg-primary" />
            <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase">
              Complimentary Service
            </span>
            <div className="h-px w-14 bg-primary" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.06] mb-5">
            Free Home <span className="text-primary italic">Trial</span>
          </h1>
          <p className="text-primary-foreground/60 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto">
            Experience our handcrafted carpets in your own space before you decide. No cost, no obligation to buy.
          </p>
        </motion.div>
      </section>

      {/* ─── HOW IT WORKS — VISUAL FLOW ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-[11px] font-semibold tracking-[0.45em] uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Three Simple <span className="text-primary italic">Steps</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 items-start">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-soft mb-6 aspect-square">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg font-bold shadow-warm">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-sans text-sm md:text-base font-light max-w-xs mx-auto">
                  {step.desc}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:flex justify-center mt-6">
                    <ChevronRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-14"
          >
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
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border border-foreground/15 text-foreground font-sans font-medium text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" /> Book via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT THE SERVICE ─── */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground text-lg md:text-xl font-sans leading-relaxed mb-6">
              We understand that choosing the right design, colour and especially the right size of carpet can be confusing, so we offer a{" "}
              <span className="text-primary font-semibold">Free Home Trial</span> service.
              Available <strong>in Dubai and Sharjah</strong>.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-5 border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                <p className="text-foreground font-sans text-sm">
                  <strong>If you buy</strong> — pay by cash or credit card for what you like. No additional charges for the home trial.
                </p>
              </div>
              <div className="bg-background rounded-xl p-5 border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                <p className="text-foreground font-sans text-sm">
                  <strong>If you don't buy</strong> — pay nothing. Our team will simply pack the items and leave.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ELIGIBLE ITEMS ─── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
              Which Items Are <span className="text-primary italic">Eligible?</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {eligibleItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-secondary/40 rounded-xl p-6 border border-border hover:shadow-warm transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground font-sans text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─── */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
              What to <span className="text-primary italic">Expect</span>
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {expectations.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-serif font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-foreground font-sans text-sm pt-1">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-background">
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
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center">
              Frequently Asked <span className="text-primary italic">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-secondary/30 border border-border rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="font-sans font-medium text-foreground text-sm md:text-base hover:text-primary transition-colors py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans text-sm pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src={homeTrialBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(30_10%_5%/0.88)]" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-5">
              Ready to <span className="text-primary italic">Experience</span> at Home?
            </h2>
            <p className="text-primary-foreground/55 text-lg font-sans font-light max-w-xl mx-auto mb-10">
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

export default FreeHomeTrial;
