"use client";

import Reveal from "./Reveal";

const features = [
  {
    title: "100% Real Fruits",
    description: "Picked from local farms",
    color: "var(--secondary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C17 8 15 6 12 6C9 6 7 8 7 8" />
        <path d="M12 6V3" />
        <path d="M15 3.5C15 3.5 13.5 5 12 5" />
        <path d="M7 8C5.5 10 5 12.5 5 14.5C5 18.5 8 21 12 21C16 21 19 18.5 19 14.5C19 12.5 18.5 10 17 8" />
        <path d="M12 12C12 12 10 14 10 16" />
      </svg>
    ),
  },
  {
    title: "Zero Preservatives",
    description: "No artificial chemicals",
    color: "var(--primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 4V10H17" />
        <path d="M1 20V14H7" />
        <path d="M3.51 9C4.01717 7.56678 4.87913 6.2854 6.01547 5.27542C7.15182 4.26543 8.52547 3.55976 10.0083 3.22426C11.4911 2.88875 13.0348 2.93434 14.4952 3.35677C15.9556 3.77921 17.2853 4.56471 18.36 5.64L23 10" />
        <path d="M20.49 15C19.9828 16.4332 19.1209 17.7146 17.9845 18.7246C16.8482 19.7346 15.4745 20.4402 13.9917 20.7757C12.5089 21.1112 10.9652 21.0657 9.50481 20.6432C8.04437 20.2208 6.71475 19.4353 5.64 18.36L1 14" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Fresh to your door",
    color: "var(--yellow)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="15" height="10" rx="1" />
        <path d="M16 10H20L23 13V16H16V10Z" />
        <circle cx="6.5" cy="18.5" r="2.5" />
        <circle cx="19.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Masterclass Taste",
    description: "Scientifically crafted",
    color: "var(--primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--yellow)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)]/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <Reveal>
            <div className="section-title text-center max-w-2xl mx-auto mb-24">
                <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-xs">Why 2Go?</span>
                <h2 className="text-6xl font-display uppercase mt-4 leading-tight">Born Fresh.<br/>Served Real.</h2>
                <div className="w-24 h-1.5 bg-[var(--yellow)] mx-auto mt-8 rounded-full" />
            </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, index) => (
            <Reveal key={index} animation="reveal-stagger">
                <div className="text-center group">
                {/* Icon Container with Vibrant BG */}
                <div 
                    className="w-24 h-24 rounded-[28px] mx-auto mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                    style={{ backgroundColor: feature.color }}
                >
                    <div className="w-10 h-10 text-white">
                        {feature.icon}
                    </div>
                </div>
                
                <h3 className="text-2xl font-display uppercase text-[var(--text-dark)] mb-3 tracking-wide">
                    {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-light)] font-medium leading-relaxed max-w-[200px] mx-auto opacity-80">
                    {feature.description}
                </p>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
