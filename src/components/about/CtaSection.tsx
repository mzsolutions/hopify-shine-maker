import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import lifestyleImage from "@/assets/lifestyle.jpg";

const CtaSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={lifestyleImage}
          alt="Happy family on Handpicked Furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-terracotta-light font-medium tracking-widest text-sm uppercase">
            Join Our Family
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6 leading-tight">
            Ready to Transform Your Home?
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Explore our curated collection of carpets, curtains, and furniture. 
            Free delivery across the GCC with 7-day returns on carpets.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full group"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-medium rounded-full"
            >
              Contact Us
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <p className="text-2xl font-serif text-primary-foreground">Free</p>
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">Delivery</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-serif text-primary-foreground">7 Days</p>
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">Returns</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-serif text-primary-foreground">GCC</p>
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">Wide Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
