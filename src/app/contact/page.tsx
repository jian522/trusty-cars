"use client";

import { useState } from "react";
import { contactInfo } from "@/data/cars";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    interestedCar: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          📞 联系我们
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">
              发送询价
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  提交成功！
                </h3>
                <p className="text-gray-600">
                  我们会尽快联系您。请保持通讯畅通。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  发送另一条询价
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      电话/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      所在国家
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                      placeholder="如：尼日利亚"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    感兴趣的车型
                  </label>
                  <input
                    type="text"
                    value={formData.interestedCar}
                    onChange={(e) =>
                      setFormData({ ...formData, interestedCar: e.target.value })
                    }
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="如：丰田卡罗拉 2021款"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    留言
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="请描述您的需求..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                >
                  📤 发送询价
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">
                快速联系
              </h2>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace("+", "")}`}
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition"
                >
                  <span className="text-3xl">💬</span>
                  <div>
                    <p className="font-bold text-green-700">WhatsApp</p>
                    <p className="text-gray-600">{contactInfo.whatsapp}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <span className="text-3xl">📱</span>
                  <div>
                    <p className="font-bold text-blue-700">微信</p>
                    <p className="text-gray-600">{contactInfo.wechat}</p>
                  </div>
                </div>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition"
                >
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="font-bold text-red-700">Email</p>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`https://facebook.com/${contactInfo.facebook}`}
                  target="_blank"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  <span className="text-3xl">📘</span>
                  <div>
                    <p className="font-bold text-blue-700">Facebook</p>
                    <p className="text-gray-600">{contactInfo.facebook}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                🕐 工作时间
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>周一至周五: 9:00 - 18:00 (北京时间)</li>
                <li>周六: 10:00 - 16:00 (北京时间)</li>
                <li>周日: 休息</li>
                <li className="pt-2 text-green-600">
                  ✓ 紧急询价可随时通过WhatsApp联系
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">⚡ 响应时间</h2>
              <p className="text-blue-100">
                我们承诺在工作时间内
                <span className="font-bold text-white"> 30分钟内 </span>
                响应您的询价。
              </p>
              <p className="text-blue-100 mt-2">
                紧急需求可拨打WhatsApp，
                <span className="font-bold text-white"> 24小时在线 </span>
                为您服务。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
