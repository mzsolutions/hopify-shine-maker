import { motion } from "framer-motion";
import { Palette, BadgeCheck, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Carpets For All Tastes & Sizes",
    description:
      "From modern to traditional to bohemian – available in a variety of shapes and sizes to perfectly complement your home.",
  },
  {
    icon: BadgeCheck,
    title: "Price Match Promise",
    description:
      "Find a lower price? We'll match it, guaranteed satisfaction!",
  },
  {
    icon: Award,
    title: "Quality You Can Trust",
    description:
      "Made from the finest raw materials, each carpet carries centuries of craftsmanship, hand-finished with care.",
  },
  {
    icon: Truck,
    title: "Next Day Delivery",
    description:
      "Order today, get it tomorrow! Fast and reliable delivery across the GCC.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
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
            Our Promise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Every piece we offer is selected with intention, crafted with care, 
            and delivered with love.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-warm"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
