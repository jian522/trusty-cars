import Link from "next/link";
import Image from "next/image";
import { popularBrands, exportHotCars, neCars, contactInfo } from "@/data/cars";

export default function Home() {
  // 热门新能源车
  const hotNECars = neCars.filter((car) => car.featured).slice(0, 6);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🚗 中国二手车出口专家
            </h1>
            <p className="text-xl mb-8">
              专业二手车出口服务，涵盖燃油车/新能源车型。品质保证，全球配送。
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                📱 WhatsApp咨询
              </a>
              <Link
                href="/cars"
                className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition"
              >
                查看燃油车
              </Link>
              <Link
                href="/e-cars"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                ⚡ 查看新能源
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Car Type Selection */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/cars"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white"
            >
              <div className="relative z-10">
                <span className="text-4xl mb-2 block">🚗</span>
                <h3 className="text-2xl font-bold mb-2">燃油车</h3>
                <p className="text-blue-100">
                  丰田、宝马、奔驰、雷克萨斯等热门车型
                </p>
                <span className="inline-block mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium group-hover:bg-blue-50 transition">
                  查看全部 →
                </span>
              </div>
            </Link>

            <Link
              href="/e-cars"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-green-800 p-8 text-white"
            >
              <div className="relative z-10">
                <span className="text-4xl mb-2 block">⚡</span>
                <h3 className="text-2xl font-bold mb-2">新能源</h3>
                <p className="text-green-100">
                  比亚迪、特斯拉、小鹏、蔚来等新能源车型
                </p>
                <span className="inline-block mt-4 bg-white text-green-600 px-4 py-2 rounded-lg font-medium group-hover:bg-green-50 transition">
                  查看全部 →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hot Fuel Cars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              🔥 热门燃油车
            </h2>
            <Link href="/cars" className="text-green-600 hover:underline">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportHotCars.slice(0, 6).map((car) => (
              <Link
                key={car.id}
                href={`/cars/${car.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <span className="text-4xl">🚗</span>
                  </div>
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    热门
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {car.brand} {car.model} {car.year}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{car.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      ${car.priceUSD.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm">{car.mileage}</span>
                  </div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {car.exportCountries.map((country: string) => (
                      <span
                        key={country}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
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
      </section>

      {/* Hot NE Cars */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-green-800">
              ⚡ 热门新能源车
            </h2>
            <Link href="/e-cars" className="text-green-600 hover:underline">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotNECars.map((car) => (
              <Link
                key={car.id}
                href={`/e-cars/${car.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-green-100 to-blue-100 relative">
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    ⚡ {car.fuelType}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{car.range}续航</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      ${car.priceUSD.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm">{car.mileage}</span>
                  </div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {car.exportCountries.map((country: string) => (
                      <span
                        key={country}
                        className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded"
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
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🏆 为什么选择我们
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">品质保证</h3>
              <p className="text-gray-600">专业检测，确保每台车况优良</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">全球配送</h3>
              <p className="text-gray-600">覆盖非洲、中东、东南亚、欧美</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2">一站式服务</h3>
              <p className="text-gray-600">清关、物流全程代办</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">客户至上</h3>
              <p className="text-gray-600">7×24小时咨询服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            📞 立即咨询，开启出口之旅
          </h2>
          <p className="text-xl mb-8">
            专业团队为您服务，解答所有出口问题
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
            >
              WhatsApp: {contactInfo.whatsapp}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition text-lg"
            >
              发送邮件
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
