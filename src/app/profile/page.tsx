"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

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
  const avatarSrc =
    typeof user?.image === "string" && user.image.trim()
      ? user.image
      : null;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-base-content">
          আমার প্রোফাইল
        </h2>
        <p className="text-base-content/50 font-medium">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>
      <div className="mt-5 card bg-base-100 border-base-300 border ">
        <div className="flex flex-col  gap-2">
          <div className="my-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-10 py-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                <div className="h-full w-full overflow-hidden rounded-full border-2 border-green-500 bg-base-200 shadow-md ring-2 ring-green-500/10">
                  {avatarSrc && (
                    <Image
                      alt="User Avatar"
                      src={avatarSrc}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </div>

              <div className="min-w-0">
                <h2 className="font-bold text-base-content break-words">{user?.name}</h2>
                <p className="text-base-content/50 break-all">{user?.email}</p>
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
          <h2 className="text-base-content font-bold text-xl sm:text-2xl pb-6 sm:pb-10">
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
