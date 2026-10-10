
import Link from "next/link";

interface INavLinksType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();
  console.log(data, 'navLinks data');
  return (
    <div>
      <div className="flex gap-6 my-2 font-medium">
      {data?.map((navs: INavLinksType, i: number) => (
        <Link key={i} href={`/category/${navs?.slug}`}>
          {navs?.icon} {navs?.nameBn}
        </Link>
      ))}
    </div>
    </div>
  );
};

export default NavLinks;
