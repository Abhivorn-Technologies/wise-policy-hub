import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT, mailLink, telLink } from "@/lib/contact";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Reviews", to: "/reviews" },
  { label: "Claim", to: "/claim" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Health Insurance",
  "Life Insurance",
  "Car Insurance",
  "Bike Insurance",
  "Commercial Vehicle Insurance",
  "Home Insurance",
  "Travel Insurance",
  "Business Insurance",
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => (
  <footer className="bg-[hsl(260_45%_10%)] text-[hsl(270_30%_85%)] pt-16 pb-8">
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <div className="flex items-center gap-2 mb-6 group cursor-pointer w-fit">
          <img 
            src={logo} 
            alt="Wise Policy Hub" 
            className="h-20 w-auto object-contain brightness-0 invert opacity-80 transition-all duration-500 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-hover:scale-105" 
          />
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
            <li key={l.to}>
              <Link to={l.to} className="opacity-75 hover:opacity-100 hover:text-primary-glow transition-smooth">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-sm">
          {services.map((s) => (
            <li key={s}>
              <Link 
                to="/services" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="opacity-75 hover:opacity-100 hover:text-primary-glow transition-smooth"
              >
                {s}
              </Link>
            </li>
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
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
        <span>© {new Date().getFullYear()} Sree Insurance Services. All rights reserved.</span>
        <span className="hidden sm:inline opacity-30">|</span>
        <span>Developed by <a href="https://abhivorn.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-glow transition-smooth font-medium">Abhivorn Technologies</a></span>
      </div>
      <div className="flex gap-5">
        <a href="#" className="hover:text-primary-glow transition-smooth">Privacy Policy</a>
        <a href="#" className="hover:text-primary-glow transition-smooth">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
