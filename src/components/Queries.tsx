import { motion } from "framer-motion";
import { MessageSquare, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CONTACT } from "@/lib/contact";

const Queries = () => {
  return (
    <section className="pt-6 lg:pt-8 pb-20 lg:pb-28 relative overflow-hidden bg-background">
      <div className="container mx-auto relative px-4">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/80 p-6 lg:p-10 relative overflow-hidden shadow-2xl">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm mb-2">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight whitespace-nowrap">
                Still Have <span className="text-white/80">Questions?</span>
              </h2>
              <p className="text-base text-primary-foreground/90 leading-relaxed max-w-lg">
                Whether you're confused about policy terms or need help choosing the right plan, our experts are just a message away.
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm sm:text-base">{CONTACT.phoneDisplay}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">Send us a Message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Drop your details and we'll get back to you within 2 business hours.
              </p>
              
              <div className="space-y-3">
                <Link to="/contact" className="block">
                  <Button variant="hero" size="lg" className="w-full h-12 text-base">
                    Contact Our Experts <Send className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <p className="text-center text-[11px] text-muted-foreground italic uppercase tracking-wider">
                  Free consultation • No hidden fees
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Queries;
