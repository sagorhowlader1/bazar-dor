"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

import { Bounce, toast } from "react-toastify";

const PorfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

 
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;

    await authClient.updateUser({ name });

    if (name) {
      toast.success("নাম আপডেট হয়েছে।", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };


  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          আমার প্রোফাইল
        </h2>
        <p className="text-[#1d271f80] font-medium">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>
      <div className="mt-5 card bg-base-100 border-gray-300 border ">
        <div className="flex flex-col  gap-2">
          <div className="my-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-10 py-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-12 sm:w-14 rounded-full ring-2 ring-offset-2">
                  
                     <Image
                    alt="Tailwind-CSS-Avatar-component"
                    src={user?.image as string}
                    width={30}
                    height={20}
                    referrerPolicy="no-referrer"
                  />

                </div>
              </div>
              
              <div className="min-w-0">
                <h2 className="font-bold text-black break-words">{user?.name}</h2>
                <p className="text-[#1d271f80] break-all">{user?.email}</p>
              </div>
            </div>


            <div>
              <Link href={"/sign-in"}>
              <button
              onClick={handleSignOut}
              className="btn border border-red-500 text-base sm:text-xl font-bold text-red-400"
              >
                  ↩ সাইন আউট
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>





      <form onSubmit={handleUpdateProfile} className="mt-10 sm:mt-20">
        <fieldset className="fieldset bg-base-100 px-4 sm:px-10 pb-10 pt-10 sm:pt-15 border border-base-300 rounded-2xl">
          <h2 className="text-black font-bold text-xl sm:text-2xl pb-6 sm:pb-10">
            তথ্য
          </h2>
          <label className="label text-base sm:text-xl">নাম</label>
          <input type="name" name="name" className="input w-full py-3" />
          <button
            type="submit"
            className="btn bg-green-600 py-3 text-white mt-4"
          >
            আপডেট
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default PorfilePage;
