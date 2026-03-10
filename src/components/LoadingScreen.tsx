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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#ebefd7] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isLoaded ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="relative flex flex-col items-center">
        {/* Pulsing Logo */}
        <div className="relative w-32 h-16 md:w-48 md:h-24 mb-12 transform transition-all duration-1000">
          <Image
            src={getAssetPath("/assets/logo.png")}
            alt="2Go Logo"
            fill
            className="object-contain brightness-0"
            priority
          />
          {/* Accent glow behind logo */}
          <div className="absolute inset-0 bg-[var(--primary)] blur-3xl opacity-10 animate-pulse-gentle -z-10" />
        </div>

        {/* Brand Mantra with staggered reveal */}
        <div className="overflow-hidden mb-12">
          <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[12px] text-[var(--text-dark)] animate-reveal-text translate-y-full opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
            Born Fresh. Served Real.
          </p>
        </div>

        {/* Premium Progress Bar */}
        <div className="relative w-48 h-[2px] bg-black/5 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20 animate-shimmer" />
          <div className="w-full h-full bg-[var(--primary)] origin-left animate-loading-bar" />
        </div>

        {/* Step indicator or counter style accent */}
        <div className="absolute -bottom-24 flex gap-4 opacity-20">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] animate-bounce [animation-delay:200ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)] animate-bounce [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}
