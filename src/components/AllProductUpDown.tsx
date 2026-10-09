import ProductUp from "./ProductUp";

import ProductDown from "./ProductDown";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface IAllProductsType {
    id: number;
    nameBe: string;
    categoryIcon: string;
    unit: string;
    today: number;
    change: {
        dir: string;
        pct: number;
    };
}
const AllProductUpDown = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const data: IAllProductsType[] = await res.json();

    const upProducts = data.filter(
        (product) => product.change.dir === "up"
    );

    const downProducts = data.filter(
        (product) => product.change.dir === "down"
    );

    return (
        <div className="max-w-7xl mx-auto">
            <div className="py-3">
                <h2 className="text-2xl font-bold text-black py-2">
                    <span className="text-red-500">
                            <FaCaretUp />
                    </span>
                    আজ দাম বেড়েছে
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {upProducts.slice(0, 6).map((product) => (
                    <ProductUp key={product.id} product={product} />
                ))}
            </div>

            <div className="py-3">
                <h2 className="text-2xl font-bold text-black py-2">
                    <span className="text-green-600">
                            <FaCaretDown />
                    </span>
                    আজ দাম কমেছে
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {downProducts.slice(0, 6).map((product) => (
                    <ProductDown key={product.id} product={product}  />
                ))}
            </div>
        </div>
    );
};

export default AllProductUpDown;