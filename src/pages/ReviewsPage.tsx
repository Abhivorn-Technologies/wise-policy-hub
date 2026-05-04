import Reviews from "@/components/Reviews";
import PageHeader from "@/components/PageHeader";
import useSeo from "@/hooks/use-seo";

const ReviewsPage = () => {
  useSeo({
    title: "Customer Reviews — Sree Insurance Services",
    description:
      "Read real stories from thousands of happy customers who trust Sree Insurance Services with their insurance needs.",
  });
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Loved by"
        highlight="Thousands"
        description="Real stories from real customers who trust us with their insurance needs."
      />
      <Reviews />
    </>
  );
};

export default ReviewsPage;
