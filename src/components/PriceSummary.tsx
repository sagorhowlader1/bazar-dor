import { IAllProductsType } from "@/app/types/products";

interface PriceSummaryProps {
  product: IAllProductsType;
}

const PriceSummary = ({ product }: PriceSummaryProps) => {
  const items = [
    {
      label: "সর্বনিম্ন দাম",
      value: `${product?.today?.toLocaleString("bn-BD")} টাকা`,
      color: "text-green-600",
      description: "সবচেয়ে কম দামের বাজার",
    },

    {
      label: "সর্বাধিক দাম",
      value: `${product?.today?.toLocaleString("bn-BD")} টাকা`,
      color: "text-red-500",
      description: "সবচেয়ে বেশি দামের বাজার",
    },

    {
      label: "গড় দাম",
      value: `${product?.today?.toLocaleString("bn-BD")} টাকা`,
      color: "text-green-600",
      description: "প্রতি কেজি-এর হিসাবে",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="mb-2 text-xs font-bold text-base-content py-4 sm:text-sm">
        দামের সারসংক্ষেপ
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-base-300 bg-base-100 px-3 py-2.5"
          >
            <p className="text-[12px] text-base-content/50">{item.label}</p>
            <p className={`mt-0.5 text-base font-bold ${item.color}`}>
              {item.value}
              <span className="ml-1 text-xl font-normal text-base-content/50">
                {" "}
              </span>
            </p>

            <p className="mt-0.5 text-[13px] text-base-content/50">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceSummary;
