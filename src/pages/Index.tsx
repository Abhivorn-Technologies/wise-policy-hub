import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Queries from "@/components/Queries";
import useSeo from "@/hooks/use-seo";

const Index = () => {
  useSeo({
    title: "Sree Insurance Services — Your Trusted Insurance Partner",
    description:
      "Compare and buy health, life, car, bike, home, travel & business insurance from 15+ top insurers. Expert advice, best premiums, hassle-free claims.",
  });

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Partners />
      <Stats />
      <WhyChooseUs />
      <Queries />
    </>
  );
};

export default Index;
