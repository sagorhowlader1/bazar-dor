import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IMarqueeType {
  id: number;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  console.log(data)
  return (
    <div className="py-2 sticky top-0 z-50 bg-gray-50">
      <MarqueeText direction="right" duration={10} >
        <div className="flex m-2">
          {data.map((headerlins: IMarqueeType, i: number) => (
            <Link key={i} href={`/products/${headerlins.id}`}>
                <span className="ml-5">{headerlins.categoryIcon} {headerlins.nameBn} 
                  {headerlins.today.toLocaleString("bn-BD")}{" /"}
              {headerlins.unit} {"   "}
              {headerlins.change.dir} {"   "} {headerlins.change.pct}
                </span>
            </Link>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
