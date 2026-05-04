import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import useSeo from "@/hooks/use-seo";

const Index = () => {
  useSeo({
    title: "Sree Insurance Services — Your Trusted Insurance Partner",
    description:
      "Compare and buy health, life, motor & business insurance from 15+ top insurers. Expert advice, best premiums, hassle-free claims.",
  });

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Partners />
      <WhyChooseUs />
      <Reviews />
    </>
  );
};

export default Index;
