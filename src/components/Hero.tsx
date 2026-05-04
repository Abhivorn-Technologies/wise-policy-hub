import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.jpg";
import { telLink } from "@/lib/contact";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden gradient-soft">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className="container mx-auto relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted by 10,000+ Happy Customers
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Your Trusted <br />
            <span className="gradient-text">Insurance Partner</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            We compare policies from <strong className="text-foreground">15+ leading insurance companies</strong> to find you the perfect coverage at the best price. Expert advice, instant quotes, hassle-free claims.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {["Free Comparison", "Expert Guidance", "Quick Claims"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-success" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="rounded-full border-2 border-primary/20 hover:bg-primary/5">
              <a href={telLink}>
                <Phone className="w-4 h-4" /> Contact Us
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Partners</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-3xl font-bold gradient-text">10K+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Customers</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Claims</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 gradient-primary rounded-[2.5rem] blur-2xl opacity-30 animate-pulse-glow" />
          <img
            src={heroImg}
            alt="Family protected by Sree Insurance Services purple shield"
            width={1280}
            height={1024}
            className="relative rounded-[2.5rem] shadow-glow w-full h-auto animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
