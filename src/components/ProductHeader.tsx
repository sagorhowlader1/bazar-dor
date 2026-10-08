
import { IProduct } from "@/app/types/products";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

interface ProductHeaderProps {
    product: IProduct;
}
const  ProductHeader = ({product}:ProductHeaderProps) => {
    const isUp = product?.change?.dir === "up"
    return (
        <div className="rounded-xl border max-w-7xl mx-auto border-gray-200 bg-white px-4 py-4 shadow-sm sm:px-5">
            <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg
                    bg-gray-50 text-xl">
                        {product?.image}
                    </div>

                    <div className="min-w-0">
                            <h1 className="truncate text-base font-bold text-gray-900 sm:text-lg">{product?.nameBn}</h1>
                            <p className="truncate mt-1 text-[9px] text-gray-500 sm:text-[10px]">{product?.categoryNameBn} • {product?.unit} </p>
                    </div>
                </div>


                <div className="shrink-0 rounded-lg bg-gray-50 px-4 py-2 text-center">
                    <p className="text-[8px] text-gray-500 sm:text-[9px]">বর্তমান দাম</p>
                    <p className="text-lg text-bold text-gray-900 sm:text-xl">
                        <TbCurrencyTaka />{product?.today}
                    </p>

                    <p className="text-[8px] text-gray-500 sm:text-[9px]">প্রতি / {product?.unit}</p>

                    <p
                    className={`mt-0.5 text-[9px] font-semibold ${isUp ? "text-red-500" : "text-green-600"}`}
                    >
                        {isUp ? <FaCaretUp /> :  <FaCaretDown />} {product?.change?.pct}%
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default ProductHeader;