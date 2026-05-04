import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Shield, Twitter } from "lucide-react";
import { CONTACT, mailLink, telLink } from "@/lib/contact";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insurance Partners", href: "#partners" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = ["Health Insurance", "Life Insurance", "Motor Insurance", "Business Insurance"];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[hsl(260_45%_10%)] text-[hsl(270_30%_85%)] pt-16 pb-8">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg text-white">Sree Insurance</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60">Services</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed opacity-75">
            Your trusted insurance partner — connecting you with India's top insurers for the perfect policy at the best price.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <button onClick={() => scrollTo(l.href)} className="opacity-75 hover:opacity-100 hover:text-primary-glow transition-smooth">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s} className="opacity-75 hover:opacity-100 hover:text-primary-glow transition-smooth cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-glow" />
              <a href={telLink} className="opacity-75 hover:opacity-100 transition-smooth">{CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-glow" />
              <a href={mailLink} className="opacity-75 hover:opacity-100 transition-smooth break-all">{CONTACT.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-glow" />
              <span className="opacity-75">{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-70">
        <div>© {new Date().getFullYear()} Sree Insurance Services. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-primary-glow transition-smooth">Privacy Policy</a>
          <a href="#" className="hover:text-primary-glow transition-smooth">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
