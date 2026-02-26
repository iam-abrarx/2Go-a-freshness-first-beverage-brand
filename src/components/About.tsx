"use client";

import Reveal from "./Reveal";

const values = [
  {
    title: "Plant based",
    description: "We use only natural ingredients sourced from local farms. Every juice is made from real fruit — no artificial flavors.",
    iconColor: "var(--secondary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M5 12H2C2 17.5 6.5 22 12 22" />
        <path d="M19 12H22C22 17.5 17.5 22 12 22" />
        <path d="M12 8C12 8 7 3 2 3C2 8 7 8 12 8Z" />
        <path d="M12 8C12 8 17 3 22 3C22 8 17 8 12 8Z" />
      </svg>
    ),
  },
  {
    title: "Sustainable",
    description: "Our packaging is designed to minimize environment impact. We use recyclable bottles and eco-friendly materials.",
    iconColor: "var(--primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 19H4C3.45 19 3 18.55 3 18V6C3 5.45 3.45 5 4 5H7" />
        <path d="M17 5H20C20.55 5 21 5.45 21 6V18C21 18.55 20.55 19 20 19H17" />
        <path d="M12 3C12 3 8 5 8 12C8 19 12 21 12 21" />
        <path d="M12 3C12 3 16 5 16 12C16 19 12 21 12 21" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Large Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[400px] font-display uppercase leading-none tracking-tighter">BORN FRESH</span>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left: Brand Story */}
          <div>
            <Reveal animation="reveal-left">
              <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-xs mb-6 block">Our Story</span>
              <h2 className="text-6xl font-display uppercase text-[var(--text-dark)] mb-10 leading-[0.95]">
                Mastermind in<br />Fresh Beverages
              </h2>
            </Reveal>

            <Reveal animation="reveal-left">
              <div className="space-y-6 text-[var(--text-light)] font-medium leading-relaxed text-lg mb-12">
                <p>
                  2Go is a rapidly evolving fresh beverage brand based in Dhaka, Bangladesh. We are built on the belief that a Master Class product requires a <span className="text-[var(--primary)] font-black italic">Mastermind</span>.
                </p>
                <p>
                  We cut through the noise of preservatives and concentrates to serve only what's real. Freshly pressed, daily delivered.
                </p>
              </div>
            </Reveal>
            
            <Reveal animation="reveal-left">
                <div className="grid grid-cols-2 gap-8">
                    <div className="p-10 bg-[var(--section-bg)] rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--yellow)]/10 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150" />
                        <h4 className="font-display text-2xl uppercase text-[var(--text-dark)] mb-4">Our Mission</h4>
                        <p className="text-sm text-[var(--text-light)] font-medium leading-relaxed opacity-80">To deliver high-quality beverages that promote a healthier lifestyle for our community.</p>
                    </div>
                    <div className="p-10 bg-[var(--primary)] text-white rounded-[40px] shadow-[0_30px_60px_rgba(214,76,76,0.3)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150" />
                        <h4 className="font-display text-2xl uppercase mb-4 text-white">Our Vision</h4>
                        <p className="text-sm font-medium leading-relaxed opacity-90">To become the lead mastermind in fresh beverages, setting the bar for authenticity and trust.</p>
                    </div>
                </div>
            </Reveal>
          </div>

          {/* Right: Brand Values & Stats */}
          <div className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <Reveal key={i} animation="reveal-stagger">
                    <div className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 group">
                        <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 transition-transform group-hover:rotate-12 group-hover:scale-110"
                            style={{ backgroundColor: v.iconColor }}
                        >
                            <div className="w-8 h-8">
                                {v.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-display uppercase text-[var(--text-dark)] mb-4">{v.title}</h3>
                        <p className="text-sm text-[var(--text-gray)] font-medium leading-relaxed opacity-80">{v.description}</p>
                    </div>
                </Reveal>
              ))}
            </div>
            
            {/* Vibrant Stats Bar */}
            <Reveal animation="reveal-stagger">
                <div className="p-12 bg-[var(--secondary)] rounded-[50px] text-white flex justify-around items-center text-center shadow-[0_30px_60px_rgba(48,115,81,0.2)]">
                    <div>
                        <div className="text-5xl font-display text-[var(--yellow)] mb-2">700+</div>
                        <div className="text-[10px] font-black uppercase tracking-[3px] opacity-60">Bottles / Day</div>
                    </div>
                    <div className="w-px h-16 bg-white/10" />
                    <div>
                        <div className="text-5xl font-display text-[var(--yellow)] mb-2">3</div>
                        <div className="text-[10px] font-black uppercase tracking-[3px] opacity-60">Locations</div>
                    </div>
                    <div className="w-px h-16 bg-white/10" />
                    <div>
                        <div className="text-5xl font-display text-[var(--yellow)] mb-2">7</div>
                        <div className="text-[10px] font-black uppercase tracking-[3px] opacity-60">Flavors</div>
                    </div>
                </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
