
import ProductHeader from "../../../components/ProductHeader";
import { IProduct } from "../../types/products";
import PriceSummary from "../../../components/PriceSummary";
import MarketTable from "../../../components/MarketTable";
import ProductPage from "@/components/ProductPage";

interface DetailsPageProps {
  product: IProduct;
}
const DetailsPage = ({ product }: DetailsPageProps) => {
  return (
    <div>
      <ProductPage product={product} />
      <ProductHeader product={product} />
      <PriceSummary product={product} />
      <MarketTable product={product} />
    </div>
  );
};

export default DetailsPage;
