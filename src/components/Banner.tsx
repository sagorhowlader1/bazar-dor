import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerPage = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="max-w-7xl mx-auto bg-base-100 my-10 pb-10 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="px-5">
          <div className="flex">
            <h3
              className="text-[#05893E] font-bold px-2 py-1  bg-[#05893e27]
                rounded-2xl"
            >
              {date}
            </h3>
          </div>
          <h2 className="text-black font-bold text-4xl py-4">
            আজকের বাজারের দাম এক নজরে
          </h2>
          <p className="text-[#1d271f80] pb-5">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন- <br /> সর্বাধিক এবং দামের পরিবর্তন এক
            জায়গায়।
          </p>
          <Link href={"/"}>
            <button className="btn bg-[#16A34A] text-white">
              সব পণ্য দেখুন
            </button>
          </Link>
        </div>

        <div>
          <Image
            width={300}
            height={300}
            src={"/bazar-hero.png"}
            alt="bannerLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
