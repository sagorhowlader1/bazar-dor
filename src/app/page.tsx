import BannerPage from "@/components/Banner";
import AllProducts from "@/components/AllProducts";
import { IProduct } from "./types/products";

import AllProductUpDown from "@/components/AllProductUpDown";
import { ToastContainer } from "react-toastify";


export default async function Home() {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
  const data:IProduct[] = await res.json()
  console.log(data, 'date api')
  return (
    <div className="bg-[#f4f8f5]">
      <BannerPage />
      <AllProductUpDown  />
      <AllProducts />
       <ToastContainer />
      {/* <ProductPage product={data[0]} /> */}
    </div>
  );
}
