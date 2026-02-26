"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#categories" },
    { name: "Stores", href: "#locations" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Top Announcement Bar */}
      {!isScrolled && (
        <div className="bg-[var(--primary)] text-white text-[10px] font-extrabold uppercase tracking-[3px] py-2 mb-4">
          <div className="container flex justify-center items-center gap-4">
            <span>Free shipping on orders over ৳1200!</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Born Fresh. Served Real.</span>
          </div>
        </div>
      )}

      <div className="container">
        <div className="flex items-center justify-between relative min-h-[60px]">
          {/* Logo - Start */}
          <div className="flex justify-start items-center lg:w-[30%] shrink-0">
            <Link href="/" className="relative z-10 hover:scale-105 transition-transform flex items-center">
              <Image
                src={getAssetPath("/assets/logo.png")}
                alt="2Go Logo"
                width={100}
                height={50}
                className={`h-10 w-auto object-contain transition-all ${isScrolled ? "" : "brightness-0 invert"}`}
              />
            </Link>
          </div>

          {/* Nav Links - Center */}
          <div className="hidden lg:flex justify-center items-center lg:w-[40%]">
            <nav className="flex items-center gap-1 bg-transparent p-1 rounded-full border border-transparent">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-bold uppercase tracking-[2px] px-6 py-2.5 rounded-full transition-all flexitems-center justify-center ${
                    isScrolled 
                      ? "text-[var(--text-dark)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]" 
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section - End */}
          <div className="flex items-center justify-end lg:w-[30%] gap-3 shrink-0">
            <a
              href="tel:+8801715322138"
              className={`hidden xl:flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                isScrolled ? "bg-gray-50 hover:bg-gray-100" : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <svg className={`w-4 h-4 ${isScrolled ? "text-[var(--primary)]" : "text-[var(--yellow)]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className={`text-xs font-bold tracking-wide ${isScrolled ? "text-[var(--text-dark)]" : "text-white"}`}>+880 1715 322138</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801715322138"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl text-[11px] font-extrabold uppercase tracking-[1px] transition-all shadow-sm hover:shadow-md ${
                isScrolled
                  ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 hover:-translate-y-0.5"
                  : "bg-white text-[var(--primary)] hover:bg-[var(--yellow)] hover:text-[var(--text-dark)] hover:-translate-y-0.5"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Order on WhatsApp
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-[var(--text-dark)] hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[var(--text-dark)] z-[100] transition-transform duration-500 flex flex-col items-center justify-center ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className="absolute top-8 right-8 text-white p-2" onClick={() => setIsMenuOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="text-center space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-3xl font-display uppercase text-white hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/8801715322138"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-16 btn-primary !rounded-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Order on WhatsApp
        </a>

        <div className="absolute bottom-6 text-center text-white/30">
          <p className="text-[10px] font-black uppercase tracking-[3px]">Born Fresh. Served Real.</p>
        </div>
      </div>
    </header>
  );
}