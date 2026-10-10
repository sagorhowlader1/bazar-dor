"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async() => {
    await authClient.signOut();
  }
  return (
    <div>
      {user ? (
        <div className="my-1 items-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-15 rounded-full ring-2 ring-offset-2">
              <Image
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
                width={30}
                height={20}
                referrerPolicy="no-referrer"
                />
            </div>
          </div>
          <h2 className="py-2">{user?.name}</h2>
          <button onClick={handleSignOut} className="btn  btn-success">সাইন আউট</button>
        </div>
      ) : (
        <div>
          <Link href="/sign-in">
            <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-black">
              সাইন ইন
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="btn bg-green-600 px-3 py-1.5 font-semibold text-white transition-colors">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
