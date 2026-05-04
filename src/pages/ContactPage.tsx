import Contact from "@/components/Contact";
import useSeo from "@/hooks/use-seo";

const ContactPage = () => {
  useSeo({
    title: "Contact Us — Sree Insurance Services",
    description:
      "Get in touch with Sree Insurance Services. Call, email, or send us a message — we respond within 24 hours.",
  });
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
};

export default ContactPage;
