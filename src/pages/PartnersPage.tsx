import Partners from "@/components/Partners";
import PageHeader from "@/components/PageHeader";
import useSeo from "@/hooks/use-seo";

const PartnersPage = () => {
  useSeo({
    title: "Insurance Partners — Sree Insurance Services",
    description:
      "We partner with India's most trusted insurance companies — LIC, HDFC Life, ICICI Prudential, Star Health, and many more.",
  });
  return (
    <>
      <PageHeader
        eyebrow="Insurance Partners"
        title="Backed by"
        highlight="15+ Top Insurers"
        description="We work with India's most trusted insurance companies to bring you unbeatable choice."
      />
      <Partners />
    </>
  );
};

export default PartnersPage;
