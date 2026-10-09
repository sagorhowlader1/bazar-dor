import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface IAllProductsType {
  id: number;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}



const AllProducts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data:IAllProductsType[] = await res.json();
  console.log(data, "data category del");
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-3">
        <h2 className="text-2xl font-bold text-black py-2">সব পণ্য</h2>
        <p className="text-[#1d271f80]">
          মোট{data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
        {data.map((products) => (
          <Link key={products.id} href={`/detailPage/${products.id}`}>
            <div>
              <div className="my-2 mx-2">
                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex gap-2  items-center">
                      <h2 className="bg-[#f4f8f5] rounded-xl px-2 py-2">
                        {products?.categoryIcon}
                      </h2>
                      <div className=" flex flex-col text-xs">
                        <span className="text-xl">{products?.nameBn}</span>
                        <span className="">প্রতি কেজি</span>
                      </div>
                    </div>
                    <ul className=" flex flex-col text-xs">
                      <li>
                        <span>আজকের দাম</span>
                      </li>

                      <li className="flex justify-between items-center">
                        <span className="text-black font-bold">
                          {`${products?.today?.toLocaleString("bn-BD")} টাকা`}
                        </span>

                        {products.change.dir === "up" ? (
                          <span className="flex items-center text-red-600 text-[15px] font-semibold">
                              <FaCaretUp />
                              {products.change.pct.toLocaleString("bn-BD")}%
                          </span>
                        ) : products.change.dir === "down" ? (
                          <span className="flex items-center text-green-600 text-[15px] font-semibold">
                                <FaCaretDown />
                                {products.change.pct.toLocaleString("bn-BD")}%
                          </span>
                        ) : (
                          <span className="text-gray-500 text[15px] font-semibold">- 0.0%</span>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
