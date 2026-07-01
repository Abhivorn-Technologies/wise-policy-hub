import { motion } from "framer-motion";
import { Briefcase, Car, Heart, HeartPulse, ArrowUpRight, Truck, Bike, Home, Plane } from "lucide-react";

const services = [
  {
    id: "health-insurance",
    icon: HeartPulse,
    title: "Health Insurance",
    desc: "Comprehensive medical coverage for individuals and families with cashless hospitalization at 10,000+ network hospitals.",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "life-insurance",
    icon: Heart,
    title: "Life Insurance",
    desc: "Secure your family's future with term plans, ULIPs, and savings policies tailored to your life goals.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "car-insurance",
    icon: Car,
    title: "Car Insurance",
    desc: "Keep your car protected against accidents, theft, and third-party liabilities with instant policy issuance.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "bike-insurance",
    icon: Bike,
    title: "Bike Insurance",
    desc: "Comprehensive and third-party insurance for your two-wheeler with quick renewals and quick claims.",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "commercial-vehicle-insurance",
    icon: Truck,
    title: "Commercial Vehicle Insurance",
    desc: "Specialized coverage for trucks, buses, and other commercial vehicles to keep your business moving.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "home-insurance",
    icon: Home,
    title: "Home Insurance",
    desc: "Protect your home and its contents from natural calamities, fire, theft, and other unforeseen events.",
    color: "from-sky-500 to-indigo-500",
  },
  {
    id: "travel-insurance",
    icon: Plane,
    title: "Travel Insurance",
    desc: "Stay worry-free during your international and domestic trips with medical and travel-related coverage.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "business-insurance",
    icon: Briefcase,
    title: "Business Insurance",
    desc: "Safeguard your business assets, employees, and operations with custom commercial insurance solutions.",
    color: "from-indigo-500 to-purple-500",
  },
];

const Services = () => (
  <section id="services" className="py-20 lg:py-28 gradient-soft relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
    <div className="container mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</span>
        <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
          Insurance Solutions for <span className="gradient-text">Every Need</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          From your health to your wheels, we've got you covered with the best policies in the market.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            id={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-7 rounded-3xl bg-card border border-border/50 shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-smooth overflow-hidden"
          >
            <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${s.color} opacity-10 group-hover:opacity-20 transition-smooth`} />
            <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-elegant mb-5`}>
              <s.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
            <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
