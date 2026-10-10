"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <div>
      {user ? (
        <div className=" text-center flex">
          <div className="avatar gap-3 items-center">
            <div className="ring-primary ring-offset-base-100 w-15 rounded-full ring-2 ring-offset-2">
              <Image
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
                width={30}
                height={20}
                referrerPolicy="no-referrer"
                
              />
            </div>

            <Link href={"/profile"}>
              <h2 className="py-2 flex gap-1">
                {user?.name} <GoTriangleDown />
              </h2>
            </Link>
          </div>
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
