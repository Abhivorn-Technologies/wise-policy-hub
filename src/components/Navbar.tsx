import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Shield, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Insurance Partners", to: "/partners" },
  { label: "Reviews", to: "/reviews" },
  { label: "Claim", to: "/claim" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled || open ? "bg-background/85 backdrop-blur-lg shadow-elegant" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-elegant group-hover:scale-110 transition-smooth">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg gradient-text">Sree Insurance</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Services</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-smooth",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-lg border-t border-border",
          open ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="container mx-auto py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 rounded-lg font-medium transition-smooth",
                  isActive ? "bg-primary/10 text-primary" : "hover:bg-primary/5 hover:text-primary"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
