import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const FounderSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary rounded-lg" />
              
              {/* Main image */}
              <div className="relative z-10 w-full h-full rounded-lg overflow-hidden shadow-elevated">
                <img
                  src={founderImage}
                  alt="Alisha Arora - Founder of Handpicked Furniture"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 z-20 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-warm"
              >
                <p className="font-serif text-lg font-medium">Alisha Arora</p>
                <p className="text-sm text-primary-foreground/80">Founder & CEO</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pl-8"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Meet the Founder
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
              A Passion Born from Heritage
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hi, I'm <span className="text-foreground font-medium">Alisha Arora</span>, 
                the founder of Handpicked Furniture — and unofficially, the Chief Cosy 
                Officer of every home we touch.
              </p>
              
              <p>
                Born into a family of fabric lovers — my mother, a skilled artisan, and 
                my father, a wholesale fabrics trader — I grew up watching beauty take 
                shape, one stitch at a time. Designing homes isn't just my passion, 
                it's my inheritance.
              </p>
              
              <p>
                You're not just a customer — you're part of the story. From my home to yours.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-sm text-muted-foreground">Follow the journey:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
