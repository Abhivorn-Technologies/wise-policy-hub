import Services from "@/components/Services";
import PageHeader from "@/components/PageHeader";
import useSeo from "@/hooks/use-seo";

const ServicesPage = () => {
  useSeo({
    title: "Insurance Services — Sree Insurance Services",
    description:
      "Explore our health, life, motor and business insurance services tailored for individuals and enterprises across India.",
  });
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Insurance for"
        highlight="Every Need"
        description="From your health to your wheels, we've got you covered with the best policies in the market."
      />
      <Services />
    </>
  );
};

export default ServicesPage;
