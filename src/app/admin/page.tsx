"use client";

import { useState } from "react";
import { exportHotCars, type Car } from "@/data/cars";

export default function AdminPage() {
  const [cars, setCars] = useState<Car[]>(exportHotCars);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const deleteCar = (id: string) => {
    if (confirm("确定删除这台车吗？")) {
      setCars(cars.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-blue-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🚗 后台管理</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
          >
            + 添加车型
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm">总车型</h3>
            <p className="text-3xl font-bold text-blue-600">{cars.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm">热门车型</h3>
            <p className="text-3xl font-bold text-green-600">
              {cars.filter((c) => c.featured).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm">丰田车型</h3>
            <p className="text-3xl font-bold text-red-600">
              {cars.filter((c) => c.brand === "Toyota").length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm">豪华品牌</h3>
            <p className="text-3xl font-bold text-purple-600">
              {cars.filter((c) =>
                ["BMW", "Mercedes-Benz", "Lexus"].includes(c.brand)
              ).length}
            </p>
          </div>
        </div>

        {/* Car List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  车型
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  年份
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  价格
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  里程
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  热门
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cars.map((car) => (
                <tr key={car.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {car.brand} {car.model}
                    </div>
                    <div className="text-sm text-gray-500">{car.location}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{car.year}</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-green-600">
                      ${car.priceUSD.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{car.mileage}</td>
                  <td className="px-6 py-4">
                    {car.featured ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        热门
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        普通
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingCar(car)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => deleteCar(car.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        删除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {(showAddForm || editingCar) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingCar ? "编辑车型" : "添加新车型"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowAddForm(false);
                setEditingCar(null);
                alert(editingCar ? "更新成功！" : "添加成功！");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    品牌
                  </label>
                  <input
                    type="text"
                    defaultValue={editingCar?.brand}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    型号
                  </label>
                  <input
                    type="text"
                    defaultValue={editingCar?.model}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    年份
                  </label>
                  <input
                    type="number"
                    defaultValue={editingCar?.year}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    价格(美元)
                  </label>
                  <input
                    type="number"
                    defaultValue={editingCar?.priceUSD}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    里程
                  </label>
                  <input
                    type="text"
                    defaultValue={editingCar?.mileage}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    变速箱
                  </label>
                  <input
                    type="text"
                    defaultValue={editingCar?.transmission}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    燃料类型
                  </label>
                  <input
                    type="text"
                    defaultValue={editingCar?.fuelType}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    排放标准
                  </label>
                  <input
                    type="text"
                    defaultValue={editingCar?.emission}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  描述(中文)
                </label>
                <textarea
                  defaultValue={editingCar?.description}
                  className="w-full border rounded-lg px-3 py-2"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  描述(英文)
                </label>
                <textarea
                  defaultValue={editingCar?.descriptionEn}
                  className="w-full border rounded-lg px-3 py-2"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  适合出口国家（用逗号分隔）
                </label>
                <input
                  type="text"
                  defaultValue={editingCar?.exportCountries.join(", ")}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="非洲, 中东, 东南亚"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  defaultChecked={editingCar?.featured}
                />
                <label htmlFor="featured" className="text-sm font-medium">
                  设为热门车型
                </label>
              </div>
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingCar(null);
                  }}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingCar ? "更新" : "添加"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
