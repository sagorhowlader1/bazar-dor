
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const avatarSrc =
    typeof user?.image === "string" && user.image.trim() !== ""
      ? user.image
      : null;

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="avatar items-center">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-green-500 bg-base-200 shadow-md ring-2 ring-green-500/10 sm:h-14 sm:w-14">
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

            <Link href="/profile" className="min-w-0">
              <h2 className="flex items-center gap-1 py-2">
                <span className="max-w-[64px] truncate sm:max-w-[140px]">
                  {user.name}
                </span>
                <GoTriangleDown className="shrink-0" />
              </h2>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/sign-in">
            <button className="btn btn-ghost px-2.5 text-base-content transition-colors hover:text-base-content sm:px-4">
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
