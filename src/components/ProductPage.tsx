import { IProduct } from "@/app/types/products";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";

interface ProductPageProps {
  product: IProduct;
}

const ProductPage = ({ product }: ProductPageProps) => {
  console.log(product, 'product ')
  return (
    <main className=" ">
      <div className="max-w-7xl mx-auto px-3 py-5 sm:px-5 sm:py-7">
        <div className="flex gap-2.5 items-center">

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
