import Link from "next/link";
import Image from "next/image";
import { popularBrands, exportHotCars } from "@/data/cars";

export default function CarsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🚗 车型库
        </h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                品牌
              </label>
              <select className="border rounded-lg px-4 py-2 min-w-[150px]">
                <option value="">全部品牌</option>
                {popularBrands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                价格区间
              </label>
              <select className="border rounded-lg px-4 py-2 min-w-[150px]">
                <option value="">全部价格</option>
                <option value="0-10000">$10,000以下</option>
                <option value="10000-20000">$10,000-$20,000</option>
                <option value="20000-30000">$20,000-$30,000</option>
                <option value="30000-50000">$30,000-$50,000</option>
                <option value="50000+">$50,000以上</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                车型
              </label>
              <select className="border rounded-lg px-4 py-2 min-w-[150px]">
                <option value="">全部车型</option>
                <option value="sedan">轿车</option>
                <option value="suv">SUV</option>
                <option value="mpv">MPV</option>
                <option value="van">货车</option>
              </select>
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exportHotCars.map((car) => (
            <Link
              key={car.id}
              href={`/cars/${car.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-56 bg-gray-200 relative">
                {car.images.length > 0 ? (
                  <Image
                    src={car.images[0]}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <span className="text-6xl">🚗</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {car.brand} {car.model}
                  </h3>
                  <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {car.year}款
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {car.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-3">
                  <span>📏 {car.mileage}</span>
                  <span>🔄 {car.transmission}</span>
                  <span>⛽ {car.fuelType}</span>
                  <span>🌿 {car.emission}</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      ${car.priceUSD.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm ml-2">
                      ¥{car.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {car.exportCountries.map((country) => (
                    <span
                      key={country}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                    >
                      →{country}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
