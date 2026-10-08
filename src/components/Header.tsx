import Image from "next/image";
import Link from "next/link";
import UserInfo from "./UserInfo";
import NavLinks from "./NavLinks";

const HeaderPage = async () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className=" ">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center ">
          <Link href="/">
            <div className="flex justify-center items-center gap-3">
              <Image
                width={40}
                height={40}
                src={"/logo-icon.png"}
                alt="Logo"
                className="bg-green-600 rounded-xl px-2 py-2"
              />

              <div className="flex flex-col  justify-center items-center sm:items-start">
                <h1 className="text-black text-2xl font-bold">বাজার দর</h1>
                <p className="">{date}</p>
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
