import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
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
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: IMarqueeType[] = await res.json();

  return (
    <div className="py-2 sticky top-0 z-50 bg-gray-50 border border-gray-200">
      <MarqueeText direction="right" duration={10}>
        <div className="flex">
          {data.map((headerlins) => {
            const isUp = headerlins.change.dir === "up";

            return (
              <Link key={headerlins.id} href={`/products/${headerlins.id}`}>


                <span className="ml-5 whitespace-nowrap gap-2 text-xl font-medium flex text-gray-700">
                  {headerlins.categoryIcon} {headerlins.nameBn} {" "}
                  {headerlins.today.toLocaleString("bn-BD")} টাকা/কেজি
                  
                  
                  <span className={isUp ? "text-red-500 flex items-center" : "text-green-600 flex items-center"}>
                    {isUp ? <FaCaretUp /> : <FaCaretDown />}{" "}
                    {headerlins.change.pct.toLocaleString("bn-BD")}%
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
