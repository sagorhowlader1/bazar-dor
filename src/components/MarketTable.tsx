import { IProduct } from "@/app/types/products";


interface MarketTableProps {
  product: IProduct;
}

const MarketTable = ({ product }: MarketTableProps) => {
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="py-3 text-xl font-bold text-gray-800 sm:text-sm">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="overflow-hidden max-w-7xl mx-auto rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[100px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-3 py-2 text-3xl font-semibold text-gray-700 sm:text-[10px]">
                  বাজার
                </th>
                <th className="px-3 py-2 text-3xl font-semibold text-gray-700 sm:text-[10px]">
                  বিভাগ
                </th>
                <th className="px-3 py-2 text-3xl font-semibold text-gray-700 sm:text-[10px]">
                  সর্বনিম্ন
                </th>
                <th className="px-3 py-2 text-3xl font-semibold text-gray-700 sm:text-[10px]">
                  সর্বাধিক
                </th>
                <th className="px-3 py-2 text-3xl font-semibold text-gray-700 sm:text-[10px]">
                  গড়
                </th>
              </tr>
            </thead>

            <tbody>
              {product?.markets?.map((market, index) => {
                const average = Math.round(
                  (market.min + market.max) / 2
                );
                return(
                  <tr key={`${market.market}-${index}`}
                  className="border-b border-gray-200 last:border-b-0"
                  >
                      <td className="px-3 py-2 text-left text-3xl text-gray-800">
                        {market.market}
                      </td>
                      <td className="px-3 py-2 text-left text-3xl text-gray-600">
                        {market.division}
                      </td>
                      <td className="px-3 py-2 text-right text-3xl text-gray-700">
                        {`${market.min}টাকা`}
                      </td>
                      <td className="px-3 py-2 text-right text-3xl text-gray-700">
                        {`${market.max}টাকা`}
                      </td>
                      <td className="px-3 py-2 text-right text-3xl text-gray-700">
                        {`${average}টাকা`}
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
