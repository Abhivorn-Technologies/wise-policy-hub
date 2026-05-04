import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";
import useSeo from "@/hooks/use-seo";

const ContactPage = () => {
  useSeo({
    title: "Contact Us — Sree Insurance Services",
    description:
      "Get in touch with Sree Insurance Services. Call, email, or send us a message — we respond within 24 hours.",
  });
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in"
        highlight="Touch"
        description="Have questions? Need a quote? We're here to help — reach out today."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
