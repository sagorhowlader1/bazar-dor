import { IAllProductsType } from "@/app/types/products";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

interface ProductHeaderProps {
  product: IAllProductsType;
}
const ProductDown = ({ product }: ProductHeaderProps) => {
  return (
    <Link href={`/detailPage/${product.id}`}>
      <div className="my-2 mx-2">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex gap-2 items-center px-2 py-2">
              <h2 className="bg-[#f4f8f5] rounded-xl px-2 py-2">
                {product?.categoryIcon}
              </h2>

              <div className=" flex flex-col text-xs">
                <span className="text-xl">{product?.nameBn}</span>
                <span className="">প্রতি কেজি</span>
              </div>
            </div>
            <ul>
              <li>
                <span>আজকের দাম</span>
              </li>

              <li className="flex justify-between items-center">
                <span className="text-black font-bold">
                  {`${product?.today?.toLocaleString("bn-BD")} টাকা`}
                </span>

                <span
                  className="flex items-center text-green-600
                                text-[15px] font-semibold"
                >
                  <FaCaretDown />
                  {product?.change?.pct.toLocaleString("bn-BD")}%
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductDown;
