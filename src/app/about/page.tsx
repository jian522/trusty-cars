import { contactInfo } from "@/data/cars";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🏢 关于我们
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Intro */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              公司简介
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Trusty Used Cars 是专业的中二手车出口服务商。我们致力于为全球客户提供高品质的二手汽车出口服务，
              涵盖丰田、宝马、奔驰、雷克萨斯等热门品牌。凭借多年的行业经验和专业的服务团队，
              我们已成功将数千台优质二手车出口到非洲、中东、东南亚、欧美等地区。
            </p>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">
              🚢 出口服务
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="font-bold mb-1">车辆检测</h3>
                  <p className="text-sm text-gray-600">
                    专业团队进行全面的车辆检测，确保车况优良
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h3 className="font-bold mb-1">清关代理</h3>
                  <p className="text-sm text-gray-600">
                    熟悉各国进出口政策，代办清关手续
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🚢</div>
                <div>
                  <h3 className="font-bold mb-1">海运物流</h3>
                  <p className="text-sm text-gray-600">
                    提供RORO和集装箱等多种运输方式
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📄</div>
                <div>
                  <h3 className="font-bold mb-1">文档代办</h3>
                  <p className="text-sm text-gray-600">
                    全套出口文档代办，省心省力
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              ✅ 质量保证
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✓ 所有车辆提供详细的检测报告</li>
              <li>✓ 三大件原漆，无水泡无火烧</li>
              <li>✓ 完整的维修保养记录</li>
              <li>✓ 合法合规的出口资质</li>
              <li>✓ 售后服务跟踪</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              📞 联系方式
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>
                <span className="font-bold">WhatsApp:</span>{" "}
                {contactInfo.whatsapp}
              </p>
              <p>
                <span className="font-bold">微信:</span> {contactInfo.wechat}
              </p>
              <p>
                <span className="font-bold">Email:</span> {contactInfo.email}
              </p>
              <p>
                <span className="font-bold">Facebook:</span>{" "}
                {contactInfo.facebook}
              </p>
              <p>
                <span className="font-bold">地址:</span> {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
