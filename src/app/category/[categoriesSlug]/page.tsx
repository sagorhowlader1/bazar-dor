"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface IProduct {
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

type SortType = "default" | "low" | "high";

const CategoriesPage = () => {
  const params = useParams<{ categoriesSlug: string }>();
  const categoriesSlug = params.categoriesSlug;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortBy, setSortBy] = useState<SortType>("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch(
          `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(categoriesSlug)}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data: IProduct[] = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid products response");
        }

        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoriesSlug]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "low") {
      return a.today - b.today;
    }

    if (sortBy === "high") {
      return b.today - a.today;
    }

    return a.id - b.id;
  });

  if (loading) {
    return <div className="max-w-7xl mx-auto">Loading...</div>;
  }

  if (error) {
    return <div>Not a Product...</div>;
  }

  if (products.length === 0) {
    return <div className="max-w-7xl mx-auto">Not a Category</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-5">
        <div className="flex justify-end px-4 mt-10 py-2 bg-base-100 rounded-md items-center gap-2">
          <span className="text-sm text-gray-600">সাজান</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortType)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-transparent"
          >
            <option value="default">ডিফল্ট</option>
            <option value="default">দাম:কম থেকে বেশি</option>
            <option value="default">দাম:বেশি থেকে কম</option>
          </select>
        </div>

        <div className="py-3 font-medium">
          <p className="text-[#1d271f80]">
            মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
        {sortedProducts.map((products) => (
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
                    <ul className="flex flex-col text-xs">
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
                          <span className="text-gray-500 text[15px] font-semibold">
                            - 0.0%
                          </span>
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

export default CategoriesPage;
