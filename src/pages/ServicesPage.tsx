import Services from "@/components/Services";
import useSeo from "@/hooks/use-seo";

const ServicesPage = () => {
  useSeo({
    title: "Insurance Services — Sree Insurance Services",
    description:
      "Explore our health, life, motor and business insurance services tailored for individuals and enterprises across India.",
  });
  return (
    <div className="pt-20">
      <Services />
    </div>
  );
};

export default ServicesPage;
