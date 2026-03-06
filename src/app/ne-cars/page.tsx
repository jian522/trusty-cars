import Link from "next/link";
import Image from "next/image";
import { neCars } from "@/data/cars";

export default function NECarsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            ⚡ 新能源二手车
          </h1>
          <p className="text-gray-600 text-lg">
            纯电动 · 插电混动 · 增程式
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                品牌
              </label>
              <select className="border rounded-lg px-4 py-2 min-w-[150px]">
                <option value="">全部品牌</option>
                <option value="比亚迪">比亚迪</option>
                <option value="特斯拉">特斯拉</option>
                <option value="小鹏">小鹏</option>
                <option value="蔚来">蔚来</option>
                <option value="理想">理想</option>
                <option value="其他">其他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                价格区间
              </label>
              <select className="border rounded-lg px-4 py-2 min-w-[150px]">
                <option value="">全部价格</option>
                <option value="0-20000">$20,000以下</option>
                <option value="20000-30000">$20,000-$30,000</option>
                <option value="30000-50000">$30,000-$50,000</option>
                <option value="50000+">$50,000以上</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                续航里程
              </label>
              <select className="border rounded-lg px-4 py-2 min-w-[150px]">
                <option value="">全部续航</option>
                <option value="0-300">300km以下</option>
                <option value="300-500">300-500km</option>
                <option value="500-700">500-700km</option>
                <option value="700+">700km以上</option>
              </select>
            </div>
          </div>
        </div>

        {/* NE Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neCars.map((car) => (
            <Link
              key={car.id}
              href={`/ne-cars/${car.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-56 bg-gradient-to-r from-green-50 to-blue-50 relative">
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  ⚡ {car.fuelType}
                </div>
                <div className="flex items-center justify-center h-full">
                  <span className="text-6xl">🚗</span>
                </div>
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

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-3">
                  <span>🔋 {car.battery}</span>
                  <span>📏 {car.range}</span>
                  <span>📏 {car.mileage}</span>
                  <span>🔄 自动</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      ${car.priceUSD.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {car.exportCountries.map((country: string) => (
                    <span
                      key={country}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                    >
                      → {country}
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
