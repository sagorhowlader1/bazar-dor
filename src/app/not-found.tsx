import Link from "next/link";

export const metadata = {
  title: "৪০৪ — পেজটি পাওয়া যায়নি | বাজার দর",
};

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="text-6xl font-bold text-green-600 sm:text-7xl">৪০৪</span>
      <h1 className="text-xl font-bold text-black sm:text-2xl">
        পেজটি পাওয়া যায়নি
      </h1>
      <p className="max-w-md text-sm text-[#1d271f80] sm:text-base">
        আপনি যে পেজটি খুঁজছেন সেটি নেই অথবা সরিয়ে ফেলা হয়েছে।
      </p>
      <Link href="/" className="btn bg-green-600 text-white mt-2">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
