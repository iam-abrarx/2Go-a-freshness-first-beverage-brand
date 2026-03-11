"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#design-hero" },
  { name: "Menu", href: "#categories" },
  { name: "Stories", href: "#stories" },
  { name: "Reviews", href: "#reviews" },
  { name: "Locations", href: "#locations" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("design-hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBeyondSection2, setIsBeyondSection2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);
      
      // Threshold for "Crossing Section 2"
      // Hero is h-screen, Mission is approx 400px
      const threshold = window.innerHeight + 200;
      setIsBeyondSection2(scrollPos > threshold);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.substring(1));
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[500] flex justify-center p-0 transition-transform duration-500"
    >
      <div 
        className={`flex items-center justify-between w-full transition-all duration-700 ease-in-out px-8 md:px-16 py-4 bg-[var(--primary)] ${
          isScrolled ? "shadow-lg py-3" : "py-6"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-3 group">
          <div className="relative w-24 h-10 md:w-28 md:h-12 transition-transform group-hover:scale-110 active:scale-95">
            <Image 
              src={getAssetPath("/assets/logo.png")} 
              alt="2GO Logo" 
              fill 
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-2 px-2 py-1.5 rounded-2xl transition-all duration-500 bg-white/10`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-[2px] transition-all duration-500 ${
                activeSection === link.href.substring(1)
                  ? "bg-white text-[var(--primary)] shadow-lg scale-105"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
           <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, "#contact")}
            className={`btn-primary !py-3 !px-8 !text-[10px] !rounded-xl shadow-xl transition-all duration-500 ${
                isBeyondSection2 ? "!bg-[var(--yellow)] !text-[var(--text-dark)]" : "!bg-white !text-[var(--secondary)]"
            }`}
           >
            Find Us
           </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 overflow-hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""} bg-white`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 -translate-x-full" : ""} bg-white`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""} bg-white`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[400] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden flex flex-col items-center justify-center text-center p-12 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } bg-[var(--primary)]`}
      >
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-20 opacity-10">
           <Image src={getAssetPath("/assets/logo.png")} alt="" fill className="object-contain" />
        </div>
        
        <div className="flex flex-col gap-8 w-full">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-4xl font-display uppercase tracking-tighter transition-all duration-500 ${
                activeSection === link.href.substring(1) 
                  ? "text-[var(--primary)] bg-white px-6 py-2 rounded-xl scale-110"
                  : "text-white/40 hover:text-white"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-8 border-t border-white/10 mt-8">
             <p className={`text-[10px] font-black uppercase tracking-[4px] mb-6 ${isBeyondSection2 ? "text-white/20" : "text-gray-400"}`}>Mastermind Collection</p>
             <div className="flex justify-center gap-6">
                <span className="w-3 h-3 rounded-full bg-[var(--primary)]" />
                <span className="w-3 h-3 rounded-full bg-[var(--secondary)]" />
                <span className="w-3 h-3 rounded-full bg-[var(--yellow)]" />
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
