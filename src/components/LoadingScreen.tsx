"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      window.dispatchEvent(new CustomEvent("2go-site-ready"));
    }, 2000); // 2 seconds minimum display time for aesthetic

    // Remove from DOM after fade animation
    const visibilityTimer = setTimeout(() => {
      if (isLoaded) setIsVisible(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
    };
  }, [isLoaded]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#ebefd7] transition-opacity duration-800 ease-in-out ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Logo */}
        <div className="relative w-32 h-16 md:w-48 md:h-24 mb-8 animate-pulse-gentle">
          <Image
            src={getAssetPath("/assets/logo.png")}
            alt="2Go Logo"
            fill
            className="object-contain brightness-0"
            priority
          />
        </div>

        {/* Brand Mantra */}
        <div className="overflow-hidden">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[8px] text-[var(--text-dark)] animate-reveal-text">
            Born Fresh. Served Real.
          </p>
        </div>

        {/* Subtle Loading Line */}
        <div className="absolute -bottom-12 w-32 h-[1px] bg-[var(--text-dark)]/10 overflow-hidden">
          <div className="w-full h-full bg-[var(--primary)] origin-left animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
