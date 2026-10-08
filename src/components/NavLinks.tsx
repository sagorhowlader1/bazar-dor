import Link from "next/link";

interface INavLinksType  {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const NavLinks = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const data = await res.json()
   console.log(data)
    return (
    
        <div className="flex gap-6 my-3 font-medium">
            {
                data?.map((navs:INavLinksType, i:number) => <Link key={i} href={`/categories/${navs?.slug}`}>{navs?.icon} {navs?.nameBn}</Link> )
            }
        </div>
    );
};

export default NavLinks;