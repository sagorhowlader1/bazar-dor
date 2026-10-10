import ProductHeader from "../../../components/ProductHeader";
import PriceSummary from "../../../components/PriceSummary";
import MarketTable from "../../../components/MarketTable";
import ProductPage from "@/components/ProductPage";

interface DetailsPageProps {
  params: Promise<{ detailSlug: string }>;
}
const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { detailSlug } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${detailSlug}`,
  );
  const product = await res.json();
  console.log(detailSlug, "detailsulug");
  return (
    <div className="border rounded-xl mt-4  p-3.5 sm:p-4 border-gray-200 bg-white">
      <ProductPage product={product} />
      <ProductHeader product={product} />
      <PriceSummary product={product} />
      <MarketTable product={product} />
    </div>
  );
};

export default DetailsPage;
