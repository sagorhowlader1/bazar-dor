import { IAllProductsType } from "@/app/types/products";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface ProductHeaderProps {
  product: IAllProductsType;
}
const ProductHeader = ({ product }: ProductHeaderProps) => {
  const isUp = product?.change?.dir === "up";
  return (
    <div className="rounded-xl border max-w-7xl mx-auto border-base-300 bg-base-100 px-4 py-4 shadow-sm sm:px-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg
                    bg-base-200 text-xl"
          >
            {product?.image}
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-base font-bold text-base-content sm:text-lg">
              {product?.nameBn}
            </h1>
            <p className="mt-1 text-[9px] text-base-content/50 sm:text-[13px]">
              প্রতি কেজি · {product?.categoryNameBn}
            </p>
            <p className="mt-1 text-[9px] text-base-content/50 sm:text-[13px]">
              গতকালের তুলনায় আজ দাম বেড়েছে · {product?.yesterday.toLocaleString("bn-BD")}
            </p>
          </div>
        </div>

        <div className="shrink-0 rounded-lg bg-base-200 px-4 py-2 text-center">
          <p className="text-[8px] text-base-content/50 sm:text-[9px]">আজকের দাম</p>
          <p className="text-lg text-bold text-base-content sm:text-2xl">
            {product?.today.toLocaleString("bn-BD")}
          </p>
         

          <p className="text-[8px] text-base-content/50 sm:text-[12px]">
            টাকা/কেজি
          </p>

          <p
            className={`mt-0.5 text-[11px] font-semibold ${isUp ? "text-red-500" : "text-green-600"}`}
          >
            {isUp ? <FaCaretUp /> : <FaCaretDown />} {product?.change?.pct.toLocaleString("bn-BD")}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
