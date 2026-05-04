import { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

const Index = () => {
  useEffect(() => {
    document.title = "Sree Insurance Services — Your Trusted Insurance Partner";
    const desc = "Compare and buy health, life, motor & business insurance from 15+ top insurers. Expert advice, best premiums, hassle-free claims.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
};

export default Index;
