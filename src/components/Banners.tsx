"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

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
                    className="relative overflow-hidden rounded-2xl p-12 min-h-[500px] flex flex-col justify-center bg-[var(--secondary)] text-white shadow-2xl group h-full"
                >
                    {/* Background Graphic */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 blur-[100px] rounded-full" />
                    
                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-black uppercase tracking-[3px] mb-6">Mastermind Deal</span>
                        <h3 className="text-6xl font-display uppercase mb-10 leading-[0.95] tracking-tight">
                        Fresh flavor for<br />your daily life
                        </h3>
                        
                        {/* Countdown */}
                        <div className="flex gap-4 mb-10">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hrs" },
                            { value: timeLeft.minutes, label: "Mins" },
                            { value: timeLeft.seconds, label: "Secs" },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                            <div className="bg-white/10 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center border border-white/20 mb-2">
                                <span className="text-3xl font-display text-white">{String(item.value).padStart(2, "0")}</span>
                            </div>
                            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">{item.label}</p>
                            </div>
                        ))}
                        </div>

                        <div className="flex gap-4">
                        <a
                          href="https://wa.me/8801715322138?text=I'm interested in the deal of the day!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-yellow"
                        >
                            Grab the Deal
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        </div>
                    </div>

                    {/* Price badge */}
                    <div className="absolute top-12 right-12 w-28 h-28 bg-[var(--yellow)] rounded-full flex items-center justify-center shadow-2xl rotate-12 transition-transform group-hover:scale-110 group-hover:rotate-0">
                        <div className="text-center text-[var(--text-dark)]">
                            <p className="text-[10px] font-black opacity-60">FROM</p>
                            <p className="text-3xl font-display">৳100</p>
                        </div>
                    </div>
                </div>
            </Reveal>
          </div>

          {/* Right Banner - Product Showcase with combine.png */}
          <div className="md:col-span-2 h-full">
            <Reveal animation="reveal-right" className="h-full">
                <div 
                    className="relative overflow-hidden rounded-2xl min-h-[500px] flex flex-col justify-between group h-full"
                    style={{ backgroundColor: "#e8e4de" }}
                >
                    {/* Subtle warm overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />

                    {/* Top Content */}
                    <div className="relative z-10 p-10 pb-0">
                        <span className="inline-block px-4 py-1 rounded-full bg-black/5 text-[10px] font-black uppercase tracking-[3px] text-[var(--text-dark)] mb-4">Our Collection</span>
                        <h3 className="text-4xl font-display uppercase leading-none text-[var(--text-dark)]">
                          Born Fresh<br />Served Real
                        </h3>
                    </div>

                    {/* Product Image */}
                    <div className="relative flex-grow flex items-end justify-center mt-6 px-4">
                        <div className="relative w-full h-[320px] group-hover:scale-[1.03] transition-transform duration-1000">
                          <Image
                            src="/assets/bottles/real_photos/fruit_bg.png"
                            alt="2Go Fresh Juice Collection"
                            fill
                            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                          />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg border border-white/50">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-[10px] font-black text-[var(--text-dark)]">100% Fresh</p>
                              <p className="text-[8px] text-gray-400 font-bold">No Preservatives</p>
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
