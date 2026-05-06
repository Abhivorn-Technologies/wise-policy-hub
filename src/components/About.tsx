import { motion } from "framer-motion";
import { Award, HandshakeIcon, Users } from "lucide-react";

const points = [
  {
    icon: HandshakeIcon,
    title: "We're Your Mediator",
    desc: "We bridge the gap between you and top insurance companies, simplifying complex policies into clear choices.",
  },
  {
    icon: Award,
    title: "Trusted Expertise",
    desc: "With years of industry experience, our certified advisors guide you to the right coverage every time.",
  },
  {
    icon: Users,
    title: "Customer-First",
    desc: "From quote to claim, we stand by you — making sure you get fair, fast, and friendly service.",
  },
];

const About = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</span>
        <h2 className="mt-3 text-3xl lg:text-5xl font-bold leading-tight">
          Bridging You to the <span className="gradient-text">Best Insurance</span> Plans
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Sree Insurance Services is a licensed insurance intermediary connecting individuals and businesses with India's most reliable insurers. As your trusted partner, we don't represent one company — we represent <strong className="text-foreground">you</strong>.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Our role is simple: understand your needs, compare 15+ providers, and recommend the policy that delivers the best value, coverage, and peace of mind.
        </p>
      </motion.div>

      <div className="space-y-5">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-5 p-6 rounded-2xl bg-card shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-smooth border border-border/50"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-elegant">
              <p.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
