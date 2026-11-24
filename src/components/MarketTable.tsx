
import { IAllProductsType } from "@/app/types/products";

interface MarketTableProps {
  product: IAllProductsType;
}

const MarketTable = ({ product }: MarketTableProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
      <h2 className="py-3 text-base font-bold text-base-content sm:text-lg md:text-xl">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="w-full rounded-xl border border-base-300 bg-base-100 mb-10 sm:mb-16 lg:mb-30">
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-base-300 bg-base-200">
                <th className="px-3 sm:px-4 py-3 text-xs sm:text-sm md:text-base font-bold text-base-content/70 whitespace-nowrap">
                  বাজার
                </th>

                <th className="px-3 sm:px-4 py-3 text-xs sm:text-sm md:text-base font-bold text-base-content/70 whitespace-nowrap">
                  বিভাগ
                </th>

                <th className="px-3 sm:px-4 py-3 text-xs sm:text-sm md:text-base text-right font-bold text-base-content/70 whitespace-nowrap">
                  সর্বনিম্ন
                </th>

                <th className="px-3 sm:px-4 py-3 text-xs sm:text-sm md:text-base text-right font-bold text-base-content/70 whitespace-nowrap">
                  সর্বাধিক
                </th>

                <th className="px-3 sm:px-4 py-3 text-xs sm:text-sm md:text-base text-right font-bold text-base-content/70 whitespace-nowrap">
                  গড়
                </th>
              </tr>
            </thead>

            <tbody>
              {product?.markets?.map((market, index) => {
                const average = Math.round(
                  (market.min + market.max) / 2
                );

                return (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-b border-base-300 last:border-b-0"
                  >
                    <td className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm md:text-base text-base-content whitespace-nowrap">
                      {market.market}
                    </td>

                    <td className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm md:text-base text-base-content/70 whitespace-nowrap">
                      {market.division}
                    </td>

                    <td className="px-3 sm:px-4 py-3 text-right text-xs sm:text-sm md:text-base text-base-content/70 whitespace-nowrap">
                      {market.min.toLocaleString("bn-BD")} টাকা
                    </td>

                    <td className="px-3 sm:px-4 py-3 text-right text-xs sm:text-sm md:text-base text-base-content/70 whitespace-nowrap">
                      {market.max.toLocaleString("bn-BD")} টাকা
                    </td>

                    <td className="px-3 sm:px-4 py-3 text-right text-xs sm:text-sm md:text-base text-base-content/70 whitespace-nowrap">
                      {average.toLocaleString("bn-BD")} টাকা
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketTable;