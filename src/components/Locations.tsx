"use client";

import Reveal from "./Reveal";
import { siteContent } from "@/data/content";

export default function Locations() {
  const { locations } = siteContent;

  return (
    <section id="locations" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] -mr-64 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--yellow)]/5 rounded-full blur-[100px] -ml-32 -mb-20" />

      <div className="container relative z-10">
        <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-12">
                <div className="max-w-2xl">
                    <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-xs">Our Presence</span>
                    <h2 className="text-6xl md:text-7xl font-display uppercase mt-4 leading-tight">Find Us In Stores</h2>
                    <p className="mt-6 text-lg text-[var(--text-light)] font-medium max-w-lg">
                        Find us at the heart of Dhaka&apos;s most vibrant neighborhoods. Fresh juices served daily.
                    </p>
                </div>
            </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side: Embedded Map Section (Square) */}
          <Reveal animation="reveal-up" className="w-full lg:w-1/2">
            <div className="w-full aspect-square rounded-[32px] overflow-hidden relative z-20 bg-white">
              <div className="w-full h-full rounded-[24px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116805.51375990525!2d90.35467385!3d23.812379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1714150534123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[110%] hue-rotate-[-10deg]"
                ></iframe>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Vertical Store List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {locations.map((location, index) => (
              <Reveal key={index} animation="reveal-left" className="w-full">
                  <div className="group relative w-full bg-[#f8f9fa] p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 flex items-start gap-6 cursor-pointer">
                      
                      {/* Icon */}
                      <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                          <svg className="w-6 h-6 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                      </div>

                      {/* Content */}
                      <div className="flex-grow flex flex-col gap-2">
                        <h3 className="text-xl font-display uppercase text-[var(--text-dark)] leading-tight">{location.name}</h3>
                        
                        <div className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 flex-shrink-0" />
                            <p className="text-sm font-medium text-[var(--text-light)] leading-relaxed relative top-[-1px]">
                                {location.address}
                            </p>
                        </div>
                        
                        <div className="mt-2 text-sm text-[var(--text-gray)] font-medium">
                          <span className="text-[var(--primary)] font-bold">Hours:</span> {location.hours}
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto border border-gray-100 text-[var(--primary)] self-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                  </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
