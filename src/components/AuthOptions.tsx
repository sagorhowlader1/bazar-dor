import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

const AuthOptions = () => {

  const handleGoogleSignIn = async() => {
    const data = await authClient.signIn.social({
      provider: "google"
    });
  };


  const handleGithubSignIn = async() => {
    const data = await authClient.signIn.social({
      provider: "github"
    })
  }
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-2">
      <div className="mb-3 flex items-center gap-4">
        <div className="h-[2px] flex-1 bg-gray-200" />
        <span className="whitespace-nowrap text-sm text-gray-600">অথবা</span>
        <div className="h-[2px] flex-1 bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <button
        onClick={handleGoogleSignIn}
          type="button"className="flex min-w-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#dce8el] bg-transparent px-4 py-4 text-sm font-medium text-gray-800 transition hover:bg-base-300"
        >
          <FaGoogle className="shrink-0 text-base" />
          <span>Google দিয়ে চালিয়ে যান</span>
        </button>


        <button
        onClick={handleGithubSignIn}
          type="button"
          className="flex min-w-10 items-center cursor-pointer justify-center gap-2 rounded-2xl border border-b-gray-200 bg-transparent px-4 py-4 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
        >
          <FaGithub className="shrink-0 text-base" />
          <span>GitHub দিয়ে চালিয়ে যান</span>
        </button>
      </div>
    </div>
  );
};

export default AuthOptions;
