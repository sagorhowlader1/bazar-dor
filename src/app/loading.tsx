export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Banner skeleton */}
      <div className="rounded-2xl bg-base-100 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full space-y-3 sm:flex-1">
            <div className="skeleton h-7 w-40 sm:w-56" />
            <div className="skeleton h-9 w-full sm:w-3/4" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-2/3" />
            <div className="skeleton h-10 w-40" />
          </div>
          <div className="skeleton hidden h-48 w-60 shrink-0 sm:block md:w-72" />
        </div>
      </div>

      {/* Section heading skeleton */}
      <div className="mt-8 space-y-3">
        <div className="skeleton h-7 w-40" />
        <div className="skeleton h-4 w-56" />
      </div>

      {/* Product cards skeleton */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton h-44 w-full" />
        ))}
      </div>
    </div>
  );
}
