import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import useSeo from "@/hooks/use-seo";

const AboutPage = () => {
  useSeo({
    title: "About Us — Sree Insurance Services",
    description:
      "Learn about Sree Insurance Services — a licensed insurance intermediary connecting you with India's most reliable insurers.",
  });
  return (
    <div className="pt-20">
      <About />
      <WhyChooseUs />
    </div>
  );
};

export default AboutPage;
