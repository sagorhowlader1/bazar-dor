import Image from "next/image";
import Link from "next/link";
import UserInfo from "./UserInfo";
import NavLinks from "./NavLinks";

const HeaderPage = async () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative z-[60]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <Link href="/">
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              <Image
                width={40}
                height={40}
                src={"/logo-icon.png"}
                alt="Logo"
                className="bg-green-600 rounded-xl p-1.5 sm:p-2 h-9 w-9 sm:h-10 sm:w-10"
              />

              <div className="flex flex-col  justify-center items-center sm:items-start">
                <h1 className="text-black text-lg sm:text-2xl font-bold">
                  বাজার দর
                </h1>
                <p className="hidden sm:block">{date}</p>
              </div>
            </div>
          </Link>
          <UserInfo />
        </div>

        <NavLinks />
      </div>
    </header>
  );
};

export default HeaderPage;
