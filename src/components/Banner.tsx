import Image from "next/image";
import Link from "next/link";

const BannerPage = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="max-w-7xl mx-auto bg-base-100 my-6 sm:my-10 px-4 sm:px-6 pb-8 sm:pb-10 pt-6 sm:pt-8 rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="w-full sm:w-auto">
          <div className="flex">
            <h3
              className="text-[#05893E] font-bold px-2 py-1 bg-[#05893e27]
                rounded-2xl text-sm sm:text-base"
            >
              {date}
            </h3>
          </div>
          <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl py-4">
            আজকের বাজারের দাম এক নজরে
          </h2>
          <p className="text-[#1d271f80] pb-5 text-sm sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন- <br className="hidden sm:inline" /> সর্বাধিক
            এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <Link href={"/"}>
            <button className="btn bg-[#16A34A] text-white">
              সব পণ্য দেখুন
            </button>
          </Link>
        </div>

        <div className="flex w-full justify-center sm:w-auto">
          <Image
            width={300}
            height={300}
            src={"/bazar-hero.png"}
            alt="bannerLogo"
            className="h-auto w-44 sm:w-60 md:w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
