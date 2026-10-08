import AllProducts from "@/components/AllProducts";
import BannerPage from "@/components/Banner";

import { IProduct } from "./types/products";



export default async function Home() {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
  const data:IProduct[] = await res.json()
  console.log(data, 'date api')
  return (
    <div className="bg-[#f4f8f5]">
    <BannerPage />
    <AllProducts />
    {/* <ProductPage product={data[0]} /> */}
    </div>
  );
}
