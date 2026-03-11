"use client";

import Reveal from "./Reveal";
import { Leaf, Sparkles, Droplets } from "lucide-react";

export default function MissionQuote() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--primary)] flex items-center justify-center overflow-hidden border-y border-white/5">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }} 
      />
      
      {/* Design Accents / Vectors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[#ebefd7]/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-transparent to-[#ebefd7]/20" />
        
        {/* Decorative Vectors */}
        <Leaf className="absolute top-16 left-[10%] w-24 h-24 text-[#ebefd7]/10 -rotate-12 animate-[pulse_4s_ease-in-out_infinite]" strokeWidth={1} />
        <Leaf className="absolute bottom-12 right-[15%] w-32 h-32 text-[#ebefd7]/10 rotate-45 animate-[pulse_5s_ease-in-out_infinite]" strokeWidth={1} />
        <Sparkles className="absolute top-32 right-[8%] w-16 h-16 text-[#ebefd7]/15 animate-[pulse_3s_ease-in-out_infinite]" strokeWidth={1} />
        <Droplets className="absolute bottom-24 left-[12%] w-20 h-20 text-[#ebefd7]/10 -rotate-12 animate-[pulse_6s_ease-in-out_infinite]" strokeWidth={1} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            {/* Soft Brand Accent */}
            <div className="mb-6 inline-flex items-center gap-4 text-[#24583d]/40 uppercase tracking-[0.3em] text-sm font-bold">
              <span className="w-8 h-px bg-current" />
              Mission & Vision
              <span className="w-8 h-px bg-current" />
            </div>

            <div className="relative">
              <span className="absolute -top-6 -left-4 text-[#ebefd7]/10 text-8xl font-serif leading-none selection:bg-transparent">
                &ldquo;
              </span>
              
              <div className="relative z-10 px-4">
                <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#ebefd7] leading-tight italic">
                  We started <span className="text-[#24583d] font-bold not-italic">2GO</span> with a simple promise: to craft the most authentic, freshly pressed beverages that fuel your daily hustle. By turning 'Nature to Bottle' into a daily standard, we're here to refresh your life without ever compromising on health or taste.
                </p>
              </div>

              <span className="absolute -bottom-12 -right-4 text-[#ebefd7]/10 text-8xl font-serif leading-none rotate-180 selection:bg-transparent">
                &ldquo;
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
