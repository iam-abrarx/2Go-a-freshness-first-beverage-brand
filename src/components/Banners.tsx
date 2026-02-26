"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { getAssetPath } from "@/lib/utils";

export default function Banners() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Banner - Deal of the Day (Green Theme) */}
          <div className="md:col-span-3 h-full">
            <Reveal animation="reveal-left" className="h-full">
                <div 
                    className="relative overflow-hidden rounded-[2rem] p-12 min-h-[500px] flex flex-col justify-center bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-dark)] text-white shadow-[0_30px_100px_rgba(36,88,61,0.25)] group h-full"
                >
                    {/* Background Graphic */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white/5 blur-[120px] rounded-full" />
                    
                    <div className="relative z-10">
                        <span className="inline-block px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[9px] font-black uppercase tracking-[4px] mb-8 border border-white/10">Mastermind Deal</span>
                        <h3 className="text-7xl font-display uppercase mb-12 leading-[0.85] tracking-tighter drop-shadow-lg">
                        Fresh flavor for<br /><span className="text-[var(--yellow)]">your daily life</span>
                        </h3>
                        
                        {/* Countdown */}
                        <div className="flex gap-4 mb-12">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hrs" },
                            { value: timeLeft.minutes, label: "Mins" },
                            { value: timeLeft.seconds, label: "Secs" },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                            <div className="bg-white/5 backdrop-blur-xl w-20 h-20 rounded-[1.5rem] flex items-center justify-center border border-white/10 mb-3 shadow-inner">
                                <span className="text-4xl font-display text-white">{String(item.value).padStart(2, "0")}</span>
                            </div>
                            <p className="text-[8px] font-black uppercase tracking-[3px] opacity-40">{item.label}</p>
                            </div>
                        ))}
                        </div>

                        <div className="flex gap-4">
                        <a
                          href="https://wa.me/8801715322138?text=I'm interested in the deal of the day!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-yellow !rounded-2xl !py-5 !px-10 shadow-xl hover:shadow-[var(--yellow)]/30"
                        >
                            Grab the Deal
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        </div>
                    </div>

                    {/* Price badge */}
                    <div className="absolute top-12 right-12 w-32 h-32 bg-[var(--yellow)] rounded-full flex items-center justify-center shadow-2xl rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:rotate-0">
                        <div className="text-center text-[var(--text-dark)]">
                            <p className="text-[9px] font-black opacity-50 tracking-widest">FROM</p>
                            <p className="text-4xl font-display">৳100</p>
                        </div>
                    </div>
                </div>
            </Reveal>
          </div>

          {/* Right Banner - Product Showcase with combine.png */}
          <div className="md:col-span-2 h-full">
            <Reveal animation="reveal-right" className="h-full">
                <div 
                    className="relative overflow-hidden rounded-[2rem] min-h-[500px] flex flex-col justify-between group h-full shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-gray-100"
                    style={{ backgroundColor: "#fbfaf8" }}
                >
                    {/* Subtle warm overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-black/[0.02] pointer-events-none" />

                    {/* Top Content */}
                    <div className="relative z-10 p-12 pb-0">
                        <span className="inline-block px-5 py-1.5 rounded-full bg-black/5 text-[9px] font-black uppercase tracking-[4px] text-[var(--text-dark)] mb-6 border border-black/5">Our Collection</span>
                        <h3 className="text-5xl font-display uppercase leading-[0.9] text-[var(--text-dark)] tracking-tighter">
                          Born Fresh<br /><span className="text-[var(--primary)]">Served Real</span>
                        </h3>
                    </div>

                    {/* Product Image */}
                    <div className="relative flex-grow flex items-end justify-center mt-12 px-8 pb-12">
                        <div className="relative w-full h-[350px] group-hover:scale-[1.05] transition-transform duration-1000 ease-out">
                          <Image
                            src={getAssetPath("/assets/bottles/real_photos/fruit_bg.png")}
                            alt="2Go Fresh Juice Collection"
                            fill
                            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                          />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-12 left-12 z-20 bg-white/80 backdrop-blur-xl rounded-[1.5rem] px-6 py-4 shadow-2xl border border-white/50">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white shadow-lg">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-[11px] font-black text-[var(--text-dark)] uppercase tracking-wider">100% Fresh</p>
                              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">No Preservatives</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
