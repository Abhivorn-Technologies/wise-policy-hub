import { motion } from "framer-motion";

const partners = [
  "LIC of India", "HDFC Life", "ICICI Prudential", "SBI Life", "Max Life",
  "Bajaj Allianz", "Tata AIG", "Star Health", "Reliance General", "New India Assurance",
  "Care Health", "Niva Bupa", "Aditya Birla", "Kotak Life", "PNB MetLife",
];

const Partners = () => (
  <section id="partners" className="py-20 lg:py-28">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Insurance Partners</span>
        <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
          Backed by <span className="gradient-text">15+ Top Insurers</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          We partner with India's most trusted insurance companies to bring you unbeatable choice.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group aspect-[5/3] rounded-2xl bg-card border border-border/50 flex items-center justify-center p-4 text-center shadow-elegant hover:shadow-glow hover:-translate-y-1 hover:border-primary/40 transition-smooth"
          >
            <div>
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm group-hover:scale-110 transition-smooth">
                {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <div className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-smooth">
                {name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
