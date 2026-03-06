"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页", labelEn: "Home" },
  { href: "/cars", label: "燃油车", labelEn: "Cars" },
  { href: "/e-cars", label: "⚡ 新能源", labelEn: "EV Cars" },
  { href: "/about", label: "关于我们", labelEn: "About" },
  { href: "/contact", label: "联系我们", labelEn: "Contact" },
];

const languages = [
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" },
  { code: "ar", label: "عربي" },
  { code: "ru", label: "RU" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState("zh");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚗</span>
            <span className="text-xl font-bold text-blue-900">
              Trusty Used Cars
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${
                  pathname === item.href
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {lang === "en" ? item.labelEn : item.label}
              </Link>
            ))}
          </div>

          {/* Language & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <Link
              href="/admin"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition"
            >
              管理
            </Link>
            <a
              href="https://wa.me/8618079079999"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              咨询
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-green-600"
                onClick={() => setMenuOpen(false)}
              >
                {lang === "en" ? item.labelEn : item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
