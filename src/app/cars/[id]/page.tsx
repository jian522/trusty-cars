import { exportHotCars, contactInfo } from "@/data/cars";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return exportHotCars.map((car) => ({
    id: car.id,
  }));
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = exportHotCars.find((c) => c.id === params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/cars"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← 返回车型库
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-80 bg-gray-200 relative">
                {car.images.length > 0 ? (
                  <Image
                    src={car.images[0]}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <span className="text-8xl">🚗</span>
                  </div>
                )}
              </div>
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-2 p-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div
                    key={i}
                    className="h-20 bg-gray-100 rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {car.brand} {car.model} {car.year}
              </h1>
              <p className="text-gray-600 mb-4">{car.descriptionEn}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ${car.priceUSD.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500">
                  ¥{car.price.toLocaleString()}
                </span>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">里程</span>
                  <p className="font-semibold">{car.mileage}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">变速箱</span>
                  <p className="font-semibold">{car.transmission}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">燃料</span>
                  <p className="font-semibold">{car.fuelType}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">排放</span>
                  <p className="font-semibold">{car.emission}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">颜色</span>
                  <p className="font-semibold">{car.color}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">位置</span>
                  <p className="font-semibold">{car.location}</p>
                </div>
              </div>

              {/* Export Countries */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">🚀 适合出口国家</h3>
                <div className="flex flex-wrap gap-2">
                  {car.exportCountries.map((country) => (
                    <span
                      key={country}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
                    >
                      → {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace("+", "")}?text=我对${car.brand}${car.model}${car.year}感兴趣`}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-lg font-bold transition"
                >
                  📱 WhatsApp询价
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=询价：${car.brand} ${car.model} ${car.year}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-lg font-bold transition"
                >
                  📧 发送邮件
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
