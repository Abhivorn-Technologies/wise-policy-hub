import { useState } from "react";
import { motion } from "framer-motion";
import careLogo from "@/assets/partners/care.png";
import cholaLogo from "@/assets/partners/chola.png";
import futureLogo from "@/assets/partners/future.png";
import hdfclLogo from "@/assets/partners/hdfc-l.png";
import icicilLogo from "@/assets/partners/icicil.png";
import kotakLogo from "@/assets/partners/kotak.png";
import libertyLogo from "@/assets/partners/liberty.png";
import bajajLogo from "@/assets/partners/bajaj.png";
import magmaLogo from "@/assets/partners/magma.png";
import nationalLogo from "@/assets/partners/national.jpeg";
import niaLogo from "@/assets/partners/New_India_Assurance.png";
import orientalLogo from "@/assets/partners/oriental.png";
import relianceLogo from "@/assets/partners/reliance.png";
import sbiLogo from "@/assets/partners/sbi.png";
import tataaigLogo from "@/assets/partners/tataaig.png";

const partners = [
  { name: "Care Health", logo: careLogo },
  { name: "Cholamandalam", logo: cholaLogo },
  { name: "Future Generali", logo: futureLogo },
  { name: "HDFC Life", logo: hdfclLogo },
  { name: "ICICI Lombard", logo: icicilLogo },
  { name: "Kotak Life", logo: kotakLogo },
  { name: "Liberty General", logo: libertyLogo },
  { name: "Bajaj Allianz", logo: bajajLogo },
  { name: "Magma HDI", logo: magmaLogo },
  { name: "National Insurance", logo: nationalLogo },
  { name: "New India Assurance", logo: niaLogo },
  { name: "Oriental Insurance", logo: orientalLogo },
  { name: "Reliance General", logo: relianceLogo },
  { name: "SBI General", logo: sbiLogo },
  { name: "Tata AIG", logo: tataaigLogo },
];

const firstRow = [...partners.slice(0, 8), ...partners.slice(0, 8)];
const secondRow = [...partners.slice(8), ...partners.slice(8)];

const PartnerCard = ({ partner }: { partner: typeof partners[0] }) => (
  <div className="flex-shrink-0 w-[160px] sm:w-[200px] h-[100px] sm:h-[120px] p-4 mx-3 rounded-2xl bg-card border border-border/50 shadow-elegant hover:shadow-glow hover:border-primary/40 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden group">
    <div className="relative w-full h-full flex items-center justify-center">
      <img 
        src={partner.logo} 
        alt={partner.name} 
        className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    <div className="absolute bottom-2 text-[8px] font-bold text-muted-foreground opacity-0 group-hover:opacity-100 uppercase tracking-widest transition-opacity duration-300">
      {partner.name}
    </div>
  </div>
);

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="partners" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Insurance Partners</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            Trusted by <span className="gradient-text">15+ Industry Leaders</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We collaborate with India's top-rated insurance providers to ensure you get the best coverage and value.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div 
        className="relative w-full space-y-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Row 1: Left to Right */}
        <div className="flex relative overflow-hidden sm:before:absolute sm:before:left-0 sm:before:top-0 sm:before:z-10 sm:before:h-full sm:before:w-32 sm:before:bg-gradient-to-r sm:before:from-background sm:before:to-transparent sm:after:absolute sm:after:right-0 sm:after:top-0 sm:after:z-10 sm:after:h-full sm:after:w-32 sm:after:bg-gradient-to-l sm:after:from-background sm:after:to-transparent">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={isHovered ? {} : { x: [0, -1600] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {firstRow.map((partner, i) => (
              <PartnerCard key={`row1-${i}`} partner={partner} />
            ))}
            {firstRow.map((partner, i) => (
              <PartnerCard key={`row1-dup-${i}`} partner={partner} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex relative overflow-hidden sm:before:absolute sm:before:left-0 sm:before:top-0 sm:before:z-10 sm:before:h-full sm:before:w-32 sm:before:bg-gradient-to-r sm:before:from-background sm:before:to-transparent sm:after:absolute sm:after:right-0 sm:after:top-0 sm:after:z-10 sm:after:h-full sm:after:w-32 sm:after:bg-gradient-to-l sm:after:from-background sm:after:to-transparent">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={isHovered ? {} : { x: [-1600, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {secondRow.map((partner, i) => (
              <PartnerCard key={`row2-${i}`} partner={partner} />
            ))}
            {secondRow.map((partner, i) => (
              <PartnerCard key={`row2-dup-${i}`} partner={partner} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;



