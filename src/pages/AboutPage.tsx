import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import PageHeader from "@/components/PageHeader";
import useSeo from "@/hooks/use-seo";

const AboutPage = () => {
  useSeo({
    title: "About Us — Sree Insurance Services",
    description:
      "Learn about Sree Insurance Services — a licensed insurance intermediary connecting you with India's most reliable insurers.",
  });
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Who We"
        highlight="Are"
        description="A licensed insurance intermediary built around one promise — putting you first."
      />
      <About />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
