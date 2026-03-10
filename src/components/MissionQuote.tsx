"use client";

import Reveal from "./Reveal";

export default function MissionQuote() {
  return (
    <section className="relative py-24 md:py-32 bg-[#4a5b2e] flex items-center justify-center overflow-hidden border-y border-white/5">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }} 
      />
      
      {/* Design Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[#ebefd7]/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-transparent to-[#ebefd7]/20" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            {/* Soft Brand Accent */}
            <div className="mb-4 inline-flex items-center gap-4 text-[#ebefd7]/30 uppercase tracking-[0.3em] text-xs font-semibold">
              <span className="w-8 h-px bg-current" />
              Our Essence
              <span className="w-8 h-px bg-current" />
            </div>

            <div className="relative">
              <span className="absolute -top-6 -left-4 text-[#ebefd7]/10 text-8xl font-serif leading-none selection:bg-transparent">
                &ldquo;
              </span>
              
              <h2 className="relative z-10 text-xl md:text-3xl lg:text-4xl font-medium text-[#ebefd7] leading-relaxed italic px-4">
                I was born from the soil, nurtured by the sun, and harvested for your strength.
                <br />
                My soul is the pure essence of real fruit, bottled fresh without a single compromise.
                <br />
                <span className="text-[var(--primary)] not-italic font-bold">I am here to refresh your life, served real, just the way Nature intended.</span>
              </h2>

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
