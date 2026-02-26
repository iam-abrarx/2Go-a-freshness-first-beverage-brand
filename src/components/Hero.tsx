"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import Reveal from "./Reveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    subtitle: "Born Fresh. Served Real.",
    title: "Juice for all\noccasions.",
    description: "Experience the purest taste of nature with our freshly pressed juices made from seasonal fruits in Dhaka.",
    cta: "Shop Now",
    ctaLink: "#categories",
    color: "#d64c4c", // Red
    image: "/assets/bottles/Fruit Fizz Bottle.png",
  },
  {
    subtitle: "No Preservatives Added.",
    title: "Real Fruits.\nReal Taste.",
    description: "We believe in keeping it real. No artificial colors, no preservatives — just pure fruit goodness delivered fresh.",
    cta: "View Menu",
    ctaLink: "#categories",
    color: "#307351", // Green
    image: "/assets/bottles/Watermelon Bottle.png",
  },
  {
    subtitle: "Daily Natural Energy.",
    title: "Start Fresh\nEvery Day.",
    description: "Fuel your day with natural energy from our range of masterclass fresh juices and healthy beverages.",
    cta: "Order Now",
    ctaLink: "#locations",
    color: "#F3CA40", // Yellow
    textColor: "#1a1a1a",
    image: "/assets/bottles/Cold Coffee Bottle.png",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--text-dark)] h-screen min-h-[750px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full flex items-center transition-colors duration-1000"
              style={{ backgroundColor: slide.color }}
            >
              {/* Background Graphics */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/20 blur-[150px] rounded-full" />
              </div>

              <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 items-center gap-16">
                  {/* Text Content */}
                  <div className={`space-y-6 ${slide.textColor === "#1a1a1a" ? "text-[var(--text-dark)]" : "text-white"}`}>
                    <Reveal animation="reveal-left">
                      <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-black uppercase tracking-[4px] mb-4">
                        {slide.subtitle}
                      </span>
                    </Reveal>
                    <Reveal animation="reveal-left">
                      <h2 className="text-[72px] md:text-[100px] leading-[0.85] font-display font-black uppercase mb-8 drop-shadow-2xl">
                        {slide.title}
                      </h2>
                    </Reveal>
                    <Reveal animation="reveal-left">
                      <p className="text-lg opacity-80 max-w-lg font-medium mb-10 leading-relaxed">
                        {slide.description}
                      </p>
                    </Reveal>
                    <Reveal animation="reveal-left">
                      <div className="flex gap-4">
                        <a
                          href={slide.ctaLink}
                          className={slide.textColor === "#1a1a1a" ? "btn-primary !bg-black !text-white" : "btn-yellow"}
                        >
                          {slide.cta}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </Reveal>
                  </div>

                  {/* Image Container */}
                  <div className="relative flex justify-center lg:justify-end">
                    <Reveal animation="reveal-right">
                      <div className="relative w-[400px] h-[550px] md:w-[500px] md:h-[650px] animate-float drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)]">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </Reveal>

                    {/* Quality Badge */}
                    <div className="absolute top-20 right-0 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl p-4 rotate-12 animate-pulse">
                        <div className="text-center font-bold text-[var(--text-dark)] leading-tight">
                            <p className="text-[8px] uppercase tracking-tighter">Dhaka's Best</p>
                            <p className="text-xl">100%</p>
                            <p className="text-[10px] uppercase">Natural</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
