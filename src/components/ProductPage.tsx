import { IAllProductsType } from "@/app/types/products";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";

interface ProductPageProps {
  product: IAllProductsType;
}

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <main className=" ">
      <div className="max-w-7xl mx-auto px-3 py-5 sm:px-5 sm:py-7">
        <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center text-sm sm:text-base">

        <Link href={"/"}>
        <span>হোম</span>
        </Link>
        <span>
          <PiGreaterThan />
        </span>
        <span>{product?.categoryNameBn}</span>
        <span>
          <PiGreaterThan />
        </span>
        <span className="text-gray-700">{product?.nameBn}</span>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
