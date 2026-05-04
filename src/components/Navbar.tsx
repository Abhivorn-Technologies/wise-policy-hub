import { useEffect, useState } from "react";
import { Menu, Phone, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, telLink, whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insurance Partners", href: "#partners" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-elegant" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between h-20">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav("#home"); }} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-elegant group-hover:scale-110 transition-smooth">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg gradient-text">Sree Insurance</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Services</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-primary/5 transition-smooth"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden sm:flex w-10 h-10 rounded-full bg-success/10 text-success items-center justify-center hover:bg-success hover:text-success-foreground transition-smooth"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a
            href={telLink}
            aria-label={`Call ${CONTACT.phoneDisplay}`}
            className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 text-primary items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Phone className="w-4 h-4" />
          </a>
          <Button onClick={() => handleNav("#contact")} variant="hero" size="default" className="hidden md:inline-flex rounded-full">
            Get a Quote
          </Button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-lg border-t border-border",
          open ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="container mx-auto py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3 rounded-lg hover:bg-primary/5 hover:text-primary font-medium transition-smooth"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => handleNav("#contact")} variant="hero" size="lg" className="mt-2">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
