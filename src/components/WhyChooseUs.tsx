import { motion } from "framer-motion";
import { Clock, GitCompare, Sparkles, Wallet } from "lucide-react";

const benefits = [
  { icon: GitCompare, title: "Multiple Company Comparison", desc: "Compare quotes from 15+ insurers side-by-side in one place." },
  { icon: Sparkles, title: "Expert Advice", desc: "IRDA-certified advisors guide you to the right policy, free of cost." },
  { icon: Clock, title: "Quick Claim Assistance", desc: "Dedicated claims team that fights for you and settles fast." },
  { icon: Wallet, title: "Affordable Plans", desc: "Best premiums in the market with no hidden charges, ever." },
];

const WhyChooseUs = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
        <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
          The <span className="gradient-text">Smarter Way</span> to Buy Insurance
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group text-center p-7 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-smooth"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:gradient-primary group-hover:scale-110 transition-smooth">
              <b.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
