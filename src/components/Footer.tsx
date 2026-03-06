import { contactInfo } from "@/data/cars";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">🚗 Trusty Used Cars</h3>
            <p className="text-gray-400">
              专业二手车出口服务，覆盖全球主要市场。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">
                  首页
                </a>
              </li>
              <li>
                <a href="/cars" className="hover:text-white transition">
                  车型库
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  关于我们
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">出口服务</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• 车辆检测</li>
              <li>• 清关代理</li>
              <li>• 海运物流</li>
              <li>• 文档代办</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📱 WhatsApp: {contactInfo.whatsapp}</li>
              <li>💬 微信: {contactInfo.wechat}</li>
              <li>📧 Email: {contactInfo.email}</li>
              <li>📘 Facebook: {contactInfo.facebook}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2026 Trusty Used Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
