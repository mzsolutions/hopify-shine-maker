import { motion } from "framer-motion";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import carpetsImage from "@/assets/carpets-stack.jpg";

const StorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Our Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            The Birth of Handpicked Furniture
          </h2>
        </motion.div>

        {/* Story Grid */}
        <div className="space-y-20">
          {/* Story Block 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h3 className="font-serif text-3xl text-foreground mb-6">
                Craft in My DNA
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a dream quickly became a mission to bring warmth and 
                beauty into modern homes. Thus, Handpicked Furniture was born — with 
                one guiding principle:
              </p>
              <blockquote className="border-l-4 border-primary pl-6 my-6">
                <p className="font-serif text-xl text-foreground italic">
                  "Ingenious design, awesome quality — every product is handpicked to delight."
                </p>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                Made from the finest raw materials, each carpet carries centuries of 
                craftsmanship, hand-finished with care and perfected through meticulous 
                detailing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={craftsmanshipImage}
                    alt="Artisanal craftsmanship"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Story Block 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={carpetsImage}
                    alt="Stack of handcrafted carpets"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 -top-6 -left-6 w-2/3 h-2/3 bg-accent/20 rounded-2xl" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-3xl text-foreground mb-6">
                More Than a Business
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Starting out as a woman, a mother of two, and a first-time entrepreneur 
                came with its share of hurdles. But every challenge shaped our purpose:
              </p>
              <p className="text-lg text-foreground font-medium mb-6">
                To create homes that feel soft underfoot, calming to the eyes, 
                and joyful to the soul.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve customers across the GCC, bringing the same passion, 
                quality, and personal touch to every order — because your home 
                deserves nothing less.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
