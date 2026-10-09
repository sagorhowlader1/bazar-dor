"use client";
import AuthOptions from "@/components/AuthOptions";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if(password !== confirmPassword){
            console.error("Not data ");
            return;
        }

       const {data, error} = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            callbackURL: "/"
        });
        
        if(data) {
            console.log(data)
        }

        if(error){
            console.log(error)
        }
    }
  return (
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center mt-6 ">

        <div className="py-5 text-center">
            <h2 className="text-2xl font-bold text-black">অ্যাকাউন্ট তৈরি করুন</h2>
            <p className="text-[#1d271f80] py-1">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
        </div>
      <form onSubmit={onSubmit}>
        <fieldset  className="fieldset bg-base-100  border border-base-300 rounded-2xl p-4">
        <label className="label">নাম</label>
        <input type="text" className="input w-md" placeholder="যেমন: রহিম উদ্দিন" />

        <label className="label">ইমেইল</label>
        <input type="email" className="input w-md" placeholder="you@example.com" />

        <label className="label">পাসওয়ার্ড</label>
        <input type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />

        <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
        <input type="password" className="input w-md " placeholder="আবার লিখুন" />

        <button type="submit" className="btn bg-green-600 text-white mt-4">অ্যাকাউন্ট তৈরি করুন</button>

            <AuthOptions />

            <p className="mt-6 text-center text-sm text-gray-600">
        অ্যাকাউন্ট আছে? {" "}
        <Link href="/sign-in" className="font-medium text-green-600 transition hover:text-green-700">সাইন ইন করুন</Link>
      </p>
      </fieldset>
      </form>
      <Link href={"/"} className="pt-5 text-[#1d271f80]">← হোম পেজে ফিরে যান</Link>
        </div>
    </div>
  );
};

export default SignUpPage;
