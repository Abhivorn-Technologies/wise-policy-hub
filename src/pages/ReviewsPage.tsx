import Reviews from "@/components/Reviews";
import useSeo from "@/hooks/use-seo";

const ReviewsPage = () => {
  useSeo({
    title: "Customer Reviews — Sree Insurance Services",
    description:
      "Read real stories from thousands of happy customers who trust Sree Insurance Services with their insurance needs.",
  });
  return (
    <div className="pt-20">
      <Reviews />
    </div>
  );
};

export default ReviewsPage;
