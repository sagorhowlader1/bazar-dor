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
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="avatar items-center">
            <div className="ring-primary ring-offset-base-100 w-11 sm:w-15 rounded-full ring-2 ring-offset-2">
              <Image
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
                width={30}
                height={20}
                referrerPolicy="no-referrer"
              />
            </div>

            <Link href={"/profile"} className="min-w-0">
              <h2 className="flex items-center gap-1 py-2">
                <span className="max-w-[64px] truncate sm:max-w-[140px]">
                  {user?.name}
                </span>
                <GoTriangleDown className="shrink-0" />
              </h2>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/sign-in">
            <button className="btn btn-ghost px-2.5 text-neutral-700 transition-colors hover:text-black sm:px-4">
              সাইন ইন
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="btn bg-green-600 px-2.5 py-1.5 font-semibold text-white transition-colors sm:px-3">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
