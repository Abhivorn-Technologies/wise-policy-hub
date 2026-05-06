import { motion } from "framer-motion";
import { Users, Building2, ShieldCheck, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15,000+",
    label: "Happy Clients",
    desc: "Trusted by individuals and families across India.",
  },
  {
    icon: Building2,
    value: "15+",
    label: "Insurance Partners",
    desc: "Collaborating with the industry's top-rated providers.",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Claims Settled",
    desc: "Our commitment to being there when you need us most.",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    desc: "A decade of expertise in insurance consulting.",
  },
];

const Stats = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-primary/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">By The Numbers</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Impact in Numbers</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A decade of commitment to protecting what matters most to you and your family.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-background flex items-center justify-center shadow-elegant group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl lg:text-5xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
