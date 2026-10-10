import BannerPage from "@/components/Banner";
import AllProducts from "@/components/AllProducts";
import { IAllProductsType } from "./types/products";

import AllProductUpDown from "@/components/AllProductUpDown";



export default async function Home() {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
  const data:IAllProductsType[] = await res.json()
 
  return (
    <div className="bg-[#f4f8f5]">
      <BannerPage />
      <AllProductUpDown  />
      <AllProducts />
    </div>
  );
}
