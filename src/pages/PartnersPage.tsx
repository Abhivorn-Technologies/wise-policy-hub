import Partners from "@/components/Partners";
import useSeo from "@/hooks/use-seo";

const PartnersPage = () => {
  useSeo({
    title: "Insurance Partners — Sree Insurance Services",
    description:
      "We partner with India's most trusted insurance companies — LIC, HDFC Life, ICICI Prudential, Star Health, and many more.",
  });
  return (
    <div className="pt-20">
      <Partners />
    </div>
  );
};

export default PartnersPage;
