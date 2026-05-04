import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Review {
  name: string;
  role: string;
  rating: number;
  feedback: string;
  initials: string;
}

const reviews: Review[] = [
  {
    name: "Priya Sharma",
    role: "Health Insurance",
    rating: 5,
    feedback: "Sree Insurance helped me compare 8 health plans in minutes. I saved ₹12,000 on my premium and got better coverage. Their advisor was patient and clear.",
    initials: "PS",
  },
  {
    name: "Rahul Verma",
    role: "Motor Insurance",
    rating: 5,
    feedback: "Filed a claim after a minor accident — settled in just 4 days! The team handled all paperwork with the insurer. Truly stress-free service.",
    initials: "RV",
  },
  {
    name: "Anita Desai",
    role: "Life Insurance",
    rating: 5,
    feedback: "I was confused between term and ULIP. Their advisor explained everything in simple terms and recommended the perfect plan for my family's future.",
    initials: "AD",
  },
  {
    name: "Vikram Singh",
    role: "Business Insurance",
    rating: 5,
    feedback: "Got my entire office insured — fire, theft, liability. The customized plan fits my business perfectly. Highly recommend for SMEs.",
    initials: "VS",
  },
  {
    name: "Meera Iyer",
    role: "Family Floater",
    rating: 5,
    feedback: "Renewed my family floater with them last year. Smooth process, transparent pricing, no hidden charges. Will continue with them.",
    initials: "MI",
  },
  {
    name: "Arjun Reddy",
    role: "Two Wheeler",
    rating: 4,
    feedback: "Quick quotes, friendly team. Got my bike insured in less than 15 minutes. Will definitely come back next year.",
    initials: "AR",
  },
];

const Reviews = () => (
  <section id="reviews" className="py-20 lg:py-28 gradient-soft relative overflow-hidden">
    <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-accent/15 blur-3xl" aria-hidden />
    <div className="container mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Reviews</span>
        <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
          Loved by <span className="gradient-text">Thousands</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Real stories from real customers who trust us with their insurance needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.article
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative p-7 rounded-3xl bg-card border border-border/50 shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-smooth"
          >
            <Quote className="absolute top-5 right-5 w-10 h-10 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 ${idx < r.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                />
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 text-sm">"{r.feedback}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/60">
              <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {r.initials}
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
