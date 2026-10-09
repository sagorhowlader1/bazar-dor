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
  console.log(data, 'marquee data');
  return (
    <div className="py-2 sticky top-0 z-50 bg-gray-50">
      <MarqueeText direction="right" duration={10}>
        <div className="flex m-2">
          {data.map((headerlins) => {
            const isUp = headerlins.change.dir === "up";

            return (
              <Link key={headerlins.id} href={`/products/${headerlins.id}`}>


                <span className="ml-5 whitespace-nowrap text-xs text-gray-700">
                  {headerlins.categoryIcon} {headerlins.nameBn} {" "}
                  {headerlins.today.toLocaleString("bn-BD")} টাকা/কেজি
                  
                  
                  <span className={isUp ? "text-red-500" : "text-green-600"}>
                    {isUp ? `${<FaCaretUp />}` : `${<FaCaretDown />}`}{" "}
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
