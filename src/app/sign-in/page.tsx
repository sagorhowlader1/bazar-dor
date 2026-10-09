import AuthOptions from "@/components/AuthOptions";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center mt-6 ">

        <div className="py-5 text-center">
            <h2 className="text-2xl font-bold text-black">সাইন ইন</h2>
            <p className="text-[#1d271f80] py-1">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
        </div>
      <fieldset className="fieldset bg-base-100  border border-base-300 rounded-2xl p-4">
       

        <label className="label">ইমেইল</label>
        <input type="email" className="input w-md" placeholder="you@example.com" />

        <label className="label">পাসওয়ার্ড</label>
        <input type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />

    
        <button className="btn bg-green-600 text-white mt-4">অ্যাকাউন্ট তৈরি করুন</button>

            <AuthOptions />
            <p className="mt-6 text-center text-sm text-gray-600">
        অ্যাকাউন্ট নেই? {" "}
        <Link href="/sign-up" className="font-medium text-green-600 transition hover:text-green-700">সাইন আপ করুন</Link>
      </p>

      </fieldset>
      <Link href={"/"} className="pt-5 text-[#1d271f80]">← হোম পেজে ফিরে যান</Link>
        </div>
    </div>
  );
};

export default SignInPage;
